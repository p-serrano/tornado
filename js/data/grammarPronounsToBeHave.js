/* =========================================================
   TORNADO — STARTER PACK
   PRONOUNS, TO BE & HAVE GOT
========================================================= */

const GrammarPronounsToBeHave = {

    id: "starter_grammar_pronouns_to_be_have",

    name: "Pronouns, To Be & Have Got",

    description: "Practise subject and object pronouns, possessive adjectives and pronouns, demonstratives, and the verbs to be and have got through gap filling, multiple choice, error correction, transformations, translation and grammar questions.",


    questions: [

        // =================================================
        // GAP FILLING
        // =================================================

        {
            sourceId: "pronouns_gap_sarah_she",
            question: "Sarah is my friend. ___ is very nice.",
            answer: "She",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_gap_parents_them",
            question: "I love my parents. I love ___ very much.",
            answer: "them",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_gap_my_book",
            question: "This is ___ book. It belongs to me.",
            answer: "my",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Possessive Adjectives"]
            }
        },

        {
            sourceId: "pronouns_gap_his_backpack",
            question: "That blue backpack is ___. It belongs to Tom.",
            answer: "his",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Possessive Pronouns"]
            }
        },

        {
            sourceId: "pronouns_gap_these_shoes",
            question: "___ shoes here are mine.",
            answer: "These",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Demonstratives"]
            }
        },

        {
            sourceId: "pronouns_gap_to_be_tall_short",
            question: "My brother ___ tall, but I ___ short.",
            answer: "is / am",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "pronouns_gap_arent_students",
            question: "They ___ students. They ___ teachers.",
            answer: "aren't / aren't",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "have_got_gap_sister_pet",
            question: "___ your sister got a pet?",
            answer: "Has",
            tags: {
                cefr: ["A1"],
                types: ["Gap Filling"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "pronouns_mc_subject_he",
            question: "Choose the correct sentence.",
            answer: "He is my best friend.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Personal Pronouns", "Verb To Be"],
                custom: [
                    "A) Him is my best friend.",
                    "B) He are my best friend.",
                    "C) He is my best friend.",
                    "D) His is my best friend."
                ]
            }
        },

        {
            sourceId: "pronouns_mc_object_her",
            question: "Choose the correct sentence.",
            answer: "I can see her.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Personal Pronouns"],
                custom: [
                    "A) I can see she.",
                    "B) I can see her.",
                    "C) I can see hers.",
                    "D) I can see he."
                ]
            }
        },

        {
            sourceId: "pronouns_mc_their_house",
            question: "Choose the correct option: This is ___ house.",
            answer: "their",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Possessive Adjectives"],
                custom: [
                    "A) them",
                    "B) theirs",
                    "C) their",
                    "D) they"
                ]
            }
        },

        {
            sourceId: "pronouns_mc_hers",
            question: "Choose the correct sentence.",
            answer: "That phone is hers.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Possessive Pronouns"],
                custom: [
                    "A) That phone is she.",
                    "B) That phone is her.",
                    "C) That phone is hers.",
                    "D) That phone is she's."
                ]
            }
        },

        {
            sourceId: "pronouns_mc_that_house",
            question: "Choose the correct option: ___ is my house over there.",
            answer: "That",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Demonstratives"],
                custom: [
                    "A) These",
                    "B) Those",
                    "C) That",
                    "D) This"
                ]
            }
        },

        {
            sourceId: "to_be_mc_negative_we",
            question: "Choose the correct negative sentence.",
            answer: "We aren't tired.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Verb To Be"],
                custom: [
                    "A) We not are tired.",
                    "B) We isn't tired.",
                    "C) We don't be tired.",
                    "D) We aren't tired."
                ]
            }
        },

        {
            sourceId: "to_be_mc_question_they",
            question: "Choose the correct question.",
            answer: "Are they at home?",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Verb To Be"],
                custom: [
                    "A) They are at home?",
                    "B) Do they are at home?",
                    "C) Are they at home?",
                    "D) Is they at home?"
                ]
            }
        },

        {
            sourceId: "have_got_mc_negative_she",
            question: "Choose the correct negative sentence.",
            answer: "She hasn't got a car.",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Have Got"],
                custom: [
                    "A) She haven't got a car.",
                    "B) She doesn't has got a car.",
                    "C) She hasn't got a car.",
                    "D) She not has got a car."
                ]
            }
        },

        {
            sourceId: "have_got_mc_question_brother",
            question: "Choose the correct question.",
            answer: "Have you got a brother?",
            tags: {
                cefr: ["A1"],
                types: ["Multiple Choice"],
                grammar: ["Have Got"],
                custom: [
                    "A) Do you have got a brother?",
                    "B) Have you got a brother?",
                    "C) Has you got a brother?",
                    "D) You have got a brother?"
                ]
            }
        },


        // =================================================
        // ERROR CORRECTION
        // =================================================

        {
            sourceId: "pronouns_error_me_am",
            question: "Correct the mistake: Me am a student.",
            answer: "I am a student.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Personal Pronouns", "Verb To Be"]
            }
        },

        {
            sourceId: "pronouns_error_i_like_she",
            question: "Correct the mistake: I like she.",
            answer: "I like her.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_error_mine_pencil",
            question: "Correct the mistake: This is mine pencil.",
            answer: "This is my pencil.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Possessive Adjectives"]
            }
        },

        {
            sourceId: "pronouns_error_book_is_my",
            question: "Correct the mistake: This book is my.",
            answer: "This book is mine.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Possessive Pronouns"]
            }
        },

        {
            sourceId: "demonstratives_error_these_is",
            question: "Correct the mistake: These is my shoes.",
            answer: "These are my shoes.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Demonstratives", "Verb To Be"]
            }
        },

        {
            sourceId: "to_be_error_she_are",
            question: "Correct the mistake: She are my sister.",
            answer: "She is my sister.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "to_be_error_they_isnt",
            question: "Correct the mistake: They isn't at school.",
            answer: "They aren't at school.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "have_got_error_he_havent",
            question: "Correct the mistake: He haven't got a computer.",
            answer: "He hasn't got a computer.",
            tags: {
                cefr: ["A1"],
                types: ["Error Correction"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "pronouns_transform_maria_she",
            question: "Replace the underlined idea with a subject pronoun: Maria is happy.",
            answer: "She is happy.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_transform_peter_him",
            question: "Replace the name with an object pronoun: I know Peter.",
            answer: "I know him.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_transform_my_book",
            question: "Rewrite using a possessive adjective: This book belongs to me.",
            answer: "This is my book.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Possessive Adjectives"]
            }
        },

        {
            sourceId: "pronouns_transform_her_bag",
            question: "Rewrite using a possessive pronoun: This is her bag.",
            answer: "This bag is hers.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Possessive Pronouns"]
            }
        },

        {
            sourceId: "to_be_transform_negative_hungry",
            question: "Make this sentence negative: He is hungry.",
            answer: "He isn't hungry.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "to_be_transform_question_ready",
            question: "Make a question: You are ready.",
            answer: "Are you ready?",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "have_got_transform_negative_dog",
            question: "Make this sentence negative: They have got a dog.",
            answer: "They haven't got a dog.",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Have Got"]
            }
        },

        {
            sourceId: "have_got_transform_question_brothers",
            question: "Make a question: She has got two brothers.",
            answer: "Has she got two brothers?",
            tags: {
                cefr: ["A1"],
                types: ["Sentence Transformation"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // REPHRASING
        // =================================================

        {
            sourceId: "pronouns_rephrase_tom_and_me",
            question: "Rewrite using a subject pronoun: Tom and I are friends.",
            answer: "We are friends.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_rephrase_sarah_helps_us",
            question: "Rewrite using an object pronoun: Sarah helps my brother and me.",
            answer: "Sarah helps us.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_rephrase_their_house",
            question: "Rewrite using a possessive adjective: The house belongs to them.",
            answer: "It is their house.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Possessive Adjectives"]
            }
        },

        {
            sourceId: "pronouns_rephrase_ours",
            question: "Rewrite using a possessive pronoun: This is our classroom.",
            answer: "This classroom is ours.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Possessive Pronouns"]
            }
        },

        {
            sourceId: "to_be_rephrase_contracted",
            question: "Rewrite using the contracted form: She is not my teacher.",
            answer: "She isn't my teacher.",
            tags: {
                cefr: ["A1"],
                types: ["Rephrasing"],
                grammar: ["Verb To Be"]
            }
        },


        // =================================================
        // TRANSLATION
        // =================================================

        {
            sourceId: "pronouns_translate_best_friend",
            question: "Translate into English: Ella es mi mejor amiga.",
            answer: "She is my best friend.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: [
                    "Personal Pronouns",
                    "Possessive Adjectives",
                    "Verb To Be"
                ]
            }
        },

        {
            sourceId: "pronouns_translate_we_know_them",
            question: "Translate into English: Nosotros los conocemos.",
            answer: "We know them.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Personal Pronouns"]
            }
        },

        {
            sourceId: "pronouns_translate_mobile",
            question: "Translate into English: Este es mi móvil.",
            answer: "This is my mobile phone.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Demonstratives", "Possessive Adjectives"]
            }
        },

        {
            sourceId: "pronouns_translate_whose_book",
            question: "Translate into English: ¿De quién es este libro? Es mío.",
            answer: "Whose book is this? It's mine.",
            tags: {
                cefr: ["A2"],
                types: ["Translation"],
                grammar: ["Possessive Pronouns"]
            }
        },

        {
            sourceId: "to_be_translate_not_tired",
            question: "Translate into English: No estamos cansados.",
            answer: "We aren't tired.",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Verb To Be"]
            }
        },

        {
            sourceId: "have_got_translate_pet",
            question: "Translate into English: ¿Tienes una mascota?",
            answer: "Have you got a pet?",
            tags: {
                cefr: ["A1"],
                types: ["Translation"],
                grammar: ["Have Got"]
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