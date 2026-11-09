/* =========================================================
   TORNADO — GRAMMAR REPORTED SPEECH: QUESTIONS
   50 questions · 10 activity types · 5 questions per type
   ========================================================= */

window.GrammarReportedSpeechQuestions = {

    id: "grammar_reported_speech_questions",

    name: "Reported Speech: Questions",

    description:
        "Practise reporting wh-questions and yes/no questions, " +
        "using correct word order, tense changes and if or whether.",

    questions: [

        /* =====================================================
           1. GAP FILLING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_gap_001",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Where do you live?" → She asked me where I ___.',
            answer: "lived",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"]
            }
        },

        {
            sourceId: "reported_questions_gap_002",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Are you ready?" → He asked me ___ I was ready.',
            answer: "if / whether",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_gap_003",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Why did you leave?" → She asked him why he ___.',
            answer: "had left",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_questions_gap_004",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Can you help me?" → He asked whether I ___ help him.',
            answer: "could",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_questions_gap_005",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"When will the train arrive?" → They asked when the train ___.',
            answer: "would arrive",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Future in the Past"]
            }
        },


        /* =====================================================
           2. ERROR CORRECTION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_error_001",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "She asked me where did I work.",
            answer:
                "She asked me where I worked.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Word Order"]
            }
        },

        {
            sourceId: "reported_questions_error_002",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He asked me that I liked pizza.",
            answer:
                "He asked me if/whether I liked pizza.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_error_003",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "They asked when was the film starting.",
            answer:
                "They asked when the film was starting.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Word Order"]
            }
        },

        {
            sourceId: "reported_questions_error_004",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "She asked me if could I swim.",
            answer:
                "She asked me if I could swim.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_questions_error_005",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He wanted to know where did she buy it.",
            answer:
                "He wanted to know where she had bought it.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Word Order", "Tense Backshift"]
            }
        },


        /* =====================================================
           3. MULTIPLE CHOICE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_mc_001",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported question.",
            question:
                '"What time is it?" he asked me.',
            answer:
                "He asked me what time it was.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"],
                custom: {
                    options: [
                        "He asked me what time was it.",
                        "He asked me what time it was.",
                        "He asked me what time is it.",
                        "He asked me that what time it was."
                    ]
                }
            }
        },

        {
            sourceId: "reported_questions_mc_002",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported question.",
            question:
                '"Have you seen my phone?" Lisa asked.',
            answer:
                "Lisa asked if I had seen her phone.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"],
                custom: {
                    options: [
                        "Lisa asked have I seen her phone.",
                        "Lisa asked if had I seen her phone.",
                        "Lisa asked if I had seen her phone.",
                        "Lisa asked that I had seen my phone."
                    ]
                }
            }
        },

        {
            sourceId: "reported_questions_mc_003",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported question.",
            question:
                '"Why are you laughing?" Dad asked me.',
            answer:
                "Dad asked me why I was laughing.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"],
                custom: {
                    options: [
                        "Dad asked me why was I laughing.",
                        "Dad asked me why I was laughing.",
                        "Dad asked me why am I laughing.",
                        "Dad told me why I was laughing."
                    ]
                }
            }
        },

        {
            sourceId: "reported_questions_mc_004",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported question.",
            question:
                '"Will you be at home tonight?" she asked.',
            answer:
                "She asked whether I would be at home that night.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"],
                custom: {
                    options: [
                        "She asked whether would I be at home that night.",
                        "She asked that I would be at home tonight.",
                        "She asked whether I will be at home that night.",
                        "She asked whether I would be at home that night."
                    ]
                }
            }
        },

        {
            sourceId: "reported_questions_mc_005",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported question.",
            question:
                '"Who broke the window?" the teacher asked.',
            answer:
                "The teacher asked who had broken the window.",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Subject Questions"],
                custom: {
                    options: [
                        "The teacher asked who did break the window.",
                        "The teacher asked who had broken the window.",
                        "The teacher asked who had the window broken.",
                        "The teacher asked who did had broken the window."
                    ]
                }
            }
        },


        /* =====================================================
           4. SENTENCE TRANSFORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_transform_001",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Where are you going?" he asked me.',
            answer:
                "He asked me where I was going.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"]
            }
        },

        {
            sourceId: "reported_questions_transform_002",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Did you finish the project?" she asked Tom.',
            answer:
                "She asked Tom if/whether he had finished the project.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_transform_003",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the direct question in reported speech. Change the time and place expressions where necessary.",
            question:
                '"How long have you lived here?" they asked us.',
            answer:
                "They asked us how long we had lived there.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_questions_transform_004",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the direct question in reported speech. Change the pronouns where necessary.",
            question:
                '"Can I borrow your laptop?" Mia asked me.',
            answer:
                "Mia asked me if/whether she could borrow my laptop.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_questions_transform_005",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Why didn\'t you call me?" he asked her.',
            answer:
                "He asked her why she hadn't called him.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Past Simple"]
            }
        },


        /* =====================================================
           5. MATCHING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_matching_001",
            activityType: "Matching",
            instructions:
                "Match each direct question with its reported version. Give the five letters in order.",
            question:
                '1. "Where do you work?"\n' +
                '2. "Are you hungry?"\n' +
                '3. "Why did he leave?"\n' +
                '4. "Can she drive?"\n' +
                '5. "When will they arrive?"\n\n' +
                "A. He asked why he had left.\n" +
                "B. She asked if I was hungry.\n" +
                "C. He asked where I worked.\n" +
                "D. They asked when they would arrive.\n" +
                "E. He asked if she could drive.",
            answer:
                "1-C; 2-B; 3-A; 4-E; 5-D",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- and Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_matching_002",
            activityType: "Matching",
            instructions:
                "Match each direct question with its reported version. Give the five letters in order.",
            question:
                '1. "What are you doing?"\n' +
                '2. "Have you eaten?"\n' +
                '3. "Where did she go?"\n' +
                '4. "Will you help me?"\n' +
                '5. "How old are you?"\n\n' +
                "A. He asked if I would help him.\n" +
                "B. She asked how old I was.\n" +
                "C. He asked what I was doing.\n" +
                "D. She asked if I had eaten.\n" +
                "E. He asked where she had gone.",
            answer:
                "1-C; 2-D; 3-E; 4-A; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_questions_matching_003",
            activityType: "Matching",
            instructions:
                "Match each reporting phrase with its function. Give the five letters in order.",
            question:
                "1. asked me where\n" +
                "2. wanted to know if\n" +
                "3. wondered why\n" +
                "4. asked whether\n" +
                "5. enquired how\n\n" +
                "A. Introduces a yes/no question.\n" +
                "B. Introduces a question about manner or method.\n" +
                "C. Introduces a question about a place.\n" +
                "D. Introduces a yes/no alternative.\n" +
                "E. Introduces a question about a reason.",
            answer:
                "1-C; 2-A; 3-E; 4-D; 5-B",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Reporting Structures"]
            }
        },

        {
            sourceId: "reported_questions_matching_004",
            activityType: "Matching",
            instructions:
                "Match each direct question with its reported version. Give the five letters in order.",
            question:
                '1. "Who called you?"\n' +
                '2. "What did you buy?"\n' +
                '3. "Is he at home?"\n' +
                '4. "Why are they arguing?"\n' +
                '5. "Could you wait?"\n\n' +
                "A. She asked if he was at home.\n" +
                "B. He asked what I had bought.\n" +
                "C. She asked why they were arguing.\n" +
                "D. He asked if I could wait.\n" +
                "E. She asked who had called me.",
            answer:
                "1-E; 2-B; 3-A; 4-C; 5-D",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Subject Questions"]
            }
        },

        {
            sourceId: "reported_questions_matching_005",
            activityType: "Matching",
            instructions:
                "Match each direct question with its reported version. Give the five letters in order.",
            question:
                '1. "Where have they gone?"\n' +
                '2. "Does your brother work here?"\n' +
                '3. "When did you last see her?"\n' +
                '4. "Are we late?"\n' +
                '5. "What will you do next?"\n\n' +
                "A. He asked what I would do next.\n" +
                "B. She asked whether we were late.\n" +
                "C. He asked when I had last seen her.\n" +
                "D. She asked if my brother worked there.\n" +
                "E. He asked where they had gone.",
            answer:
                "1-E; 2-D; 3-C; 4-B; 5-A",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Time and Place Expressions"]
            }
        },


        /* =====================================================
           6. SENTENCE ORDERING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_order_001",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported question.",
            question:
                "asked / where / lived / me / she / I",
            answer:
                "She asked me where I lived.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Word Order"]
            }
        },

        {
            sourceId: "reported_questions_order_002",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported question.",
            question:
                "if / had / he / asked / finished / I / the task",
            answer:
                "He asked if I had finished the task.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_order_003",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported question.",
            question:
                "wanted / why / know / she / had / he / left / to",
            answer:
                "She wanted to know why he had left.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"]
            }
        },

        {
            sourceId: "reported_questions_order_004",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported question.",
            question:
                "would / asked / arrive / when / they / we",
            answer:
                "They asked when we would arrive.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Future in the Past"]
            }
        },

        {
            sourceId: "reported_questions_order_005",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported question.",
            question:
                "whether / could / asked / help / me / her / I",
            answer:
                "She asked me whether I could help her.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Modal Verbs"]
            }
        },


        /* =====================================================
           7. TRANSLATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_translation_001",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Me preguntó dónde vivía.",
            answer:
                "He asked me where I lived. / She asked me where I lived.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"]
            }
        },

        {
            sourceId: "reported_questions_translation_002",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Nos preguntaron si habíamos terminado.",
            answer:
                "They asked us if/whether we had finished.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_translation_003",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Quería saber por qué estabas llorando.",
            answer:
                "He wanted to know why you were crying. / She wanted to know why you were crying.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Wh- Questions"]
            }
        },

        {
            sourceId: "reported_questions_translation_004",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Me preguntó cuándo llegaría el autobús.",
            answer:
                "He asked me when the bus would arrive. / She asked me when the bus would arrive.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Future in the Past"]
            }
        },

        {
            sourceId: "reported_questions_translation_005",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "El profesor nos preguntó quién había roto la ventana.",
            answer:
                "The teacher asked us who had broken the window.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Subject Questions"]
            }
        },


        /* =====================================================
           8. SHORT ANSWER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_short_001",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Do you play football?" Alex asked me.',
            answer:
                "Alex asked me if/whether I played football.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_short_002",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"What have you done?" Mum asked him.',
            answer:
                "Mum asked him what he had done.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_questions_short_003",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Are they coming with us?" she asked.',
            answer:
                "She asked if/whether they were coming with us.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Yes/No Questions"]
            }
        },

        {
            sourceId: "reported_questions_short_004",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"How did you solve the problem?" the teacher asked.',
            answer:
                "The teacher asked how I had solved the problem.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Past Simple"]
            }
        },

        {
            sourceId: "reported_questions_short_005",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct question in reported speech.",
            question:
                '"Will you have finished by Friday?" he asked me.',
            answer:
                "He asked me if/whether I would have finished by Friday.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Future Perfect"]
            }
        },


        /* =====================================================
           9. GRAMMAR CHALLENGE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_challenge_001",
            activityType: "Grammar Challenge",
            instructions:
                "Report the question. Pay attention to tense backshift and pronoun changes.",
            question:
                '"Why haven\'t you told me the truth?" she asked him.',
            answer:
                "She asked him why he hadn't told her the truth.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_questions_challenge_002",
            activityType: "Grammar Challenge",
            instructions:
                "Report the question using the appropriate tense.",
            question:
                '"How long had you been waiting?" he asked us.',
            answer:
                "He asked us how long we had been waiting.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Past Perfect Continuous"]
            }
        },

        {
            sourceId: "reported_questions_challenge_003",
            activityType: "Grammar Challenge",
            instructions:
                "Report the question. Change the pronouns where necessary.",
            question:
                '"Would you have helped me?" she asked.',
            answer:
                "She asked if/whether I would have helped her.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Modal Perfects"]
            }
        },

        {
            sourceId: "reported_questions_challenge_004",
            activityType: "Grammar Challenge",
            instructions:
                "Report the question. Pay attention to the subject of the question.",
            question:
                '"Who told you about the surprise?" Mia asked me.',
            answer:
                "Mia asked me who had told me about the surprise.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Subject Questions"]
            }
        },

        {
            sourceId: "reported_questions_challenge_005",
            activityType: "Grammar Challenge",
            instructions:
                "Report the question. Remember that embedded questions use statement word order.",
            question:
                '"Do you know where the station is?" he asked me.',
            answer:
                "He asked me if/whether I knew where the station was.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "Embedded Questions"]
            }
        },


        /* =====================================================
           10. IF / WHETHER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_questions_ifwhether_001",
            activityType: "If / Whether",
            instructions:
                "Complete the sentence with if or whether.",
            question:
                "She asked me ___ I had seen the message.",
            answer:
                "if / whether",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "If / Whether"]
            }
        },

        {
            sourceId: "reported_questions_ifwhether_002",
            activityType: "If / Whether",
            instructions:
                "Complete the sentence with if or whether.",
            question:
                "He wanted to know ___ or not we were ready.",
            answer:
                "whether",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "If / Whether"]
            }
        },

        {
            sourceId: "reported_questions_ifwhether_003",
            activityType: "If / Whether",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "They asked me that I was feeling better.",
            answer:
                "They asked me if/whether I was feeling better.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "If / Whether"]
            }
        },

        {
            sourceId: "reported_questions_ifwhether_004",
            activityType: "If / Whether",
            instructions:
                "Complete the sentence with if or whether.",
            question:
                "I wonder ___ she will accept the invitation or not.",
            answer:
                "whether",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "If / Whether"]
            }
        },

        {
            sourceId: "reported_questions_ifwhether_005",
            activityType: "If / Whether",
            instructions:
                "Rewrite the direct question using whether.",
            question:
                '"Should we wait here?" he asked.',
            answer:
                "He asked whether they should wait there.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Questions", "If / Whether", "Modal Verbs"]
            }
        }

    ],

    install() {
        StarterPackSync.install(this);
    }

};