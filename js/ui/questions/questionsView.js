/* =========================================================
   TORNADO — QUESTIONS VIEW
   Main screen, question list, event wiring and view refresh.
========================================================= */

const QuestionsView = {
    activeFilter: "all",
    searchTerm: "",
    filters: {
        cefr: "",
        type: "",
        grammar: "",
        vocabulary: ""
    },

    render(container) {

            const questions = QuestionManager.getAll();

            const filteredQuestions =
                this.getFilteredQuestions(questions);

            container.innerHTML = `

                <section class="questions-screen">

                    <header class="questions-header">

                        <button
                            type="button"
                            class="questions-back-button"
                            id="questionsBackButton"
                            aria-label="Back to home"
                        >
                            ←
                        </button>

                        <div class="questions-heading">

                            <span class="questions-eyebrow">
                                BUILD YOUR ARSENAL
                            </span>

                            <h1>
                                QUESTION
                                <span>BANK.</span>
                            </h1>

                            <p>
                                Every question is another weapon.
                            </p>

                        </div>

                        <div class="questions-header-number">
                            QB / 01
                        </div>

                    </header>


                    <!-- STATS -->

                    <section class="questions-stats">

                        <article class="questions-stat">

                            <span class="questions-stat-label">
                                TOTAL QUESTIONS
                            </span>

                            <strong>
                                ${questions.length}
                            </strong>

                        </article>

                        <article class="questions-stat">

                            <span class="questions-stat-label">
                                FILTERED RESULTS
                            </span>

                            <strong>
                                ${filteredQuestions.length}
                            </strong>

                        </article>

                        <article class="questions-stat">

                            <span class="questions-stat-label">
                                QUESTION SETS
                            </span>

                            <strong>
                                ${QuestionSetManager.getAll().length}
                            </strong>

                        </article>

                    </section>


                    <!-- TOOLBAR -->

                    <section class="questions-toolbar">

                        <div class="questions-search">

                            <span aria-hidden="true">⌕</span>

                            <input
                                type="search"
                                id="questionSearch"
                                placeholder="Search questions, answers or tags..."
                                value="${Utils.escapeHTML(this.searchTerm)}"
                                autocomplete="off"
                            >

                        </div>

                        <button
                            type="button"
                            class="questions-primary-button"
                            id="newQuestionButton"
                        >
                            <span>+</span>
                            NEW QUESTION
                        </button>

                    </section>


                    <!-- FILTERS -->

                    <section class="questions-filters">

                        <div class="questions-filter-heading">

                            <span>FILTER THE CHAOS</span>

                            <button
                                type="button"
                                id="clearQuestionFilters"
                            >
                                CLEAR FILTERS ↺
                            </button>

                        </div>


                        <div class="questions-filter-grid">

                            <label class="questions-filter-field">

                                <span>CEFR LEVEL</span>

                                <select id="filterCefr">

                                    <option value="">All levels</option>

                                    ${this.renderOptions(
                                        ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"],
                                        this.filters.cefr
                                    )}

                                </select>

                            </label>


                            <label class="questions-filter-field">

                                <span>QUESTION TYPE</span>

                                <select id="filterType">

                                    <option value="">All types</option>

                                    ${this.renderOptions(
                                        [
                                            "Grammar",
                                            "Vocabulary",
                                            "Rephrasing",
                                            "Error Correction",
                                            "Sentence Transformation",
                                            "Multiple Choice",
                                            "Gap Filling",
                                            "Translation",
                                            "Open Question",
                                            "Reading Comprehension",
                                        ],
                                        this.filters.type
                                    )}

                                </select>

                            </label>


                            <label class="questions-filter-field">
                                <span>GRAMMAR</span>

                                <div class="tag-autocomplete">
                                    <input
                                        type="search"
                                        id="filterGrammar"
                                        placeholder="Search grammar..."
                                        value="${Utils.escapeHTML(this.filters.grammar)}"
                                        autocomplete="off"
                                    >

                                    <div
                                        id="grammarTagSuggestions"
                                        class="tag-autocomplete-suggestions"
                                        hidden
                                    ></div>
                                </div>
                            </label>

                            <label class="questions-filter-field">
                                <span>VOCABULARY</span>

                                <div class="tag-autocomplete">
                                    <input
                                        type="search"
                                        id="filterVocabulary"
                                        placeholder="Search vocabulary..."
                                        value="${Utils.escapeHTML(this.filters.vocabulary)}"
                                        autocomplete="off"
                                    >

                                    <div
                                        id="vocabularyTagSuggestions"
                                        class="tag-autocomplete-suggestions"
                                        hidden
                                    ></div>
                                </div>
                            </label>

                        </div>

                    </section>


                    <!-- QUESTION LIST -->

                    <section class="questions-library">

                        <div class="questions-library-header">

                            <div>

                                <span class="questions-section-kicker">
                                    THE ARCHIVE
                                </span>

                                <h2>ALL QUESTIONS</h2>

                            </div>

                            <span class="questions-results-count">
                                ${filteredQuestions.length}
                                ${filteredQuestions.length === 1
                                    ? "QUESTION"
                                    : "QUESTIONS"}
                            </span>

                        </div>


                        <div
                            class="questions-list"
                            id="questionsList"
                        >

                            ${this.renderQuestionList(filteredQuestions)}

                        </div>

                    </section>


                    <footer class="questions-footer">

                        <span>TORNADO / QUESTION ARCHIVE</span>

                        <span>THINK FAST. CHOOSE WISELY.</span>

                    </footer>

                </section>


                <!-- QUESTION MODAL -->

                <div
                    class="questions-modal-backdrop"
                    id="questionModal"
                    hidden
                >

                    <section
                        class="questions-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="questionModalTitle"
                    >

                        <header class="questions-modal-header">

                            <div>

                                <span class="questions-eyebrow">
                                    ADD TO YOUR ARSENAL
                                </span>

                                <h2 id="questionModalTitle">
                                    NEW QUESTION
                                </h2>

                            </div>

                            <button
                                type="button"
                                class="questions-modal-close"
                                id="closeQuestionModal"
                                aria-label="Close"
                            >
                                ×
                            </button>

                        </header>


                        <form id="questionForm">

                            <input
                                type="hidden"
                                id="editingQuestionId"
                            >

                            <label class="questions-form-field">

                                <span>QUESTION / PROMPT *</span>

                                <textarea
                                    id="questionPrompt"
                                    rows="4"
                                    maxlength="3000"
                                    required
                                    placeholder="Write your question..."
                                ></textarea>

                            </label>


                            <label class="questions-form-field">

                                <span>ANSWER *</span>

                                <textarea
                                    id="questionAnswer"
                                    rows="3"
                                    maxlength="3000"
                                    required
                                    placeholder="Write the correct answer..."
                                ></textarea>

                            </label>


                            <div class="questions-form-grid">

                                <label class="questions-form-field">

                                    <span>CEFR LEVEL</span>

                                    <select
                                        id="questionCefr"
                                        multiple
                                        size="4"
                                    >

                                        ${this.renderOptions([
                                            "Pre-A1",
                                            "A1",
                                            "A2",
                                            "B1",
                                            "B2",
                                            "C1",
                                            "C2"
                                        ])}

                                    </select>

                                    <small>
                                        Hold Ctrl to select several levels.
                                    </small>

                                </label>


                                <label class="questions-form-field">

                                    <span>QUESTION TYPE</span>

                                    <select
                                        id="questionTypes"
                                        multiple
                                        size="5"
                                    >

                                        ${this.renderOptions([
                                            "Grammar",
                                            "Vocabulary",
                                            "Rephrasing",
                                            "Error Correction",
                                            "Sentence Transformation",
                                            "Multiple Choice",
                                            "Gap Filling",
                                            "Translation",
                                            "Open Question",
                                            "Reading Comprehension",
                                            "Listening Comprehension",
                                            "Speaking"
                                        ])}

                                    </select>

                                    <small>
                                        Hold Ctrl to select several types.
                                    </small>

                                </label>

                            </div>


                            <label class="questions-form-field">

                            
                            <span>GRAMMAR TOPICS</span>

                            <div class="tag-autocomplete">

                                <input
                                    type="text"
                                    id="questionGrammar"
                                    placeholder="Third Conditional, Modal Perfects..."
                                    autocomplete="off"
                                >

                                <div
                                    id="questionGrammarTagSuggestions"
                                    class="tag-autocomplete-suggestions"
                                    hidden
                                ></div>

                            </div>

                            <small>
                                Select suggestions or separate tags with commas.
                            </small>
                            

                            </label>



                            <label class="questions-form-field">

                            
                            <span>VOCABULARY TOPICS</span>

                            <div class="tag-autocomplete">

                                <input
                                    type="text"
                                    id="questionVocabulary"
                                    placeholder="Technology, Environment, Travel..."
                                    autocomplete="off"
                                >

                                <div
                                    id="questionVocabularyTagSuggestions"
                                    class="tag-autocomplete-suggestions"
                                    hidden
                                ></div>

                            </div>

                            <small>
                                Select suggestions or separate tags with commas.
                            </small>
                            
                            </label>


                            <label class="questions-form-field">

                                <span>CUSTOM TAGS</span>

                                <input
                                    type="text"
                                    id="questionCustomTags"
                                    placeholder="PAU, 2ESO, EXAM REVIEW..."
                                >

                                <small>
                                    Create your own labels.
                                </small>

                            </label>


                            <div
                                class="questions-form-error"
                                id="questionFormError"
                                role="alert"
                                hidden
                            ></div>


                            <footer class="questions-form-actions">

                                <button
                                    type="button"
                                    class="questions-secondary-button"
                                    id="cancelQuestionButton"
                                >
                                    CANCEL
                                </button>

                                <button
                                    type="submit"
                                    class="questions-primary-button"
                                >
                                    SAVE QUESTION ↗
                                </button>

                            </footer>

                        </form>

                    </section>

                </div>

            `;

            this.bindEvents();

        },

    renderOptions(options, selectedValue = "") {

            return [...new Set(options)]
                .sort((a, b) => a.localeCompare(b))
                .map(option => `

                    <option
                        value="${Utils.escapeHTML(option)}"
                        ${option === selectedValue ? "selected" : ""}
                    >
                        ${Utils.escapeHTML(option)}
                    </option>

                `)
                .join("");

        },

    // =====================================================
    // PARSE MULTIPLE-CHOICE QUESTION
    // =====================================================

    parseMultipleChoiceQuestion(questionText) {

        const text = String(questionText || "").trim();

        const optionPattern = /(?:^|\s)([A-D])\)\s+/g;

        const matches = [...text.matchAll(optionPattern)];

        if (matches.length < 2) {
            return {
                prompt: text,
                options: []
            };
        }

        const firstOptionIndex = matches[0].index;

        const prompt = text
            .slice(0, firstOptionIndex)
            .trim();

        const options = matches.map((match, index) => {

            const startIndex =
                match.index + match[0].length;

            const endIndex =
                index + 1 < matches.length
                    ? matches[index + 1].index
                    : text.length;

            return {
                letter: match[1],
                text: text.slice(startIndex, endIndex).trim()
            };

        });

        return {
            prompt,
            options
        };

    },


    // =====================================================
    // RENDER QUESTION LIST
    // =====================================================

    renderQuestionList(questions) {

        if (!questions.length) {

            return `
                <div class="questions-empty">

                    <span class="questions-empty-icon">?</span>

                    <h3>NO QUESTIONS FOUND</h3>

                    <p>
                        Change your filters or create a new question.
                    </p>

                </div>
            `;

        }

        return questions.map(question => {

            const tags = QuestionManager.normalizeTags(
                question.tags || {}
            );

            const allTags = [
                question.activityType,
                ...tags.cefr,
                ...tags.types,
                ...tags.grammar,
                ...tags.vocabulary
            ].filter(Boolean);

            // Separate multiple-choice options from the prompt.
            const parsedQuestion =
                this.parseMultipleChoiceQuestion(question.question);

            const prompt = parsedQuestion.prompt;
            const options = parsedQuestion.options;

            return `
                <article
                    class="question-card"
                    data-question-id="${Utils.escapeHTML(question.id)}"
                >

                    <div class="question-card-index">
                        ?
                    </div>

                    <div class="question-card-content">

                        <p class="question-card-prompt">${Utils.escapeHTML(
                            this.parseMultipleChoiceQuestion(question.question).prompt
                        )}</p>

                        ${
                            options.length
                                ? `
                                    <div class="question-card-options">

                                        ${options.map(option => `
                                            <div class="question-card-option">

                                                <span class="question-card-option-letter">
                                                    ${Utils.escapeHTML(option.letter)}
                                                </span>

                                                <span class="question-card-option-text">
                                                    ${Utils.escapeHTML(option.text)}
                                                </span>

                                            </div>
                                        `).join("")}

                                    </div>
                                `
                                : ""
                        }

                        <details class="question-card-answer">

                            <summary>
                                REVEAL ANSWER
                            </summary>

                            <p>
                                ${Utils.escapeHTML(question.answer)}
                            </p>

                        </details>

                        <div class="question-card-tags">

                            ${
                                allTags.length
                                    ? allTags.map(tag => `
                                        <span class="question-tag">
                                            ${Utils.escapeHTML(tag)}
                                        </span>
                                    `).join("")
                                    : `
                                        <span class="question-tag question-tag-empty">
                                            UNTAGGED
                                        </span>
                                    `
                            }

                        </div>

                    </div>

                    <div class="question-card-actions">

                        <button
                            type="button"
                            class="question-edit-button"
                            data-action="edit"
                            data-id="${Utils.escapeHTML(question.id)}"
                        >
                            EDIT
                        </button>

                        <button
                            type="button"
                            class="question-delete-button"
                            data-action="delete"
                            data-id="${Utils.escapeHTML(question.id)}"
                        >
                            DELETE
                        </button>

                    </div>

                </article>
            `;

        }).join("");

    },

    bindEvents() {

            document
                .getElementById("questionsBackButton")
                .addEventListener("click", () => {

                    this.searchTerm = "";
                    this.resetFilters();

                    AppState.goTo("home");
                    App.render();

                });


            document
                .getElementById("newQuestionButton")
                .addEventListener("click", () => {

                    this.openQuestionModal();

                });


            document
                .getElementById("questionSearch")
                .addEventListener("input", event => {

                    this.searchTerm = event.target.value;

                    this.refreshQuestionList();

                });


            // Standard dropdown filters.

            const selectFilterControls = {

                filterCefr: "cefr",
                filterType: "type"

            };


            Object.entries(selectFilterControls).forEach(
                ([elementId, filterName]) => {

                    const control =
                        document.getElementById(elementId);

                    if (!control) {
                        return;
                    }

                    control.addEventListener("change", event => {

                        this.filters[filterName] =
                            event.target.value;

                        this.refreshQuestionList();

                    });

                }
            );


            // =====================================================
            // GRAMMAR & VOCABULARY FILTER AUTOCOMPLETE
            // =====================================================

            this.bindTagAutocomplete("grammar", "filter");
            this.bindTagAutocomplete("vocabulary", "filter");

            // =====================================================
            // GRAMMAR & VOCABULARY FORM AUTOCOMPLETE
            // =====================================================

            this.bindTagAutocomplete("grammar", "form");
            this.bindTagAutocomplete("vocabulary", "form");

            document
                .getElementById("clearQuestionFilters")
                .addEventListener("click", () => {

                    this.searchTerm = "";
                    this.resetFilters();

                    this.render(
                        document.getElementById("app")
                    );

                });


            document
                .getElementById("closeQuestionModal")
                .addEventListener("click", () => {

                    this.closeQuestionModal();

                });


            document
                .getElementById("cancelQuestionButton")
                .addEventListener("click", () => {

                    this.closeQuestionModal();

                });


            document
                .getElementById("questionModal")
                .addEventListener("click", event => {

                    if (event.target.id === "questionModal") {

                        this.closeQuestionModal();

                    }

                });


            document
                .getElementById("questionForm")
                .addEventListener("submit", event => {

                    event.preventDefault();

                    this.saveQuestion();

                });


            document
                .getElementById("questionsList")
                .addEventListener("click", event => {

                    const button = event.target.closest(
                        "[data-action]"
                    );

                    if (!button) {
                        return;
                    }

                    const id = button.dataset.id;

                    if (button.dataset.action === "edit") {

                        this.editQuestion(id);

                    }

                    if (button.dataset.action === "delete") {

                        this.deleteQuestion(id);

                    }

                });

        },

    refreshQuestionList(options = {}) {

            const questions = QuestionManager.getAll();

            const filteredQuestions =
                this.getFilteredQuestions(questions);

            const list =
                document.getElementById("questionsList");

            if (!list) {
                return;
            }


            list.innerHTML =
                this.renderQuestionList(filteredQuestions);


            const totalStat = document.querySelector(
                ".questions-stat:nth-child(1) strong"
            );

            if (totalStat) {
                totalStat.textContent = questions.length;
            }


            const filteredStat = document.querySelector(
                ".questions-stat:nth-child(2) strong"
            );

            if (filteredStat) {
                filteredStat.textContent = filteredQuestions.length;
            }


            const resultsCount = document.querySelector(
                ".questions-library-header .questions-results-count"
            );

            if (resultsCount) {

                resultsCount.textContent =
                    `${filteredQuestions.length} ${
                        filteredQuestions.length === 1
                            ? "QUESTION"
                            : "QUESTIONS"
                    }`;

            }


            // Preserve focus on the field currently being edited.

            const focusElement =
                options.focusElement ||
                document.activeElement;

            if (
                options.preserveFocus &&
                focusElement &&
                document.contains(focusElement)
            ) {

                const cursorPosition =
                    typeof focusElement.selectionStart === "number"
                        ? focusElement.selectionStart
                        : null;

                focusElement.focus();

                if (
                    cursorPosition !== null &&
                    typeof focusElement.setSelectionRange === "function"
                ) {

                    focusElement.setSelectionRange(
                        cursorPosition,
                        cursorPosition
                    );

                }

                return;

            }


            // Preserve the original search behaviour.

            const searchInput =
                document.getElementById("questionSearch");

            if (searchInput) {

                searchInput.focus();

                searchInput.setSelectionRange(
                    searchInput.value.length,
                    searchInput.value.length
                );

            }

        },

    resetFilters() {

            this.filters = {

                cefr: "",
                type: "",
                grammar: "",
                vocabulary: ""

            };

        }
};
