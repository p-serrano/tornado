const GameView = {
    game: null,

    turnTransitionTeamName: null,
    turnTransitionTimer: null,

    normalStatusMessage: false,
    normalStatusTimer: null,

    // =========================================================
    // RENDER
    // =========================================================

    render(container) {
        this.game = GameManager.getById(AppState.currentGameId);

        if (!this.game) {
            AppState.goTo("home");
            App.render();
            return;
        }

        if (
            this.game.status === "finished" ||
            this.game.phase === "results"
        ) {
            ResultsView.render(container, this.game);
            return;
        }

        container.innerHTML = `
            <div class="game-screen">
                ${this.renderHeader()}
                ${this.renderScoreboard()}
                ${this.renderTurnTransition()}
                ${this.renderNormalStatusMessage()}

                ${
                    ["question", "teacher"].includes(this.game.phase)
                        ? this.renderAlertSystem()
                        : ""
                }

                ${this.renderPhase()}
            </div>
        `;

        this.bindEvents();
    },


    // =========================================================
    // HEADER
    // =========================================================

    renderHeader() {
        return `
            <div class="game-header">

                <div class="game-header-brand">
                    <img
                        src="assets/images/tornado-logo-horizontal.png"
                        alt="Tornado"
                        class="game-logo"
                    >
                </div>

                <button
                    class="game-menu-button"
                    id="gameMenuButton"
                >
                    ☰ MENU
                </button>

            </div>
        `;
    },


    // =========================================================
    // SCOREBOARD
    // =========================================================

    renderScoreboard() {
        return `
            <div class="scoreboard">

                ${this.game.teams.map((team, index) => {
                    const isCurrentTeam =
                        index === this.game.currentTeamIndex;

                    return `
                        <div class="score-card ${
                            isCurrentTeam ? "current" : ""
                        }">

                            <div class="score-team">
                                ${Utils.escapeHTML(team.name)}
                            </div>

                            <div class="score-value">
                                ${team.score.toLocaleString()}
                            </div>

                        </div>
                    `;
                }).join("")}

            </div>
        `;
    },


    // =========================================================
    // TURN TRANSITION OVERLAY
    // =========================================================

    renderTurnTransition() {
        if (!this.turnTransitionTeamName) {
            return "";
        }

        return `
            <div
                class="turn-transition-overlay"
                role="status"
                aria-live="assertive"
            >
                <div class="turn-transition-content">

                    <div class="turn-transition-eyebrow">
                        ⚡ THE CHAOS CONTINUES ⚡
                    </div>

                    <div class="turn-transition-heading">
                        NEXT TURN
                    </div>

                    <div class="turn-transition-divider">
                        <span></span>
                        <span>✦</span>
                        <span></span>
                    </div>

                    <div class="turn-transition-label">
                        GET READY
                    </div>

                    <strong class="turn-transition-name">
                        ${Utils.escapeHTML(this.turnTransitionTeamName)}
                    </strong>

                    <div class="turn-transition-footer">
                        IT'S YOUR TURN!
                    </div>

                </div>
            </div>
        `;
    },


    // =========================================================
    // SYSTEM BACK TO NORMAL
    // =========================================================

    renderNormalStatusMessage() {
        if (!this.normalStatusMessage) {
            return "";
        }

        return `
            <div class="normal-status-overlay" role="status" aria-live="polite">
                <div class="normal-status-content">

                    <div class="normal-status-icon">
                        ✓
                    </div>

                    <div class="normal-status-eyebrow">
                        SYSTEM STATUS
                    </div>

                    <h2>
                        SYSTEMS BACK TO NORMAL
                    </h2>

                    <p>
                        All clear. The chaos is under control.
                    </p>

                </div>
            </div>
        `;
    },


    // =========================================================
    // SHOW NORMAL STATUS MESSAGE
    // =========================================================

    showNormalStatusMessage(duration = 2200) {
        this.normalStatusMessage = true;

        clearTimeout(this.normalStatusTimer);

        this.normalStatusTimer = setTimeout(() => {
            this.normalStatusMessage = false;

            const overlay = document.querySelector(
                ".normal-status-overlay"
            );

            if (overlay) {
                overlay.remove();
            }
        }, duration);
    },


    // =========================================================
    // SHOW TURN TRANSITION
    // =========================================================

    showTurnTransition(duration = 1500) {
        const team = GameManager.getCurrentTeam(this.game);

        if (!team) {
            return;
        }

        this.turnTransitionTeamName = team.name;

        clearTimeout(this.turnTransitionTimer);

        this.turnTransitionTimer = setTimeout(() => {
            this.turnTransitionTeamName = null;

            const overlay = document.querySelector(
                ".turn-transition-overlay"
            );

            if (overlay) {
                overlay.remove();
            }
        }, duration);
    },


    // =========================================================
    // ALERT SYSTEM
    // =========================================================

    renderAlertSystem() {

        const totalTeams = this.game.teams.length;

        const failedTeams = this.game.failedTeamIds.length;

        const triggered = this.game.destroyerTriggered;

        // -----------------------------------------------------
        // ALERT LEVEL
        // One visual level per failed team, up to six
        // -----------------------------------------------------

        const visualLevel = triggered
            ? 6
            : Math.min(failedTeams, 5);

        // -----------------------------------------------------
        // STATUS AND MESSAGE
        // -----------------------------------------------------

        let status = "SYSTEM NORMAL";
        let message = "All teams operational.";

        if (triggered) {

            status = "DESTROYER ACTIVATED";
            message = "All teams have failed. Brace for impact.";

        } else if (failedTeams > 0) {

            const remainingTeams = totalTeams - failedTeams;

            if (remainingTeams === 1) {

                status = "CRITICAL";
                message = "One more failure will trigger DESTROYER.";

            } else if (visualLevel === 5) {

                status = "SYSTEM FAILURE IMMINENT";
                message = "The system is on the brink of collapse.";

            } else if (visualLevel === 4) {

                status = "CRITICAL ALERT";
                message = "System stability is critically low.";

            } else if (visualLevel === 3) {

                status = "HIGH ALERT";
                message = "System instability detected.";

            } else if (visualLevel === 2) {

                status = "ELEVATED ALERT";
                message = "Multiple teams have failed.";

            } else {

                status = "WARNING";
                message = "A team has failed.";

            }

        }

        // -----------------------------------------------------
        // ALERT METER
        // One segment per team
        // -----------------------------------------------------

        const segments = this.game.teams
            .map((team, index) => {

                const active = index < failedTeams;

                return `
                    <div
                        class="alert-segment ${active ? "active" : ""}"
                        data-team-id="${team.id}">
                    </div>
                `;

            })
            .join("");

        // -----------------------------------------------------
        // RENDER
        // -----------------------------------------------------

        return `
            <section
                class="game-alert ${triggered ? "is-destroyer" : ""}"
                data-alert-level="${visualLevel}"
                data-alert-progress="${
                    totalTeams > 0 ? failedTeams / totalTeams : 0
                }">

                <div class="alert-header">

                    <div class="alert-status">
                        ${status}
                    </div>

                    <span class="alert-counter">
                        ALERT LEVEL ${failedTeams}/${totalTeams}
                    </span>

                </div>

                <div class="alert-meter">
                    ${segments}
                </div>

                <div class="alert-message">

                    <div class="alert-headline">
                        ${status}
                    </div>

                    <div class="alert-description">
                        ${message}
                    </div>

                </div>

            </section>
        `;

    },


    // =========================================================
    // PHASE ROUTER
    // =========================================================

    renderPhase() {
        if (this.game.phase === "question") {
            return this.renderQuestionPhase();
        }

        if (this.game.phase === "teacher") {
            return this.renderTeacherPhase();
        }

        if (this.game.phase === "answerReveal") {
            return this.renderAnswerRevealPhase();
        }

        if (this.game.phase === "review") {
            return this.renderReviewPhase();
        }

        if (this.game.phase === "board") {
            return this.renderBoardPhase();
        }

        if (this.game.phase === "reveal") {
            return this.renderRevealPhase();
        }

        if (this.game.phase === "swap") {
            return this.renderSwapPhase();
        }

        return "";
    },


    // =========================================================
    // QUESTION TYPE HELPERS
    // =========================================================

    isMatching(question) {
        return this.getActivityType(question)
            .toLowerCase()
            .trim() === "matching";
    },


    isMultipleChoice(question) {

        if (!question) {
            return false;
        }

        // NEW FORMAT: activity type defines the activity.
        if (
            question.activityType?.trim().toLowerCase() ===
            "multiple choice"
        ) {
            return true;
        }

        // LEGACY FORMAT: preserve support for older questions.
        return question.tags?.types?.some(
            type =>
                typeof type === "string" &&
                type.trim().toLowerCase() === "multiple choice"
        ) ?? false;

    },


    // =========================================================
    // QUESTION DISPLAY HELPERS
    // =========================================================

    getActivityType(question) {

        return question?.activityType || "Grammar Challenge";

    },


    // =========================================================
    // RENDER QUESTION CONTENT
    // =========================================================

    renderQuestionContent(question) {

        const activityType = this.getActivityType(question);
        const instructions = question?.instructions || "";

        // Detect whether this is a Matching activity.
        const isMatching =
            String(activityType).trim().toLowerCase() === "matching";

        // Matching activities must display the matching pairs,
        // not the generic question text.
        const questionContent = isMatching
            ? this.renderMatchingQuestions(question)
            : `
                <div class="question-text">
                    ${Utils.escapeHTML(question?.question || "")}
                </div>
            `;

        return `
            <div class="question-content-container">

                <div class="question-meta-row">

                    <div class="question-activity-type">
                        ${Utils.escapeHTML(activityType)}
                    </div>

                    ${
                        instructions
                            ? `
                                <div class="question-instructions">
                                    ${Utils.escapeHTML(instructions)}
                                </div>
                            `
                            : ""
                    }

                </div>

                <div class="question-content-body">
                    ${questionContent}
                </div>

            </div>
        `;
    },


    // =========================================================
    // RENDER MATCHING QUESTIONS
    // =========================================================

    renderMatchingQuestions(question) {

        let leftItems = [];
        let rightItems = [];

        // -----------------------------------------------------
        // NEW FORMAT: EXPLICIT MATCHING PAIRS
        // -----------------------------------------------------

        console.log("MATCHING QUESTION DATA:", {
            id: question?.id,
            sourceId: question?.sourceId,
            sourcePackId: question?.sourcePackId,
            activityType: question?.activityType,
            matchingPairs: question?.matchingPairs,
            question: question?.question
        });

        if (
            question?.matchingPairs &&
            Array.isArray(question.matchingPairs.left) &&
            Array.isArray(question.matchingPairs.right)
        ) {

            leftItems = question.matchingPairs.left;
            rightItems = question.matchingPairs.right;

        }

        // -----------------------------------------------------
        // LEGACY FORMAT: PARSE QUESTION TEXT
        // -----------------------------------------------------

        else {

            const rawText = String(question?.question || "");

            // Support both real line breaks and literal "\n".
            const normalizedText = rawText.replace(/\\n/g, "\n");

            const lines = normalizedText
                .split(/\r?\n/)
                .map(line => line.trim())
                .filter(Boolean);

            // Find the first item labelled A., B., C., etc.
            const rightIndex = lines.findIndex(line =>
                /^[A-Z]\.\s*/.test(line)
            );

            if (rightIndex !== -1) {

                const leftLines = lines.slice(0, rightIndex);
                const rightLines = lines.slice(rightIndex);

                // Extract numbered items from List A.
                leftItems = leftLines
                    .join(" ")
                    .split(/\s*\/\s*/)
                    .map(item =>
                        item.replace(/^\d+\.\s*/, "").trim()
                    )
                    .filter(Boolean);

                // Extract lettered items from List B.
                rightItems = rightLines
                    .map(item =>
                        item.replace(/^[A-Z]\.\s*/, "").trim()
                    )
                    .filter(Boolean);

            }

        }

        // -----------------------------------------------------
        // VALIDATION
        // -----------------------------------------------------

        if (!leftItems.length || !rightItems.length) {

            console.warn(
                "Matching activity has no valid matching pairs:",
                question
            );

            return `
                <div class="question-text">
                    Matching pairs could not be loaded.
                </div>
            `;

        }

        // -----------------------------------------------------
        // RENDER TWO COLUMNS
        // -----------------------------------------------------

        return `
            <div class="matching-questions">

                <div class="matching-column matching-column-left">

                    <div class="matching-column-title">
                        LIST A
                    </div>

                    ${leftItems.map((item, index) => `
                        <div class="matching-item matching-item-left">

                            <span class="matching-letter matching-number">
                                ${index + 1}
                            </span>

                            <span class="matching-item-text">
                                ${Utils.escapeHTML(String(item))}
                            </span>

                        </div>
                    `).join("")}

                </div>

                <div class="matching-column matching-column-right">

                    <div class="matching-column-title">
                        LIST B
                    </div>

                    ${rightItems.map((item, index) => `
                        <div class="matching-item matching-item-right">

                            <span class="matching-letter matching-option-letter">
                                ${String.fromCharCode(65 + index)}
                            </span>

                            <span class="matching-item-text">
                                ${Utils.escapeHTML(String(item))}
                            </span>

                        </div>
                    `).join("")}

                </div>

            </div>
        `;
    },


    // =========================================================
    // RENDER MULTIPLE CHOICE OPTIONS
    // =========================================================

    renderMultipleChoiceOptions(question) {
        if (!this.isMultipleChoice(question)) {
            return "";
        }

        const options = question.tags.custom;

        if (!Array.isArray(options) || options.length === 0) {
            return "";
        }

        return `
            <div class="multiple-choice-options">

                ${options.map((option, index) => `
                    <div class="multiple-choice-option">

                        <span class="multiple-choice-letter">
                            ${String.fromCharCode(65 + index)}
                        </span>

                        <span class="multiple-choice-text">
                            ${Utils.escapeHTML(
                                option.replace(/^[A-D]\)\s*/, "")
                            )}
                        </span>

                    </div>
                `).join("")}

            </div>
        `;
    },


    // =========================================================
    // QUESTION PHASE
    // =========================================================

    renderQuestionPhase() {
        // DESTROYER takes priority over the normal question.
        if (this.game.destroyerTriggered) {
            return this.renderDestroyerPhase();
        }

        const questionSet = QuestionSetManager.getById(
            this.game.questionSetId
        );

        if (!questionSet) {
            return `
                <div class="card game-question-card">
                    <p>Question set not found.</p>
                </div>
            `;
        }

        let question = this.game.currentQuestionId
            ? QuestionManager
                .getBySetId(this.game.questionSetId)
                .find(
                    q => q.id === this.game.currentQuestionId
                )
            : null;

        if (!question) {
            question = QuestionManager.getRandom(
                this.game.questionSetId,
                this.game.usedQuestionIds
            );

            if (!question) {
                this.game.usedQuestionIds = [];

                question = QuestionManager.getRandom(
                    this.game.questionSetId,
                    []
                );
            }

            if (question) {
                this.game.currentQuestionId = question.id;
                GameManager.save(this.game);
            }
        }

        if (!question) {
            return `
                <div class="card game-question-card">
                    <p>This question set has no questions.</p>
                </div>
            `;
        }

        const currentTeam = GameManager.getCurrentTeam(
            this.game
        );

        return `
            <div class="card game-question-card">

                <div class="turn-label">
                    ${this.game.failedTeamIds.length > 0
                        ? "⚡ REBOUND"
                        : "QUESTION"}
                </div>

                ${this.renderQuestionContent(question)}

                ${this.renderMultipleChoiceOptions(question)}

                <div class="game-actions">

                    <button
                        class="incorrect-button"
                        id="incorrectButton"
                    >
                        ✗ INCORRECT
                    </button>

                    <button
                        class="correct-button"
                        id="correctButton"
                    >
                        ✓ CORRECT
                    </button>

                    <button
                        class="secondary-button"
                        id="reviewButton"
                    >
                        ⚖ REVIEW
                    </button>

                    <button
                        class="tertiary-button"
                        id="skipQuestionButton"
                    >
                        ⏭ SKIP QUESTION
                    </button>

                </div>

            </div>
        `;
    },


    // =========================================================
    // ANSWER REVEAL PHASE
    // =========================================================

    renderAnswerRevealPhase() {
        const question = QuestionManager
            .getBySetId(this.game.questionSetId)
            .find(
                q => q.id === this.game.currentQuestionId
            );

        if (!question) {
            return `
                <div class="card game-question-card">
                    <p>Question not found.</p>

                    <div class="game-actions">
                        <button
                            class="primary-button"
                            id="continueAnswerButton"
                        >
                            CONTINUE
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="card game-question-card answer-reveal-card">

                <div class="turn-label">
                    ✓ ANSWER ACCEPTED
                </div>

                ${this.renderQuestionContent(question)}

                ${this.renderMultipleChoiceOptions(question)}

                <div class="answer-box">

                    <div class="answer-label">
                        Expected answer
                    </div>

                    <div class="answer-text">
                        ${Utils.escapeHTML(question.answer)}
                    </div>

                </div>

                <div class="game-actions">

                    <button
                        class="primary-button"
                        id="continueAnswerButton"
                    >
                        CHOOSE A TILE →
                    </button>

                </div>

            </div>
        `;
    },


    // =========================================================
    // REVIEW PHASE
    // =========================================================

    renderReviewPhase() {
        const question = QuestionManager
            .getBySetId(this.game.questionSetId)
            .find(
                q => q.id === this.game.currentQuestionId
            );

        if (!question) {
            return `
                <div class="card game-question-card">
                    <p>Question not found.</p>

                    <div class="game-actions">
                        <button
                            class="primary-button"
                            id="continueReviewButton"
                        >
                            CONTINUE
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="card game-question-card review-card">

                <div class="turn-label">
                    ⚖ NEUTRAL REVIEW
                </div>

                ${this.renderQuestionContent(question)}

                ${this.renderMultipleChoiceOptions(question)}

                <div class="answer-box">

                    <div class="answer-label">
                        Expected answer
                    </div>

                    <div class="answer-text">
                        ${Utils.escapeHTML(question.answer)}
                    </div>

                </div>

                <p class="review-notice">
                    This question has been cancelled.
                    No team loses points or receives a penalty.
                </p>

                <div class="game-actions">

                    <button
                        class="primary-button"
                        id="continueReviewButton"
                    >
                        NEXT TEAM →
                    </button>

                </div>

            </div>
        `;
    },


    // =========================================================
    // TEACHER PHASE
    // =========================================================

    renderTeacherPhase() {
        return `
            <div class="card game-question-card">

                <div class="turn-label">
                    TEACHER MODE
                </div>

                <div class="question-text">
                    Your answer is...
                </div>

                <div class="game-actions">

                    <button
                        class="correct-button"
                        id="correctButton"
                    >
                        ✓ CORRECT
                    </button>

                    <button
                        class="incorrect-button"
                        id="incorrectButton"
                    >
                        ✗ INCORRECT
                    </button>

                </div>

            </div>
        `;
    },


    // =========================================================
    // BOARD PHASE
    // =========================================================

    renderBoardPhase(showHeader = true) {
        const columns = this.game.grid.columns;
        const rows = this.game.grid.rows;

        return `
            ${
                showHeader
                    ? `
                        <div class="board-phase-header">

                            <span class="phase-badge">
                                CORRECT!
                            </span>

                            <h2>
                                CHOOSE A TILE
                            </h2>

                        </div>
                    `
                    : ""
            }

            <div
                class="board"
                style="
                    --board-columns: ${columns};
                    --board-rows: ${rows};
                    grid-template-columns:
                        repeat(${columns}, minmax(0, 1fr));
                    grid-template-rows:
                        repeat(${rows}, minmax(0, 1fr));
                "
            >
                ${this.game.board.map((tile, index) =>
                    this.renderTile(tile, index, columns)
                ).join("")}
            </div>
        `;
    },


    // =========================================================
    // BOARD TILE
    // =========================================================

    renderTile(tile, index, columns) {
        const row = Math.floor(index / columns);
        const column = index % columns;

        const coordinate =
            `${String.fromCharCode(65 + row)}${column + 1}`;

        const coordinateHTML = `
            <span class="tile-coordinate">
                ${coordinate}
            </span>
        `;

        if (tile.destroyed) {
            return `
                <button
                    class="tile revealed destroyed"
                    disabled
                    aria-label="${coordinate}: Destroyed"
                >
                    ${coordinateHTML}

                    <span class="tile-content">
                        💥
                    </span>
                </button>
            `;
        }

        if (tile.revealed) {
            return `
                <button
                    class="tile revealed ${tile.type}"
                    disabled
                    aria-label="${coordinate}: ${this.getTileDisplay(tile)}"
                >
                    ${coordinateHTML}

                    <span class="tile-content">
                        ${this.getTileDisplay(tile)}
                    </span>
                </button>
            `;
        }

        return `
            <button
                class="tile"
                data-tile-id="${tile.id}"
                aria-label="Choose tile ${coordinate}"
            >
                ${coordinateHTML}

                <span class="tile-content">?</span>
            </button>
        `;
    },


    // =========================================================
    // REVEAL PHASE — OVERLAY
    // =========================================================

    renderRevealPhase() {
        const tile = this.game.board.find(
            item => item.id === this.game.selectedTileId
        );

        if (!tile) {
            return "";
        }

        const effect = this.getTileEffect(tile);

        return `
            ${this.renderBoardPhase(false)}

            <div
                class="reveal-overlay"
                id="revealOverlay"
            >
                <div
                    class="reveal-notification"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="revealTitle"
                >

                    <div class="reveal-notification-label">
                        🌪️ THE TILE REVEALS
                    </div>

                    <h2
                        class="reveal-title"
                        id="revealTitle"
                    >
                        ${effect.title}
                    </h2>

                    ${
                        effect.description
                            ? `
                                <p class="reveal-description">
                                    ${effect.description}
                                </p>
                            `
                            : ""
                    }

                    <div class="game-actions">

                        <button
                            class="primary-button"
                            id="continueRevealButton"
                            autofocus
                        >
                            CONTINUE
                        </button>

                    </div>

                </div>
            </div>
        `;
    },


    // =========================================================
    // SWAP PHASE — OVERLAY
    // =========================================================

    renderSwapPhase() {
        const team = GameManager.getCurrentTeam(this.game);

        if (!team) {
            return "";
        }

        const eligibleTeams = this.game.teams.filter(
            candidate => candidate.id !== team.id
        );

        return `
            ${this.renderBoardPhase(false)}

            <div
                class="swap-overlay"
                id="swapOverlay"
            >
                <div
                    class="swap-notification"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="swapTitle"
                >

                    <div class="swap-notification-label">
                        🌪️ SPECIAL EFFECT
                    </div>

                    <div
                        class="swap-effect-icon"
                        aria-hidden="true"
                    >
                        🔄
                    </div>

                    <h2
                        class="swap-title"
                        id="swapTitle"
                    >
                        SWAP SCORES
                    </h2>

                    <div class="swap-options">

                        ${
                            eligibleTeams.length
                                ? eligibleTeams.map(candidate => `
                                    <button
                                        class="swap-button"
                                        data-swap-team-id="${candidate.id}"
                                    >

                                        <span class="swap-team-name">
                                            ${Utils.escapeHTML(candidate.name)}
                                        </span>

                                        <span class="swap-team-score">
                                            ${candidate.score.toLocaleString()} PTS
                                        </span>

                                    </button>
                                `).join("")
                                : `
                                    <p class="reveal-description">
                                        No other teams available.
                                    </p>
                                `
                        }

                    </div>

                </div>
            </div>
        `;
    },


    // =========================================================
    // DESTROYER PHASE
    // =========================================================

    renderDestroyerPhase() {
        const question = QuestionManager
            .getBySetId(this.game.questionSetId)
            .find(
                q => q.id === this.game.currentQuestionId
            );

        return `
            <div class="card game-question-card destroyer-card">

                <div class="turn-label">
                    ☠ SYSTEM FAILURE
                </div>

                <div class="question-text">
                    DESTROYER ACTIVATED!
                </div>

                <p>
                    Every team failed this question.
                </p>

                ${
                    question
                        ? `
                            <div class="answer-box">

                                <div class="answer-label">
                                    Expected answer
                                </div>

                                <div class="answer-text">
                                    ${Utils.escapeHTML(question.answer)}
                                </div>

                            </div>
                        `
                        : ""
                }

                <div class="game-actions">

                    <button
                        class="primary-button"
                        id="continueDestroyerButton"
                    >
                        ACCEPT CONSEQUENCES
                    </button>

                </div>

            </div>
        `;
    },


    // =========================================================
    // TILE EFFECTS
    // =========================================================

    getTileEffect(tile) {
        switch (tile.type) {
            case "score":
                return {
                    icon: `+${tile.value.toLocaleString()}`,
                    title: `${tile.value.toLocaleString()} PTS`,
                    description: ""
                };

            case "double":
                return {
                    icon: "×2",
                    title: "DOUBLE",
                    description: ""
                };

            case "half":
                return {
                    icon: "÷2",
                    title: "HALF",
                    description: ""
                };

            case "swap":
                return {
                    icon: "🔄",
                    title: "SWAP SCORES",
                    description: ""
                };

            case "tornado":
                return {
                    icon: "🌪️",
                    title: "TORNADO",
                    description: ""
                };

            case "destroyed":
                return {
                    icon: "💥",
                    title: "DESTROYED",
                    description: "This tile has been destroyed."
                };

            default:
                return {
                    icon: "?",
                    title: "UNKNOWN TILE",
                    description: ""
                };
        }
    },


    getTileDisplay(tile) {
        const effect = this.getTileEffect(tile);

        return effect.icon;
    },


    // =========================================================
    // EVENT BINDING
    // =========================================================

    bindEvents() {
        // MENU

        const menuButton = document.getElementById(
            "gameMenuButton"
        );

        if (menuButton) {
            menuButton.addEventListener("click", async () => {
                const action = await GameMessageView.confirm({
                    title: "ABANDON THE CHAOS?",
                    message: "Your current game will end if you return home.",
                    confirmLabel: "END GAME",
                    cancelLabel: "KEEP PLAYING",
                    danger: true
                });

                if (action) {
                    AppState.goTo("home");
                    App.render();
                }
            });
        }


        // SHOW ANSWER

        const showAnswerButton = document.getElementById(
            "showAnswerButton"
        );

        if (showAnswerButton) {
            showAnswerButton.addEventListener("click", () => {
                this.game.answerVisible = true;

                GameManager.save(this.game);
                App.render();
            });
        }


        // CORRECT ANSWER

        const correctButton = document.getElementById(
            "correctButton"
        );

        if (correctButton) {
            correctButton.addEventListener("click", () => {
                this.handleCorrect();
            });
        }


        // =========================================================
        // CONTINUE AFTER DESTROYER
        // =========================================================

        const continueDestroyerButton = document.getElementById(
            "continueDestroyerButton"
        );

        if (continueDestroyerButton) {
            continueDestroyerButton.addEventListener("click", () => {
                if (!this.game.destroyerTriggered) {
                    return;
                }

                GameManager.applyDestroyer(this.game);

                if (GameManager.isFinished(this.game)) {
                    GameManager.finish(this.game);
                    App.render();
                    return;
                }

                // Start the next normal turn.
                GameManager.nextTeam(this.game);

                // Announce that the warning system has reset.
                this.showNormalStatusMessage();

                App.render();
            });
        }


        // INCORRECT ANSWER

        const incorrectButton = document.getElementById(
            "incorrectButton"
        );

        if (incorrectButton) {
            incorrectButton.addEventListener("click", () => {
                this.handleIncorrect();
            });
        }


        // =========================================================
        // REVIEW BUTTON
        // =========================================================

        const reviewButton = document.getElementById(
            "reviewButton"
        );

        if (reviewButton) {
            reviewButton.addEventListener("click", () => {
                this.handleReview();
            });
        }


        // =========================================================
        // SKIP QUESTION BUTTON
        // =========================================================

        const skipQuestionButton = document.getElementById(
            "skipQuestionButton"
        );

        if (skipQuestionButton) {
            skipQuestionButton.addEventListener("click", () => {
                this.handleSkipQuestion();
            });
        }


        // =========================================================
        // CONTINUE AFTER CORRECT ANSWER
        // =========================================================

        const continueAnswerButton = document.getElementById(
            "continueAnswerButton"
        );

        if (continueAnswerButton) {
            continueAnswerButton.addEventListener("click", () => {
                if (this.game.phase !== "answerReveal") {
                    return;
                }

                this.game.currentQuestionId = null;
                this.game.answerVisible = false;
                this.game.phase = "board";

                GameManager.save(this.game);

                App.render();
            });
        }


        // =========================================================
        // CONTINUE AFTER REVIEW
        // =========================================================

        const continueReviewButton = document.getElementById(
            "continueReviewButton"
        );

        if (continueReviewButton) {
            continueReviewButton.addEventListener("click", () => {
                if (this.game.phase !== "review") {
                    return;
                }

                // nextTeam clears the old question and selects a new team.
                GameManager.nextTeam(this.game);
                this.showTurnTransition();

                App.render();
            });
        }


        // NEXT TEAM

        const nextTeamButton = document.getElementById(
            "nextTeamButton"
        );

        if (nextTeamButton) {
            nextTeamButton.addEventListener("click", () => {
                GameManager.nextTeam(this.game);
                this.showTurnTransition();

                App.render();
            });
        }


        // SELECT TILE

        document.querySelectorAll("[data-tile-id]").forEach(button => {
            button.addEventListener("click", () => {
                this.selectTile(button.dataset.tileId);
            });
        });


        // CONTINUE AFTER REVEAL

        const continueButton = document.getElementById(
            "continueRevealButton"
        );

        if (continueButton) {
            continueButton.addEventListener("click", () => {
                this.applyPendingEffect();
            });
        }


        // SELECT TEAM FOR SCORE SWAP

        document.querySelectorAll("[data-swap-team-id]").forEach(button => {
            button.addEventListener("click", () => {
                this.completeSwap(button.dataset.swapTeamId);
            });
        });
    },


    // =========================================================
    // CORRECT ANSWER
    // =========================================================

    handleCorrect() {
        if (
            this.game.phase !== "question" &&
            this.game.phase !== "teacher"
        ) {
            return;
        }

        if (this.game.destroyerTriggered) {
            return;
        }

        if (this.game.mode === "questions") {
            const question = QuestionManager
                .getBySetId(this.game.questionSetId)
                .find(
                    q => q.id === this.game.currentQuestionId
                );

            if (
                question &&
                !this.game.usedQuestionIds.includes(question.id)
            ) {
                this.game.usedQuestionIds.push(question.id);
            }
        }

        const hadActiveWarnings =
            this.game.failedTeamIds.length > 0 ||
            this.game.alertLevel > 0;

        // A correct answer breaks the warning sequence.
        this.game.failedTeamIds = [];
        this.game.alertLevel = 0;
        this.game.destroyerStreak = 0;
        this.game.destroyerTriggered = false;

        // Show the recovery message only if warnings were active.
        if (hadActiveWarnings) {
            this.showNormalStatusMessage();
        }

        this.game.answerVisible = false;

        // Keep currentQuestionId so the answer can be revealed.
        this.game.phase = "answerReveal";

        GameManager.save(this.game);

        App.render();
    },


    // =========================================================
    // REVIEW — CANCEL QUESTION
    // =========================================================

    handleReview() {
        if (
            this.game.phase !== "question" &&
            this.game.phase !== "teacher"
        ) {
            return;
        }

        if (this.game.destroyerTriggered) {
            return;
        }

        // The cancelled question must not appear again immediately.
        if (this.game.mode === "questions") {
            const question = QuestionManager
                .getBySetId(this.game.questionSetId)
                .find(
                    q => q.id === this.game.currentQuestionId
                );

            if (
                question &&
                !this.game.usedQuestionIds.includes(question.id)
            ) {
                this.game.usedQuestionIds.push(question.id);
            }
        }

        const hadActiveWarnings =
            this.game.failedTeamIds.length > 0 ||
            this.game.alertLevel > 0;

        // REVIEW cancels the entire alert sequence.
        this.game.failedTeamIds = [];
        this.game.alertLevel = 0;
        this.game.destroyerStreak = 0;
        this.game.destroyerTriggered = false;

        if (hadActiveWarnings) {
            this.showNormalStatusMessage();
        }

        this.game.answerVisible = false;

        // Keep the question ID temporarily to show its answer.
        this.game.phase = "review";

        GameManager.save(this.game);

        App.render();
    },


    // =========================================================
    // SKIP QUESTION — KEEP CURRENT TEAM
    // =========================================================

    handleSkipQuestion() {

        if (
            this.game.phase !== "question" &&
            this.game.phase !== "teacher"
        ) {
            return;
        }

        if (this.game.destroyerTriggered) {
            return;
        }

        // Register the current question as used.
        if (
            this.game.mode === "questions" &&
            this.game.currentQuestionId &&
            !this.game.usedQuestionIds.includes(
                this.game.currentQuestionId
            )
        ) {
            this.game.usedQuestionIds.push(
                this.game.currentQuestionId
            );
        }

        // Clear the current question so another one is selected.
        this.game.currentQuestionId = null;

        // Reset the answer state.
        this.game.answerVisible = false;

        // Clear the current warning sequence.
        this.game.failedTeamIds = [];
        this.game.alertLevel = 0;
        this.game.destroyerTriggered = false;

        // Return to the normal question phase.
        if (this.game.mode === "questions") {
            this.game.phase = "question";
        }

        // Save and render.
        GameManager.save(this.game);

        App.render();
    },


    // =========================================================
    // INCORRECT ANSWER — REBOUND & ALERT
    // =========================================================

    handleIncorrect() {
        if (
            this.game.phase !== "question" &&
            this.game.phase !== "teacher"
        ) {
            return;
        }

        if (this.game.destroyerTriggered) {
            return;
        }

        const team = GameManager.getCurrentTeam(this.game);

        if (!team) {
            return;
        }

        // Avoid counting the same team's failure twice.
        if (this.game.failedTeamIds.includes(team.id)) {
            return;
        }

        // Register the failure.
        this.game.failedTeamIds.push(team.id);

        this.game.alertLevel = this.game.failedTeamIds.length;

        const allTeamsFailed =
            this.game.failedTeamIds.length >= this.game.teams.length;

        if (allTeamsFailed) {
            // All teams failed the same question.
            this.game.destroyerTriggered = true;

            // Register the question as used.
            if (this.game.mode === "questions") {
                const question = QuestionManager
                    .getBySetId(this.game.questionSetId)
                    .find(q => q.id === this.game.currentQuestionId);

                if (
                    question &&
                    !this.game.usedQuestionIds.includes(question.id)
                ) {
                    this.game.usedQuestionIds.push(question.id);
                }
            }

            this.game.destroyerStreak++;
            } else {
                // REBOUND: move to the next team without consuming
                // their normal turn.
                this.game.currentTeamIndex =
                    (this.game.currentTeamIndex + 1) %
                    this.game.teams.length;

                this.showTurnTransition();
            }

        this.game.answerVisible = false;

        GameManager.save(this.game);

        App.render();
    },


    // =========================================================
    // SELECT TILE
    // =========================================================

    selectTile(tileId) {
        const tile = this.game.board.find(
            item => item.id === tileId
        );

        if (!tile || tile.revealed) {
            return;
        }

        tile.revealed = true;
        this.game.selectedTileId = tileId;
        this.game.pendingEffect = tile.type;
        this.game.phase = "reveal";

        GameManager.save(this.game);
        App.render();
    },


    // =========================================================
    // APPLY TILE EFFECT
    // =========================================================

    applyPendingEffect() {
        const team = GameManager.getCurrentTeam(this.game);

        const tile = this.game.board.find(
            item => item.id === this.game.selectedTileId
        );

        if (!team || !tile) {
            return;
        }

        switch (tile.type) {
            case "score":
                GameManager.addScore(team, tile.value);
                this.finishTileEffect();
                break;

            case "double":
                GameManager.doubleScore(team);
                this.finishTileEffect();
                break;

            case "half":
                GameManager.halfScore(team);
                this.finishTileEffect();
                break;

            case "tornado":
                GameManager.tornado(team);
                this.finishTileEffect();
                break;

            case "swap":
                this.game.phase = "swap";

                GameManager.save(this.game);
                App.render();
                break;
        }
    },


    // =========================================================
    // COMPLETE SCORE SWAP
    // =========================================================

    completeSwap(targetTeamId) {
        const currentTeam = GameManager.getCurrentTeam(this.game);

        const targetTeam = this.game.teams.find(
            team => team.id === targetTeamId
        );

        if (!currentTeam || !targetTeam) {
            return;
        }

        GameManager.swapScores(currentTeam, targetTeam);

        this.finishTileEffect();
    },


    // =========================================================
    // FINISH TILE EFFECT
    // =========================================================

    finishTileEffect() {
        if (GameManager.isFinished(this.game)) {
            GameManager.finish(this.game);
            App.render();
            return;
        }

        GameManager.nextTeam(this.game);
        this.showTurnTransition();

        App.render();
    }
};