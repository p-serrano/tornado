/* =========================================================
   TORNADO — GRAMMAR MODAL PERFECTS
   50 questions · 10 activity types · 5 questions per type

   Focus:
   - Deduction about the past
   - Past possibility
   - Criticism and regret
   - Unfulfilled advice or obligation
   - Unnecessary actions
   - Unrealised opportunities
   - Hypothetical past results
   ========================================================= */

window.GrammarModalPerfects = {
    id: "grammar_modal_perfects",
    name: "Modal Perfects",
    description:
        "Practise modal perfects for past deduction, possibility, " +
        "regret, criticism, unnecessary actions and hypothetical results.",

    questions: [

        /* =====================================================
           1. GAP FILLING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_gap_001",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal perfect.",
            question:
                "The ground is completely wet, but it hasn't rained today. " +
                "It ______ during the night.",
            answer:
                "must have rained",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_gap_002",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal perfect.",
            question:
                "I'm not sure why Daniel isn't here. He ______ the wrong bus.",
            answer:
                "might have taken / may have taken / could have taken",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_gap_003",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal perfect.",
            question:
                "You knew the deadline was yesterday. You ______ your assignment earlier.",
            answer:
                "should have submitted / ought to have submitted",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Criticism", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_gap_004",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal perfect.",
            question:
                "I bought three cartons of milk, but there were already five in the fridge. " +
                "I ______ so much milk.",
            answer:
                "needn't have bought",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_gap_005",
            activityType: "Gap Filling",
            instructions:
                "Complete the sentence with the most appropriate modal perfect.",
            question:
                "Laura was at home all evening, so she ______ at the party last night.",
            answer:
                "can't have been / couldn't have been",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Negative Past Deduction"]
            }
        },


        /* =====================================================
           2. ERROR CORRECTION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_error_001",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "He must has forgotten about the meeting.",
            answer:
                "He must have forgotten about the meeting.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_error_002",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "You should have went to the doctor when you felt ill.",
            answer:
                "You should have gone to the doctor when you felt ill.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Participle", "Advice"]
            }
        },

        {
            sourceId: "modal_perfects_error_003",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "They might had missed the last train.",
            answer:
                "They might have missed the last train.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_error_004",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "You needn't have to bring any food. We had plenty.",
            answer:
                "You needn't have brought any food. We had plenty.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_error_005",
            activityType: "Error Correction",
            instructions:
                "Find and correct the grammatical mistake.",
            question:
                "She can't have took my keys; she wasn't even here.",
            answer:
                "She can't have taken my keys; she wasn't even here.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Negative Past Deduction", "Past Participle"]
            }
        },


        /* =====================================================
           3. MULTIPLE CHOICE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_mc_001",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "The lights were off, the doors were locked and nobody answered. " +
                "They ______ home before we arrived.",
            answer:
                "must have left",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"],
                custom: {
                    options: [
                        "must have left",
                        "should have left",
                        "might leave",
                        "must leave"
                    ]
                }
            }
        },

        {
            sourceId: "modal_perfects_mc_002",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "I can't find my wallet. I ______ it at the restaurant, " +
                "but I'm not certain.",
            answer:
                "might have left",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"],
                custom: {
                    options: [
                        "must leave",
                        "should have left",
                        "might have left",
                        "can't have left"
                    ]
                }
            }
        },

        {
            sourceId: "modal_perfects_mc_003",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "You told everyone my secret! You ______ anything.",
            answer:
                "shouldn't have said",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Criticism", "Regret"],
                custom: {
                    options: [
                        "needn't have said",
                        "shouldn't have said",
                        "can't have said",
                        "might not say"
                    ]
                }
            }
        },

        {
            sourceId: "modal_perfects_mc_004",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "We took a taxi, but the station was only two minutes away on foot. " +
                "We ______ a taxi.",
            answer:
                "needn't have taken",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"],
                custom: {
                    options: [
                        "mustn't have taken",
                        "couldn't have taken",
                        "needn't have taken",
                        "should have taken"
                    ]
                }
            }
        },

        {
            sourceId: "modal_perfects_mc_005",
            activityType: "Multiple Choice",
            instructions:
                "Choose the option that best completes the sentence.",
            question:
                "If Emma had known about the problem, she ______ us.",
            answer:
                "would have helped",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Hypothetical Past Results"],
                custom: {
                    options: [
                        "would help",
                        "would have helped",
                        "must have helped",
                        "should help"
                    ]
                }
            }
        },


        /* =====================================================
           4. SENTENCE TRANSFORMATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_transform_001",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "I'm sure Peter forgot about our appointment. (MUST)\n" +
                "Peter ______________________________.",
            answer:
                "Peter must have forgotten about our appointment.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_transform_002",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "It was a mistake not to check the figures before sending the report. (SHOULD)\n" +
                "I ______________________________.",
            answer:
                "I should have checked the figures before sending the report.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_transform_003",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "Perhaps they took the earlier train. (MIGHT)\n" +
                "They ______________________________.",
            answer:
                "They might have taken the earlier train.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_transform_004",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "It wasn't necessary for you to pay for my ticket, but you did. (NEEDN'T)\n" +
                "You ______________________________.",
            answer:
                "You needn't have paid for my ticket.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_transform_005",
            activityType: "Sentence Transformation",
            instructions:
                "Rewrite the sentence using the word in brackets. " +
                "Do not change the original meaning.",
            question:
                "I'm sure this isn't the correct answer. (CAN'T)\n" +
                "This ______________________________.",
            answer:
                "This can't be the correct answer.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Verbs", "Negative Deduction"]
            }
        },


        /* =====================================================
           5. MODAL MEANING — 5 QUESTIONS
           Replaces Word Formation because it is more relevant
           to the grammar being practised.
           ===================================================== */

        {
            sourceId: "modal_perfects_meaning_001",
            activityType: "Modal Meaning",
            instructions:
                "Identify the meaning expressed by the modal perfect.",
            question:
                "He must have left his phone on the bus.",
            answer:
                "A strong deduction about a past event. The speaker believes this is the most likely explanation.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_meaning_002",
            activityType: "Modal Meaning",
            instructions:
                "Identify the meaning expressed by the modal perfect.",
            question:
                "She might have misunderstood the instructions.",
            answer:
                "A possibility about a past event. The speaker is not certain.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_meaning_003",
            activityType: "Modal Meaning",
            instructions:
                "Explain the difference in meaning between the two sentences.",
            question:
                "A. You needn't have booked a table.\n" +
                "B. You didn't have to book a table.",
            answer:
                "A suggests that the person booked a table, but it was unnecessary. " +
                "B says that booking was not necessary; it does not tell us whether the person booked one.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Lack of Necessity"]
            }
        },

        {
            sourceId: "modal_perfects_meaning_004",
            activityType: "Modal Meaning",
            instructions:
                "Identify the meaning expressed by the modal perfect.",
            question:
                "You should have told me about the change of plans.",
            answer:
                "Criticism or regret: telling the speaker was the right thing to do, but it did not happen.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Criticism", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_meaning_005",
            activityType: "Modal Meaning",
            instructions:
                "Explain the difference in meaning between the two sentences.",
            question:
                "A. He can't have stolen the money.\n" +
                "B. He shouldn't have stolen the money.",
            answer:
                "A expresses a negative deduction: the speaker believes it is impossible or extremely unlikely that he stole it. " +
                "B expresses criticism or regret: the speaker believes he did steal it, and that doing so was wrong.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Negative Deduction", "Criticism"]
            }
        },


        /* =====================================================
           6. MATCHING — 5 QUESTIONS
           Each question contains five pairs.
           Format compatible with the current Matching renderer.
           ===================================================== */

        {
            sourceId: "modal_perfects_matching_001",
            activityType: "Matching",
            instructions:
                "Match each modal perfect with its most typical meaning. " +
                "Give the five letters in order.",
            question:
                "1. must have forgotten\n" +
                "2. might have missed\n" +
                "3. should have called\n" +
                "4. can't have finished\n" +
                "5. needn't have bought\n\n" +
                "A. An action that was unnecessary but was performed.\n" +
                "B. A strong negative deduction about the past.\n" +
                "C. A strong deduction about the past.\n" +
                "D. Criticism about an action that did not happen.\n" +
                "E. A possible past event.",
            answer:
                "1-C; 2-E; 3-D; 4-B; 5-A",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Modal Functions"]
            }
        },

        {
            sourceId: "modal_perfects_matching_002",
            activityType: "Matching",
            instructions:
                "Match each situation with the most appropriate sentence. " +
                "Give the five letters in order.",
            question:
                "1. You are almost certain that Mark forgot his keys.\n" +
                "2. You think Anna possibly took the wrong road.\n" +
                "3. You regret not studying for the test.\n" +
                "4. You are certain that Leo didn't write this message.\n" +
                "5. You bought something that you didn't need.\n\n" +
                "A. Anna might have taken the wrong road.\n" +
                "B. I needn't have bought it.\n" +
                "C. Mark must have forgotten his keys.\n" +
                "D. Leo can't have written this message.\n" +
                "E. I should have studied for the test.",
            answer:
                "1-C; 2-A; 3-E; 4-D; 5-B",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_matching_003",
            activityType: "Matching",
            instructions:
                "Match each sentence beginning with its correct ending. " +
                "Give the five letters in order.",
            question:
                "1. If you had checked the address,\n" +
                "2. If we had left earlier,\n" +
                "3. If she had told me the truth,\n" +
                "4. If he had trained harder,\n" +
                "5. If they had invited us,\n\n" +
                "A. I would have understood the situation.\n" +
                "B. we would have caught the train.\n" +
                "C. he might have won the race.\n" +
                "D. we would have gone to the party.\n" +
                "E. you wouldn't have gone to the wrong house.",
            answer:
                "1-E; 2-B; 3-A; 4-C; 5-D",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Hypothetical Past Results"]
            }
        },

        {
            sourceId: "modal_perfects_matching_004",
            activityType: "Matching",
            instructions:
                "Match each sentence with its correct interpretation. " +
                "Give the five letters in order.",
            question:
                "1. You shouldn't have shouted at him.\n" +
                "2. You needn't have waited for me.\n" +
                "3. She must have seen the notice.\n" +
                "4. They could have won the match.\n" +
                "5. He can't have broken the window.\n\n" +
                "A. Winning was a real possibility, but it did not happen.\n" +
                "B. The speaker is almost certain she saw it.\n" +
                "C. The speaker believes he did not break it.\n" +
                "D. Waiting was unnecessary, but the person waited.\n" +
                "E. Shouting was the wrong thing to do.",
            answer:
                "1-E; 2-D; 3-B; 4-A; 5-C",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Modal Functions"]
            }
        },

        {
            sourceId: "modal_perfects_matching_005",
            activityType: "Matching",
            instructions:
                "Match each situation with the most appropriate modal perfect. " +
                "Give the five letters in order.",
            question:
                "1. You are sure the parcel arrived yesterday.\n" +
                "2. You are unsure whether Tom saw your email.\n" +
                "3. You think someone made a bad decision.\n" +
                "4. You are sure the children didn't eat all the cake.\n" +
                "5. Someone paid for an unnecessary taxi journey.\n\n" +
                "A. They can't have eaten all the cake.\n" +
                "B. The parcel must have arrived yesterday.\n" +
                "C. Tom might have seen your email.\n" +
                "D. They needn't have taken a taxi.\n" +
                "E. They shouldn't have made that decision.",
            answer:
                "1-B; 2-C; 3-E; 4-A; 5-D",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction", "Regret"]
            }
        },


        /* =====================================================
           7. SENTENCE ORDERING — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_order_001",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "have / must / forgotten / she / the meeting",
            answer:
                "She must have forgotten the meeting.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_order_002",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "have / shouldn't / that / said / I",
            answer:
                "I shouldn't have said that.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_order_003",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "have / might / they / the train / missed",
            answer:
                "They might have missed the train.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_order_004",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "needn't / have / you / bought / so much food",
            answer:
                "You needn't have bought so much food.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_order_005",
            activityType: "Sentence Ordering",
            instructions:
                "Put the words in the correct order to make a grammatical sentence.",
            question:
                "have / would / helped / we / you",
            answer:
                "We would have helped you.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Hypothetical Past Results"]
            }
        },


        /* =====================================================
           8. TRANSLATION — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_translation_001",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal perfect.",
            question:
                "Seguro que se ha olvidado de nuestra cita.",
            answer:
                "He/She must have forgotten about our appointment.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_translation_002",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal perfect.",
            question:
                "Puede que hayan perdido el último autobús.",
            answer:
                "They might have missed the last bus. / They may have missed the last bus. / They could have missed the last bus.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_translation_003",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal perfect.",
            question:
                "No deberías haberle dicho eso.",
            answer:
                "You shouldn't have told him/her that.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Criticism", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_translation_004",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal perfect.",
            question:
                "No hacía falta que compraras pan, pero lo compraste.",
            answer:
                "You needn't have bought bread.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_translation_005",
            activityType: "Translation",
            instructions:
                "Translate the sentence into English using an appropriate modal perfect.",
            question:
                "Si hubiéramos salido antes, habríamos llegado a tiempo.",
            answer:
                "If we had left earlier, we would have arrived on time.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Third Conditional"]
            }
        },


        /* =====================================================
           9. SHORT ANSWER — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_short_001",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal perfect.",
            question:
                "Your friend failed an exam because they didn't study. Give them advice about what they should have done.",
            answer:
                "You should have studied more.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Advice"]
            }
        },

        {
            sourceId: "modal_perfects_short_002",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal perfect.",
            question:
                "Your friend arrived at the airport, but their flight had already departed. Suggest one possible explanation for why they missed it.",
            answer:
                "They might have arrived too late. / They may have misread the departure time.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_short_003",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal perfect.",
            question:
                "You see broken glass on the floor, but nobody saw what happened. Make a deduction about the accident.",
            answer:
                "Someone must have dropped the glass.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction"]
            }
        },

        {
            sourceId: "modal_perfects_short_004",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal perfect.",
            question:
                "Your friend bought five tickets, but the event was free for everyone. Explain why buying the tickets was unnecessary.",
            answer:
                "You needn't have bought the tickets.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Past Actions"]
            }
        },

        {
            sourceId: "modal_perfects_short_005",
            activityType: "Short Answer",
            instructions:
                "Answer in one complete sentence using a suitable modal perfect.",
            question:
                "Your team lost a match because nobody practised. Express regret about what the team failed to do.",
            answer:
                "We should have practised more.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Regret"]
            }
        },


        /* =====================================================
           10. GRAMMAR CHALLENGE — 5 QUESTIONS
           ===================================================== */

        {
            sourceId: "modal_perfects_challenge_001",
            activityType: "Grammar Challenge",
            instructions:
                "Complete both sentences. Pay attention to whether the action happened.",
            question:
                "A. You bought a ticket, but the concert was free. " +
                "You ______ a ticket.\n" +
                "B. You didn't buy a ticket, but you thought it was necessary. " +
                "You ______ a ticket.",
            answer:
                "A. needn't have bought\n" +
                "B. should have bought",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Unnecessary Actions", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_challenge_002",
            activityType: "Grammar Challenge",
            instructions:
                "Choose a suitable modal perfect for each statement.",
            question:
                "A. You are almost certain that Sophie forgot her appointment.\n" +
                "B. You think it is possible that Sophie forgot her appointment.\n" +
                "C. You are certain that Sophie did not forget her appointment.\n\n" +
                "Complete:\n" +
                "A. Sophie ______ her appointment.\n" +
                "B. Sophie ______ her appointment.\n" +
                "C. Sophie ______ her appointment.",
            answer:
                "A. must have forgotten\n" +
                "B. might/may/could have forgotten\n" +
                "C. can't/couldn't have forgotten",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Past Deduction", "Past Possibility"]
            }
        },

        {
            sourceId: "modal_perfects_challenge_003",
            activityType: "Grammar Challenge",
            instructions:
                "Correct the mistake and explain the difference in meaning.",
            question:
                "You shouldn't have to told him the truth.",
            answer:
                "Correction: You shouldn't have told him the truth.\n" +
                "Explanation: 'Shouldn't have + past participle' expresses criticism or regret about a past action. " +
                "'Shouldn't have to' expresses a lack of obligation in the present or future, and must be followed by the base verb.",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Verb Patterns", "Meaning"]
            }
        },

        {
            sourceId: "modal_perfects_challenge_004",
            activityType: "Grammar Challenge",
            instructions:
                "Rewrite the sentence to express regret about an action that did not happen.",
            question:
                "I didn't save my work, so I lost everything.",
            answer:
                "I should have saved my work.",
            tags: {
                cefr: ["B1"],
                types: ["Grammar"],
                grammar: ["Modal Perfects", "Regret"]
            }
        },

        {
            sourceId: "modal_perfects_challenge_005",
            activityType: "Grammar Challenge",
            instructions:
                "Complete the sentences using the modal perfect that best expresses each meaning.",
            question:
                "A. Strong deduction: The lights were on, so someone ______ home.\n" +
                "B. Past possibility: They ______ the wrong exit.\n" +
                "C. Unfulfilled advice: You ______ the instructions more carefully.\n" +
                "D. Unnecessary action: We ______ so much food.",
            answer:
                "A. must have been\n" +
                "B. might/may/could have taken\n" +
                "C. should have read\n" +
                "D. needn't have bought",
            tags: {
                cefr: ["B2"],
                types: ["Grammar"],
                grammar: [
                    "Modal Perfects",
                    "Past Deduction",
                    "Past Possibility",
                    "Regret",
                    "Unnecessary Past Actions"
                ]
            }
        }

    ],

    install() {
        StarterPackSync.install(this);
    }
};