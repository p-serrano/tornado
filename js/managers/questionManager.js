/* =========================================================
   TORNADO — QUESTION MANAGER
========================================================= */

const QuestionManager = {

    // -----------------------------------------------------
    // GET ALL QUESTIONS
    // -----------------------------------------------------

    getAll() {

        const data = Storage.getData();

        return data.questions;

    },


    // -----------------------------------------------------
    // GET QUESTION BY ID
    // -----------------------------------------------------

    getById(id) {

        return this.getAll().find(
            question => question.id === id
        ) || null;

    },


    // -----------------------------------------------------
    // GET QUESTIONS BY SET ID
    // -----------------------------------------------------

    getBySetId(setId) {

        const set = QuestionSetManager.getById(setId);

        if (!set) {
            return [];
        }

        // NEW FORMAT:
        // The set references questions by ID.

        if (Array.isArray(set.questionIds)) {

            return set.questionIds
                .map(id => this.getById(id))
                .filter(Boolean);

        }

        // LEGACY FORMAT:
        // Questions are stored directly inside the set.

        return Array.isArray(set.questions)
            ? set.questions
            : [];

    },


    // -----------------------------------------------------
    // CREATE QUESTION
    // -----------------------------------------------------

    create({
        question,
        answer,
        tags = {},
        activityType = "Grammar Challenge",
        instructions = "",
        matchingPairs
    }) {

        const data = Storage.getData();

        const newQuestion = {

            id: Utils.createId("question"),

            question: question.trim(),

            answer: answer.trim(),

            activityType:
                typeof activityType === "string" && activityType.trim()
                    ? activityType.trim()
                    : "Grammar Challenge",

            instructions:
                typeof instructions === "string"
                    ? instructions.trim()
                    : "",

            // Preserve matching pairs when provided.
            ...(matchingPairs &&
                Array.isArray(matchingPairs.left) &&
                Array.isArray(matchingPairs.right)
                    ? {
                        matchingPairs: {
                            left: [...matchingPairs.left],
                            right: [...matchingPairs.right]
                        }
                    }
                    : {}
            ),

            tags: this.normalizeTags(tags)

        };

        data.questions.push(newQuestion);

        Storage.saveData(data);

        return newQuestion;

    },


    // -----------------------------------------------------
    // UPDATE QUESTION
    // -----------------------------------------------------

    update(id, updates) {

        const data = Storage.getData();

        const index = data.questions.findIndex(
            question => question.id === id
        );

        if (index === -1) {
            return null;
        }

        const currentQuestion = data.questions[index];

        const updatedQuestion = {

            ...currentQuestion,

            ...updates,

            id: currentQuestion.id,

            tags: this.normalizeTags(
                updates.tags ?? currentQuestion.tags
            )

        };

        if (typeof updatedQuestion.question === "string") {
            updatedQuestion.question =
                updatedQuestion.question.trim();
        }

        if (typeof updatedQuestion.answer === "string") {
            updatedQuestion.answer =
                updatedQuestion.answer.trim();
        }

        data.questions[index] = updatedQuestion;

        Storage.saveData(data);

        return updatedQuestion;

    },


    // -----------------------------------------------------
    // DELETE QUESTION
    // -----------------------------------------------------

    delete(id) {

        const data = Storage.getData();

        const index = data.questions.findIndex(
            question => question.id === id
        );

        if (index === -1) {
            return false;
        }

        data.questions.splice(index, 1);

        // Remove references from sets using the new format.

        data.questionSets.forEach(set => {

            if (Array.isArray(set.questionIds)) {

                set.questionIds = set.questionIds.filter(
                    questionId => questionId !== id
                );

            }

        });

        Storage.saveData(data);

        return true;

    },


    // -----------------------------------------------------
    // NORMALIZE TAGS
    // -----------------------------------------------------

    normalizeTags(tags = {}) {

        const categories = [
            "cefr",
            "types",
            "grammar",
            "vocabulary",
            "custom"
        ];

        const normalized = {};

        categories.forEach(category => {

            normalized[category] =
                Array.isArray(tags[category])
                    ? [...new Set(
                        tags[category]
                            .filter(value =>
                                typeof value === "string"
                            )
                            .map(value => value.trim())
                            .filter(Boolean)
                    )]
                    : [];

        });

        return normalized;

    },


    // -----------------------------------------------------
    // GET RANDOM QUESTION
    // -----------------------------------------------------

    getRandom(setId, usedIds = []) {

        const questions = this.getBySetId(setId)
            .filter(question =>
                !usedIds.includes(question.id)
            );

        if (!questions.length) {
            return null;
        }

        return questions[
            Math.floor(Math.random() * questions.length)
        ];

    }

};