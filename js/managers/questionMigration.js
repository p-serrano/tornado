/* =========================================================
   TORNADO — QUESTION MIGRATION
========================================================= */

const QuestionMigration = {

    // -----------------------------------------------------
    // MIGRATE QUESTIONS TO CENTRAL LIBRARY
    // -----------------------------------------------------

    run() {

        const data = Storage.getData();

        if (!Array.isArray(data.questions)) {
            data.questions = [];
        }

        const existingIds = new Set(
            data.questions.map(question => question.id)
        );

        let migrated = 0;


        // -------------------------------------------------
        // READ QUESTIONS FROM EXISTING SETS
        // -------------------------------------------------

        data.questionSets.forEach(set => {

            if (!Array.isArray(set.questions)) {
                return;
            }

            set.questions.forEach(question => {

                if (!question || !question.id) {
                    return;
                }

                // Do not duplicate questions already migrated.

                if (existingIds.has(question.id)) {
                    return;
                }

                const migratedQuestion = {

                    ...question,

                    tags: QuestionManager.normalizeTags(
                        question.tags || {}
                    )

                };

                data.questions.push(migratedQuestion);

                existingIds.add(question.id);

                migrated++;

            });

        });


        // -------------------------------------------------
        // SAVE
        // -------------------------------------------------

        Storage.saveData(data);

        console.info(
            `Tornado: ${migrated} question(s) migrated.`
        );

        return migrated;

    }

};