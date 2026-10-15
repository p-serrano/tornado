/* =========================================================
   TORNADO — STARTER PACK SYNC
   Synchronize source-defined questions with local storage.
========================================================= */

const StarterPackSync = {

    // -----------------------------------------------------
    // INSTALL / SYNCHRONIZE PACK
    // -----------------------------------------------------

    install(pack) {

        if (
            !pack ||
            !pack.id ||
            !Array.isArray(pack.questions)
        ) {
            console.error(
                "StarterPackSync: invalid starter pack.",
                pack
            );

            return;
        }

        let data = Storage.getData();

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
        }

        if (!Array.isArray(data.questions)) {
            data.questions = [];
        }

        // -------------------------------------------------
        // VALIDATE SOURCE IDS BEFORE MODIFYING DATA
        // -------------------------------------------------

        const sourceQuestions = [];
        const seenSourceIds = new Set();

        for (let index = 0; index < pack.questions.length; index++) {

            const questionData = pack.questions[index];

            const sourceId =
                questionData.sourceId ||
                `${pack.id}_question_${index + 1}`;

            if (seenSourceIds.has(sourceId)) {

                console.error(
                    "StarterPackSync: duplicate sourceId.",
                    sourceId
                );

                return;
            }

            if (
                typeof questionData.question !== "string" ||
                typeof questionData.answer !== "string"
            ) {

                console.error(
                    "StarterPackSync: invalid question.",
                    questionData
                );

                return;
            }

            seenSourceIds.add(sourceId);

            sourceQuestions.push({
                ...questionData,
                sourceId
            });

        }

        // -------------------------------------------------
        // FIND OR CREATE THE QUESTION SET
        // -------------------------------------------------

        let questionSet = data.questionSets.find(
            set => set.id === pack.id
        );

        if (!questionSet) {

            questionSet = {
                id: pack.id,
                name: pack.name,
                description: pack.description || "",
                questionIds: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            data.questionSets.push(questionSet);

            Storage.saveData(data);

        }

        // -------------------------------------------------
        // COLLECT EXISTING MEMBERSHIP
        // -------------------------------------------------

        const currentSetIds = new Set(
            Array.isArray(questionSet.questionIds)
                ? questionSet.questionIds
                : []
        );

        const synchronizedIds = [];

        const claimedQuestionIds = new Set();

        // -------------------------------------------------
        // SYNCHRONIZE SOURCE QUESTIONS
        // -------------------------------------------------

        for (const questionData of sourceQuestions) {

            data = Storage.getData();

            const sourceId = questionData.sourceId;

            let question = data.questions.find(
                item =>
                    item.sourcePackId === pack.id &&
                    item.sourceId === sourceId
            );

            // -------------------------------------------------
            // MIGRATE LEGACY QUESTIONS
            // -------------------------------------------------

            if (!question) {

                const legacyCandidates = data.questions.filter(
                    item =>
                        currentSetIds.has(item.id) &&
                        !item.sourcePackId &&
                        !claimedQuestionIds.has(item.id) &&
                        item.question === questionData.question
                );

                // Only migrate if there is exactly one candidate.
                if (legacyCandidates.length === 1) {
                    question = legacyCandidates[0];
                }

            }

            // -------------------------------------------------
            // UPDATE EXISTING QUESTION
            // -------------------------------------------------

            if (question) {

                const updatedQuestion = QuestionManager.update(
                    question.id,
                    {
                        question: questionData.question,
                        answer: questionData.answer,
                        tags: questionData.tags || {},
                        sourcePackId: pack.id,
                        sourceId
                    }
                );

                if (!updatedQuestion) {

                    console.error(
                        "StarterPackSync: could not update question.",
                        sourceId
                    );

                    continue;
                }

                claimedQuestionIds.add(updatedQuestion.id);

                synchronizedIds.push(updatedQuestion.id);

                continue;

            }

            // -------------------------------------------------
            // CREATE MISSING QUESTION
            // -------------------------------------------------

            const newQuestion = QuestionManager.create({
                question: questionData.question,
                answer: questionData.answer,
                tags: questionData.tags || {}
            });

            if (!newQuestion) {

                console.error(
                    "StarterPackSync: could not create question.",
                    sourceId
                );

                continue;
            }

            // Attach source metadata to the newly created question.
            data = Storage.getData();

            const storedQuestion = data.questions.find(
                item => item.id === newQuestion.id
            );

            if (!storedQuestion) {
                continue;
            }

            storedQuestion.sourcePackId = pack.id;
            storedQuestion.sourceId = sourceId;

            Storage.saveData(data);

            claimedQuestionIds.add(storedQuestion.id);

            synchronizedIds.push(storedQuestion.id);

        }

        // -------------------------------------------------
        // UPDATE SET MEMBERSHIP
        // -------------------------------------------------

        QuestionSetManager.update(
            pack.id,
            {
                name: pack.name,
                description: pack.description || "",
                questionIds: synchronizedIds
            }
        );

        // -------------------------------------------------
        // REMOVE OBSOLETE SOURCE QUESTIONS
        // -------------------------------------------------

        data = Storage.getData();

        const activeIds = new Set(synchronizedIds);

        const otherSetIds = new Set();

        data.questionSets.forEach(set => {

            if (set.id === pack.id) {
                return;
            }

            if (!Array.isArray(set.questionIds)) {
                return;
            }

            set.questionIds.forEach(id => {
                otherSetIds.add(id);
            });

        });

        data.questions = data.questions.filter(question => {

            // Never delete questions belonging to another pack
            // or questions created manually.
            if (question.sourcePackId !== pack.id) {
                return true;
            }

            // Keep questions that are still present in the source.
            if (activeIds.has(question.id)) {
                return true;
            }

            // Do not delete a question referenced by another set.
            if (otherSetIds.has(question.id)) {
                return true;
            }

            // The source question has been removed from the pack.
            return false;

        });

        Storage.saveData(data);

        console.info(
            `StarterPackSync: "${pack.name}" synchronized. ` +
            `${synchronizedIds.length} question(s).`
        );

    }

};