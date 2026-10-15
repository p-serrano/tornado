/* =========================================================
TORNADO — QUESTIONS AUTOCOMPLETE
Shared grammar and vocabulary tag autocomplete.
========================================================= */

Object.assign(QuestionsView, {

// -----------------------------------------------------
// TAG CATALOG
// -----------------------------------------------------

getTagSuggestions(category) {

    const catalog =
        QUESTION_TAG_CATALOG[category] || [];

    const questions =
        QuestionManager.getAll();

    const existingTags = questions.flatMap(question => {

        const value =
            (question.tags || {})[category];

        if (Array.isArray(value)) {
            return value;
        }

        if (typeof value === "string" && value.trim()) {

            return value
                .split(",")
                .map(tag => tag.trim())
                .filter(Boolean);

        }

        return [];

    });

    return [...new Set([...catalog, ...existingTags])]
        .filter(tag =>
            typeof tag === "string" &&
            tag.trim()
        )
        .sort((a, b) => a.localeCompare(b));

},


// -----------------------------------------------------
// AUTOCOMPLETE ELEMENTS
// -----------------------------------------------------

getAutocompleteElements(category, context = "filter") {

    const config = {

        grammar: {
            filter: {
                inputId: "filterGrammar",
                suggestionsId: "grammarTagSuggestions"
            },
            form: {
                inputId: "questionGrammar",
                suggestionsId: "questionGrammarTagSuggestions"
            }
        },

        vocabulary: {
            filter: {
                inputId: "filterVocabulary",
                suggestionsId: "vocabularyTagSuggestions"
            },
            form: {
                inputId: "questionVocabulary",
                suggestionsId: "questionVocabularyTagSuggestions"
            }
        }

    };

    const settings =
        config[category]?.[context];

    if (!settings) {
        return null;
    }

    const input =
        document.getElementById(settings.inputId);

    const suggestions =
        document.getElementById(settings.suggestionsId);

    if (!input || !suggestions) {
        return null;
    }

    return {
        input,
        suggestions,
        category,
        context
    };

},


// -----------------------------------------------------
// CURRENT TAG SEGMENT
// -----------------------------------------------------

getCurrentTagSegment(value) {

    const commaIndex =
        value.lastIndexOf(",");

    return {

        prefix: commaIndex === -1
            ? ""
            : value.slice(0, commaIndex + 1),

        query: value
            .slice(commaIndex + 1)
            .trim()

    };

},


// -----------------------------------------------------
// RENDER AUTOCOMPLETE
// -----------------------------------------------------

renderTagAutocomplete(category, context = "filter") {

    const elements =
        this.getAutocompleteElements(category, context);

    if (!elements) {
        return;
    }

    const { input, suggestions } = elements;

    const { query } =
        this.getCurrentTagSegment(input.value);

    const lastComma =
        input.value.lastIndexOf(",");

    const completedValue =
        lastComma === -1
            ? ""
            : input.value.slice(0, lastComma);

    const selectedTags = completedValue
        .split(",")
        .map(tag => tag.trim().toLocaleLowerCase())
        .filter(Boolean);

    const normalizedQuery =
        query.toLocaleLowerCase();

    const matches = this.getTagSuggestions(category)
        .filter(tag => {

            const normalizedTag =
                tag.toLocaleLowerCase();

            if (selectedTags.includes(normalizedTag)) {
                return false;
            }

            if (!normalizedQuery) {
                return true;
            }

            return normalizedTag.includes(normalizedQuery);

        })
        .slice(0, 12);

    if (!matches.length) {

        suggestions.innerHTML = "";
        suggestions.hidden = true;

        return;

    }

    suggestions.innerHTML = matches.map(tag => {

        const escapedTag =
            Utils.escapeHTML(tag);

        return `
            <button
                type="button"
                class="tag-autocomplete-option"
                data-tag-value="${escapedTag}"
            >${escapedTag}</button>
        `;

    }).join("");

    suggestions.hidden = false;

},


// -----------------------------------------------------
// SELECT TAG
// -----------------------------------------------------

selectTagAutocomplete(
    category,
    tag,
    context = "filter"
) {

    const elements =
        this.getAutocompleteElements(category, context);

    if (!elements) {
        return;
    }

    const { input } = elements;

    const { prefix } =
        this.getCurrentTagSegment(input.value);

    const completedPrefix =
        prefix
            ? `${prefix}${prefix.endsWith(" ") ? "" : " "}`
            : "";

    input.value =
        `${completedPrefix}${tag}, `;

    if (context === "filter") {

        this.filters[category] = input.value;

        this.refreshQuestionList({

            preserveFocus: true,
            focusElement: input

        });

    }

    input.focus();

    input.setSelectionRange(
        input.value.length,
        input.value.length
    );

    this.renderTagAutocomplete(category, context);

},


// -----------------------------------------------------
// CLOSE AUTOCOMPLETE
// -----------------------------------------------------

closeTagAutocomplete(category, context = "filter") {

    const elements =
        this.getAutocompleteElements(category, context);

    if (elements) {
        elements.suggestions.hidden = true;
    }

},


// -----------------------------------------------------
// BIND AUTOCOMPLETE EVENTS
// -----------------------------------------------------

bindTagAutocomplete(category, context = "filter") {

    const elements =
        this.getAutocompleteElements(category, context);

    if (!elements) {
        return;
    }

    const { input, suggestions } = elements;

    input.addEventListener("input", () => {

        if (context === "filter") {

            this.filters[category] = input.value;

            this.refreshQuestionList({

                preserveFocus: true,
                focusElement: input

            });

        }

        this.renderTagAutocomplete(category, context);

    });

    input.addEventListener("focus", () => {

        this.renderTagAutocomplete(category, context);

    });

    input.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            this.closeTagAutocomplete(category, context);

        }

    });

    suggestions.addEventListener("mousedown", event => {

        if (
            event.target.closest(
                ".tag-autocomplete-option"
            )
        ) {

            event.preventDefault();

        }

    });

    suggestions.addEventListener("click", event => {

        const button = event.target.closest(
            ".tag-autocomplete-option"
        );

        if (!button) {
            return;
        }

        this.selectTagAutocomplete(
            category,
            button.dataset.tagValue,
            context
        );

    });

    input.addEventListener("blur", () => {

        setTimeout(() => {

            if (
                document.activeElement !== input
            ) {

                this.closeTagAutocomplete(
                    category,
                    context
                );

            }

        }, 150);

    });

}

});
