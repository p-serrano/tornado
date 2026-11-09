window.GrammarPresentPerfectSimple = {
    id: "starter_grammar_present_perfect_simple",
    name: "Present Perfect Simple",
    description: "Practise affirmative, negative and interrogative forms of the Present Perfect Simple, including past participles and common time expressions.",

    questions: [

        // =====================================================
        // 1. GAP FILLING (5)
        // =====================================================

        {
            sourceId: "present_perfect_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Present Perfect Simple.",
            question: "She ___ (finish) her homework.",
            answer: "has finished",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Affirmative"]
            }
        },
        {
            sourceId: "present_perfect_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Present Perfect Simple.",
            question: "They ___ (not / see) that film.",
            answer: "haven't seen",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Negative"]
            }
        },
        {
            sourceId: "present_perfect_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the question with the Present Perfect Simple.",
            question: "___ you ever ___ (visit) London?",
            answer: "Have you ever visited",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with FOR or SINCE.",
            question: "I have lived here ___ 2020.",
            answer: "since",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Since"]
            }
        },
        {
            sourceId: "present_perfect_gap_005",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the Present Perfect Simple.",
            question: "We ___ just ___ (arrive) at the station.",
            answer: "have just arrived",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Just"]
            }
        },

        // =====================================================
        // 2. ERROR CORRECTION (5)
        // =====================================================

        {
            sourceId: "present_perfect_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "He have finished his project.",
            answer: "He has finished his project.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Subject-Verb Agreement"]
            }
        },
        {
            sourceId: "present_perfect_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I have saw that film before.",
            answer: "I have seen that film before.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "She hasn't went to school today.",
            answer: "She hasn't gone to school today.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles", "Negative"]
            }
        },
        {
            sourceId: "present_perfect_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Did you ever been to Italy?",
            answer: "Have you ever been to Italy?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I have lived here since five years.",
            answer: "I have lived here for five years.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "For and Since"]
            }
        },

        // =====================================================
        // 3. MULTIPLE CHOICE (5)
        // =====================================================

        {
            sourceId: "present_perfect_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "My brother ___ his keys. He can't open the door.",
            answer: "has lost",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Affirmative"],
                custom: {
                    options: [
                        "has lost",
                        "have lost",
                        "has lose",
                        "lost"
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "___ your parents ever travelled abroad?",
            answer: "Have",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"],
                custom: {
                    options: [
                        "Has",
                        "Have",
                        "Did",
                        "Do"
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "We haven't finished our work ___.",
            answer: "yet",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Yet"],
                custom: {
                    options: [
                        "already",
                        "just",
                        "yet",
                        "since"
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "Tom has lived in Madrid ___ 2022.",
            answer: "since",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Since"],
                custom: {
                    options: [
                        "for",
                        "since",
                        "already",
                        "ever"
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "I have ___ eaten lunch, so I'm not hungry.",
            answer: "already",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Already"],
                custom: {
                    options: [
                        "yet",
                        "since",
                        "already",
                        "ever"
                    ]
                }
            }
        },

        // =====================================================
        // 4. SENTENCE TRANSFORMATION (5)
        // =====================================================

        {
            sourceId: "present_perfect_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the Present Perfect Simple.",
            question: "I started learning English three years ago. (FOR)",
            answer: "I have learned English for three years.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "For"]
            }
        },
        {
            sourceId: "present_perfect_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the Present Perfect Simple.",
            question: "The last time I saw Anna was in June. (SINCE)",
            answer: "I haven't seen Anna since June.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Since", "Negative"]
            }
        },
        {
            sourceId: "present_perfect_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using NEVER.",
            question: "I haven't tried sushi at any time in my life.",
            answer: "I have never tried sushi.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Never"]
            }
        },
        {
            sourceId: "present_perfect_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using ALREADY.",
            question: "She finished her homework before now.",
            answer: "She has already finished her homework.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Already"]
            }
        },
        {
            sourceId: "present_perfect_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using YET.",
            question: "He hasn't called me. (YET)",
            answer: "He hasn't called me yet.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Yet", "Negative"]
            }
        },

        // =====================================================
        // 5. WORD FORMATION (5)
        // =====================================================

        {
            sourceId: "present_perfect_wordformation_001",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the past participle of the verb in brackets.",
            question: "She has ___ (write) three emails.",
            answer: "written",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_wordformation_002",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the past participle of the verb in brackets.",
            question: "They have ___ (break) the window.",
            answer: "broken",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_wordformation_003",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the past participle of the verb in brackets.",
            question: "He has ___ (choose) a new game.",
            answer: "chosen",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_wordformation_004",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the past participle of the verb in brackets.",
            question: "I have ___ (forget) her name.",
            answer: "forgotten",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_wordformation_005",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the past participle of the verb in brackets.",
            question: "We have ___ (take) lots of photos.",
            answer: "taken",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },

        // =====================================================
        // 6. MATCHING (5)
        // =====================================================

        {
            sourceId: "present_perfect_matching_001",
            activityType: "Matching",
            instructions: "Match each sentence beginning with its correct ending.",
            question: "Match the beginnings and endings.",
            answer: "1-B, 2-D, 3-A, 4-E, 5-C",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple"],
                custom: {
                    pairs: [
                        ["I have never", "visited Japan."],
                        ["She has just", "finished her homework."],
                        ["Have you ever", "eaten Indian food?"],
                        ["They haven't", "arrived yet."],
                        ["We have lived here", "for five years."]
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_matching_002",
            activityType: "Matching",
            instructions: "Match each verb with its past participle.",
            question: "Match the verbs and past participles.",
            answer: "1-C, 2-A, 3-E, 4-B, 5-D",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"],
                custom: {
                    pairs: [
                        ["go", "gone"],
                        ["see", "seen"],
                        ["write", "written"],
                        ["take", "taken"],
                        ["eat", "eaten"]
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_matching_003",
            activityType: "Matching",
            instructions: "Match each time expression with its use.",
            question: "Match the expressions and their meanings.",
            answer: "1-B, 2-D, 3-A, 4-C, 5-E",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Time Expressions"],
                custom: {
                    pairs: [
                        ["ever", "at any time in your life"],
                        ["never", "not at any time"],
                        ["just", "a very short time ago"],
                        ["already", "before now or earlier than expected"],
                        ["yet", "until now, often in negatives and questions"]
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_matching_004",
            activityType: "Matching",
            instructions: "Match each sentence with the correct time expression.",
            question: "Match the sentences and time expressions.",
            answer: "1-C, 2-A, 3-E, 4-B, 5-D",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "For and Since"],
                custom: {
                    pairs: [
                        ["I have known him", "for ten years."],
                        ["She has lived here", "since 2021."],
                        ["We haven't finished", "yet."],
                        ["Have you", "ever been to Rome?"],
                        ["He has", "just arrived."]
                    ]
                }
            }
        },
        {
            sourceId: "present_perfect_matching_005",
            activityType: "Matching",
            instructions: "Match each verb with its past participle.",
            question: "Match the verbs and past participles.",
            answer: "1-D, 2-C, 3-A, 4-E, 5-B",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"],
                custom: {
                    pairs: [
                        ["do", "done"],
                        ["speak", "spoken"],
                        ["buy", "bought"],
                        ["make", "made"],
                        ["give", "given"]
                    ]
                }
            }
        },

        // =====================================================
        // 7. SENTENCE ORDERING (5)
        // =====================================================

        {
            sourceId: "present_perfect_ordering_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "has / finished / already / she / her homework",
            answer: "She has already finished her homework.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Already"]
            }
        },
        {
            sourceId: "present_perfect_ordering_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "you / ever / have / ridden / a horse",
            answer: "Have you ever ridden a horse?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_ordering_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "haven't / yet / they / arrived",
            answer: "They haven't arrived yet.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Negative", "Yet"]
            }
        },
        {
            sourceId: "present_perfect_ordering_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "since / lived / 2021 / we / have / here",
            answer: "We have lived here since 2021.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Since"]
            }
        },
        {
            sourceId: "present_perfect_ordering_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "has / never / he / sushi / eaten",
            answer: "He has never eaten sushi.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Never"]
            }
        },

        // =====================================================
        // 8. TRANSLATION (5)
        // =====================================================

        {
            sourceId: "present_perfect_translation_001",
            activityType: "Translation",
            instructions: "Translate into English.",
            question: "He terminado mis deberes.",
            answer: "I have finished my homework.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Affirmative"]
            }
        },
        {
            sourceId: "present_perfect_translation_002",
            activityType: "Translation",
            instructions: "Translate into English.",
            question: "¿Has estado alguna vez en Londres?",
            answer: "Have you ever been to London?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_translation_003",
            activityType: "Translation",
            instructions: "Translate into English.",
            question: "Todavía no hemos comido.",
            answer: "We haven't eaten yet.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Negative", "Yet"]
            }
        },
        {
            sourceId: "present_perfect_translation_004",
            activityType: "Translation",
            instructions: "Translate into English.",
            question: "Vivo aquí desde 2020.",
            answer: "I have lived here since 2020.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Since"]
            }
        },
        {
            sourceId: "present_perfect_translation_005",
            activityType: "Translation",
            instructions: "Translate into English.",
            question: "Ella acaba de llegar.",
            answer: "She has just arrived.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Just"]
            }
        },

        // =====================================================
        // 9. SHORT ANSWER (5)
        // =====================================================

        {
            sourceId: "present_perfect_shortanswer_001",
            activityType: "Short Answer",
            instructions: "Give a short answer.",
            question: "Have you finished your homework? (Yes)",
            answer: "Yes, I have.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Short Answers"]
            }
        },
        {
            sourceId: "present_perfect_shortanswer_002",
            activityType: "Short Answer",
            instructions: "Give a short answer.",
            question: "Has she called you? (No)",
            answer: "No, she hasn't.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Short Answers"]
            }
        },
        {
            sourceId: "present_perfect_shortanswer_003",
            activityType: "Short Answer",
            instructions: "Give a short answer.",
            question: "Have they arrived yet? (Yes)",
            answer: "Yes, they have.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Short Answers", "Yet"]
            }
        },
        {
            sourceId: "present_perfect_shortanswer_004",
            activityType: "Short Answer",
            instructions: "Give a short answer.",
            question: "Has Tom ever ridden a horse? (No)",
            answer: "No, he hasn't.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Short Answers", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_shortanswer_005",
            activityType: "Short Answer",
            instructions: "Give a short answer.",
            question: "Have you ever eaten sushi? (Yes)",
            answer: "Yes, I have.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Short Answers", "Ever"]
            }
        },

        // =====================================================
        // 10. GRAMMAR CHALLENGE (5)
        // =====================================================

        {
            sourceId: "present_perfect_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Complete the sentence and explain the grammar rule.",
            question: "She ___ (not / finish) her homework yet.",
            answer: "She hasn't finished her homework yet. Use has/have + past participle; use hasn't for a negative sentence with she.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Negative", "Yet"]
            }
        },
        {
            sourceId: "present_perfect_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Correct the sentence and explain the mistake.",
            question: "Have he ever visited Paris?",
            answer: "Has he ever visited Paris? Use has with he, she and it.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Questions", "Ever"]
            }
        },
        {
            sourceId: "present_perfect_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Complete the sentence and explain the grammar rule.",
            question: "We have ___ (be) to London twice.",
            answer: "We have been to London twice. Been is the past participle of be.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        },
        {
            sourceId: "present_perfect_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct word and explain why.",
            question: "I have lived here ___ ten years. (for / since)",
            answer: "for. Use for with a period of time.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "For and Since"]
            }
        },
        {
            sourceId: "present_perfect_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Correct the sentence and explain the mistake.",
            question: "She has went home.",
            answer: "She has gone home. Use the past participle after has/have; gone is the past participle of go.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Perfect Simple", "Past Participles"]
            }
        }
    ],

    install() {
        StarterPackSync.install(this);
        StarterPackSync.removeLegacyDemoEnglish();
    }
};