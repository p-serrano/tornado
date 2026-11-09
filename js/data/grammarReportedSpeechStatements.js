/* =========================================================
   TORNADO — GRAMMAR REPORTED SPEECH: STATEMENTS
   50 questions · 10 activity types · 5 questions per type
   ========================================================= */

window.GrammarReportedSpeechStatements = {

    id: "grammar_reported_speech_statements",

    name: "Reported Speech: Statements",

    description:
        "Practise reported statements, tense backshift, pronoun changes, " +
        "possessives and changes in time and place expressions.",

    questions: [

        /* =====================================================
           1. GAP FILLING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_gap_001",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using the correct reported speech form.",
            question:
                'Laura said, "I am really tired." → Laura said that she ___ really tired.',
            answer: "was",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_gap_002",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using the correct reported speech form.",
            question:
                'Mark said, "I have lost my keys." → Mark said that he ___ his keys.',
            answer: "had lost",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_statements_gap_003",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using the correct reported speech form.",
            question:
                'They said, "We will help you." → They said that they ___ help me.',
            answer: "would",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Future in the Past"]
            }
        },

        {
            sourceId: "reported_statements_gap_004",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using the correct reported speech form.",
            question:
                'Emma said, "I can speak French." → Emma said that she ___ speak French.',
            answer: "could",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_statements_gap_005",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using the correct reported speech form.",
            question:
                'Peter said, "I bought this jacket yesterday." → Peter said that he ___ that jacket the day before.',
            answer: "had bought",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time Expressions"]
            }
        },


        /* =====================================================
           2. ERROR CORRECTION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_error_001",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "Correct the mistake: He said that he was busy yesterday, the previous day.",
            answer:
                "He said that he had been busy the previous day.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_error_002",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake. Write a complete correct sentence.",
            question:
                "Correct the mistake: Anna told that she was ill.",
            answer:
                "Anna said that she was ill. / Anna told me that she was ill.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_error_003",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake. Write a complete correct sentence.",
            question:
                "Correct the mistake: They said me that they needed help.",
            answer:
                "They told me that they needed help. / They said that they needed help.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_error_004",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "Correct the mistake: Jack said that he has finished his homework.",
            answer:
                "Jack said that he had finished his homework.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_error_005",
            activityType: "Error Correction",
            instructions:
                "Correct the sentence by changing the demonstrative to reported speech.",
            question:
                'Sophie said, "This is my bag." → Sophie said that this was her bag.',
            answer:
                "Sophie said that that was her bag.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Demonstratives"]
            }
        },


        /* =====================================================
           3. MULTIPLE CHOICE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_mc_001",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported sentence.",
            question:
                'Tom said, "I am studying."',
            answer:
                "Tom said that he was studying.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"],
                custom: {
                    options: [
                        "Tom said that I was studying.",
                        "Tom said that he was studying.",
                        "Tom said that he is study.",
                        "Tom told that he was studying."
                    ]
                }
            }
        },

        {
            sourceId: "reported_statements_mc_002",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported sentence.",
            question:
                '"We saw your brother," they said to me.',
            answer:
                "They told me that they had seen my brother.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Pronoun Changes"],
                custom: {
                    options: [
                        "They told me that we had seen your brother.",
                        "They said me that they saw my brother.",
                        "They told me that they had seen my brother.",
                        "They told that they have seen my brother."
                    ]
                }
            }
        },

        {
            sourceId: "reported_statements_mc_003",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported sentence.",
            question:
                '"I will call you tomorrow," he said.',
            answer:
                "He said that he would call me the following day.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time Expressions"],
                custom: {
                    options: [
                        "He said that he will call me tomorrow.",
                        "He said that I would call him the following day.",
                        "He said that he would call me the following day.",
                        "He told that he would call me the day before."
                    ]
                }
            }
        },

        {
            sourceId: "reported_statements_mc_004",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported sentence.",
            question:
                '"I have never been here before," Lisa said.',
            answer:
                "Lisa said that she had never been there before.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Perfect"],
                custom: {
                    options: [
                        "Lisa said that she had never been there before.",
                        "Lisa said that she has never been here before.",
                        "Lisa told that she had never been there before.",
                        "Lisa said that I had never been there before."
                    ]
                }
            }
        },

        {
            sourceId: "reported_statements_mc_005",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported sentence.",
            question:
                '"My parents must leave early," he said.',
            answer:
                "He said that his parents had to leave early.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"],
                custom: {
                    options: [
                        "He said that my parents must leave early.",
                        "He said that his parents had to leave early.",
                        "He told that his parents have to leave early.",
                        "He said that his parents must to leave early."
                    ]
                }
            }
        },


        /* =====================================================
           4. SENTENCE TRANSFORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_transform_001",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech. Change all necessary words.",
            question:
                '"I am working from home," Julia said.',
            answer:
                "Julia said that she was working from home.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Continuous"]
            }
        },

        {
            sourceId: "reported_statements_transform_002",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech. Change all necessary words.",
            question:
                '"We have already eaten," the boys said.',
            answer:
                "The boys said that they had already eaten.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_statements_transform_003",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech. Change all necessary words.",
            question:
                '"I bought it last week," David said.',
            answer:
                "David said that he had bought it the week before.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time Expressions"]
            }
        },

        {
            sourceId: "reported_statements_transform_004",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech. Change all necessary words.",
            question:
                '"I may visit you tonight," Carla said to me.',
            answer:
                "Carla told me that she might visit me that night.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_statements_transform_005",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech. Change all necessary words.",
            question:
                '"We were waiting outside," they said.',
            answer:
                "They said that they had been waiting outside.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Past Continuous"]
            }
        },


        /* =====================================================
           5. MATCHING — 5 QUESTIONS
           Each question contains five pairs.
           Answers use the existing matching format.
           ===================================================== */

        {
            sourceId: "reported_statements_matching_001",
            activityType: "Matching",
            instructions:
                "Match each direct statement with its reported version. Give the five letters in order.",
            question:
                '1. "I am hungry."\n' +
                '2. "We have finished."\n' +
                '3. "I will return."\n' +
                '4. "She can drive."\n' +
                '5. "I saw him."\n\n' +
                "A. He said that he had seen him.\n" +
                "B. She said that she could drive.\n" +
                "C. They said that they had finished.\n" +
                "D. He said that he would return.\n" +
                "E. He said that he was hungry.",
            answer:
                "1-E; 2-C; 3-D; 4-B; 5-A",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_matching_002",
            activityType: "Matching",
            instructions:
                "Match each expression with its usual reported equivalent. Give the five letters in order.",
            question:
                "1. today\n" +
                "2. tomorrow\n" +
                "3. yesterday\n" +
                "4. here\n" +
                "5. this\n\n" +
                "A. the day before\n" +
                "B. that\n" +
                "C. there\n" +
                "D. that day\n" +
                "E. the following day",
            answer:
                "1-D; 2-E; 3-A; 4-C; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time and Place Expressions"]
            }
        },

        {
            sourceId: "reported_statements_matching_003",
            activityType: "Matching",
            instructions:
                "Match each direct statement with its reported version. Give the five letters in order.",
            question:
                '1. "I have lost my phone."\n' +
                '2. "I was watching TV."\n' +
                '3. "I must study."\n' +
                '4. "We are leaving."\n' +
                '5. "I had forgotten."\n\n' +
                "A. She said that she had been watching TV.\n" +
                "B. They said that they were leaving.\n" +
                "C. He said that he had forgotten.\n" +
                "D. She said that she had lost her phone.\n" +
                "E. He said that he had to study.",
            answer:
                "1-D; 2-A; 3-E; 4-B; 5-C",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_matching_004",
            activityType: "Matching",
            instructions:
                "Match each direct statement with its reported version. Give the five letters in order.",
            question:
                '1. "I can help you."\n' +
                '2. "We will win."\n' +
                '3. "I don\'t like coffee."\n' +
                '4. "I am going to travel."\n' +
                '5. "I may be late."\n\n' +
                "A. He said that he might be late.\n" +
                "B. She said that she could help me.\n" +
                "C. They said that they would win.\n" +
                "D. She said that she didn't like coffee.\n" +
                "E. He said that he was going to travel.",
            answer:
                "1-B; 2-C; 3-D; 4-E; 5-A",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_statements_matching_005",
            activityType: "Matching",
            instructions:
                "Match each direct statement with its reported version. Give the five letters in order.",
            question:
                '1. "This is my house."\n' +
                '2. "I met her two days ago."\n' +
                '3. "We have been waiting."\n' +
                '4. "I won\'t tell anyone."\n' +
                '5. "I mustn\'t be late."\n\n' +
                "A. She said that she had met her two days before.\n" +
                "B. He said that he wouldn't tell anyone.\n" +
                "C. They said that they had been waiting.\n" +
                "D. He said that that was his house.\n" +
                "E. She said that she mustn't be late.",
            answer:
                "1-D; 2-A; 3-C; 4-B; 5-E",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Pronoun and Time Changes"]
            }
        },


        /* =====================================================
           6. SENTENCE ORDERING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_order_001",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported statement.",
            question:
                "said / she / was / that / nervous / she",
            answer:
                "She said that she was nervous.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Word Order"]
            }
        },

        {
            sourceId: "reported_statements_order_002",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported statement.",
            question:
                "had / told / me / finished / he / that / he",
            answer:
                "He told me that he had finished.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Word Order"]
            }
        },

        {
            sourceId: "reported_statements_order_003",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported statement.",
            question:
                "would / they / arrive / said / later / that / they",
            answer:
                "They said that they would arrive later.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Future in the Past"]
            }
        },

        {
            sourceId: "reported_statements_order_004",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported statement.",
            question:
                "that / couldn't / explained / she / come / she",
            answer:
                "She explained that she couldn't come.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_statements_order_005",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported statement.",
            question:
                "had / he / said / before / seen / that / it / he",
            answer:
                "He said that he had seen it before.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Past Perfect"]
            }
        },


        /* =====================================================
           7. TRANSLATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_translation_001",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Ana dijo que estaba cansada.",
            answer:
                "Ana said that she was tired.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Tense Backshift"]
            }
        },

        {
            sourceId: "reported_statements_translation_002",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Me dijeron que habían perdido el autobús.",
            answer:
                "They told me that they had missed the bus.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Past Perfect"]
            }
        },

        {
            sourceId: "reported_statements_translation_003",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Pedro dijo que vendría al día siguiente.",
            answer:
                "Pedro said that he would come the following day.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Future in the Past"]
            }
        },

        {
            sourceId: "reported_statements_translation_004",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Mi hermana me dijo que no le gustaban las películas de terror.",
            answer:
                "My sister told me that she didn't like horror films.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Pronoun Changes"]
            }
        },

        {
            sourceId: "reported_statements_translation_005",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Nos explicaron que tenían que salir temprano.",
            answer:
                "They explained to us that they had to leave early.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },


        /* =====================================================
           8. SHORT ANSWER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_short_001",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct statement in reported speech.",
            question:
                '"I am doing my homework," Ben said.',
            answer:
                "Ben said that he was doing his homework.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Continuous"]
            }
        },

        {
            sourceId: "reported_statements_short_002",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct statement in reported speech.",
            question:
                '"We have never tried sushi," they said.',
            answer:
                "They said that they had never tried sushi.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Perfect"]
            }
        },

        {
            sourceId: "reported_statements_short_003",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct statement in reported speech. Change the pronouns where necessary.",
            question:
                '"I will send you the file," Mia said to Jack.',
            answer:
                "Mia told Jack that she would send him the file.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Pronoun Changes"]
            }
        },

        {
            sourceId: "reported_statements_short_004",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct statement in reported speech. Change the pronouns and time and place expressions where necessary.",
            question:
                '"I saw your parents here yesterday," he said to me.',
            answer:
                "He told me that he had seen my parents there the day before.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time and Place Expressions"]
            }
        },

        {
            sourceId: "reported_statements_short_005",
            activityType: "Short Answer",
            instructions:
                "Rewrite the direct statement in reported speech.",
            question:
                '"I can finish it by Friday," Chloe said.',
            answer:
                "Chloe said that she could finish it by Friday.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },


        /* =====================================================
           9. GRAMMAR CHALLENGE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_challenge_001",
            activityType: "Grammar Challenge",
            instructions:
                "Report the statement, changing all necessary words, including pronouns and time and place expressions.",
            question:
                '"I left my bag here this morning," he said.',
            answer:
                "He said that he had left his bag there that morning.",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Time and Place Expressions"]
            }
        },

        {
            sourceId: "reported_statements_challenge_002",
            activityType: "Grammar Challenge",
            instructions:
                "Report the statement using the appropriate tense.",
            question:
                '"I have been learning English for three years," Sara said.',
            answer:
                "Sara said that she had been learning English for three years.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Present Perfect Continuous"]
            }
        },

        {
            sourceId: "reported_statements_challenge_003",
            activityType: "Grammar Challenge",
            instructions:
                "Report the statement. Pay attention to the modal verb and the pronouns.",
            question:
                '"You should speak to your teacher," my mother told me.',
            answer:
                "My mother told me that I should speak to my teacher.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Modal Verbs"]
            }
        },

        {
            sourceId: "reported_statements_challenge_004",
            activityType: "Grammar Challenge",
            instructions:
                "Report the statement, changing the pronouns where necessary.",
            question:
                '"I would help you if I had time," he said to me.',
            answer:
                "He told me that he would help me if he had time.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Conditionals"]
            }
        },

        {
            sourceId: "reported_statements_challenge_005",
            activityType: "Grammar Challenge",
            instructions:
                "Report the statement. Consider whether the tense needs to change.",
            question:
                '"The Earth revolves around the Sun," the teacher said.',
            answer:
                "The teacher said that the Earth revolves around the Sun.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "General Truths"]
            }
        },


        /* =====================================================
           10. SAY VS TELL — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_statements_saytell_001",
            activityType: "Say vs Tell",
            instructions:
                "Complete the sentence with the correct form of say or tell.",
            question:
                "She ___ me that she was moving abroad.",
            answer:
                "told",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_saytell_002",
            activityType: "Say vs Tell",
            instructions:
                "Complete the sentence with the correct form of say or tell.",
            question:
                "He ___ that he had forgotten the appointment.",
            answer:
                "said",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_saytell_003",
            activityType: "Say vs Tell",
            instructions:
                "Correct the mistake involving say or tell.",
            question:
                "My friend said me the truth.",
            answer:
                "My friend told me the truth. / My friend said the truth to me.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_saytell_004",
            activityType: "Say vs Tell",
            instructions:
                "Complete the sentence with the correct form of say or tell.",
            question:
                "What did she ___ to you about the exam?",
            answer:
                "say",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        },

        {
            sourceId: "reported_statements_saytell_005",
            activityType: "Say vs Tell",
            instructions:
                "Complete the sentence with the correct form of say or tell.",
            question:
                "The doctor ___ him to get more rest.",
            answer:
                "told",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Statements", "Say vs Tell"]
            }
        }

    ],

    install() {
        StarterPackSync.install(this);
    }

};