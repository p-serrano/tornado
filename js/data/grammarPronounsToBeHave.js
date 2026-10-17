/* =========================================================
   TORNADO — STARTER PACK
   PRONOUNS, TO BE & HAVE GOT
========================================================= */

const GrammarPronounsToBeHave = {

    id: "starter_grammar_pronouns_to_be_have",

    name: "Pronouns, To Be & Have Got",

    description: "Practise personal pronouns, possessives, demonstratives, to be and have got through ten different activity types.",

    questions: [

        // =================================================
        // 1. GAP FILLING
        // =================================================

        {
            sourceId: "pronouns_gap_001",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct subject pronoun.",
            question: "Lucy is my friend. ___ is very funny.",
            answer: "She",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns"]
            }
        },
        {
            sourceId: "pronouns_gap_002",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct object pronoun.",
            question: "I know Peter. I see ___ every day.",
            answer: "him",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_gap_003",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct possessive adjective.",
            question: "We live here. This is ___ house.",
            answer: "our",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Adjectives"]
            }
        },
        {
            sourceId: "pronouns_gap_004",
            activityType: "Gap Filling",
            instructions: "Complete the sentence with the correct form of 'to be'.",
            question: "My parents ___ at work, but I ___ at home.",
            answer: "are / am",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_gap_005",
            activityType: "Gap Filling",
            instructions: "Complete the question with the correct form of 'have got'.",
            question: "___ your sister ___ a new phone?",
            answer: "Has / got",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // 2. ERROR CORRECTION
        // =================================================

        {
            sourceId: "pronouns_error_001",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Me am fourteen years old.",
            answer: "I am fourteen years old.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_error_002",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "I like she very much.",
            answer: "I like her very much.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_error_003",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "This is mine pencil.",
            answer: "This is my pencil.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Adjectives"]
            }
        },
        {
            sourceId: "pronouns_error_004",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "Those is my trainers.",
            answer: "Those are my trainers.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Demonstratives", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_error_005",
            activityType: "Error Correction",
            instructions: "Find and correct the mistake.",
            question: "He haven't got any brothers.",
            answer: "He hasn't got any brothers.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // 3. MULTIPLE CHOICE
        // =================================================

        {
            sourceId: "pronouns_mc_001",
            activityType: "Multiple Choice",
            instructions: "Choose the correct subject pronoun.",
            question: "___ are my best friends.",
            answer: "They",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns"],
                custom: [
                    "A) Them",
                    "B) Their",
                    "C) They",
                    "D) Theirs"
                ]
            }
        },
        {
            sourceId: "pronouns_mc_002",
            activityType: "Multiple Choice",
            instructions: "Choose the correct object pronoun.",
            question: "Can you help ___?",
            answer: "me",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"],
                custom: [
                    "A) I",
                    "B) my",
                    "C) mine",
                    "D) me"
                ]
            }
        },
        {
            sourceId: "pronouns_mc_003",
            activityType: "Multiple Choice",
            instructions: "Choose the correct possessive pronoun.",
            question: "This schoolbag belongs to Sarah. It is ___.",
            answer: "hers",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Pronouns"],
                custom: [
                    "A) she",
                    "B) her",
                    "C) hers",
                    "D) she's"
                ]
            }
        },
        {
            sourceId: "pronouns_mc_004",
            activityType: "Multiple Choice",
            instructions: "Choose the correct form of 'to be'.",
            question: "My friends ___ very happy today.",
            answer: "are",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"],
                custom: [
                    "A) is",
                    "B) am",
                    "C) are",
                    "D) be"
                ]
            }
        },
        {
            sourceId: "pronouns_mc_005",
            activityType: "Multiple Choice",
            instructions: "Choose the correct question.",
            question: "Ask whether your friend has got a pet.",
            answer: "Have you got a pet?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"],
                custom: [
                    "A) Do you got a pet?",
                    "B) Have you got a pet?",
                    "C) Has you got a pet?",
                    "D) Are you got a pet?"
                ]
            }
        },


        // =================================================
        // 4. SENTENCE TRANSFORMATION
        // =================================================

        {
            sourceId: "pronouns_transform_001",
            activityType: "Sentence Transformation",
            instructions: "Replace the name with a subject pronoun.",
            question: "Michael is my brother.",
            answer: "He is my brother.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns"]
            }
        },
        {
            sourceId: "pronouns_transform_002",
            activityType: "Sentence Transformation",
            instructions: "Replace the name with an object pronoun.",
            question: "I can see Anna.",
            answer: "I can see her.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_transform_003",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the negative.",
            question: "They are at school.",
            answer: "They aren't at school.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_transform_004",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence as a question.",
            question: "She is your new teacher.",
            answer: "Is she your new teacher?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_transform_005",
            activityType: "Sentence Transformation",
            instructions: "Rewrite the sentence in the negative.",
            question: "Tom has got two sisters.",
            answer: "Tom hasn't got two sisters.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // 5. WORD FORMATION
        // =================================================

        {
            sourceId: "pronouns_word_001",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct pronoun.",
            question: "Emma is my cousin. ___ lives in Valencia. (SHE)",
            answer: "She",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns"]
            }
        },
        {
            sourceId: "pronouns_word_002",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct form of the pronoun in brackets.",
            question: "My teacher helps ___ with English. (WE)",
            answer: "us",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_word_003",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct possessive form.",
            question: "This is ___ bedroom. I share it with my sister. (WE)",
            answer: "our",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Adjectives"]
            }
        },
        {
            sourceId: "pronouns_word_004",
            activityType: "Word Formation",
            instructions: "Complete the sentence using the correct possessive pronoun.",
            question: "That blue bicycle belongs to him. It is ___. (HE)",
            answer: "his",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Pronouns"]
            }
        },
        {
            sourceId: "pronouns_word_005",
            activityType: "Word Formation",
            instructions: "Complete the sentence with the correct form of 'be'.",
            question: "I ___ interested in music, and my friends ___ interested in sport. (BE)",
            answer: "am / are",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },


        // =================================================
        // 6. MATCHING
        // =================================================

        {
            sourceId: "pronouns_matching_001",
            activityType: "Matching",
            instructions: "Match each subject pronoun with its object pronoun. Give the five letters in order.",
            question: "1. I / 2. he / 3. she / 4. we / 5. they\nA. them / B. us / C. him / D. me / E. her",
            answer: "1-D; 2-C; 3-E; 4-B; 5-A",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_matching_002",
            activityType: "Matching",
            instructions: "Match each subject with its possessive adjective. Give the five letters in order.",
            question: "1. I / 2. you / 3. he / 4. she / 5. they\nA. their / B. his / C. your / D. my / E. her",
            answer: "1-D; 2-C; 3-B; 4-E; 5-A",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Possessive Adjectives"]
            }
        },
        {
            sourceId: "pronouns_matching_003",
            activityType: "Matching",
            instructions: "Match each subject with the correct form of 'to be'. Give the five letters in order.",
            question: "1. I / 2. she / 3. you / 4. it / 5. we\nA. are / B. is / C. am",
            answer: "1-C; 2-B; 3-A; 4-B; 5-A",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_matching_004",
            activityType: "Matching",
            instructions: "Match each demonstrative with its use. Give the four letters in order.",
            question: "1. this / 2. that / 3. these / 4. those\nA. plural, far away / B. singular, nearby / C. plural, nearby / D. singular, far away",
            answer: "1-B; 2-D; 3-C; 4-A",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Demonstratives"]
            }
        },
        {
            sourceId: "pronouns_matching_005",
            activityType: "Matching",
            instructions: "Match each subject with the correct form of 'have got'. Give the five letters in order.",
            question: "1. I / 2. she / 3. they / 4. he / 5. we\nA. has got / B. have got",
            answer: "1-B; 2-A; 3-B; 4-A; 5-B",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // 7. SENTENCE ORDERING
        // =================================================

        {
            sourceId: "pronouns_order_001",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "my / she / friend / is",
            answer: "She is my friend.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_order_002",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "help / can / me / you",
            answer: "You can help me.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_order_003",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "your / is / this / bag",
            answer: "Is this your bag?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Demonstratives", "Possessive Adjectives", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_order_004",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order.",
            question: "got / has / a / brother / he",
            answer: "He has got a brother.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },
        {
            sourceId: "pronouns_order_005",
            activityType: "Sentence Ordering",
            instructions: "Put the words in the correct order to make a question.",
            question: "they / are / where",
            answer: "Where are they?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },


        // =================================================
        // 8. TRANSLATION
        // =================================================

        {
            sourceId: "pronouns_translate_001",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Ella es mi mejor amiga.",
            answer: "She is my best friend.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Possessive Adjectives", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_translate_002",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Nosotros los conocemos.",
            answer: "We know them.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_translate_003",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "Estos zapatos son míos.",
            answer: "These shoes are mine.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Demonstratives", "Possessive Pronouns"]
            }
        },
        {
            sourceId: "pronouns_translate_004",
            activityType: "Translation",
            instructions: "Translate the sentence into English.",
            question: "No estamos cansados.",
            answer: "We aren't tired.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_translate_005",
            activityType: "Translation",
            instructions: "Translate the question into English.",
            question: "¿Tienes una mascota?",
            answer: "Have you got a pet?",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },


        // =================================================
        // 9. SHORT ANSWER
        // =================================================

        {
            sourceId: "pronouns_short_001",
            activityType: "Short Answer",
            instructions: "Answer using a subject pronoun.",
            question: "Who is your best friend?",
            answer: "Example: She is my best friend. / He is my best friend.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns", "Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_short_002",
            activityType: "Short Answer",
            instructions: "Answer using an object pronoun.",
            question: "Who helps you with your homework?",
            answer: "Example: My mum helps me.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Object Pronouns"]
            }
        },
        {
            sourceId: "pronouns_short_003",
            activityType: "Short Answer",
            instructions: "Answer with a complete sentence using 'to be'.",
            question: "How old are you?",
            answer: "Example: I am fourteen years old.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_short_004",
            activityType: "Short Answer",
            instructions: "Answer with a complete sentence using 'have got'.",
            question: "Have you got any brothers or sisters?",
            answer: "Example: I have got one sister. / I haven't got any brothers or sisters.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },
        {
            sourceId: "pronouns_short_005",
            activityType: "Short Answer",
            instructions: "Answer using a demonstrative.",
            question: "Name one thing near you and one thing far away.",
            answer: "Example: This is my pencil. That is the door.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Demonstratives"]
            }
        },


        // =================================================
        // 10. GRAMMAR CHALLENGE
        // =================================================

        {
            sourceId: "pronouns_challenge_001",
            activityType: "Grammar Challenge",
            instructions: "Explain the difference.",
            question: "What is the difference between 'my' and 'mine'?",
            answer: "'My' comes before a noun; 'mine' replaces the noun.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Possessive Adjectives", "Possessive Pronouns"]
            }
        },
        {
            sourceId: "pronouns_challenge_002",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "Which pronouns do we normally use as the subject of a sentence?",
            answer: "I, you, he, she, it, we and they.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Subject Pronouns"]
            }
        },
        {
            sourceId: "pronouns_challenge_003",
            activityType: "Grammar Challenge",
            instructions: "Explain the difference.",
            question: "Why do we say 'I am' but 'she is'?",
            answer: "Because the verb 'to be' changes depending on the subject.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Verb To Be"]
            }
        },
        {
            sourceId: "pronouns_challenge_004",
            activityType: "Grammar Challenge",
            instructions: "Complete the rule.",
            question: "Which form of 'have got' do we use with he, she and it?",
            answer: "Has got.",
            tags: {
                cefr: ["A1"],
                types: ["Grammar"],
                grammar: ["Have Got"]
            }
        },
        {
            sourceId: "pronouns_challenge_005",
            activityType: "Grammar Challenge",
            instructions: "Explain the difference.",
            question: "When do we use 'this' and 'these'?",
            answer: "We use 'this' with a singular noun nearby and 'these' with plural nouns nearby.",
            tags: {
                cefr: ["A2"],
                types: ["Grammar"],
                grammar: ["Demonstratives"]
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