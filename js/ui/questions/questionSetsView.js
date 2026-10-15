/* =========================================================
TORNADO — QUESTION SETS VIEW
========================================================= */

const QuestionSetsView = {


editingSetId: null,

selectedQuestionIds: [],


// -----------------------------------------------------
// RENDER
// -----------------------------------------------------

render(container) {

    const sets = QuestionSetManager.getAll();

    container.innerHTML = `

        <section class="question-sets-screen">

            <header class="question-sets-header">

                <button
                    type="button"
                    class="question-sets-back-button"
                    id="questionSetsBackButton"
                    aria-label="Back to home"
                >
                    ←
                </button>

                <div class="question-sets-heading">

                    <span class="question-sets-eyebrow">
                        BUILD YOUR ARSENAL
                    </span>

                    <h1>QUESTION <span>SETS.</span></h1>

                    <p>
                        Assemble your questions. Prepare for chaos.
                    </p>

                </div>

                <div class="question-sets-header-number">
                    QS / 01
                </div>

            </header>


            <section class="question-sets-toolbar">

                <div class="question-sets-toolbar-info">

                    <span class="question-sets-kicker">
                        YOUR COLLECTIONS
                    </span>

                    <p class="question-sets-total">
                        ${String(sets.length).padStart(2, "0")}
                        ${sets.length === 1 ? "SET" : "SETS"} IN YOUR ARSENAL
                    </p>

                </div>

                <button
                    type="button"
                    class="question-sets-primary-button"
                    id="createQuestionSetButton"
                >
                    + CREATE SET
                </button>

            </section>


            <section
                class="question-sets-list"
                id="questionSetsList"
            >

                ${this.renderSetList(sets)}

            </section>


            <footer class="question-sets-footer">
                <span>THINK FAST. CHOOSE WISELY.</span>
            </footer>


            <!-- SET EDITOR -->

            <div
                class="question-set-modal-backdrop"
                id="questionSetModal"
                hidden
            >

                <section
                    class="question-set-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="questionSetModalTitle"
                >

                    <header class="question-set-modal-header">

                        <div>

                            <span class="question-sets-eyebrow">
                                PREPARE YOUR ARSENAL
                            </span>

                            <h2 id="questionSetModalTitle">
                                CREATE QUESTION SET
                            </h2>

                        </div>

                        <button
                            type="button"
                            id="closeQuestionSetModal"
                            class="question-set-modal-close"
                            aria-label="Close"
                        >
                            ×
                        </button>

                    </header>


                    <form id="questionSetForm">

                        <label class="question-set-field">

                            <span>SET NAME *</span>

                            <input
                                id="questionSetName"
                                type="text"
                                maxlength="100"
                                required
                                autocomplete="off"
                                placeholder="e.g. Verb Tenses"
                            >

                        </label>


                        <label class="question-set-field">

                            <span>DESCRIPTION</span>

                            <textarea
                                id="questionSetDescription"
                                rows="2"
                                maxlength="500"
                                placeholder="What will this set practise?"
                            ></textarea>

                        </label>


                        <div class="question-set-picker-header">

                            <div>

                                <span class="question-sets-kicker">
                                    QUESTION BANK
                                </span>

                                <h3>SELECT QUESTIONS</h3>

                            </div>

                            <strong id="questionSetSelectedCount">
                                0 SELECTED
                            </strong>

                        </div>


                        <label class="question-set-field">

                            <span>SEARCH QUESTIONS</span>

                            <input
                                id="questionSetQuestionSearch"
                                type="search"
                                placeholder="Search question text, answer or tags..."
                                autocomplete="off"
                            >

                        </label>


                        <div
                            class="question-set-question-list"
                            id="questionSetQuestionList"
                        ></div>


                        <div
                            class="question-set-form-error"
                            id="questionSetFormError"
                            role="alert"
                            hidden
                        ></div>


                        <footer class="question-set-form-actions">

                            <button
                                type="button"
                                class="question-set-secondary-button"
                                id="cancelQuestionSetButton"
                            >
                                CANCEL
                            </button>

                            <button
                                type="submit"
                                class="question-sets-primary-button"
                            >
                                SAVE SET ↗
                            </button>

                        </footer>

                    </form>

                </section>

            </div>

        </section>

    `;

    this.bindEvents();

},


// -----------------------------------------------------
// RENDER SET LIST
// -----------------------------------------------------

renderSetList(sets) {

    if (!sets.length) {

        return `

            <div class="question-sets-empty">

                <span>?</span>

                <h3>NO QUESTION SETS YET</h3>

                <p>
                    Create your first set using questions
                    from your Question Bank.
                </p>

                <button
                    type="button"
                    class="question-sets-primary-button"
                    id="createFirstQuestionSetButton"
                >
                    + CREATE YOUR FIRST SET
                </button>

            </div>

        `;

    }


    return sets.map(set => {

        const questions =
            QuestionManager.getBySetId(set.id);

        return `

            <article
                class="question-set-card"
                data-set-id="${Utils.escapeHTML(set.id)}"
            >

                <div class="question-set-card-index" aria-hidden="true">
                    ${String(sets.indexOf(set) + 1).padStart(2, "0")}
                </div>

                <div class="question-set-card-content">

                    <h3>
                        ${Utils.escapeHTML(set.name || "Untitled Set")}
                    </h3>

                    <p>
                        ${Utils.escapeHTML(set.description || "No description")}
                    </p>

                    <span class="question-set-card-count">
                        ${questions.length}
                        ${questions.length === 1
                            ? "QUESTION"
                            : "QUESTIONS"}
                    </span>

                </div>

                <div class="question-set-card-actions">

                    <button
                        type="button"
                        data-set-action="edit"
                        data-id="${Utils.escapeHTML(set.id)}"
                    >
                        EDIT
                    </button>

                    <button
                        type="button"
                        data-set-action="delete"
                        data-id="${Utils.escapeHTML(set.id)}"
                    >
                        DELETE
                    </button>

                </div>

            </article>

        `;

    }).join("");

},


// -----------------------------------------------------
// OPEN EDITOR
// -----------------------------------------------------

openEditor(setId = null) {

    this.editingSetId = setId;

    const set = setId
        ? QuestionSetManager.getById(setId)
        : null;

    if (setId && !set) {
        return;
    }

    this.selectedQuestionIds = set
        ? QuestionManager.getBySetId(set.id)
            .map(question => question.id)
        : [];

    document.getElementById("questionSetModalTitle")
        .textContent = set
            ? "EDIT QUESTION SET"
            : "CREATE QUESTION SET";

    document.getElementById("questionSetName").value =
        set?.name || "";

    document.getElementById("questionSetDescription").value =
        set?.description || "";

    document.getElementById("questionSetQuestionSearch").value = "";

    document.getElementById("questionSetFormError").hidden = true;

    this.renderQuestionPicker();

    document.getElementById("questionSetModal").hidden = false;

    document.getElementById("questionSetName").focus();

},


// -----------------------------------------------------
// CLOSE EDITOR
// -----------------------------------------------------

closeEditor() {

    document.getElementById("questionSetModal").hidden = true;

    this.editingSetId = null;

    this.selectedQuestionIds = [];

},


// -----------------------------------------------------
// RENDER QUESTION PICKER
// -----------------------------------------------------

renderQuestionPicker() {

    const container =
        document.getElementById("questionSetQuestionList");

    if (!container) {
        return;
    }

    const searchTerm = document
        .getElementById("questionSetQuestionSearch")
        .value
        .trim()
        .toLowerCase();

    const questions = QuestionManager.getAll();

    const filteredQuestions = questions.filter(question => {

        const tags = QuestionManager.normalizeTags(
            question.tags || {}
        );

        const searchableText = [

            question.question,
            question.answer,
            ...tags.cefr,
            ...tags.types,
            ...tags.grammar,
            ...tags.vocabulary,
            ...tags.custom

        ].join(" ").toLowerCase();

        return searchableText.includes(searchTerm);

    });


    if (!filteredQuestions.length) {

        container.innerHTML = `

            <div class="question-set-picker-empty">

                ${questions.length
                    ? "No questions match your search."
                    : "Your Question Bank is empty. Create questions first."}

            </div>

        `;

    } else {

        container.innerHTML = filteredQuestions.map(question => {

            const selected =
                this.selectedQuestionIds.includes(question.id);

            return `

                <label class="question-set-picker-item">

                    <input
                        type="checkbox"
                        data-question-id="${Utils.escapeHTML(question.id)}"
                        ${selected ? "checked" : ""}
                    >

                    <span class="question-set-picker-checkbox"></span>

                    <span class="question-set-picker-copy">

                        <strong>
                            ${Utils.escapeHTML(question.question)}
                        </strong>

                        <small>
                            ${Utils.escapeHTML(question.answer)}
                        </small>

                    </span>

                </label>

            `;

        }).join("");

    }

    this.updateSelectedCount();

},


// -----------------------------------------------------
// UPDATE SELECTED COUNT
// -----------------------------------------------------

updateSelectedCount() {

    const counter =
        document.getElementById("questionSetSelectedCount");

    if (counter) {

        const count = this.selectedQuestionIds.length;

        counter.textContent =
            `${count} ${count === 1 ? "QUESTION" : "QUESTIONS"} SELECTED`;

    }

},


// -----------------------------------------------------
// SAVE SET
// -----------------------------------------------------

saveSet(event) {

    event.preventDefault();

    const name = document
        .getElementById("questionSetName")
        .value
        .trim();

    const description = document
        .getElementById("questionSetDescription")
        .value
        .trim();

    const errorElement =
        document.getElementById("questionSetFormError");


    if (!name) {

        errorElement.textContent =
            "Enter a name for your question set.";

        errorElement.hidden = false;

        return;

    }


    const payload = {

        name,
        description,
        questionIds: this.selectedQuestionIds

    };


    let savedSet;

    if (this.editingSetId) {

        savedSet = QuestionSetManager.update(
            this.editingSetId,
            payload
        );

    } else {

        savedSet = QuestionSetManager.create(payload);

    }


    if (!savedSet) {

        errorElement.textContent =
            "The question set could not be saved.";

        errorElement.hidden = false;

        return;

    }


    this.closeEditor();

    this.render(
        document.getElementById("app")
    );

},


// -----------------------------------------------------
// DELETE SET
// -----------------------------------------------------

deleteSet(id) {

    const set = QuestionSetManager.getById(id);

    if (!set) {
        return;
    }

    const confirmed = window.confirm(
        `Delete the question set "${set.name}"?\n\n` +
        "The original questions will remain in the Question Bank."
    );

    if (!confirmed) {
        return;
    }

    QuestionSetManager.delete(id);

    this.render(
        document.getElementById("app")
    );

},


// -----------------------------------------------------
// BIND EVENTS
// -----------------------------------------------------

bindEvents() {

    document
        .getElementById("questionSetsBackButton")
        .addEventListener("click", () => {

            AppState.goTo("home");

            App.render();

        });


    document
        .getElementById("createQuestionSetButton")
        ?.addEventListener("click", () => {

            this.openEditor();

        });


    document
        .getElementById("createFirstQuestionSetButton")
        ?.addEventListener("click", () => {

            this.openEditor();

        });


    document
        .getElementById("closeQuestionSetModal")
        .addEventListener("click", () => {

            this.closeEditor();

        });


    document
        .getElementById("cancelQuestionSetButton")
        .addEventListener("click", () => {

            this.closeEditor();

        });


    document
        .getElementById("questionSetModal")
        .addEventListener("click", event => {

            if (event.target.id === "questionSetModal") {

                this.closeEditor();

            }

        });


    document
        .getElementById("questionSetForm")
        .addEventListener("submit", event => {

            this.saveSet(event);

        });


    document
        .getElementById("questionSetQuestionSearch")
        .addEventListener("input", () => {

            this.renderQuestionPicker();

        });


    document
        .getElementById("questionSetQuestionList")
        .addEventListener("change", event => {

            const checkbox = event.target.closest(
                "input[data-question-id]"
            );

            if (!checkbox) {
                return;
            }

            const id = checkbox.dataset.questionId;

            if (checkbox.checked) {

                if (!this.selectedQuestionIds.includes(id)) {

                    this.selectedQuestionIds.push(id);

                }

            } else {

                this.selectedQuestionIds =
                    this.selectedQuestionIds.filter(
                        questionId => questionId !== id
                    );

            }

            this.updateSelectedCount();

        });


    document
        .getElementById("questionSetsList")
        .addEventListener("click", event => {

            const button = event.target.closest(
                "[data-set-action]"
            );

            if (!button) {
                return;
            }

            const id = button.dataset.id;

            if (button.dataset.setAction === "edit") {

                this.openEditor(id);

            }

            if (button.dataset.setAction === "delete") {

                this.deleteSet(id);

            }

        });

}


};
