/* =========================================================
   TORNADO — STARTER PACK
   PAST SIMPLE & IRREGULAR VERBS
========================================================= */

const GrammarPastSimple = {

    id: "starter_grammar_past_simple",

    name: "Past Simple & Irregular Verbs",

    description: "Practise the Past Simple, irregular verb forms, negatives, questions and common mistakes.",


    questions: [

        // =================================================
        // GAP FILLING
        // =================================================

        {
            sourceId: "past_simple_go_cinema",
            question: "Yesterday, I ___ (go) to the cinema.",
            answer: "went",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_buy_phone",
            question: "She ___ (buy) a new phone last week.",
            answer: "bought",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_not_see",
            question: "We ___ (not/see) him at school yesterday.",
            answer: "didn't see",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_eat_question",
            question: "___ you ___ (eat) breakfast this morning?",
            answer: "Did you eat",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_take_beach",
            question: "My parents ___ (take) me to the beach last Sunday.",
            answer: "took",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_study",
            question: "He ___ (study) for three hours yesterday.",
            answer: "studied",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "past_simple_choose_correct_sentence",
            question: "Choose the correct sentence.",
            answer: "She went home early.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Past Simple"],
                custom: [
                    "A) She goed home early.",
                    "B) She went home early.",
                    "C) She did went home early.",
                    "D) She goes home early yesterday."
                ]
            }
        },

        {
            sourceId: "past_simple_teach",
            question: "What is the past simple of 'teach'?",
            answer: "taught",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Past Simple"],
                custom: [
                    "A) teached",
                    "B) taught",
                    "C) teach",
                    "D) thought"
                ]
            }
        },

        {
            sourceId: "past_simple_negative_choice",
            question: "Choose the correct negative sentence.",
            answer: "They didn't come to the party.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Past Simple"],
                custom: [
                    "A) They didn't came to the party.",
                    "B) They don't came to the party.",
                    "C) They didn't come to the party.",
                    "D) They weren't come to the party."
                ]
            }
        },

        {
            sourceId: "past_simple_did_question",
            question: "Complete the question: ___ she call you yesterday?",
            answer: "Did",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Past Simple"],
                custom: [
                    "A) Do",
                    "B) Does",
                    "C) Did",
                    "D) Was"
                ]
            }
        },


        // =================================================
        // ERROR CORRECTION
        // =================================================

        {
            sourceId: "past_simple_error_went",
            question: "Correct the mistake: I goed to the supermarket.",
            answer: "I went to the supermarket.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_error_didnt_watch",
            question: "Correct the mistake: She didn't watched the film.",
            answer: "She didn't watch the film.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_error_did_saw",
            question: "Correct the mistake: Did you saw Tom yesterday?",
            answer: "Did you see Tom yesterday?",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_error_they_was",
            question: "Correct the mistake: They was very tired.",
            answer: "They were very tired.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "past_simple_negative_ate",
            question: "Make this sentence negative: He ate the sandwich.",
            answer: "He didn't eat the sandwich.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_question_visited",
            question: "Make a question: Mary visited her grandmother.",
            answer: "Did Mary visit her grandmother?",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_transform_play",
            question: "Change to the Past Simple: They play football every weekend.",
            answer: "They played football.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // REPHRASING
        // =================================================

        {
            sourceId: "past_simple_rephrase_ago",
            question: "Rewrite using 'ago': The film finished two hours before now.",
            answer: "The film finished two hours ago.",
            tags: {
                cefr: ["A2"],
                types: ["Rephrasing"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_rephrase_negative_bought",
            question: "Rewrite in the negative: Tom bought a new computer yesterday.",
            answer: "Tom didn't buy a new computer yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // TRANSLATION
        // =================================================

        {
            sourceId: "past_simple_translate_friends",
            question: "Translate into English: Ayer vi a mis amigos.",
            answer: "I saw my friends yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_translate_didnt_come",
            question: "Translate into English: Ella no vino a clase el lunes.",
            answer: "She didn't come to class on Monday.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_translate_shoes",
            question: "Translate into English: ¿Dónde compraste esos zapatos?",
            answer: "Where did you buy those shoes?",
            tags: {
                cefr: ["A2"],
                types: ["Translation"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // IRREGULAR VERB FORMS
        // =================================================

        {
            sourceId: "past_simple_irregular_write",
            question: "What is the Past Simple of 'write'?",
            answer: "wrote",
            tags: {
                cefr: ["A1"],
                types: ["Open Question"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_irregular_bring",
            question: "What is the Past Simple of 'bring'?",
            answer: "brought",
            tags: {
                cefr: ["A1"],
                types: ["Open Question"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_irregular_break",
            question: "Give the three forms of the verb 'break'.",
            answer: "break – broke – broken",
            tags: {
                cefr: ["A2"],
                types: ["Open Question"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_irregular_catch",
            question: "What is the Past Simple of 'catch'?",
            answer: "caught",
            tags: {
                cefr: ["A1"],
                types: ["Open Question"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_irregular_choose",
            question: "What is the Past Simple of 'choose'?",
            answer: "chose",
            tags: {
                cefr: ["A1"],
                types: ["Open Question"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },


        // =================================================
        // GRAMMAR
        // =================================================

        {
            sourceId: "past_simple_grammar_auxiliary",
            question: "Which auxiliary do we use to form most Past Simple questions?",
            answer: "Did",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_grammar_base_form",
            question: "After 'didn't', should the main verb be in the base form or past form?",
            answer: "The base form.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_grammar_be",
            question: "Complete the rule: The past forms of 'be' are ___ and ___.",
            answer: "was and were",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        }

    ],


    // -----------------------------------------------------
    // INSTALL / SYNCHRONIZE QUESTION SET
    // -----------------------------------------------------

    install() {

        StarterPackSync.install(this);

    }

};