/* =========================================================
   TORNADO — STARTER PACK
   PRESENT SIMPLE
========================================================= */

const GrammarPresentSimple = {

    id: "starter_grammar_present_simple",

    name: "Present Simple",

    description: "Practise Present Simple through ten different activity types.",

    questions: [

        // =================================================
        // 1. GAP FILLING
        // =================================================

        {
            sourceId: "present_simple_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct form of the verb.",
            question: "My sister ___ (watch) TV after dinner.",
            answer: "watches",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence using the negative form.",
            question: "We ___ (not/eat) meat.",
            answer: "don't eat",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the question with the correct auxiliary and verb form.",
            question: "___ your best friend ___ (play) basketball?",
            answer: "Does / play",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct form of the verb.",
            question: "The school bus ___ (arrive) at eight o'clock.",
            answer: "arrives",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_gap_005",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct frequency adverb.",
            question: "I ___ brush my teeth before going to bed. I do it every night.",
            answer: "always",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },


        // =================================================
        // 2. ERROR CORRECTION
        // =================================================

        {
            sourceId: "present_simple_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "He go to school by bus every day.",
            answer: "He goes to school by bus every day.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "She doesn't likes horror films.",
            answer: "She doesn't like horror films.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Do your brother play video games?",
            answer: "Does your brother play video games?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "My parents doesn't work on Sundays.",
            answer: "My parents don't work on Sundays.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Where she lives?",
            answer: "Where does she live?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // 3. MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "present_simple_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct sentence.",
            question: "Which sentence is correct?",
            answer: "He studies English every day.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"],
                custom: [
                    "A) He study English every day.",
                    "B) He studies English every day.",
                    "C) He studying English every day.",
                    "D) He is study English every day."
                ]
            }
        },
        {
            sourceId: "present_simple_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the correct auxiliary.",
            question: "___ they live near the school?",
            answer: "Do",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"],
                custom: [
                    "A) Does",
                    "B) Are",
                    "C) Do",
                    "D) Is"
                ]
            }
        },
        {
            sourceId: "present_simple_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct negative form.",
            question: "Which sentence is correct?",
            answer: "Tom doesn't drink coffee.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"],
                custom: [
                    "A) Tom don't drink coffee.",
                    "B) Tom doesn't drinks coffee.",
                    "C) Tom doesn't drink coffee.",
                    "D) Tom isn't drink coffee."
                ]
            }
        },
        {
            sourceId: "present_simple_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct question.",
            question: "Ask about your friend's daily routine.",
            answer: "What time does she get up?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"],
                custom: [
                    "A) What time she gets up?",
                    "B) What time does she get up?",
                    "C) What time do she get up?",
                    "D) What time is she get up?"
                ]
            }
        },
        {
            sourceId: "present_simple_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the correct frequency adverb.",
            question: "I never eat breakfast late. I ___ eat breakfast late.",
            answer: "never",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"],
                custom: [
                    "A) never",
                    "B) always",
                    "C) usually",
                    "D) often"
                ]
            }
        },


        // =================================================
        // 4. SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "present_simple_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the negative.",
            question: "Emma likes maths.",
            answer: "Emma doesn't like maths.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question.",
            question: "They play football after school.",
            answer: "Do they play football after school?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using 'never'.",
            question: "He doesn't eat fish at any time.",
            answer: "He never eats fish.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },
        {
            sourceId: "present_simple_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence using 'doesn't'.",
            question: "Laura dislikes getting up early.",
            answer: "Laura doesn't like getting up early.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Change the sentence into the third person singular. Start with 'My brother'.",
            question: "I play video games every evening.",
            answer: "My brother plays video games every evening.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // 5. WORD FORMATION
        // =================================================

        {
            sourceId: "present_simple_word_001",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the verb in brackets.",
            question: "Anna ___ (study) English twice a week.",
            answer: "studies",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_word_002",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the verb in brackets.",
            question: "My dad ___ (fix) computers.",
            answer: "fixes",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_word_003",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the verb in brackets.",
            question: "Our teacher ___ (teach) English.",
            answer: "teaches",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_word_004",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the verb in brackets.",
            question: "My little brother ___ (cry) when he is tired.",
            answer: "cries",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_word_005",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the verb in brackets.",
            question: "The shop ___ (close) at nine o'clock.",
            answer: "closes",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // 6. MATCHING
        // =================================================

        {
            sourceId: "present_simple_matching_001",
            activityType: "Matching",
            instructions: "Match each subject with the correct verb form. Give the five letters in order.",
            question: "1. I\n2. She\n3. They\n4. My dad\n5. We\n\nA. plays\nB. play\nC. plays\nD. play\nE. play",
            answer: "1-B; 2-A; 3-D; 4-C; 5-E",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_matching_002",
            activityType: "Matching",
            instructions: "Match each subject with the correct auxiliary. Give the five letters in order.",
            question: "1. He\n2. You\n3. My friends\n4. It\n5. We\n\nA. do\nB. does\nC. do\nD. does\nE. do",
            answer: "1-B; 2-A; 3-C; 4-D; 5-E",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_matching_003",
            activityType: "Matching",
            instructions: "Match each sentence beginning with its correct ending. Give the five letters in order.",
            question: "1. She gets up\n2. They go\n3. He does\n4. I have\n5. We watch\n\nA. to school by bus.\nB. breakfast at seven.\nC. at six o'clock.\nD. not like carrots.\nE. TV in the evening.",
            answer: "1-C; 2-A; 3-D; 4-B; 5-E",
            tags: {
                cefr: ["A1"],
                types: ["Grammar", "Vocabulary"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_matching_004",
            activityType: "Matching",
            instructions: "Match each frequency adverb with its meaning. Give the five letters in order.",
            question: "1. Always\n2. Usually\n3. Often\n4. Sometimes\n5. Never\n\nA. Not at any time.\nB. On some occasions.\nC. Almost every time.\nD. Every time.\nE. Many times.",
            answer: "1-D; 2-C; 3-E; 4-B; 5-A",
            tags: {
                cefr: ["A2"],
                types: ["Vocabulary"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },
        {
            sourceId: "present_simple_matching_005",
            activityType: "Matching",
            instructions: "Match each question with the correct short answer. Give the five letters in order.",
            question: "1. Do you like pizza?\n2. Does he play tennis?\n3. Do they study English?\n4. Does she work here?\n5. Do we have homework?\n\nA. Yes, they do.\nB. No, she doesn't.\nC. Yes, I do.\nD. No, we don't.\nE. Yes, he does.",
            answer: "1-C; 2-E; 3-A; 4-B; 5-D",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // 7. SENTENCE ORDERING
        // =================================================

        {
            sourceId: "present_simple_order_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "every / walks / school / to / day / Jack",
            answer: "Jack walks to school every day.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_order_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a negative sentence.",
            question: "coffee / doesn't / drink / my / mother",
            answer: "My mother doesn't drink coffee.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_order_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "live / where / do / you",
            answer: "Where do you live?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_order_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "usually / dinner / at / we / seven / have",
            answer: "We usually have dinner at seven.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },
        {
            sourceId: "present_simple_order_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "often / how / she / does / read",
            answer: "How often does she read?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },


        // =================================================
        // 8. TRANSLATION
        // =================================================

        {
            sourceId: "present_simple_translate_001",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Mi hermana trabaja en un hospital.",
            answer: "My sister works in a hospital.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_translate_002",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "No me gustan las películas de terror.",
            answer: "I don't like horror films.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_translate_003",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿A qué hora empieza el colegio?",
            answer: "What time does school start?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_translate_004",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Mis amigos juegan a videojuegos los fines de semana.",
            answer: "My friends play video games at weekends.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar", "Vocabulary"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_translate_005",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Con qué frecuencia visitas a tus abuelos?",
            answer: "How often do you visit your grandparents?",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple", "Adverbs of Frequency"]
            }
        },


        // =================================================
        // 9. SHORT ANSWER
        // =================================================

        {
            sourceId: "present_simple_short_001",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence using the Present Simple.",
            question: "What do you usually do after school?",
            answer: "Example: I usually do my homework after school.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_short_002",
            activityType: "Short Answer",
            instructions: "Answer using the Present Simple.",
            question: "Name two things you do every morning.",
            answer: "Example: I brush my teeth and have breakfast.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_short_003",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence.",
            question: "What time do you usually go to bed?",
            answer: "Example: I usually go to bed at ten o'clock.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_short_004",
            activityType: "Short Answer",
            instructions: "Answer using a negative sentence.",
            question: "Name one food you don't like.",
            answer: "Example: I don't like olives.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_short_005",
            activityType: "Short Answer",
            instructions: "Answer in a complete sentence using the Present Simple.",
            question: "How often do you play video games?",
            answer: "Example: I play video games three times a week.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar", "Vocabulary"],
                grammar: ["Present Simple"]
            }
        },


        // =================================================
        // 10. GRAMMAR CHALLENGE
        // =================================================

        {
            sourceId: "present_simple_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "After 'doesn't', the main verb goes in the ___ form.",
            answer: "base",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Explain the rule in one sentence.",
            question: "Why do we say 'She plays' but 'They play'?",
            answer: "In the third person singular, we usually add -s or -es to the verb.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "Which auxiliary do we use to form Present Simple questions with he, she and it?",
            answer: "Does",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Identify the grammatical problem.",
            question: "Why is 'She doesn't studies English' incorrect?",
            answer: "Because after 'doesn't' we use the base form: 'She doesn't study English.'",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
            }
        },
        {
            sourceId: "present_simple_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Name two uses of the Present Simple.",
            question: "When do we use the Present Simple?",
            answer: "For routines and habits, and for facts or general truths.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Present Simple"]
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