/* =========================================================
   TORNADO — STARTER PACK
   PAST SIMPLE & IRREGULAR VERBS
========================================================= */

const GrammarPastSimple = {

    id: "starter_grammar_past_simple",

    name: "Past Simple & Irregular Verbs",

    description: "Practise the Past Simple and irregular verbs through ten different activity types.",

    questions: [

        // =================================================
        // 1. GAP FILLING
        // =================================================

        {
            sourceId: "past_simple_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Past Simple form of the verb.",
            question: "Yesterday, I ___ (go) to the cinema.",
            answer: "went",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Past Simple form of the verb.",
            question: "She ___ (buy) a new phone last week.",
            answer: "bought",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the sentence using the negative form.",
            question: "We ___ (not/see) him at school yesterday.",
            answer: "didn't see",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the question with the correct auxiliary and verb form.",
            question: "___ you ___ (eat) breakfast yesterday?",
            answer: "Did / eat",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_gap_005",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Past Simple form of the verb.",
            question: "My parents ___ (take) me to the beach last Sunday.",
            answer: "took",
            tags: {
                cefr: ["A1"],
                types: ["Grammar", "Vocabulary"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },


        // =================================================
        // 2. ERROR CORRECTION
        // =================================================

        {
            sourceId: "past_simple_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I goed to the supermarket yesterday.",
            answer: "I went to the supermarket yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "She didn't watched the film.",
            answer: "She didn't watch the film.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Did you saw Tom yesterday?",
            answer: "Did you see Tom yesterday?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "They was very tired after the match.",
            answer: "They were very tired after the match.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Verb To Be"]
            }
        },
        {
            sourceId: "past_simple_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "He didn't went to school on Monday.",
            answer: "He didn't go to school on Monday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 3. MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "past_simple_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct sentence.",
            question: "Which sentence is correct?",
            answer: "She went home early.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"],
                custom: [
                    "A) She goed home early.",
                    "B) She went home early.",
                    "C) She did went home early.",
                    "D) She goes home yesterday."
                ]
            }
        },
        {
            sourceId: "past_simple_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the correct Past Simple form.",
            question: "What is the Past Simple of 'teach'?",
            answer: "taught",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"],
                custom: [
                    "A) teached",
                    "B) taught",
                    "C) teach",
                    "D) thought"
                ]
            }
        },
        {
            sourceId: "past_simple_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct negative sentence.",
            question: "Which sentence is correct?",
            answer: "They didn't come to the party.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
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
            sourceId: "past_simple_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct auxiliary.",
            question: "___ she call you yesterday?",
            answer: "Did",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"],
                custom: [
                    "A) Do",
                    "B) Does",
                    "C) Did",
                    "D) Has"
                ]
            }
        },
        {
            sourceId: "past_simple_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the correct past form of the verb.",
            question: "Last night, we ___ a very interesting film.",
            answer: "saw",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"],
                custom: [
                    "A) see",
                    "B) seed",
                    "C) saw",
                    "D) seen"
                ]
            }
        },


        // =================================================
        // 4. SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "past_simple_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the negative.",
            question: "He ate the sandwich.",
            answer: "He didn't eat the sandwich.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question.",
            question: "Mary visited her grandmother.",
            answer: "Did Mary visit her grandmother?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Change the sentence into the Past Simple.",
            question: "They play football every weekend.",
            answer: "They played football.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using 'ago'.",
            question: "The film finished two hours before now.",
            answer: "The film finished two hours ago.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question beginning with 'Where'.",
            question: "You bought those shoes in London.",
            answer: "Where did you buy those shoes?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 5. WORD FORMATION
        // =================================================

        {
            sourceId: "past_simple_word_001",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the Past Simple form of the verb in brackets.",
            question: "He ___ (study) for three hours yesterday.",
            answer: "studied",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_word_002",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the Past Simple form of the verb in brackets.",
            question: "We ___ (carry) the boxes upstairs.",
            answer: "carried",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_word_003",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the Past Simple form of the verb in brackets.",
            question: "She ___ (stop) the car near the school.",
            answer: "stopped",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_word_004",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the Past Simple form of the verb in brackets.",
            question: "My dad ___ (make) dinner yesterday.",
            answer: "made",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_word_005",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the Past Simple form of the verb in brackets.",
            question: "They ___ (run) five kilometres last Saturday.",
            answer: "ran",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },


        // =================================================
        // 6. MATCHING
        // =================================================

        {
            sourceId: "past_simple_matching_001",
            activityType: "Matching",
            instructions: "Match each verb with its Past Simple form. Give the five letters in order.",

            question: "Match the verbs with their Past Simple forms.",

            matchingPairs: {
                left: [
                    "go",
                    "eat",
                    "see",
                    "write",
                    "take"
                ],
                right: [
                    "took",
                    "went",
                    "wrote",
                    "ate",
                    "saw"
                ]
            },

            answer: "1-B; 2-D; 3-E; 4-C; 5-A",

            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_matching_002",
            activityType: "Matching",
            instructions: "Match each verb with its Past Simple form. Give the five letters in order.",

            question: "Match the verbs with their Past Simple forms.",

            matchingPairs: {
                left: [
                    "buy",
                    "bring",
                    "teach",
                    "catch",
                    "think"
                ],
                right: [
                    "thought",
                    "bought",
                    "caught",
                    "taught",
                    "brought"
                ]
            },

            answer: "1-B; 2-E; 3-D; 4-C; 5-A",

            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },

        {
            sourceId: "past_simple_matching_003",
            activityType: "Matching",
            instructions: "Match each subject with the correct form of 'be'. Give the five answers in order.",

            question: "Match each subject with the correct form of 'be'.",

            matchingPairs: {
                left: [
                    "I",
                    "They",
                    "She",
                    "We",
                    "He"
                ],
                right: [
                    "was",
                    "were"
                ]
            },

            answer: "1-A; 2-B; 3-A; 4-B; 5-A",

            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Verb To Be"]
            }
        },

        {
            sourceId: "past_simple_matching_004",
            activityType: "Matching",
            instructions: "Match each sentence beginning with its correct ending. Give the five letters in order.",

            question: "Match the sentence beginnings with their correct endings.",

            matchingPairs: {
                left: [
                    "I went",
                    "She ate",
                    "They saw",
                    "He bought",
                    "We took"
                ],
                right: [
                    "a new phone.",
                    "the bus home.",
                    "to the cinema.",
                    "a sandwich.",
                    "their teacher."
                ]
            },

            answer: "1-C; 2-D; 3-E; 4-A; 5-B",

            tags: {
                cefr: ["A1"],
                types: ["Grammar", "Vocabulary"],
                grammar: ["Past Simple"]
            }
        },

        {
            sourceId: "past_simple_matching_005",
            activityType: "Matching",
            instructions: "Match each time expression with its meaning. Give the five letters in order.",

            question: "Match each time expression with its meaning.",

            matchingPairs: {
                left: [
                    "Yesterday",
                    "Last week",
                    "Two days ago",
                    "Last night",
                    "In 2020"
                ],
                right: [
                    "The previous evening or night.",
                    "The day before today.",
                    "A previous calendar week.",
                    "Two days before today.",
                    "A year in the past."
                ]
            },

            answer: "1-B; 2-C; 3-D; 4-A; 5-E",

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 7. SENTENCE ORDERING
        // =================================================

        {
            sourceId: "past_simple_order_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "yesterday / cinema / went / the / I / to",
            answer: "I went to the cinema yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_order_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a negative sentence.",
            question: "didn't / homework / finish / my / I",
            answer: "I didn't finish my homework.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_order_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "you / where / go / did / yesterday",
            answer: "Where did you go yesterday?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_order_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "bought / new / a / she / yesterday / computer",
            answer: "She bought a new computer yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_order_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "they / did / arrive / when",
            answer: "When did they arrive?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 8. TRANSLATION
        // =================================================

        {
            sourceId: "past_simple_translate_001",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Ayer vi a mis amigos.",
            answer: "I saw my friends yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_translate_002",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Ella no vino a clase el lunes.",
            answer: "She didn't come to class on Monday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_translate_003",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Dónde compraste esos zapatos?",
            answer: "Where did you buy those shoes?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_translate_004",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Mis padres fueron a la playa el domingo pasado.",
            answer: "My parents went to the beach last Sunday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_translate_005",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Qué hiciste ayer por la tarde?",
            answer: "What did you do yesterday afternoon?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 9. SHORT ANSWER
        // =================================================

        {
            sourceId: "past_simple_short_001",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence using the Past Simple.",
            question: "What did you do yesterday after school?",
            answer: "Example: I played video games after school.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_short_002",
            activityType: "Short Answer",
            instructions: "Answer using the Past Simple.",
            question: "Name two things you did last weekend.",
            answer: "Example: I watched a film and visited my grandparents.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_short_003",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence.",
            question: "What time did you get up yesterday?",
            answer: "Example: I got up at seven o'clock.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_short_004",
            activityType: "Short Answer",
            instructions: "Answer using a negative sentence in the Past Simple.",
            question: "Name one thing you didn't do yesterday.",
            answer: "Example: I didn't play football yesterday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_short_005",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence using the Past Simple.",
            question: "Where did you go on your last holiday?",
            answer: "Example: I went to Madrid on my last holiday.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },


        // =================================================
        // 10. GRAMMAR CHALLENGE
        // =================================================

        {
            sourceId: "past_simple_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "After 'didn't', the main verb goes in the ___ form.",
            answer: "base",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Give all three forms of the verb.",
            question: "What are the three forms of 'write'?",
            answer: "write – wrote – written",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Irregular Verbs"]
            }
        },
        {
            sourceId: "past_simple_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Explain the rule in one sentence.",
            question: "Why do we say 'Did you see?' and not 'Did you saw?'",
            answer: "Because after 'did' we use the base form of the verb.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Past Simple"]
            }
        },
        {
            sourceId: "past_simple_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "What are the two Past Simple forms of 'be'?",
            answer: "was and were",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Past Simple", "Verb To Be"]
            }
        },
        {
            sourceId: "past_simple_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Name two common uses of the Past Simple.",
            question: "When do we use the Past Simple?",
            answer: "For completed actions in the past and past events at a definite time.",
            tags: {
                cefr: ["A2"],
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
        StarterPackSync.removeLegacyDemoEnglish();

    }

};