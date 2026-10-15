/* =========================================================
   TORNADO — QUESTIONS FILTERS
   Search, tag normalization and filtering logic.
========================================================= */

Object.assign(QuestionsView, {
    getAvailableTags(questions, category) {

            const tags = new Set();

            questions.forEach(question => {

                const values = question.tags?.[category];

                if (Array.isArray(values)) {

                    values.forEach(tag => tags.add(tag));

                } else if (
                    typeof values === "string" &&
                    values.trim()
                ) {

                    values
                        .split(",")
                        .map(tag => tag.trim())
                        .filter(Boolean)
                        .forEach(tag => tags.add(tag));

                }

            });

            return [...tags];

        },

    normalizeFilterTags(values) {

            if (Array.isArray(values)) {

                return values
                    .filter(value => typeof value === "string")
                    .map(value => value.trim())
                    .filter(Boolean);

            }

            if (typeof values === "string" && values.trim()) {

                return values
                    .split(",")
                    .map(value => value.trim())
                    .filter(Boolean);

            }

            return [];

        },

    parseFilterTags(value) {

            return value
                .split(",")
                .map(tag => tag.trim().toLocaleLowerCase())
                .filter(Boolean);

        },

    getFilteredQuestions(questions) {

            const term = this.searchTerm
                .trim()
                .toLocaleLowerCase();

            const grammarSearches =
                this.parseFilterTags(this.filters.grammar);

            const vocabularySearches =
                this.parseFilterTags(this.filters.vocabulary);


            return questions.filter(question => {

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

                ]
                    .join(" ")
                    .toLocaleLowerCase();


                // GENERAL SEARCH

                if (
                    term &&
                    !searchableText.includes(term)
                ) {
                    return false;
                }


                // CEFR FILTER

                if (
                    this.filters.cefr &&
                    !tags.cefr.includes(this.filters.cefr)
                ) {
                    return false;
                }


                // QUESTION TYPE FILTER

                if (
                    this.filters.type &&
                    !tags.types.includes(this.filters.type)
                ) {
                    return false;
                }


                // GRAMMAR FILTER
                // Matches ANY comma-separated search term.

                if (grammarSearches.length) {

                    const grammarTags = this.normalizeFilterTags(
                        tags.grammar
                    ).map(tag => tag.toLocaleLowerCase());

                    const matchesGrammar = grammarSearches.some(search =>
                        grammarTags.some(tag => tag.includes(search))
                    );

                    if (!matchesGrammar) {
                        return false;
                    }

                }


                // VOCABULARY FILTER
                // Matches ANY comma-separated search term.

                if (vocabularySearches.length) {

                    const vocabularyTags = this.normalizeFilterTags(
                        tags.vocabulary
                    ).map(tag => tag.toLocaleLowerCase());

                    const matchesVocabulary = vocabularySearches.some(search =>
                        vocabularyTags.some(tag => tag.includes(search))
                    );

                    if (!matchesVocabulary) {
                        return false;
                    }

                }


                return true;

            });

        }
});
