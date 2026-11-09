/* =========================================================
   TORNADO — GRAMMAR REPORTED SPEECH: ORDERS & REQUESTS
   50 questions · 10 activity types · 5 questions per type
   ========================================================= */

window.GrammarReportedSpeechOrdersRequests = {

    id: "grammar_reported_speech_orders_requests",

    name: "Reported Speech: Orders & Requests",

    description:
        "Practise reporting orders, instructions, requests, warnings " +
        "and advice with tell, ask, warn, remind, advise and other verbs.",

    questions: [

        /* =====================================================
           1. GAP FILLING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_gap_001",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Close the door," the teacher told us. → The teacher told us ___ the door.',
            answer: "to close",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_gap_002",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Please help me," she asked him. → She asked him ___ her.',
            answer: "to help",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_gap_003",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Don\'t touch that wire," the electrician warned me. → The electrician warned me ___ that wire.',
            answer: "not to touch",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_gap_004",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"Remember to lock the door," Dad told me. → Dad reminded me ___ the door.',
            answer: "to lock",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_gap_005",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence using reported speech.",
            question:
                '"You should see a doctor," she told him. → She advised him ___ a doctor.',
            answer: "to see",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },


        /* =====================================================
           2. ERROR CORRECTION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_error_001",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He told me that to sit down.",
            answer:
                "He told me to sit down.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_error_002",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "She asked me help her with the bags.",
            answer:
                "She asked me to help her with the bags.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_error_003",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "The guard warned us don't enter the building.",
            answer:
                "The guard warned us not to enter the building.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_error_004",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "My mother advised me studying harder.",
            answer:
                "My mother advised me to study harder.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },

        {
            sourceId: "reported_orders_error_005",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He asked me don't be late.",
            answer:
                "He asked me not to be late.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },


        /* =====================================================
           3. MULTIPLE CHOICE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_mc_001",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported command.",
            question:
                '"Wait here!" the officer told us.',
            answer:
                "The officer told us to wait there.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"],
                custom: {
                    options: [
                        "The officer said us to wait there.",
                        "The officer told us to wait there.",
                        "The officer told us that wait there.",
                        "The officer asked that we waited there."
                    ]
                }
            }
        },

        {
            sourceId: "reported_orders_mc_002",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct reported request.",
            question:
                '"Please don\'t make so much noise," Dad said to us.',
            answer:
                "Dad asked us not to make so much noise.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"],
                custom: {
                    options: [
                        "Dad asked us don't make so much noise.",
                        "Dad said us not to make so much noise.",
                        "Dad asked us not to make so much noise.",
                        "Dad told that we didn't make so much noise."
                    ]
                }
            }
        },

        {
            sourceId: "reported_orders_mc_003",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct way to report the warning.",
            question:
                '"Be careful with that glass," she said to me.',
            answer:
                "She warned me to be careful with that glass.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"],
                custom: {
                    options: [
                        "She warned me to be careful with that glass.",
                        "She warned that me to be careful with that glass.",
                        "She said me to be careful with that glass.",
                        "She warned me being careful with that glass."
                    ]
                }
            }
        },

        {
            sourceId: "reported_orders_mc_004",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct way to report the reminder.",
            question:
                '"Remember to send the email," he said to her.',
            answer:
                "He reminded her to send the email.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"],
                custom: {
                    options: [
                        "He remembered her to send the email.",
                        "He reminded that she sent the email.",
                        "He reminded her sending the email.",
                        "He reminded her to send the email."
                    ]
                }
            }
        },

        {
            sourceId: "reported_orders_mc_005",
            activityType: "Multiple Choice",
            instructions:
                "Choose the correct way to report the advice.",
            question:
                '"You should take a break," the doctor said to me.',
            answer:
                "The doctor advised me to take a break.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"],
                custom: {
                    options: [
                        "The doctor advised me take a break.",
                        "The doctor advised me to take a break.",
                        "The doctor said me to take a break.",
                        "The doctor advised that me to take a break."
                    ]
                }
            }
        },


        /* =====================================================
           4. SENTENCE TRANSFORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_transform_001",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech.",
            question:
                '"Turn off your phones," the teacher told the students.',
            answer:
                "The teacher told the students to turn off their phones.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_transform_002",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech.",
            question:
                '"Please lend me your notes," Mark said to Lucy.',
            answer:
                "Mark asked Lucy to lend him her notes.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_transform_003",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech.",
            question:
                '"Don\'t forget to call Grandma," Mum said to me.',
            answer:
                "Mum reminded me not to forget to call Grandma.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_transform_004",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech.",
            question:
                '"Don\'t go near the edge," the guide said to us.',
            answer:
                "The guide warned us not to go near the edge.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_transform_005",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence in reported speech.",
            question:
                '"You should apply for the job," my friend said to me.',
            answer:
                "My friend advised me to apply for the job.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },


        /* =====================================================
           5. MATCHING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_matching_001",
            activityType: "Matching",
            instructions:
                "Match each direct command or request with its reported version. Give the five letters in order.",
            question:
                '1. "Sit down."\n' +
                '2. "Please help me."\n' +
                '3. "Don\'t touch it."\n' +
                '4. "Remember your keys."\n' +
                '5. "Drive carefully."\n\n' +
                "A. She reminded him to take his keys.\n" +
                "B. He told me to sit down.\n" +
                "C. She asked me to help her.\n" +
                "D. He warned us not to touch it.\n" +
                "E. She told him to drive carefully.",
            answer:
                "1-B; 2-C; 3-D; 4-A; 5-E",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_matching_002",
            activityType: "Matching",
            instructions:
                "Match each reporting verb with its typical meaning. Give the five letters in order.",
            question:
                "1. warn\n" +
                "2. remind\n" +
                "3. advise\n" +
                "4. order\n" +
                "5. beg\n\n" +
                "A. Give someone a recommendation.\n" +
                "B. Tell someone strongly to do something.\n" +
                "C. Ask someone desperately.\n" +
                "D. Make someone remember something.\n" +
                "E. Tell someone about a possible danger.",
            answer:
                "1-E; 2-D; 3-A; 4-B; 5-C",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_matching_003",
            activityType: "Matching",
            instructions:
                "Match each direct sentence with its reported version. Give the five letters in order.",
            question:
                '1. "Don\'t park here."\n' +
                '2. "Please stay a little longer."\n' +
                '3. "You should apologise."\n' +
                '4. "Don\'t forget the meeting."\n' +
                '5. "Give me your passport."\n\n' +
                "A. She reminded him to attend the meeting.\n" +
                "B. The officer ordered me to give him my passport.\n" +
                "C. He advised me to apologise.\n" +
                "D. She asked us to stay a little longer.\n" +
                "E. The sign warned drivers not to park there.",
            answer:
                "1-E; 2-D; 3-C; 4-A; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_matching_004",
            activityType: "Matching",
            instructions:
                "Match each direct sentence with the best reporting verb. Give the five letters in order.",
            question:
                '1. "You mustn\'t swim here; it\'s dangerous."\n' +
                '2. "Don\'t forget to feed the cat."\n' +
                '3. "You ought to get more sleep."\n' +
                '4. "Please, please let me come with you."\n' +
                '5. "Leave the room immediately!"\n\n' +
                "A. begged\n" +
                "B. ordered\n" +
                "C. warned\n" +
                "D. reminded\n" +
                "E. advised",
            answer:
                "1-C; 2-D; 3-E; 4-A; 5-B",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_matching_005",
            activityType: "Matching",
            instructions:
                "Match each reported sentence with its direct version. Give the five letters in order.",
            question:
                "1. She asked me to open the window.\n" +
                "2. He warned us not to cross the road.\n" +
                "3. They advised him to rest.\n" +
                "4. Mum reminded me to buy milk.\n" +
                "5. The teacher ordered them to be quiet.\n\n" +
                'A. "You should rest," they told him.\n' +
                'B. "Be quiet!" the teacher said to them.\n' +
                'C. "Please open the window," she said to me.\n' +
                'D. "Don\'t cross the road!" he said to us.\n' +
                'E. "Remember to buy milk," Mum said to me.',
            answer:
                "1-C; 2-D; 3-A; 4-E; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reported Requests"]
            }
        },


        /* =====================================================
           6. SENTENCE ORDERING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_order_001",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported command.",
            question:
                "told / to / she / wait / me / outside",
            answer:
                "She told me to wait outside.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Word Order"]
            }
        },

        {
            sourceId: "reported_orders_order_002",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported request.",
            question:
                "asked / to / help / him / she / me",
            answer:
                "She asked me to help him.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Word Order"]
            }
        },

        {
            sourceId: "reported_orders_order_003",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported warning.",
            question:
                "not / warned / touch / us / to / he / it",
            answer:
                "He warned us not to touch it.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_order_004",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported reminder.",
            question:
                "reminded / to / me / my / call / friend / him",
            answer:
                "My friend reminded me to call him.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_order_005",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a reported sentence.",
            question:
                "advised / apply / the / to / she / job / him / for",
            answer:
                "She advised him to apply for the job.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },


        /* =====================================================
           7. TRANSLATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_translation_001",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "El profesor nos dijo que abriéramos los libros.",
            answer:
                "The teacher told us to open our books.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_translation_002",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Me pidió que la ayudara.",
            answer:
                "He asked me to help her. / She asked me to help her.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_translation_003",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Nos advirtieron que no tocáramos el cable.",
            answer:
                "They warned us not to touch the wire.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_translation_004",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "Mi padre me recordó que llamara a mi abuela.",
            answer:
                "My father reminded me to call my grandmother.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_translation_005",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using reported speech.",
            question:
                "El médico le aconsejó que descansara más.",
            answer:
                "The doctor advised him to get more rest. / The doctor advised her to get more rest.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },


        /* =====================================================
           8. SHORT ANSWER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_short_001",
            activityType: "Short Answer",
            instructions:
                "Report the command. Change the pronouns and place expressions where necessary.",
            question:
                '"Put your bags here," the guide told us.',
            answer:
                "The guide told us to put our bags there.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_short_002",
            activityType: "Short Answer",
            instructions:
                "Report the request. Change the pronouns where necessary.",
            question:
                '"Please wait for me," Emma said to Jack.',
            answer:
                "Emma asked Jack to wait for her.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_short_003",
            activityType: "Short Answer",
            instructions:
                "Report the warning. Change the demonstrative where necessary.",
            question:
                '"Don\'t use this machine," the technician said to them.',
            answer:
                "The technician warned them not to use that machine.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },

        {
            sourceId: "reported_orders_short_004",
            activityType: "Short Answer",
            instructions:
                "Report the reminder.",
            question:
                '"Remember to bring your ID," the receptionist said to me.',
            answer:
                "The receptionist reminded me to bring my ID.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_short_005",
            activityType: "Short Answer",
            instructions:
                "Report the advice.",
            question:
                '"You should talk to your parents," my teacher said to me.',
            answer:
                "My teacher advised me to talk to my parents.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },


        /* =====================================================
           9. GRAMMAR CHALLENGE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_challenge_001",
            activityType: "Grammar Challenge",
            instructions:
                "Report the request. Change the demonstrative where necessary.",
            question:
                '"Please don\'t tell anyone about this," she said to me.',
            answer:
                "She asked me not to tell anyone about that.",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Requests"]
            }
        },

        {
            sourceId: "reported_orders_challenge_002",
            activityType: "Grammar Challenge",
            instructions:
                "Report the command using the appropriate reporting structure.",
            question:
                '"You must submit the form by Friday," the manager said to us.',
            answer:
                "The manager told us to submit the form by Friday.",
            tags: {
                cefr: ["B1", "B2"],
                types: ["Grammar"],
                grammar: ["Reported Commands"]
            }
        },

        {
            sourceId: "reported_orders_challenge_003",
            activityType: "Grammar Challenge",
            instructions:
                "Report the reminder. Change the subject of the second action where necessary.",
            question:
                '"Be sure to save a copy before you leave," he said to her.',
            answer:
                "He reminded her to save a copy before she left.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reminders"]
            }
        },

        {
            sourceId: "reported_orders_challenge_004",
            activityType: "Grammar Challenge",
            instructions:
                "Report the advice using not to and the appropriate infinitive structures.",
            question:
                '"Don\'t try to fix it yourself; call an expert," the neighbour said to me.',
            answer:
                "The neighbour advised me not to try to fix it myself and to call an expert.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Advice"]
            }
        },

        {
            sourceId: "reported_orders_challenge_005",
            activityType: "Grammar Challenge",
            instructions:
                "Report the warning. Change the tense where necessary.",
            question:
                '"Stay away from the building until the police arrive," the officer said to everyone.',
            answer:
                "The officer warned everyone to stay away from the building until the police arrived.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Warnings"]
            }
        },


        /* =====================================================
           10. REPORTING VERBS — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "reported_orders_reporting_001",
            activityType: "Reporting Verbs",
            instructions:
                "Complete the sentence with the most appropriate reporting verb.",
            question:
                "The teacher ___ the students to hand in their work.",
            answer:
                "told",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_reporting_002",
            activityType: "Reporting Verbs",
            instructions:
                "Complete the sentence with the most appropriate reporting verb.",
            question:
                "She ___ me not to share my password with anyone.",
            answer:
                "warned",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_reporting_003",
            activityType: "Reporting Verbs",
            instructions:
                "Complete the sentence with the most appropriate reporting verb.",
            question:
                "The doctor ___ him to exercise more regularly.",
            answer:
                "advised",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_reporting_004",
            activityType: "Reporting Verbs",
            instructions:
                "Complete the sentence with the most appropriate reporting verb.",
            question:
                "I ___ my sister to remember her appointment.",
            answer:
                "reminded",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Commands", "Reporting Verbs"]
            }
        },

        {
            sourceId: "reported_orders_reporting_005",
            activityType: "Reporting Verbs",
            instructions:
                "Complete the sentence with the most appropriate reporting verb.",
            question:
                "He ___ me to lend him some money, but I refused.",
            answer:
                "asked",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Reported Requests", "Reporting Verbs"]
            }
        }

    ],

    install() {
        StarterPackSync.install(this);
    }

};