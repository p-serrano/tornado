/* =========================================================
   TORNADO — QUESTIONS FORM
   Create, edit, validate and delete questions.
========================================================= */

Object.assign(QuestionsView, {
    openQuestionModal(question = null) {

            const modal =
                document.getElementById("questionModal");

            const form =
                document.getElementById("questionForm");

            form.reset();


            document.getElementById(
                "editingQuestionId"
            ).value = question?.id || "";


            document.getElementById(
                "questionModalTitle"
            ).textContent = question
                ? "EDIT QUESTION"
                : "NEW QUESTION";


            document.getElementById(
                "questionFormError"
            ).hidden = true;


            if (question) {

                const tags = QuestionManager.normalizeTags(
                    question.tags || {}
                );


                document.getElementById(
                    "questionPrompt"
                ).value = question.question;


                document.getElementById(
                    "questionAnswer"
                ).value = question.answer;


                this.setMultiSelectValues(
                    "questionCefr",
                    tags.cefr
                );


                this.setMultiSelectValues(
                    "questionTypes",
                    tags.types
                );


                document.getElementById(
                    "questionGrammar"
                ).value = tags.grammar.join(", ");


                document.getElementById(
                    "questionVocabulary"
                ).value = tags.vocabulary.join(", ");


                document.getElementById(
                    "questionCustomTags"
                ).value = tags.custom.join(", ");

            }


            modal.hidden = false;

            document.getElementById(
                "questionPrompt"
            ).focus();

        },

    closeQuestionModal() {

            document.getElementById(
                "questionModal"
            ).hidden = true;

        },

    setMultiSelectValues(elementId, values) {

            const select =
                document.getElementById(elementId);

            [...select.options].forEach(option => {

                option.selected = values.includes(option.value);

            });

        },

    getMultiSelectValues(elementId) {

            const select =
                document.getElementById(elementId);

            return [...select.selectedOptions]
                .map(option => option.value);

        },

    parseTags(value) {

            return [...new Set(

                value
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(Boolean)

            )];

        },

    saveQuestion() {

            const id = document.getElementById(
                "editingQuestionId"
            ).value;


            const question = document.getElementById(
                "questionPrompt"
            ).value.trim();


            const answer = document.getElementById(
                "questionAnswer"
            ).value.trim();


            if (!question || !answer) {

                this.showFormError(
                    "Both the question and the answer are required."
                );

                return;

            }


            const tags = {

                cefr: this.getMultiSelectValues(
                    "questionCefr"
                ),

                types: this.getMultiSelectValues(
                    "questionTypes"
                ),

                grammar: this.parseTags(
                    document.getElementById(
                        "questionGrammar"
                    ).value
                ),

                vocabulary: this.parseTags(
                    document.getElementById(
                        "questionVocabulary"
                    ).value
                ),

                custom: this.parseTags(
                    document.getElementById(
                        "questionCustomTags"
                    ).value
                )

            };


            if (id) {

                const updated = QuestionManager.update(id, {
                    question,
                    answer,
                    tags
                });


                if (!updated) {

                    this.showFormError(
                        "This question could not be found."
                    );

                    return;

                }

            } else {

                QuestionManager.create({
                    question,
                    answer,
                    tags
                });

            }


            this.closeQuestionModal();

            this.render(
                document.getElementById("app")
            );

        },

    showFormError(message) {

            const error = document.getElementById(
                "questionFormError"
            );

            error.textContent = message;
            error.hidden = false;

        },

    editQuestion(id) {

            const question =
                QuestionManager.getById(id);

            if (!question) {
                return;
            }

            this.openQuestionModal(question);

        },

    deleteQuestion(id) {

            const question =
                QuestionManager.getById(id);

            if (!question) {
                return;
            }


            const confirmed = window.confirm(
                "Delete this question from the library? This action cannot be undone."
            );

            if (!confirmed) {
                return;
            }


            const deleted =
                QuestionManager.delete(id);

            if (!deleted) {
                return;
            }


            this.render(
                document.getElementById("app")
            );

        }
});
