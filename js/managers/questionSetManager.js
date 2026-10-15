/* =========================================================
TORNADO — QUESTION SET MANAGER
========================================================= */

const QuestionSetManager = {

    // -----------------------------------------------------
    // GET ALL QUESTION SETS
    // -----------------------------------------------------

    getAll() {
        const data = Storage.getData();

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
            Storage.saveData(data);
        }

        return data.questionSets;
    },


    // -----------------------------------------------------
    // GET QUESTION SET BY ID
    // -----------------------------------------------------

    getById(id) {
        return this.getAll().find(
            set => set.id === id
        ) || null;
    },


    // -----------------------------------------------------
    // GET QUESTIONS IN A SET
    // -----------------------------------------------------

    getQuestions(setId) {
        return QuestionManager.getBySetId(setId);
    },


    // -----------------------------------------------------
    // CREATE QUESTION SET
    // -----------------------------------------------------

    create({ name, description = "", questionIds = [] } = {}) {
        const cleanName =
            typeof name === "string"
                ? name.trim()
                : "";

        if (!cleanName) {
            return null;
        }

        const data = Storage.getData();

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
        }

        const now = new Date().toISOString();

        const questionSet = {
            id: Utils.createId("set"),
            name: cleanName,

            description:
                typeof description === "string"
                    ? description.trim()
                    : "",

            questionIds: this.normalizeQuestionIds(questionIds),

            createdAt: now,
            updatedAt: now
        };

        data.questionSets.push(questionSet);

        Storage.saveData(data);

        return questionSet;
    },


    // -----------------------------------------------------
    // UPDATE QUESTION SET
    // -----------------------------------------------------

    update(id, updates = {}) {
        const data = Storage.getData();

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
        }

        const index = data.questionSets.findIndex(
            set => set.id === id
        );

        if (index === -1) {
            return null;
        }

        const currentSet = data.questionSets[index];

        const updatedSet = { ...currentSet };

        if (typeof updates.name === "string") {
            const cleanName = updates.name.trim();

            if (!cleanName) {
                return null;
            }

            updatedSet.name = cleanName;
        }

        if (typeof updates.description === "string") {
            updatedSet.description = updates.description.trim();
        }

        if (Array.isArray(updates.questionIds)) {
            updatedSet.questionIds =
                this.normalizeQuestionIds(updates.questionIds);
        }

        updatedSet.updatedAt = new Date().toISOString();

        data.questionSets[index] = updatedSet;

        Storage.saveData(data);

        return updatedSet;
    },


    // -----------------------------------------------------
    // DELETE QUESTION SET
    // -----------------------------------------------------

    delete(id) {
        const data = Storage.getData();

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
        }

        const index = data.questionSets.findIndex(
            set => set.id === id
        );

        if (index === -1) {
            return false;
        }

        data.questionSets.splice(index, 1);

        Storage.saveData(data);

        return true;
    },


    // -----------------------------------------------------
    // NORMALIZE QUESTION IDS
    // -----------------------------------------------------

    normalizeQuestionIds(questionIds = []) {
        if (!Array.isArray(questionIds)) {
            return [];
        }

        const questions = QuestionManager.getAll();

        const existingQuestionIds = new Set(
            questions.map(question => question.id)
        );

        return [
            ...new Set(
                questionIds.filter(
                    id =>
                        typeof id === "string" &&
                        existingQuestionIds.has(id)
                )
            )
        ];
    }

};