const GameManager = {
    create({
        name,
        mode,
        questionSetId = null,
        teams,
        rows = 5,
        columns = 5
    }) {
        const game = {
            id: Utils.createId("game"),
            name: name.trim(),
            mode,
            questionSetId,
            teams,

            grid: {
                rows,
                columns
            },

            board: this.createBoard(rows, columns),

            currentTeamIndex: 0,
            nextNormalTeamIndex: 1,

            currentQuestionId: null,
            usedQuestionIds: [],

            // REBOUND & ALERT SYSTEM
            failedTeamIds: [],
            alertLevel: 0,
            destroyerStreak: 0,
            destroyerTriggered: false,

            status: "playing",
            phase: mode === "questions"
                ? "question"
                : "teacher",

            answerVisible: false,
            selectedTileId: null,

            createdAt: new Date().toISOString(),
            finishedAt: null
        };

        const data = Storage.getData();

        data.games.push(game);

        Storage.saveData(data);

        return game;
    },

    createBoard(rows, columns) {
        const total = rows * columns;

        const boardRules = {
            4: { tornado: 1, swap: 2, half: 1, double: 1 },
            5: { tornado: 2, swap: 3, half: 2, double: 2 },
            6: { tornado: 3, swap: 4, half: 3, double: 3 }
        };

        const size = Math.min(rows, columns);
        const rules = boardRules[size];

        if (
            !rules ||
            rows !== columns ||
            !Number.isInteger(rows) ||
            !Number.isInteger(columns)
        ) {
            console.error("Tornado: unsupported board size.", {
                rows,
                columns
            });

            throw new Error(
                `Unsupported Tornado board size: ${rows}x${columns}`
            );
        }

        const tiles = [];

        // SPECIAL TILES
        const specialTypes = [
            "tornado",
            "swap",
            "half",
            "double"
        ];

        specialTypes.forEach(type => {
            const amount = rules[type];

            for (let i = 0; i < amount; i++) {
                tiles.push({
                    id: Utils.createId("tile"),
                    type,
                    value: null,
                    revealed: false
                });
            }
        });

        // SCORE TILES
        const scoreValues = [
            1,
            5,
            10,
            50,
            100,
            500,
            1000
        ];

        const scoreTileCount = total - tiles.length;

        for (let i = 0; i < scoreTileCount; i++) {
            const value = Utils.shuffle([...scoreValues])[0];

            tiles.push({
                id: Utils.createId("tile"),
                type: "score",
                value,
                revealed: false
            });
        }

        // SHUFFLE ALL TILES
        return Utils.shuffle(tiles);
    },

    // =========================================================
    // NORMALIZE GAME STATE
    // =========================================================

    normalizeGame(game) {
        if (!game) {
            return null;
        }

        if (!Array.isArray(game.failedTeamIds)) {
            game.failedTeamIds = [];
        }

        if (!Number.isFinite(game.alertLevel)) {
            game.alertLevel = game.failedTeamIds.length;
        }

        if (!Number.isFinite(game.destroyerStreak)) {
            game.destroyerStreak = 0;
        }

        if (typeof game.destroyerTriggered !== "boolean") {
            game.destroyerTriggered = false;
        }

        if (!Number.isInteger(game.nextNormalTeamIndex)) {
            game.nextNormalTeamIndex =
                (game.currentTeamIndex + 1) %
                Math.max(game.teams.length, 1);
        }

        return game;
    },

    getAll() {
        return Storage.getData().games;
    },

    getById(id) {
        const game = this
            .getAll()
            .find(game => game.id === id) || null;

        return this.normalizeGame(game);
    },

    save(game) {
        this.normalizeGame(game);

        const data = Storage.getData();

        const index = data.games.findIndex(
            item => item.id === game.id
        );

        if (index === -1) {
            data.games.push(game);
        } else {
            data.games[index] = game;
        }

        Storage.saveData(data);
    },

    getCurrentTeam(game) {
        return game.teams[
            game.currentTeamIndex
        ] || null;
    },

    setPhase(game, phase) {
        game.phase = phase;
        game.answerVisible = false;
        game.selectedTileId = null;

        this.save(game);
    },

    nextTeam(game) {
        if (!game.teams.length) {
            return;
        }

        const teamCount = game.teams.length;

        // Start the next normal turn.
        game.currentTeamIndex =
            Number.isInteger(game.nextNormalTeamIndex)
                ? game.nextNormalTeamIndex
                : (game.currentTeamIndex + 1) % teamCount;

        // Reserve the following normal turn.
        game.nextNormalTeamIndex =
            (game.currentTeamIndex + 1) % teamCount;

        // Reset the question state.
        game.currentQuestionId = null;
        game.answerVisible = false;
        game.selectedTileId = null;

        // Reset REBOUND tracking.
        game.failedTeamIds = [];
        game.alertLevel = 0;
        game.destroyerTriggered = false;

        game.phase =
            game.mode === "questions"
                ? "question"
                : "teacher";

        this.save(game);
    },

    addScore(team, amount) {
        team.score += amount;
    },

    doubleScore(team) {
        team.score *= 2;
    },

    halfScore(team) {
        team.score = Math.ceil(
            team.score / 2
        );
    },

    tornado(team) {
        team.score = 0;
    },

    swapScores(teamA, teamB) {
        [
            teamA.score,
            teamB.score
        ] = [
            teamB.score,
            teamA.score
        ];
    },

    getUnrevealedTiles(game) {
        return game.board.filter(
            tile => !tile.revealed
        );
    },


    // =========================================================
    // DESTROYER EFFECT
    // =========================================================

    applyDestroyer(game) {
        if (!game || !game.destroyerTriggered) {
            return;
        }

        const teamCount = game.teams.length;

        // First consecutive collective failure:
        // destroy one tile per team.
        // Second consecutive collective failure:
        // destroy another tile per team and halve every score.

        const isSecondDestroyer = game.destroyerStreak >= 2;

        const tilesToDestroy = Math.min(
            teamCount,
            this.getUnrevealedTiles(game).length
        );

        const availableTiles = Utils.shuffle(
            this.getUnrevealedTiles(game)
        );

        for (let i = 0; i < tilesToDestroy; i++) {
            const tile = availableTiles[i];

            tile.revealed = true;
            tile.destroyed = true;
        }

        if (isSecondDestroyer) {
            game.teams.forEach(team => {
                team.score = Math.ceil(team.score / 2);
            });
        }

        game.failedTeamIds = [];
        game.alertLevel = 0;
        game.destroyerTriggered = false;
        game.currentQuestionId = null;
        game.answerVisible = false;

        this.save(game);
    },


    isFinished(game) {
        return this
            .getUnrevealedTiles(game)
            .length === 0;
    },

    finish(game) {
        game.status = "finished";
        game.phase = "results";
        game.finishedAt =
            new Date().toISOString();

        this.save(game);
    }
};