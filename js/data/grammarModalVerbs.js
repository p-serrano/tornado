/* =========================================================
   TORNADO — GRAMMAR MODAL VERBS
   50 questions · 10 activity types · 5 questions per type
   ========================================================= */

window.GrammarModalVerbs = {
    id: "grammar_modal_verbs",
    name: "Modal Verbs",
    description:
        "Practise modal verbs for ability, permission, obligation, " +
        "prohibition, advice, possibility, deduction, requests and offers.",

    questions: [

        /* =====================================================
           1. GAP FILLING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_gap_001",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal verb or modal expression.",
            question:
                "You ______ wear a helmet when riding a motorbike. " +
                "It's required by law.",
            answer: "must / have to",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation"]
            }
        },

        {
            sourceId: "modal_verbs_gap_002",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal verb.",
            question:
                "You ______ tell anyone about the surprise party. " +
                "It's a secret!",
            answer: "mustn't",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition"]
            }
        },

        {
            sourceId: "modal_verbs_gap_003",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal verb.",
            question:
                "I'm not sure, but the new student ______ be from Ireland. " +
                "I heard her speaking English with an Irish accent.",
            answer: "might / may / could",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_gap_004",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal verb.",
            question:
                "You look exhausted. You ______ take a break before continuing.",
            answer: "should",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_gap_005",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal verb.",
            question:
                "That ______ be Laura at the door. She's in another country this week.",
            answer: "can't",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction"]
            }
        },


        /* =====================================================
           2. ERROR CORRECTION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_error_001",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "She can to speak three languages fluently.",
            answer:
                "She can speak three languages fluently.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Ability"]
            }
        },

        {
            sourceId: "modal_verbs_error_002",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "You mustn't to use your phone during the exam.",
            answer:
                "You mustn't use your phone during the exam.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition"]
            }
        },

        {
            sourceId: "modal_verbs_error_003",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He should studies more if he wants to pass.",
            answer:
                "He should study more if he wants to pass.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_error_004",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "Do I can borrow your calculator for a minute?",
            answer:
                "Can I borrow your calculator for a minute?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Permission"]
            }
        },

        {
            sourceId: "modal_verbs_error_005",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "You don't have to park here. It's forbidden.",
            answer:
                "You mustn't park here. It's forbidden.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation", "Prohibition"]
            }
        },


        /* =====================================================
           3. MULTIPLE CHOICE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_mc_001",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "When my grandfather was young, he ______ run ten kilometres without stopping.",
            answer:
                "could",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Past Ability"],
                custom: {
                    options: [
                        "could",
                        "can",
                        "should",
                        "must"
                    ]
                }
            }
        },

        {
            sourceId: "modal_verbs_mc_002",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "You ______ bring any food. We've already ordered pizza for everyone.",
            answer:
                "don't have to",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Lack of Necessity"],
                custom: {
                    options: [
                        "mustn't",
                        "don't have to",
                        "shouldn't",
                        "can't"
                    ]
                }
            }
        },

        {
            sourceId: "modal_verbs_mc_003",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "The lights are on and I can hear voices. They ______ be at home.",
            answer:
                "must",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction"],
                custom: {
                    options: [
                        "must",
                        "should",
                        "can",
                        "have to"
                    ]
                }
            }
        },

        {
            sourceId: "modal_verbs_mc_004",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "______ you mind opening the window? It's very hot in here.",
            answer:
                "Would",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Requests"],
                custom: {
                    options: [
                        "Must",
                        "Would",
                        "Should",
                        "May"
                    ]
                }
            }
        },

        {
            sourceId: "modal_verbs_mc_005",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "Students ______ wear a uniform at this school. " +
                "It's a school rule.",
            answer:
                "have to",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation"],
                custom: {
                    options: [
                        "might",
                        "could",
                        "have to",
                        "would"
                    ]
                }
            }
        },


        /* =====================================================
           4. SENTENCE TRANSFORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_transform_001",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "It isn't necessary for you to come early. (HAVE)\n" +
                "You ______________________________.",
            answer:
                "You don't have to come early.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_verbs_transform_002",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "It is a good idea to save your work regularly. (SHOULD)\n" +
                "You ______________________________.",
            answer:
                "You should save your work regularly.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_transform_003",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "It is forbidden to feed the animals. (MUSTN'T)\n" +
                "You ______________________________.",
            answer:
                "You mustn't feed the animals.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition"]
            }
        },

        {
            sourceId: "modal_verbs_transform_004",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "Perhaps James is still at the office. (MIGHT)\n" +
                "James ______________________________.",
            answer:
                "James might still be at the office.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_transform_005",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "I'm certain that this is the right address. (MUST)\n" +
                "This ______________________________.",
            answer:
                "This must be the right address.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction"]
            }
        },


        /* =====================================================
           5. WORD FORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_word_001",
            activityType: "Word Formation",
            instructions:
                "Complete the sentence using the correct form of the word in brackets.",
            question:
                "You should speak to the teacher if you need some ______. (ADVISE)",
            answer:
                "advice",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice", "Word Formation"]
            }
        },

        {
            sourceId: "modal_verbs_word_002",
            activityType: "Word Formation",
            instructions:
                "Complete the sentence using the correct form of the word in brackets.",
            question:
                "Is it ______ to enter this building without an ID card? (PERMIT)",
            answer:
                "permitted",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Permission", "Word Formation"]
            }
        },

        {
            sourceId: "modal_verbs_word_003",
            activityType: "Word Formation",
            instructions:
                "Complete the sentence using the correct form of the word in brackets.",
            question:
                "It is ______ to smoke inside the hospital. (ALLOW)",
            answer:
                "not allowed",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition", "Word Formation"]
            }
        },

        {
            sourceId: "modal_verbs_word_004",
            activityType: "Word Formation",
            instructions:
                "Complete the sentence using the correct form of the word in brackets.",
            question:
                "Wearing a seat belt is ______ for all passengers. (NECESSITY)",
            answer:
                "necessary",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation", "Word Formation"]
            }
        },

        {
            sourceId: "modal_verbs_word_005",
            activityType: "Word Formation",
            instructions:
                "Complete the sentence using the correct form of the word in brackets.",
            question:
                "You should check the information before sharing it. " +
                "It may be ______. (ACCURATE)",
            answer:
                "inaccurate",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Possibility", "Word Formation"]
            }
        },


        /* =====================================================
           6. MATCHING — 5 QUESTIONS
           Each question contains five pairs.
           Answers use the format required by the renderer.
           ===================================================== */

        {
            sourceId: "modal_verbs_matching_001",
            activityType: "Matching",
            instructions:
                "Match each modal verb with its most typical function. " +
                "Give the five letters in order.",
            question:
                "1. must\n" +
                "2. might\n" +
                "3. should\n" +
                "4. can't\n" +
                "5. can\n\n" +
                "A. Advice or recommendation.\n" +
                "B. Ability or permission.\n" +
                "C. Strong negative deduction.\n" +
                "D. Strong obligation or deduction.\n" +
                "E. Possibility.",
            answer:
                "1-D; 2-E; 3-A; 4-C; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Modal Functions"]
            }
        },

        {
            sourceId: "modal_verbs_matching_002",
            activityType: "Matching",
            instructions:
                "Match each situation with the most appropriate response. " +
                "Give the five letters in order.",
            question:
                "1. You have a terrible headache.\n" +
                "2. You want to borrow someone's pen.\n" +
                "3. You are certain that the shop is closed.\n" +
                "4. It is compulsory to wear a seat belt.\n" +
                "5. Perhaps we will go camping this weekend.\n\n" +
                "A. You must wear one.\n" +
                "B. We might go camping.\n" +
                "C. You should rest.\n" +
                "D. The shop can't be open.\n" +
                "E. Could I borrow your pen?",
            answer:
                "1-C; 2-E; 3-D; 4-A; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice", "Permission", "Deduction"]
            }
        },

        {
            sourceId: "modal_verbs_matching_003",
            activityType: "Matching",
            instructions:
                "Match each sentence beginning with its correct ending. " +
                "Give the five letters in order.",
            question:
                "1. You don't have to\n" +
                "2. You mustn't\n" +
                "3. You should\n" +
                "4. You might\n" +
                "5. You can\n\n" +
                "A. take an umbrella; it looks like rain.\n" +
                "B. park in front of the emergency exit.\n" +
                "C. leave early if you finish your work.\n" +
                "D. bring anything; everything is provided.\n" +
                "E. see the mountains from this window.",
            answer:
                "1-D; 2-B; 3-A; 4-C; 5-E",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation", "Advice", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_matching_004",
            activityType: "Matching",
            instructions:
                "Match each sentence with the modal verb that best completes it. " +
                "Give the five letters in order.",
            question:
                "1. ______ I leave the classroom, please?\n" +
                "2. You ______ tell anyone; it's confidential.\n" +
                "3. That ______ be Mark; he's abroad this week.\n" +
                "4. We ______ finish this today; the deadline is tomorrow.\n" +
                "5. ______ you help me carry this box?\n\n" +
                "A. mustn't\n" +
                "B. Could\n" +
                "C. must\n" +
                "D. May\n" +
                "E. can't",
            answer:
                "1-D; 2-A; 3-E; 4-C; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Permission", "Prohibition", "Requests"]
            }
        },

        {
            sourceId: "modal_verbs_matching_005",
            activityType: "Matching",
            instructions:
                "Match each sentence with its correct meaning. " +
                "Give the five letters in order.",
            question:
                "1. You mustn't use this door.\n" +
                "2. You don't have to attend the meeting.\n" +
                "3. You should call your parents.\n" +
                "4. She might be in the library.\n" +
                "5. He must be very tired.\n\n" +
                "A. It is a good idea to do it.\n" +
                "B. I am almost certain about his condition.\n" +
                "C. It is possible that she is there.\n" +
                "D. It is forbidden.\n" +
                "E. It is not necessary.",
            answer:
                "1-D; 2-E; 3-A; 4-C; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Modal Functions"]
            }
        },


        /* =====================================================
           7. SENTENCE ORDERING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_order_001",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "should / before / you / the instructions / read / starting",
            answer:
                "You should read the instructions before starting.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_order_002",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical question.",
            question:
                "I / borrow / your / may / notes /?",
            answer:
                "May I borrow your notes?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Permission"]
            }
        },

        {
            sourceId: "modal_verbs_order_003",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "be / the / might / delayed / train / because / of / the fog",
            answer:
                "The train might be delayed because of the fog.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_order_004",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "have to / on Sundays / doesn't / work / my sister",
            answer:
                "My sister doesn't have to work on Sundays.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_verbs_order_005",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "be / must / very / this / expensive / restaurant",
            answer:
                "This restaurant must be very expensive.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction"]
            }
        },


        /* =====================================================
           8. TRANSLATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_translation_001",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal verb.",
            question:
                "No tienes que traer comida; ya hemos preparado la cena.",
            answer:
                "You don't have to bring food; we've already prepared dinner.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_verbs_translation_002",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal verb.",
            question:
                "Deberías hablar con ella antes de tomar una decisión.",
            answer:
                "You should talk to her before making a decision.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_translation_003",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal verb.",
            question:
                "¿Podrías cerrar la puerta, por favor?",
            answer:
                "Could you close the door, please?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Requests"]
            }
        },

        {
            sourceId: "modal_verbs_translation_004",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal verb.",
            question:
                "Está prohibido hacer fotos dentro del museo.",
            answer:
                "You mustn't take photos inside the museum.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition"]
            }
        },

        {
            sourceId: "modal_verbs_translation_005",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal verb.",
            question:
                "Seguro que están en casa: las luces están encendidas.",
            answer:
                "They must be at home: the lights are on.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction"]
            }
        },


        /* =====================================================
           9. SHORT ANSWER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_short_001",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal verb.",
            question:
                "Your friend has an important exam tomorrow but plans to stay up all night playing video games. What advice would you give?",
            answer:
                "You should go to bed early and get enough sleep.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Advice"]
            }
        },

        {
            sourceId: "modal_verbs_short_002",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal verb.",
            question:
                "You want to use your teacher's computer for a class presentation. How could you ask for permission politely?",
            answer:
                "May I use your computer for the presentation? / Could I use your computer for the presentation?",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Permission"]
            }
        },

        {
            sourceId: "modal_verbs_short_003",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal verb.",
            question:
                "Your school says that students are required to bring their ID cards every day. Express this obligation.",
            answer:
                "Students must bring their ID cards every day. / Students have to bring their ID cards every day.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation"]
            }
        },

        {
            sourceId: "modal_verbs_short_004",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal verb.",
            question:
                "Your friend isn't answering their phone. Give one possible explanation without claiming that you know for certain.",
            answer:
                "They might be busy. / They may be sleeping. / They could be driving.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_short_005",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal verb.",
            question:
                "Your friend wants to enter a room, but a sign says that entry is forbidden. Explain what they must not do.",
            answer:
                "They mustn't enter the room. / They can't enter the room.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition"]
            }
        },


        /* =====================================================
           10. GRAMMAR CHALLENGE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_verbs_challenge_001",
            activityType: "Grammar Challenge",
            instructions:
                "Complete both sentences with the correct modal expression. " +
                "Pay attention to the difference in meaning.",
            question:
                "A. It's forbidden to use your phone here: You ______ use it.\n" +
                "B. It's unnecessary to use your phone here: You ______ use it.",
            answer:
                "A. mustn't\nB. don't have to",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_verbs_challenge_002",
            activityType: "Grammar Challenge",
            instructions:
                "Choose the correct modal verb for each situation. " +
                "Explain the difference in meaning.",
            question:
                "A. You are certain that Alex is the person at the door, " +
                "because you recognise his voice.\n" +
                "B. You think it is possible that Alex is at the door, " +
                "but you aren't sure.\n\n" +
                "Complete:\n" +
                "A. It ______ be Alex.\n" +
                "B. It ______ be Alex.",
            answer:
                "A. must\nB. might / may / could",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Deduction", "Possibility"]
            }
        },

        {
            sourceId: "modal_verbs_challenge_003",
            activityType: "Grammar Challenge",
            instructions:
                "Correct the sentence and explain why the original is incorrect.",
            question:
                "You must to finish the report before Friday.",
            answer:
                "Correct sentence: You must finish the report before Friday.\n" +
                "Explanation: A modal verb is followed by the base form of the verb, without 'to'.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation", "Verb Patterns"]
            }
        },

        {
            sourceId: "modal_verbs_challenge_004",
            activityType: "Grammar Challenge",
            instructions:
                "Rewrite the sentence so that it expresses the opposite meaning: " +
                "the action is optional, not forbidden.",
            question:
                "You mustn't attend the meeting.",
            answer:
                "You don't have to attend the meeting.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Prohibition", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_verbs_challenge_005",
            activityType: "Grammar Challenge",
            instructions:
                "Complete the sentences using different modal expressions. " +
                "Each expression must match the meaning given.",
            question:
                "A. Strong obligation: You ______ submit the form by Friday.\n" +
                "B. Advice: You ______ check your answers before submitting.\n" +
                "C. Possibility: The results ______ arrive tomorrow.",
            answer:
                "A. must / have to\nB. should\nC. might / may / could",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Obligation", "Advice", "Possibility"]
            }
        }

    ],

    install() {
        StarterPackSync.install(this);
    }
};