/* =========================================================
   TORNADO — STARTER PACK
   PRESENT SIMPLE
========================================================= */

const GrammarPresentSimple = {

    id: "starter_grammar_present_simple",

    name: "Present Simple",

    description: "Practise the Present Simple with gap filling, multiple choice, error correction, transformations, translation and open questions.",


    questions: [

        // =================================================
        // GAP FILLING
        // =================================================

        {
            sourceId: "present_simple_go_school",
            question: "She ___ (go) to school every day.",
            answer: "goes",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_friends_not_play",
            question: "My friends ___ (not/play) football on Mondays.",
            answer: "don't play",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_brother_like",
            question: "___ your brother ___ (like) video games?",
            answer: "Does your brother like video games?",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_water_boil",
            question: "Water ___ (boil) at 100°C.",
            answer: "boils",
            tags: {
                cefr: ["A2"],
                types: ["Gap Filling"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "present_simple_choose_correct_sentence",
            question: "Choose the correct sentence.",
            answer: "He watches TV every evening.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Present Simple"],
                custom: [
                    "A) He watch TV every evening.",
                    "B) He watches TV every evening.",
                    "C) He watching TV every evening.",
                    "D) He is watch TV every evening."
                ]
            }
        },

        {
            sourceId: "present_simple_choose_correct_question",
            question: "Choose the correct question.",
            answer: "Where does she live?",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Present Simple"],
                custom: [
                    "A) Where she lives?",
                    "B) Where do she live?",
                    "C) Where does she live?",
                    "D) Where is she live?"
                ]
            }
        },

        {
            sourceId: "present_simple_choose_negative",
            question: "Choose the correct negative sentence.",
            answer: "They don't eat meat.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Present Simple"],
                custom: [
                    "A) They doesn't eat meat.",
                    "B) They don't eats meat.",
                    "C) They aren't eat meat.",
                    "D) They don't eat meat."
                ]
            }
        },


        // =================================================
        // ERROR CORRECTION
        // =================================================

        {
            sourceId: "present_simple_error_dont_like",
            question: "Correct the mistake: He don't like maths.",
            answer: "He doesn't like maths.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_error_does_works",
            question: "Correct the mistake: Does she works here?",
            answer: "Does she work here?",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_error_sister_study",
            question: "Correct the mistake: My sister study English every day.",
            answer: "My sister studies English every day.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "present_simple_negative_speaks",
            question: "Make this sentence negative: She speaks French.",
            answer: "She doesn't speak French.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_question_live",
            question: "Make a question: They live near the school.",
            answer: "Do they live near the school?",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_transform_never",
            question: "Rewrite using 'never': He doesn't eat fish.",
            answer: "He never eats fish.",
            tags: {
                cefr: ["A2"],
                types: ["Sentence Transformation"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // REPHRASING
        // =================================================

        {
            sourceId: "present_simple_rephrase_usually",
            question: "Rewrite using 'usually': Tom gets up at seven on most days.",
            answer: "Tom usually gets up at seven.",
            tags: {
                cefr: ["A2"],
                types: ["Rephrasing"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_rephrase_doesnt",
            question: "Rewrite using 'doesn't': Sarah dislikes horror films.",
            answer: "Sarah doesn't like horror films.",
            tags: {
                cefr: ["A2"],
                types: ["Rephrasing"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // TRANSLATION
        // =================================================

        {
            sourceId: "present_simple_translate_father",
            question: "Translate into English: Mi padre trabaja en un hospital.",
            answer: "My father works in a hospital.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_translate_how_often",
            question: "Translate into English: ¿Con qué frecuencia juegas a videojuegos?",
            answer: "How often do you play video games?",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // OPEN QUESTIONS
        // =================================================

        {
            sourceId: "present_simple_open_uses",
            question: "Name two situations in which we use the Present Simple.",
            answer: "For example, routines and habits; facts and general truths.",
            tags: {
                cefr: ["A2"],
                types: ["Open Question"],
                grammar: ["Present Simple"]
            }
        },

        {
            sourceId: "present_simple_open_third_person",
            question: "What happens to most verbs in the third person singular?",
            answer: "We usually add -s or -es. Some verbs have spelling changes, such as study → studies.",
            tags: {
                cefr: ["A1"],
                types: ["Open Question"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // GRAMMAR
        // =================================================

        {
            sourceId: "present_simple_grammar_base_form",
            question: "Complete the rule: After 'doesn't', the main verb goes in the ___ form.",
            answer: "base",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        }

    ],


    // -----------------------------------------------------
    // INSTALL / SYNCHRONIZE QUESTION SET
    // -----------------------------------------------------

    install() {

        StarterPackSync.install(this);
        StarterPackSync.removeLegacyDemoEnglish();

    }

};