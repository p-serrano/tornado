const SetupView = {

    render(container) {

        const sets = QuestionSetManager.getAll();

        container.innerHTML = `
            <section class="setup-screen">

                <!-- BACKGROUND SHAPES -->
                <div class="setup-background-shape setup-shape-one"></div>
                <div class="setup-background-shape setup-shape-two"></div>
                <div class="setup-background-shape setup-shape-three"></div>

                <main class="setup-content">

                    <!-- HEADER -->
                    <header class="setup-header">

                        <button
                            class="setup-back-button"
                            id="backButton"
                            type="button"
                            aria-label="Back to main menu"
                        >
                            ←
                        </button>

                        <div class="setup-heading">
                            <span class="setup-eyebrow">
                                LET THE CHAOS BEGIN
                            </span>

                            <h1>NEW GAME<span>!</span></h1>
                        </div>

                        <div class="setup-header-number">01</div>

                    </header>


                    <!-- FORM -->
                    <div class="setup-layout">

                        <!-- LEFT COLUMN -->
                        <section class="setup-panel setup-game-panel">

                            <div class="setup-section-heading">
                                <span class="setup-section-number">01</span>
                                <h2>THE BASICS</h2>
                            </div>

                            <label class="setup-field" for="gameName">
                                <span>GAME NAME</span>

                                <input
                                    id="gameName"
                                    type="text"
                                    value="Tornado Game"
                                    maxlength="80"
                                    autocomplete="off"
                                >
                            </label>


                            <div class="setup-section-heading">
                                <span class="setup-section-number">02</span>
                                <h2>GAME MODE</h2>
                            </div>

                            <div class="setup-mode-options">

                                <label class="setup-mode-option">
                                    <input
                                        type="radio"
                                        name="mode"
                                        value="questions"
                                        checked
                                    >

                                    <span class="setup-mode-card">
                                        <span class="setup-mode-icon">?</span>

                                        <span class="setup-mode-copy">
                                            <strong>QUESTION MODE</strong>
                                            <small>Answer to unlock a tile</small>
                                        </span>
                                    </span>
                                </label>


                                <label class="setup-mode-option">
                                    <input
                                        type="radio"
                                        name="mode"
                                        value="teacher"
                                    >

                                    <span class="setup-mode-card">
                                        <span class="setup-mode-icon">✳</span>

                                        <span class="setup-mode-copy">
                                            <strong>TEACHER MODE</strong>
                                            <small>You decide who plays</small>
                                        </span>
                                    </span>
                                </label>

                            </div>


                            <div id="questionSetArea" class="setup-question-set">

                                <label class="setup-field" for="questionSetSearch">
                                    <span>QUESTION SET</span>

                                    <input
                                        id="questionSetSearch"
                                        type="text"
                                        placeholder="Choose a set..."
                                        autocomplete="off"
                                        aria-autocomplete="list"
                                        aria-controls="questionSetSuggestions"
                                        aria-expanded="false"
                                        role="combobox"
                                    >
                                </label>

                                <input
                                    id="questionSet"
                                    type="hidden"
                                    value=""
                                >

                                <div
                                    id="questionSetSuggestions"
                                    class="setup-question-set-suggestions"
                                    role="listbox"
                                    hidden
                                ></div>

                                <p
                                    id="questionSetMessage"
                                    class="setup-question-set-message"
                                    aria-live="polite"
                                    hidden
                                ></p>

                            </div>

                        </section>


                        <!-- RIGHT COLUMN -->
                        <section class="setup-panel setup-teams-panel">

                            <div class="setup-section-heading">
                                <span class="setup-section-number">03</span>
                                <h2>THE TEAMS</h2>
                            </div>

                            <p class="setup-section-description">
                                Pick your fighters. Minimum 2 teams.
                            </p>

                            <div id="teams" class="setup-teams-list"></div>

                            <button
                                class="setup-add-team-button"
                                id="addTeamButton"
                                type="button"
                            >
                                <span>+</span> ADD TEAM
                            </button>


                            <div class="setup-board-section">

                                <div class="setup-section-heading">
                                    <span class="setup-section-number">04</span>
                                    <h2>THE BOARD</h2>
                                </div>

                                <label class="setup-field" for="gridSize">
                                    <span>GRID SIZE</span>

                                    <select id="gridSize">
                                        <option value="4">4 × 4 — QUICK CHAOS</option>
                                        <option value="5" selected>5 × 5 — CLASSIC</option>
                                        <option value="6">6 × 6 — TOTAL CHAOS</option>
                                    </select>
                                </label>

                            </div>

                        </section>

                    </div>


                    <!-- FOOTER ACTIONS -->
                    <footer class="setup-footer">

                        <p class="setup-footer-note">
                            THINK FAST. CHOOSE WISELY.
                        </p>

                        <button
                            class="setup-start-button"
                            id="startGameButton"
                            type="button"
                        >
                            <span>START GAME</span>
                            <span class="setup-start-arrow">↗</span>
                        </button>

                    </footer>

                </main>

            </section>
        `;


        // -----------------------------------------------------
        // TEAMS
        // -----------------------------------------------------

        const teamsContainer = document.getElementById("teams");

        const addTeamRow = (name = "") => {

            const row = document.createElement("div");

            row.className = "setup-team-row";

            row.innerHTML = `
                <span class="setup-team-marker" aria-hidden="true"></span>

                <input
                    class="team-input"
                    type="text"
                    placeholder="Team name"
                    maxlength="40"
                    aria-label="Team name"
                    autocomplete="off"
                >

                <button
                    class="setup-remove-team"
                    type="button"
                    aria-label="Remove team"
                    title="Remove team"
                >
                    ×
                </button>
            `;

            row.querySelector(".team-input").value = name;

            row.querySelector(".setup-remove-team")
                .addEventListener("click", () => {

                    row.remove();

                    this.updateTeamNumbers();

                });

            teamsContainer.appendChild(row);

            this.updateTeamNumbers();

        };


        addTeamRow("Team 1");
        addTeamRow("Team 2");



        // -----------------------------------------------------
        // QUESTION SET SEARCH
        // -----------------------------------------------------

        const questionSetSearch =
            document.getElementById("questionSetSearch");

        const questionSetInput =
            document.getElementById("questionSet");

        const questionSetSuggestions =
            document.getElementById("questionSetSuggestions");

        const questionSetMessage =
            document.getElementById("questionSetMessage");

        let highlightedSuggestion = -1;


        // Render matching question sets.

        const renderQuestionSetSuggestions = () => {

            const searchTerm =
                questionSetSearch.value.trim().toLowerCase();

            const matchingSets = sets
                .filter(set =>
                    set.name.toLowerCase().includes(searchTerm)
                )
                .sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

            questionSetSuggestions.innerHTML = "";

            highlightedSuggestion = -1;

            if (!matchingSets.length) {

                questionSetSuggestions.innerHTML = `
                    <div class="setup-question-set-empty">
                        No matching question sets
                    </div>
                `;

                questionSetSuggestions.hidden = false;

                questionSetSearch.setAttribute(
                    "aria-expanded",
                    "true"
                );

                return;

            }

            matchingSets.forEach((set, index) => {

                const option = document.createElement("button");

                option.type = "button";
                option.className = "setup-question-set-option";
                option.textContent = set.name;

                option.setAttribute("role", "option");
                option.setAttribute("aria-selected", "false");

                option.addEventListener("click", () => {

                    selectQuestionSet(set);

                });

                questionSetSuggestions.appendChild(option);

            });

            questionSetSuggestions.hidden = false;

            questionSetSearch.setAttribute(
                "aria-expanded",
                "true"
            );

        };


        // Select a question set.

        const selectQuestionSet = (set) => {

            questionSetSearch.value = set.name;

            questionSetInput.value = set.id;

            questionSetSuggestions.hidden = true;

            questionSetSearch.setAttribute(
                "aria-expanded",
                "false"
            );

            questionSetMessage.hidden = true;

            questionSetSearch.setCustomValidity("");

        };


        // Search while typing.

        questionSetSearch.addEventListener("input", () => {

            // Typing invalidates the previous selection.
            questionSetInput.value = "";

            questionSetSearch.setCustomValidity("");

            questionSetMessage.hidden = true;

            highlightedSuggestion = -1;

            renderQuestionSetSuggestions();

        });


        // Open suggestions when focusing the search field.

        questionSetSearch.addEventListener("focus", () => {

            renderQuestionSetSuggestions();

        });


        // Close suggestions when clicking outside.

        document.addEventListener("click", event => {

            const questionSetArea =
                document.getElementById("questionSetArea");

            // The setup screen may have been removed or hidden.
            if (!questionSetArea || questionSetArea.hidden) {
                return;
            }

            if (!questionSetArea.contains(event.target)) {

                questionSetSuggestions.hidden = true;

                questionSetSearch.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // Keyboard navigation.

        questionSetSearch.addEventListener("keydown", event => {

            const options = [
                ...questionSetSuggestions.querySelectorAll(
                    ".setup-question-set-option"
                )
            ];

            if (event.key === "ArrowDown") {

                if (questionSetSuggestions.hidden) {
                    renderQuestionSetSuggestions();
                }

                if (!options.length) {
                    return;
                }

                event.preventDefault();

                highlightedSuggestion =
                    (highlightedSuggestion + 1) % options.length;

                updateHighlightedSuggestion(options);

            }

            if (event.key === "ArrowUp") {

                if (!options.length) {
                    return;
                }

                event.preventDefault();

                highlightedSuggestion =
                    highlightedSuggestion <= 0
                        ? options.length - 1
                        : highlightedSuggestion - 1;

                updateHighlightedSuggestion(options);

            }

            if (
                event.key === "Enter" &&
                !questionSetSuggestions.hidden &&
                highlightedSuggestion >= 0
            ) {

                event.preventDefault();

                options[highlightedSuggestion].click();

            }

            if (event.key === "Escape") {

                questionSetSuggestions.hidden = true;

                questionSetSearch.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        const updateHighlightedSuggestion = options => {

            options.forEach((option, index) => {

                const isHighlighted =
                    index === highlightedSuggestion;

                option.classList.toggle(
                    "is-highlighted",
                    isHighlighted
                );

                option.setAttribute(
                    "aria-selected",
                    String(isHighlighted)
                );

            });

            options[highlightedSuggestion]?.scrollIntoView({
                block: "nearest"
            });

        };


        document
            .getElementById("addTeamButton")
            .addEventListener("click", () => {

                addTeamRow();

                const inputs =
                    teamsContainer.querySelectorAll(".team-input");

                inputs[inputs.length - 1]?.focus();

            });


        // -----------------------------------------------------
        // GAME MODE
        // -----------------------------------------------------

        document
            .querySelectorAll('input[name="mode"]')
            .forEach(input => {

                input.addEventListener("change", event => {

                    document.getElementById("questionSetArea").hidden =
                        event.target.value !== "questions";

                });

            });


        // -----------------------------------------------------
        // NAVIGATION
        // -----------------------------------------------------

        document
            .getElementById("backButton")
            .addEventListener("click", () => {

                AppState.goTo("home");

                App.render();

            });


        // -----------------------------------------------------
        // START GAME
        // -----------------------------------------------------

        document
            .getElementById("startGameButton")
            .addEventListener("click", () => {

                this.startGame();

            });

    },


    // ---------------------------------------------------------
    // UPDATE TEAM NUMBERS
    // ---------------------------------------------------------

    updateTeamNumbers() {

        document
            .querySelectorAll("#teams .setup-team-row")
            .forEach((row, index) => {

                const marker =
                    row.querySelector(".setup-team-marker");

                if (marker) {

                    marker.textContent =
                        String(index + 1).padStart(2, "0");

                }

            });

    },


    // ---------------------------------------------------------
    // START GAME
    // ---------------------------------------------------------

    startGame() {

        const name =
            document.getElementById("gameName").value.trim();

        const selectedMode =
            document.querySelector('input[name="mode"]:checked');

        if (!selectedMode) {
            return;
        }

        const mode = selectedMode.value;

        const questionSetId =
            mode === "questions"
                ? document.getElementById("questionSet").value
                : null;


        const teamNames = [
            ...document.querySelectorAll("#teams .team-input")
        ]
            .map(input => input.value.trim())
            .filter(Boolean);


        if (!name) {

            GameMessageView.error(
                "MISSING GAME NAME",
                "Every legendary game needs a name. Enter one to continue!"
            );

            document.getElementById("gameName").focus();

            return;

        }


        if (teamNames.length < 2) {

            GameMessageView.error(
                "NOT ENOUGH TEAMS!",
                "You need at least 2 teams to start the chaos."
            );

            return;

        }


        if (mode === "questions") {

            const selectedSet = QuestionSetManager
                .getAll()
                .find(set => set.id === questionSetId);

            if (!selectedSet) {

                GameMessageView.error(
                    "CHOOSE A QUESTION SET",
                    "Search for a question set and select one before starting the game."
                );

                const searchInput =
                    document.getElementById("questionSetSearch");

                searchInput.focus();

                document.getElementById("questionSetMessage").textContent =
                    "Please choose a question set from the suggestions.";

                document.getElementById("questionSetMessage").hidden =
                    false;

                return;

            }

        }


        const gridSize =
            Number(document.getElementById("gridSize").value);


        const teams = teamNames.map(teamName =>
            TeamManager.create(teamName)
        );


        const game = GameManager.create({
            name,
            mode,
            questionSetId,
            teams,
            rows: gridSize,
            columns: gridSize
        });


        AppState.goTo("game", game.id);

        App.render();

    }

};