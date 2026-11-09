/* =========================================================
   TORNADO — STARTER PACK
   DAILY ROUTINES, PARTS OF THE DAY & TELLING THE TIME

   50 questions · 10 activity types · 5 questions per type
   CEFR: A1
========================================================= */

const VocabularyDailyRoutinesTime = {

    id: "starter_vocabulary_daily_routines_time",

    name: "Daily Routines & Telling the Time",

    description:
        "Practise daily routines, parts of the day, time expressions, prepositions of time and telling the time through ten different activity types.",

    questions: [

        // =====================================================
        // 1. GAP FILLING (5)
        // =====================================================

        {
            sourceId: "daily_routines_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct word or expression.",
            question: "I usually ___ up at 7:15 on school days.",
            answer: "wake",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Wake Up"]
            }
        },

        {
            sourceId: "daily_routines_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct expression.",
            question: "We have dinner in the ___, usually at about 8 p.m.",
            answer: "evening",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day", "Evening"]
            }
        },

        {
            sourceId: "daily_routines_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct preposition.",
            question: "My English lesson starts ___ nine o'clock.",
            answer: "at",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "At"]
            }
        },

        {
            sourceId: "daily_routines_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct expression.",
            question: "I usually do my homework ___ the afternoon, after school.",
            answer: "in",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Parts of the Day"]
            }
        },

        {
            sourceId: "daily_routines_gap_005",
            activityType: "Gap Filling",
            instructions: "Write the missing word.",
            question: "It's 7:45. It's a quarter ___ eight.",
            answer: "to",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time", "Quarter To"]
            }
        },


        // =====================================================
        // 2. ERROR CORRECTION (5)
        // =====================================================

        {
            sourceId: "daily_routines_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I have breakfast on 7:30 every morning.",
            answer: "I have breakfast at 7:30 every morning.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Breakfast"]
            }
        },

        {
            sourceId: "daily_routines_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "My brother goes to bed in midnight.",
            answer: "My brother goes to bed at midnight.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Bedtime"]
            }
        },

        {
            sourceId: "daily_routines_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I get dressed before I wake up.",
            answer: "I wake up before I get dressed.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"]
            }
        },

        {
            sourceId: "daily_routines_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "We usually have lunch in noon.",
            answer: "We usually have lunch at noon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Lunch"]
            }
        },

        {
            sourceId: "daily_routines_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I go to school at the morning.",
            answer: "I go to school in the morning.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Parts of the Day"]
            }
        },


        // =====================================================
        // 3. MULTIPLE CHOICE (5)
        // =====================================================

        {
            sourceId: "daily_routines_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "It's 6:30. What time is it?",
            answer: "Half past six.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"],
                custom: {
                    options: [
                        "Half past six.",
                        "Half past seven.",
                        "A quarter past six.",
                        "A quarter to seven."
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the most suitable expression.",
            question: "You finish school at 2 p.m. What part of the day is it?",
            answer: "In the afternoon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day"],
                custom: {
                    options: [
                        "In the morning.",
                        "In the afternoon.",
                        "At midnight.",
                        "In the evening."
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct option.",
            question: "I usually brush my teeth ___ I go to bed.",
            answer: "before",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"],
                custom: {
                    options: [
                        "before",
                        "between",
                        "during",
                        "after"
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct expression.",
            question: "It's 8:45. Which expression means the same time?",
            answer: "A quarter to nine.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"],
                custom: {
                    options: [
                        "A quarter past eight.",
                        "A quarter to nine.",
                        "Half past eight.",
                        "A quarter to eight."
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the most natural expression.",
            question: "You wake up, wash your face and eat breakfast. These are examples of...",
            answer: "daily routines",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines"],
                custom: {
                    options: [
                        "daily routines",
                        "school subjects",
                        "free-time places",
                        "parts of a house"
                    ]
                }
            }
        },


        // =====================================================
        // 4. SENTENCE TRANSFORMATION (5)
        // =====================================================

        {
            sourceId: "daily_routines_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the time using words. Keep the same meaning.",
            question: "My alarm rings at 7:30.",
            answer: "My alarm rings at half past seven.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the expression in brackets.",
            question: "I eat breakfast before I leave home. (first)",
            answer: "First, I eat breakfast. Then, I leave home.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"]
            }
        },

        {
            sourceId: "daily_routines_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Express the time in another way.",
            question: "The film starts at 10:15.",
            answer: "The film starts at a quarter past ten.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the expression in brackets.",
            question: "I don't go to bed early. (late)",
            answer: "I go to bed late.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Bedtime"]
            }
        },

        {
            sourceId: "daily_routines_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using the expression in brackets.",
            question: "My classes finish at 1 p.m. (in the afternoon)",
            answer: "My classes finish at one o'clock in the afternoon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day", "Telling the Time"]
            }
        },


        // =====================================================
        // 5. WORD FORMATION (5)
        // =====================================================

        {
            sourceId: "daily_routines_wordformation_001",
            activityType: "Word Formation",
            instructions: "Complete the expression with the correct word.",
            question: "I eat ___ before I go to school. (BREAK)",
            answer: "breakfast",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Meals", "Daily Routines"]
            }
        },

        {
            sourceId: "daily_routines_wordformation_002",
            activityType: "Word Formation",
            instructions: "Complete the expression with the correct word.",
            question: "I usually go to ___ at 10:30 p.m. (BED)",
            answer: "bed",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Bedtime"]
            }
        },

        {
            sourceId: "daily_routines_wordformation_003",
            activityType: "Word Formation",
            instructions: "Complete the expression with the correct word.",
            question: "I have lunch at ___ time, around 2 p.m. (LUNCH)",
            answer: "lunchtime",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Meals", "Time Expressions"]
            }
        },

        {
            sourceId: "daily_routines_wordformation_004",
            activityType: "Word Formation",
            instructions: "Complete the expression with the correct word.",
            question: "Saturday and Sunday are the ___. (WEEK)",
            answer: "weekend",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Days", "Time Expressions"]
            }
        },

        {
            sourceId: "daily_routines_wordformation_005",
            activityType: "Word Formation",
            instructions: "Complete the expression with the correct word.",
            question: "I usually do my homework after school, in the ___. (AFTERNOON)",
            answer: "afternoon",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day"]
            }
        },


        // =====================================================
        // 6. MATCHING (5)
        // =====================================================

        {
            sourceId: "daily_routines_matching_001",
            activityType: "Matching",
            instructions: "Match each time with the correct expression. Write the letter next to each number.",
            question:
                "1. 6:30\n" +
                "2. 8:45\n" +
                "3. 10:15\n" +
                "4. 12:00\n" +
                "5. 3:30",

            answer: "1-B; 2-D; 3-A; 4-E; 5-C",

            matchingPairs: {
                left: [
                    "1. 6:30",
                    "2. 8:45",
                    "3. 10:15",
                    "4. 12:00",
                    "5. 3:30"
                ],
                right: [
                    "A. A quarter past ten",
                    "B. Half past six",
                    "C. Half past three",
                    "D. A quarter to nine",
                    "E. Twelve o'clock"
                ]
            },

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_matching_002",
            activityType: "Matching",
            instructions: "Match each routine with the correct description.",
            question:
                "1. Brush your teeth\n" +
                "2. Get dressed\n" +
                "3. Have breakfast\n" +
                "4. Go to bed\n" +
                "5. Wake up",

            answer: "1-C; 2-E; 3-A; 4-D; 5-B",

            matchingPairs: {
                left: [
                    "1. Brush your teeth",
                    "2. Get dressed",
                    "3. Have breakfast",
                    "4. Go to bed",
                    "5. Wake up"
                ],
                right: [
                    "A. Eat your first meal of the day",
                    "B. Stop sleeping",
                    "C. Clean your teeth",
                    "D. Get into bed to sleep",
                    "E. Put on your clothes"
                ]
            },

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines"]
            }
        },

        {
            sourceId: "daily_routines_matching_003",
            activityType: "Matching",
            instructions: "Match each expression with the correct time of day.",
            question:
                "1. Have breakfast\n" +
                "2. Have lunch\n" +
                "3. Watch the evening news\n" +
                "4. See the stars at night\n" +
                "5. Go to school",

            answer: "1-B; 2-D; 3-A; 4-E; 5-C",

            matchingPairs: {
                left: [
                    "1. Have breakfast",
                    "2. Have lunch",
                    "3. Watch the evening news",
                    "4. See the stars at night",
                    "5. Go to school"
                ],
                right: [
                    "A. In the evening",
                    "B. In the morning",
                    "C. Usually in the morning",
                    "D. Around midday or early afternoon",
                    "E. At night"
                ]
            },

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Parts of the Day"]
            }
        },

        {
            sourceId: "daily_routines_matching_004",
            activityType: "Matching",
            instructions: "Match each time expression with its meaning.",
            question:
                "1. At noon\n" +
                "2. At midnight\n" +
                "3. In the morning\n" +
                "4. In the evening\n" +
                "5. At night",

            answer: "1-D; 2-A; 3-E; 4-B; 5-C",

            matchingPairs: {
                left: [
                    "1. At noon",
                    "2. At midnight",
                    "3. In the morning",
                    "4. In the evening",
                    "5. At night"
                ],
                right: [
                    "A. Twelve o'clock at night",
                    "B. The later part of the day, before night",
                    "C. The dark part of the day",
                    "D. Twelve o'clock in the middle of the day",
                    "E. The early part of the day"
                ]
            },

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day", "Time Expressions"]
            }
        },

        {
            sourceId: "daily_routines_matching_005",
            activityType: "Matching",
            instructions: "Match each action with the most suitable expression.",
            question:
                "1. Leave your bed after sleeping\n" +
                "2. Put clothes on\n" +
                "3. Eat the midday meal\n" +
                "4. Clean your body in the shower\n" +
                "5. Stop working or studying for the day",

            answer: "1-C; 2-E; 3-A; 4-D; 5-B",

            matchingPairs: {
                left: [
                    "1. Leave your bed after sleeping",
                    "2. Put clothes on",
                    "3. Eat the midday meal",
                    "4. Clean your body in the shower",
                    "5. Stop working or studying for the day"
                ],
                right: [
                    "A. Have lunch",
                    "B. Finish for the day",
                    "C. Get up",
                    "D. Have a shower",
                    "E. Get dressed"
                ]
            },

            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines"]
            }
        },


        // =====================================================
        // 7. SENTENCE ORDERING (5)
        // =====================================================

        {
            sourceId: "daily_routines_ordering_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "usually / at seven / I / wake up",
            answer: "I usually wake up at seven.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_ordering_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "the afternoon / homework / in / do / I / my",
            answer: "I do my homework in the afternoon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Parts of the Day"]
            }
        },

        {
            sourceId: "daily_routines_ordering_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "to bed / never / before ten / I / go",
            answer: "I never go to bed before ten.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Bedtime"]
            }
        },

        {
            sourceId: "daily_routines_ordering_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "at half past eight / starts / my English class",
            answer: "My English class starts at half past eight.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time", "School Routines"]
            }
        },

        {
            sourceId: "daily_routines_ordering_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "after dinner / usually / I / TV / watch",
            answer: "I usually watch TV after dinner.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"]
            }
        },


        // =====================================================
        // 8. TRANSLATION (5)
        // =====================================================

        {
            sourceId: "daily_routines_translation_001",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Me levanto a las siete y media.",
            answer: "I get up at half past seven.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_translation_002",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Por la tarde hago los deberes.",
            answer: "I do my homework in the afternoon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Parts of the Day"]
            }
        },

        {
            sourceId: "daily_routines_translation_003",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Ceno a las nueve menos cuarto.",
            answer: "I have dinner at a quarter to nine.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Meals", "Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_translation_004",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Me ducho antes de desayunar.",
            answer: "I have a shower before breakfast.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"]
            }
        },

        {
            sourceId: "daily_routines_translation_005",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "A medianoche estoy normalmente en la cama.",
            answer: "At midnight, I am usually in bed.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Time Expressions", "Bedtime"]
            }
        },


        // =====================================================
        // 9. SHORT ANSWER (5)
        // =====================================================

        {
            sourceId: "daily_routines_shortanswer_001",
            activityType: "Short Answer",
            instructions: "Answer with the correct daily routine expression.",
            question: "What do you do when you stop sleeping and leave your bed?",
            answer: "I get up.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Get Up"]
            }
        },

        {
            sourceId: "daily_routines_shortanswer_002",
            activityType: "Short Answer",
            instructions: "Write the time in words.",
            question: "What time is it? 9:15.",
            answer: "It's a quarter past nine.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"]
            }
        },

        {
            sourceId: "daily_routines_shortanswer_003",
            activityType: "Short Answer",
            instructions: "Complete the expression with the correct part of the day.",
            question: "You eat dinner at 8:30 p.m. You usually eat dinner in the ___.",
            answer: "evening",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Parts of the Day", "Meals"]
            }
        },

        {
            sourceId: "daily_routines_shortanswer_004",
            activityType: "Short Answer",
            instructions: "Answer with the correct time expression.",
            question: "What do we call 12:00 in the middle of the day?",
            answer: "Noon.",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time", "Time Expressions"]
            }
        },

        {
            sourceId: "daily_routines_shortanswer_005",
            activityType: "Short Answer",
            instructions: "Complete the daily routine expression.",
            question: "After washing your face, you use a towel to ___ yourself.",
            answer: "dry",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Personal Care"]
            }
        },


        // =====================================================
        // 10. GRAMMAR CHALLENGE (5)
        // =====================================================

        {
            sourceId: "daily_routines_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct preposition of time.",
            question: "My birthday is ___ May, but I don't remember the exact date.",
            answer: "in",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time"],
                custom: {
                    options: [
                        "in",
                        "on",
                        "at",
                        "by"
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct preposition of time.",
            question: "The bus leaves ___ 8:20, so we need to hurry.",
            answer: "at",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Prepositions of Time", "Telling the Time"],
                custom: {
                    options: [
                        "at",
                        "in",
                        "on",
                        "from"
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct expression.",
            question: "It's 11:45. In fifteen minutes, it will be...",
            answer: "twelve o'clock",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time"],
                custom: {
                    options: [
                        "half past eleven",
                        "a quarter past twelve",
                        "twelve o'clock",
                        "a quarter to twelve"
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Choose the correct expression.",
            question: "I finish school at 1:30 p.m. I finish school at...",
            answer: "half past one in the afternoon",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Telling the Time", "Parts of the Day"],
                custom: {
                    options: [
                        "half past one in the morning",
                        "half past one in the afternoon",
                        "a quarter to one in the afternoon",
                        "half past twelve in the afternoon"
                    ]
                }
            }
        },

        {
            sourceId: "daily_routines_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Choose the expression that completes the sentence correctly.",
            question: "I brush my teeth ___ I go to bed, not after I wake up.",
            answer: "before",
            tags: {
                cefr: ["A1"],
                types: ["Vocabulary"],
                vocabulary: ["Daily Routines", "Sequence of Actions"],
                custom: {
                    options: [
                        "between",
                        "during",
                        "before",
                        "until"
                    ]
                }
            }
        }

    ],

    // ---------------------------------------------------------
    // INSTALL / SYNCHRONIZE STARTER PACK
    // ---------------------------------------------------------

    install() {
        StarterPackSync.install(this);
    }

};

window.VocabularyDailyRoutinesTime = VocabularyDailyRoutinesTime;