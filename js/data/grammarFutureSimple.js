/* =========================================================
   TORNADO — STARTER PACK
   FUTURE SIMPLE
========================================================= */

window.GrammarFutureSimple = {

    id: "starter_grammar_future_simple",

    name: "Future Simple",

    description: "Practise will and won't in affirmative, negative and interrogative sentences, including predictions, promises, offers, decisions and future possibilities.",

    questions: [

        // =====================================================
        // 1. GAP FILLING
        // =====================================================

        {
            sourceId: "future_simple_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct form of the verb in brackets.",
            question: "I think people ___ (live) longer in the future.",
            answer: "will live",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple"]
            }
        },
        {
            sourceId: "future_simple_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence using the negative form.",
            question: "Don't worry. I ___ (not / tell) anyone your secret.",
            answer: "won't tell",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the question with the correct forms.",
            question: "___ your sister ___ (come) to the party?",
            answer: "Will / come",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions"]
            }
        },
        {
            sourceId: "future_simple_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with will and the verb in brackets.",
            question: "I promise I ___ (help) you with your homework.",
            answer: "will help",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Promises"]
            }
        },
        {
            sourceId: "future_simple_gap_005",
            activityType: "Gap Filling",
            instructions: "Complete the sentence using the negative form of will.",
            question: "They ___ (not / be) at home tonight.",
            answer: "won't be",
            tags: {
                cefr: ["A1", "A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives", "Verb To Be"]
            }
        },
        {
            sourceId: "future_simple_gap_006",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct form of the verb in brackets.",
            question: "Perhaps she ___ (not / pass) the exam. She hasn't studied much.",
            answer: "won't pass",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Predictions"]
            }
        },


        // =====================================================
        // 2. ERROR CORRECTION
        // =====================================================

        {
            sourceId: "future_simple_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "My brother will goes to university next year.",
            answer: "My brother will go to university next year.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb Forms"]
            }
        },
        {
            sourceId: "future_simple_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I will to call you later.",
            answer: "I will call you later.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb Forms"]
            }
        },
        {
            sourceId: "future_simple_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "She don't will come tomorrow.",
            answer: "She won't come tomorrow.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Will they arrives before lunch?",
            answer: "Will they arrive before lunch?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions", "Verb Forms"]
            }
        },
        {
            sourceId: "future_simple_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Where you will stay tonight?",
            answer: "Where will you stay tonight?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Wh- Questions"]
            }
        },


        // =====================================================
        // 3. MULTIPLE CHOICE
        // =====================================================

        {
            sourceId: "future_simple_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct answer.",
            question: "I think it ___ sunny tomorrow.",
            answer: "will be",
            tags: {
                cefr: ["A1", "A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb To Be"],
                custom: {
                    options: [
                        "is",
                        "will be",
                        "was",
                        "will"
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the correct answer.",
            question: "___ you help me with this bag, please?",
            answer: "Will",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions", "Offers"],
                custom: {
                    options: [
                        "Do",
                        "Are",
                        "Will",
                        "Did"
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct answer.",
            question: "Peter is ill, so he ___ come to school tomorrow.",
            answer: "won't",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives"],
                custom: {
                    options: [
                        "doesn't",
                        "won't",
                        "isn't",
                        "not will"
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct answer.",
            question: "The phone is ringing. I ___ answer it!",
            answer: "will",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Spontaneous Decisions"],
                custom: {
                    options: [
                        "am going",
                        "did",
                        "will",
                        "have"
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the correct sentence.",
            question: "Which sentence is correct?",
            answer: "She will study tonight.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb Forms"],
                custom: {
                    options: [
                        "She will studies tonight.",
                        "She will study tonight.",
                        "She wills study tonight.",
                        "She will to study tonight."
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_mc_006",
            activityType: "Multiple Choice",
            instructions: "Choose the correct answer.",
            question: "I think our team ___ the final, but I'm not sure.",
            answer: "might win",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Modal Verbs", "Predictions"],
                custom: {
                    options: [
                        "might win",
                        "might wins",
                        "might to win",
                        "might winning"
                    ]
                }
            }
        },


        // =====================================================
        // 4. SENTENCE TRANSFORMATION
        // =====================================================

        {
            sourceId: "future_simple_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the negative.",
            question: "I will buy a new computer.",
            answer: "I won't buy a new computer.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question.",
            question: "They will arrive at six o'clock.",
            answer: "Will they arrive at six o'clock?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions"]
            }
        },
        {
            sourceId: "future_simple_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the full form.",
            question: "We'll see you tomorrow.",
            answer: "We will see you tomorrow.",
            tags: {
                cefr: ["A1", "A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Contractions"]
            }
        },
        {
            sourceId: "future_simple_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the contraction.",
            question: "They will not accept the invitation.",
            answer: "They won't accept the invitation.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Contractions", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question beginning with When.",
            question: "They will arrive at eight o'clock. (WHEN)",
            answer: "When will they arrive?",
            tags: {
                cefr: ["A2", "B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Wh- Questions"]
            }
        },


        // =====================================================
        // 5. SENTENCE ORDERING
        // =====================================================

        {
            sourceId: "future_simple_ordering_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "tomorrow / will / I / you / call",
            answer: "I will call you tomorrow.",
            tags: {
                cefr: ["A1", "A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Word Order"]
            }
        },
        {
            sourceId: "future_simple_ordering_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "next summer / travel / will / they / abroad",
            answer: "They will travel abroad next summer.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Word Order"]
            }
        },
        {
            sourceId: "future_simple_ordering_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a negative sentence.",
            question: "won't / tonight / play / we / football",
            answer: "We won't play football tonight.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Negatives", "Word Order"]
            }
        },
        {
            sourceId: "future_simple_ordering_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "you / help / will / me / ?",
            answer: "Will you help me?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions", "Word Order"]
            }
        },
        {
            sourceId: "future_simple_ordering_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "arrive / when / they / will / ?",
            answer: "When will they arrive?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Wh- Questions", "Word Order"]
            }
        },


        // =====================================================
        // 6. TRANSLATION
        // =====================================================

        {
            sourceId: "future_simple_translation_001",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Te ayudaré con los deberes.",
            answer: "I will help you with your homework.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Translation"]
            }
        },
        {
            sourceId: "future_simple_translation_002",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Ella no vendrá mañana.",
            answer: "She won't come tomorrow.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Translation", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_translation_003",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Jugarás conmigo esta tarde?",
            answer: "Will you play with me this afternoon?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Translation", "Questions"]
            }
        },
        {
            sourceId: "future_simple_translation_004",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Creo que nuestro equipo ganará.",
            answer: "I think our team will win.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Translation"],
                vocabulary: ["Sports"]
            }
        },
        {
            sourceId: "future_simple_translation_005",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Me llamarás esta noche?",
            answer: "Will you call me tonight?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Translation", "Questions"]
            }
        },


        // =====================================================
        // 7. MATCHING
        // =====================================================

        {
            sourceId: "future_simple_matching_001",
            activityType: "Matching",
            instructions: "Match each sentence with its use. Write the answers in order.",
            question:
                "1. I think it will rain tomorrow.\n" +
                "2. I'll help you with your bags.\n" +
                "3. I promise I won't tell anyone.\n" +
                "4. Will you come to my party?\n\n" +
                "A. A promise\n" +
                "B. A question\n" +
                "C. A prediction\n" +
                "D. An offer",
            answer: "1-C; 2-D; 3-A; 4-B",
            tags: {
                cefr: ["A2", "B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Functions"]
            }
        },
        {
            sourceId: "future_simple_matching_002",
            activityType: "Matching",
            instructions: "Match each sentence with its correct short answer. Write the answers in order.",
            question:
                "1. Will Anna be at home?\n" +
                "2. Will your friends come?\n" +
                "3. Will you help me?\n" +
                "4. Will Tom pass the exam?\n\n" +
                "A. Yes, they will.\n" +
                "B. No, he won't.\n" +
                "C. Yes, I will.\n" +
                "D. No, she won't.",
            answer: "1-D; 2-A; 3-C; 4-B",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Short Answers"]
            }
        },
        {
            sourceId: "future_simple_matching_003",
            activityType: "Matching",
            instructions: "Match each sentence with the correct rule. Write the answers in order.",
            question:
                "1. She will play tennis.\n" +
                "2. Will you come tomorrow?\n" +
                "3. He won't go to school.\n" +
                "4. I will probably be late.\n\n" +
                "A. Use won't for a negative sentence.\n" +
                "B. Put will before the subject in a question.\n" +
                "C. Put probably after will.\n" +
                "D. Use the base form of the verb after will.",
            answer: "1-D; 2-B; 3-A; 4-C",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb Forms", "Word Order"]
            }
        },


        // =====================================================
        // 8. SHORT ANSWER
        // =====================================================

        {
            sourceId: "future_simple_shortanswer_001",
            activityType: "Short Answer",
            instructions: "Give a positive short answer.",
            question: "Will you study English tomorrow?",
            answer: "Yes, I will.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Short Answers"]
            }
        },
        {
            sourceId: "future_simple_shortanswer_002",
            activityType: "Short Answer",
            instructions: "Give a negative short answer.",
            question: "Will your friends come to school tomorrow?",
            answer: "No, they won't.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Short Answers", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_shortanswer_003",
            activityType: "Short Answer",
            instructions: "Give a positive short answer.",
            question: "Will your teacher give you homework today?",
            answer: "Yes, he will. / Yes, she will.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Short Answers"]
            }
        },
        {
            sourceId: "future_simple_shortanswer_004",
            activityType: "Short Answer",
            instructions: "Give a negative short answer.",
            question: "Will people live on Mars in the future?",
            answer: "No, they won't.",
            tags: {
                cefr: ["A2", "B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Short Answers", "Predictions"]
            }
        },


        // =====================================================
        // 9. GRAMMAR CHALLENGE
        // =====================================================

        {
            sourceId: "future_simple_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct answer.",
            question: "Which sentence makes a promise?",
            answer: "I will help you with your homework.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Promises"],
                custom: {
                    options: [
                        "I helped you yesterday.",
                        "I will help you with your homework.",
                        "I am helping you now.",
                        "I have helped you before."
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Correct the sentence.",
            question: "She will studies English next year.",
            answer: "She will study English next year.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Verb Forms"]
            }
        },
        {
            sourceId: "future_simple_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct answer.",
            question: "Which sentence expresses a prediction?",
            answer: "I think robots will do many jobs in the future.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Predictions"],
                vocabulary: ["Technology"],
                custom: {
                    options: [
                        "Robots did many jobs in the past.",
                        "I think robots will do many jobs in the future.",
                        "Robots are doing some jobs now.",
                        "Robots have done many jobs already."
                    ]
                }
            }
        },
        {
            sourceId: "future_simple_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Find and correct both mistakes.",
            question: "Will she comes tomorrow? No, she don't will.",
            answer: "Will she come tomorrow? No, she won't.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Questions", "Negatives"]
            }
        },
        {
            sourceId: "future_simple_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct answer.",
            question: "The weather forecast says there is a 90% chance of rain. What is the best prediction?",
            answer: "It will probably rain.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Future Simple", "Adverbs of Probability"],
                custom: {
                    options: [
                        "It probably will raining.",
                        "It will probably rain.",
                        "It will rain probably to.",
                        "It probably rains yesterday."
                    ]
                }
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