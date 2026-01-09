import { Lesson } from '../types';

export const lessons: Lesson[] = [
    // ==========================================
    // WEEK 1: School & Hobbies (Page 2)
    // ==========================================
    {
        id: 102, week: 1, day: 1, type: 'vocabulary_matching', title: "Starting the Journey",
        content: {
            pairs: [
                { word: "club", translation: "מועדון", context: "I want to join the art club.", contextTranslation: "אני רוצה להצטרף למועדון האמנות." },
                { word: "choice", translation: "בחירה", context: "He has a hard choice to make.", contextTranslation: "יש לו בחירה קשה לעשות." },
                { word: "guide", translation: "מדריך", context: "The guide shows us the way.", contextTranslation: "המדריך מראה לנו את הדרך." },
                { word: "team", translation: "קבוצה", context: "Our football team is very good.", contextTranslation: "קבוצת הכדורגל שלנו טובה מאוד." },
                { word: "world", translation: "עולם", context: "The world is very big.", contextTranslation: "העולם גדול מאוד." },
                { word: "imagine", translation: "לדמיין", context: "Can you imagine a flying car?", contextTranslation: "האם אתה יכול לדמיין מכונית מעופפת?" },
                { word: "join", translation: "להצטרף", context: "Please join our group today.", contextTranslation: "בבקשה הצטרף לקבוצה שלנו היום." },
                { word: "amaze", translation: "להדהים", context: "The magic trick will amaze you.", contextTranslation: "קוסמות הלהטוטים תדהים אותך." },
                { word: "amazing", translation: "מדהים", context: "This is an amazing view!", contextTranslation: "זה נוף מדהים!" },
                { word: "possible", translation: "אפשרי", context: "Everything is possible if you try.", contextTranslation: "הכל אפשרי אם תנסה." }
            ]
        }
    },
    {
        id: 101, week: 1, day: 2, type: 'reading', title: "Welcome to the Club",
        content: {
            text: "Nadav walks into the busy hallway. He sees a long list of every school club and activity. He really wants to join a team. However, he has a hard choice to make. He looks at the options closely. Should he pick the band, the theater, or the science group? He is interested in math and history, but writing is his main interest. He can imagine creating a new world in his stories. Mrs. Miller, the guide, smiles at him. She says, 'Welcome! We have a variety of groups.' It is not a usual day for Nadav. He wants to amaze everyone with his skills. Finally, he decides to fill in the form for the writing club. It is a lovely start.",
            vocabulary: [{ word: "club", translation: "מועדון" }, { word: "activity", translation: "פעילות" }, { word: "team", translation: "קבוצה" }, { word: "choice", translation: "בחירה" }, { word: "variety", translation: "מגוון" }],
            questions: [
                { id: "q1", text: "What does Nadav see on the wall?", answer: "A list of school clubs." },
                { id: "q2", text: "What is Nadav's main interest?", answer: "Writing." },
                { id: "q3", text: "Who is Mrs. Miller?", answer: "The club guide." },
                { id: "q4", text: "What does Nadav decide to join?", answer: "The writing club." },
                { id: "q5", text: "How does Nadav feel?", answer: "He feels excited." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "Nadav wants to _____ a team.", answer: "join", options: ["join", "fix", "open"] },
                    { id: "fb2", sentence: "He has a hard _____ to make.", answer: "choice", options: ["choice", "bowl", "lemon"] },
                    { id: "fb3", sentence: "The _____ smiles and welcomes him.", answer: "guide", options: ["guide", "river", "bridge"] },
                    { id: "fb4", sentence: "He wants to _____ everyone with his stories.", answer: "amaze", options: ["amaze", "shake", "feed"] },
                    { id: "fb5", sentence: "He needs to _____ the form.", answer: "fill in", options: ["fill in", "fall in", "depend on"] }
                ]
            }
        }
    },
    {
        id: 103, week: 1, day: 3, type: 'reading', title: "A Journey to the Village",
        content: {
            text: "Last summer, my family went on a long journey. We visited a small village in the mountains. To get there, we had to cross a wide river over an old bridge. The weather was very warm. The people in the village were lovely and gave us fresh food. It was a typical day for them, but for us, it was amazing. We saw a variety of animals in the fields. I like to imagine living there forever. It is a very possible dream if we save money. We prefer the quiet life of the mountains.",
            vocabulary: [{ word: "journey", translation: "מסע" }, { word: "village", translation: "כפר" }, { word: "mountain", translation: "הר" }, { word: "river", translation: "נהר" }],
            questions: [{ id: "q1", text: "Where did the family go?", answer: "To a village in the mountains." }, { id: "q2", text: "Was the river narrow?", answer: "No, it was wide." }, { id: "q3", text: "What did they cross?", answer: "A bridge." }, { id: "q4", text: "How was the food?", answer: "It was fresh." }, { id: "q5", text: "Was the day typical for the villagers?", answer: "Yes, it was." }]
        }
    },
    {
        id: 104, week: 1, day: 4, type: 'pronunciation', title: "Practice Your Flow",
        content: {
            text: "Welcome to the world of English. Joining a club is a lovely choice. You can learn science, math, or history. Imagine a journey to a mountain village. It is amazing and possible.",
            tips: ["Open your mouth wide when you say 'Amaze'.", "Connect the words: say 'Join-a-club' like one word."],
            vocabulary: [{ word: "world", translation: "עולם" }, { word: "lovely", translation: "מקסים" }]
        }
    },
    {
        id: 105, week: 1, day: 5, type: 'pronunciation', title: "Pronunciation Challenge",
        content: {
            text: "The careful guide leads the team across the bridge. They see a variety of lovely flowers near the river. Do you prefer science or math? It is an unusual choice but very amazing. Welcome home!",
            tips: ["Speak slowly and clearly.", "Notice the 'v' sound in 'variety' and 'lovely'."]
        }
    },

    {
        id: 106, week: 1, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 2: Environment & Home (Page 1)
    // ==========================================
    {
        id: 201, week: 2, day: 1, type: 'vocabulary_matching', title: "The World Around Us",
        content: {
            pairs: [
                { word: "apartment", translation: "דירה", context: "I live in a small apartment.", contextTranslation: "אני גר בדירה קטנה." },
                { word: "desert", translation: "מדבר", context: "It is very dry in the desert.", contextTranslation: "יבש מאוד במדבר." },
                { word: "forest", translation: "יער", context: "Many trees grow in the forest.", contextTranslation: "עצים רבים גדלים ביער." },
                { word: "pollution", translation: "זיהום", context: "Air pollution is a big problem.", contextTranslation: "זיהום אוויר הוא בעיה גדולה." },
                { word: "protect", translation: "להגן", context: "We must protect the wild animals.", contextTranslation: "אנחנו חייבים להגן על חיות הבר." },
                { word: "reduce", translation: "להפחית", context: "Try to reduce plastic use.", contextTranslation: "נסה להפחית את השימוש בפלסטיק." },
                { word: "improve", translation: "לשפר", context: "I want to improve my English.", contextTranslation: "אני רוצה לשפר את האנגלית שלי." },
                { word: "wild", translation: "פראי", context: "I saw a wild cat today.", contextTranslation: "ראיתי חתול בר היום." },
                { word: "plan", translation: "תוכנית", context: "I have a plan for today.", contextTranslation: "יש לי תוכנית להיום." },
                { word: "garbage", translation: "זבל", context: "Take the garbage out.", contextTranslation: "תוציא את הזבל." }
            ]
        }
    },
    {
        id: 202, week: 2, day: 2, type: 'reading', title: "Protecting Our Planet",
        content: {
            text: "Our environment is in danger. There is too much pollution in the air and water. We must protect our planet Earth. Every day, people throw away a lot of garbage and waste. This can destroy the forest and the land. However, we have a plan to improve the situation. We can reduce the use of plastic straws. We can also tidy up the park and the beach. A large organization is helping to increase the quality of our air. They consider new ways to keep our world fresh and bright. Several people want to involve their friends. It is a terrible situation, but we can catch the problem early. Be proud of your clean world.",
            vocabulary: [{ word: "environment", translation: "סביבה" }, { word: "pollution", translation: "זיהום" }, { word: "protect", translation: "להגן" }, { word: "garbage", translation: "זבל" }, { word: "waste", translation: "פסולת" }],
            questions: [
                { id: "q1", text: "What is in danger?", answer: "Our environment." },
                { id: "q2", text: "What do people throw away?", answer: "Garbage and waste." },
                { id: "q3", text: "What can we reduce?", answer: "Plastic straws." },
                { id: "q4", text: "Who is helping to increase air quality?", answer: "A large organization." },
                { id: "q5", text: "Can we catch the problem early?", answer: "Yes, we can." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "We must _____ our planet.", answer: "protect", options: ["protect", "destroy", "drop"] },
                    { id: "fb2", sentence: "There is too much _____ in the water.", answer: "pollution", options: ["pollution", "blanket", "idea"] },
                    { id: "fb3", sentence: "We have a _____ to help.", answer: "plan", options: ["plan", "desert", "hill"] },
                    { id: "fb4", sentence: "Please _____ the plastic use.", answer: "reduce", options: ["reduce", "increase", "order"] },
                    { id: "fb5", sentence: "We can _____ our local park.", answer: "tidy up", options: ["tidy up", "catch", "move"] }
                ]
            }
        }
    },
    {
        id: 203, week: 2, day: 3, type: 'reading', title: "Nadav's Modern Apartment",
        content: {
            text: "Nadav is moving to a new apartment today. He is very proud of his new home. The apartment is modern and pretty. It has a large window with a bright view of the hill. He needs to tidy up his room before bedtime. He puts a fresh blanket on his bed. His friend has an idea to paint the walls. They discuss the color together. Nadav wants a complete change. He uses a map to find the best address. They keep on working until the evening. The situation is very good and Nadav is happy.",
            vocabulary: [{ word: "apartment", translation: "דירה" }, { word: "modern", translation: "מודרני" }, { word: "pretty", translation: "יפה" }, { word: "bright", translation: "בהיר" }, { word: "discuss", translation: "לדון" }],
            questions: [{ id: "q1", text: "Where is Nadav moving?", answer: "To a new apartment." }, { id: "q2", text: "Is the apartment old?", answer: "No, it is modern." }, { id: "q3", text: "What does he put on the bed?", answer: "A blanket." }, { id: "q4", text: "What is the view from the window?", answer: "A hill." }, { id: "q5", text: "Is Nadav proud?", answer: "Yes, he is." }]
        }
    },
    {
        id: 204, week: 2, day: 4, type: 'pronunciation', title: "Earth Day Practice",
        content: {
            text: "We live on a bright planet. We must protect the wild forest and the dry desert. Reduce your waste and tidy up your room. It is a modern idea for a fresh world. Improve the situation daily.",
            tips: ["The 'th' in 'Earth' is soft.", "Pronounce the 'p' in 'Planet' clearly."],
            vocabulary: [{ word: "daily", translation: "יומי" }, { word: "bright", translation: "בהיר" }]
        }
    },
    {
        id: 205, week: 2, day: 5, type: 'pronunciation', title: "Wild Weather",
        content: {
            text: "The windy weather is terrible today. Waves hit the land and the forest is cold. We cover ourselves with a warm blanket in the apartment. Several people discuss the climate. It is a serious threat to our quality of life.",
            tips: ["Say 'Windy' and 'Waves' with a clear 'W'.", "Smile when you say 'Climate'."]
        }
    },

    {
        id: 206, week: 2, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 3: Travel & Communication (Page 3)
    // ==========================================
    {
        id: 301, week: 3, day: 1, type: 'vocabulary_matching', title: "Travel & Conversation",
        content: {
            pairs: [
                { word: "adventure", translation: "הרפתקה", context: "I love a good adventure.", contextTranslation: "אני אוהב הרפתקה טובה." },
                { word: "conversation", translation: "שיחה", context: "We had a long conversation.", contextTranslation: "הייתה לנו שיחה ארוכה." },
                { word: "country", translation: "מדינה", context: "Which country are you from?", contextTranslation: "מאיזו מדינה אתה?" },
                { word: "experience", translation: "חוויה", context: "It was a wonderful experience.", contextTranslation: "זו הייתה חוויה נפלאה." },
                { word: "flight", translation: "טיסה", context: "My flight is at midnight.", contextTranslation: "הטיסה שלי בחצות." },
                { word: "passenger", translation: "נוסע", context: "The passenger is on the plane.", contextTranslation: "הנוסע נמצא במטוס." },
                { word: "ticket", translation: "כרטיס", context: "Do you have your ticket?", contextTranslation: "האם יש לך את הכרטיס שלך?" },
                { word: "vacation", translation: "חופשה", context: "I am going on vacation.", contextTranslation: "אני יוצא לחופשה." },
                { word: "simple", translation: "פשוט", context: "This is a simple rule.", contextTranslation: "זה כלל פשוט." },
                { word: "real", translation: "אמיתי", context: "Is this a real diamond?", contextTranslation: "האם זה יהלום אמיתי?" }
            ]
        }
    },
    {
        id: 302, week: 3, day: 2, type: 'reading', title: "A Trip to London",
        content: {
            text: "Last month, I went on a wonderful vacation to London. My flight was at midnight, and I was a very excited passenger. The pilot said the weather was cool and clear. We saw the Earth from the plane window. After we landed, we went through the central part of the city. I saw an old church and a famous bridge. My arrival was early, so I had to remain in the station for a moment. I bought a ticket for a tour. It was a great adventure. Even though I had a small difficulty with my credit card, I managed to have a good time. I want to suggest this trip to anyone who loves history.",
            vocabulary: [{ word: "vacation", translation: "חופשה" }, { word: "flight", translation: "טיסה" }, { word: "passenger", translation: "נוסע" }, { word: "pilot", translation: "טייס" }, { word: "arrival", translation: "הגעה" }],
            questions: [
                { id: "q1", text: "When was the flight?", answer: "At midnight." },
                { id: "q2", text: "Who flew the plane?", answer: "The pilot." },
                { id: "q3", text: "What did the narrator see?", answer: "The Earth." },
                { id: "q4", text: "Where did they go after landing?", answer: "The central part of the city." },
                { id: "q5", text: "Was there a difficulty?", answer: "Yes, with the credit card." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "The _____ flies the plane.", answer: "pilot", options: ["pilot", "guy", "hero"] },
                    { id: "fb2", sentence: "I am a _____ on the flight.", answer: "passenger", options: ["passenger", "ticket", "mail"] },
                    { id: "fb3", sentence: "The plane will _____ at the airport.", answer: "land", options: ["land", "beat", "fight"] },
                    { id: "fb4", sentence: "I bought a _____ for the cinema.", answer: "ticket", options: ["ticket", "sort", "opinion"] },
                    { id: "fb5", sentence: "It was a _____ experience.", answer: "wonderful", options: ["wonderful", "simple", "central"] }
                ]
            }
        }
    },
    {
        id: 303, week: 3, day: 3, type: 'reading', title: "A Talk at the Cinema",
        content: {
            text: "Nadav and a guy from his class met at the cinema. They had a short conversation about movies. 'What sort of films do you like?' Nadav asked. 'I mean, do you like action or adventure?' The guy replied, 'I normally prefer simple stories. It depends on my mood.' They looked at the line for tickets. 'Anyway, let's go in,' they said. In fact, the movie was very cool. They had a good time and talked about the effect of the music. It was a real joy to share opinions. They plan to meet again anytime.",
            vocabulary: [{ word: "cinema", translation: "קולנוע" }, { word: "conversation", translation: "שיחה" }, { word: "sort", translation: "סוג" }, { word: "opinion", translation: "דעה" }],
            questions: [{ id: "q1", text: "Where did they meet?", answer: "At the cinema." }, { id: "q2", text: "What was the conversation about?", answer: "Movies." }, { id: "q3", text: "Does the guy like action?", answer: "He normally prefers simple stories." }, { id: "q4", text: "Was the movie bad?", answer: "No, it was very cool." }, { id: "q5", text: "Will they meet again?", answer: "Yes, anytime." }]
        }
    },
    {
        id: 304, week: 3, day: 4, type: 'pronunciation', title: "Airport Practice",
        content: {
            text: "The pilot is ready for take off. Passengers, please remain in your seats. Have your ticket and credit card ready for arrival. It is a wonderful flight to a new country. Normally, we arrive at midnight.",
            tips: ["'Flight' ends with a sharp 'T'.", "Pronounce 'Passenger' as Pas-sen-ger."],
            vocabulary: [{ word: "flight", translation: "טיסה" }, { word: "arrival", translation: "הגעה" }]
        }
    },
    {
        id: 305, week: 3, day: 5, type: 'pronunciation', title: "The Hero's Journey",
        content: {
            text: "Every hero has an opinion about their adventure. Although the journey is difficult, they insist on moving forward. Throughout the day, they meet many passengers. Take a tour of the Earth and see its beauty. It depends on your purpose.",
            tips: ["Practice the 'th' sound in 'Throughout'.", "Keep the 'r' sound soft in 'Adventure'."]
        }
    },

    {
        id: 306, week: 3, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 4: Sports & Success (Page 4)
    // ==========================================
    {
        id: 401, week: 4, day: 1, type: 'vocabulary_matching', title: "Sports & Achievement",
        content: {
            pairs: [
                { word: "ability", translation: "יכולת", context: "He has the ability to run fast.", contextTranslation: "יש לו את היכולת לרוץ מהר." },
                { word: "athlete", translation: "אתלט", context: "A professional athlete trains hard.", contextTranslation: "אתלט מקצועי מתאמן קשה." },
                { word: "champion", translation: "אלוף", context: "She is the world champion.", contextTranslation: "היא אלופת העולם." },
                { word: "competition", translation: "תחרות", context: "The competition starts at noon.", contextTranslation: "התחרות מתחילה בצהריים." },
                { word: "effort", translation: "מאמץ", context: "Great success requires effort.", contextTranslation: "הצלחה גדולה דורשת מאמץ." },
                { word: "goal", translation: "מטרה", context: "My goal is to win.", contextTranslation: "המטרה שלי היא לנצח." },
                { word: "opportunity", translation: "הזדמנות", context: "This is a great opportunity.", contextTranslation: "זו הזדמנות נהדרת." },
                { word: "success", translation: "הצלחה", context: "I wish you much success.", contextTranslation: "אני מאחל לך הצלחה רבה." },
                { word: "win", translation: "לנצח", context: "We want to win the game.", contextTranslation: "אנחנו רוצים לנצח במשחק." },
                { word: "practice", translation: "להתאמן", context: "You must practice every day.", contextTranslation: "אתה חייב להתאמן כל יום." }
            ]
        }
    },
    {
        id: 402, week: 4, day: 2, type: 'reading', title: "The Big Race",
        content: {
            text: "Today is the final day of the running competition. Every athlete is prepared and ready. Nadav is a young player with a lot of ability. He has spent several months in training. His goal is to become the next champion. The distance of the race is huge, but he does not mind. He knows that success needs a lot of effort. A large audience is here to watch the event. The judge gives the instruction to start. Nadav runs fast and reaches the finish line first! He wins the gold medal. It is a perfect moment and a total surprise for his family. He is a great role model for his friends.",
            vocabulary: [{ word: "athlete", translation: "אתלט" }, { word: "competition", translation: "תחרות" }, { word: "champion", translation: "אלוף" }, { word: "effort", translation: "מאמץ" }, { word: "audience", translation: "קהל" }],
            questions: [
                { id: "q1", text: "What event is it?", answer: "A running competition." },
                { id: "q2", text: "What is Nadav's goal?", answer: "To become the next champion." },
                { id: "q3", text: "Is the distance small?", answer: "No, it is huge." },
                { id: "q4", text: "Who gives the instruction?", answer: "The judge." },
                { id: "q5", text: "Did Nadav win?", answer: "Yes, he reached the finish line first." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "He is a professional _____.", answer: "athlete", options: ["athlete", "cash", "puzzle"] },
                    { id: "fb2", sentence: "The _____ is watching the game.", answer: "audience", options: ["audience", "voice", "key"] },
                    { id: "fb3", sentence: "Hard work leads to _____.", answer: "success", options: ["success", "angry", "past"] },
                    { id: "fb4", sentence: "The _____ of the race is ten miles.", answer: "distance", options: ["distance", "heart", "stage"] },
                    { id: "fb5", sentence: "He is the new world _____.", answer: "champion", options: ["champion", "role", "topic"] }
                ]
            }
        }
    },
    {
        id: 403, week: 4, day: 3, type: 'reading', title: "The Science Project",
        content: {
            text: "Nadav and his team are working on a science project. The topic is 'Life in the Past'. It is a big opportunity to prove their skills. Each person has a personal role in the team. They need to collect information and perform an experiment. It is a serious task, but they try out different ideas. 'Just a minute,' Nadav says. 'We must follow the instructions carefully.' They practice their presentation many times. Finally, the project is a total success. Of course, they are very proud. It was a valuable experience for everyone.",
            vocabulary: [{ word: "project", translation: "פרויקט" }, { word: "topic", translation: "נושא" }, { word: "opportunity", translation: "הזדמנות" }, { word: "role", translation: "תפקיד" }],
            questions: [{ id: "q1", text: "What is the project topic?", answer: "'Life in the Past'." }, { id: "q2", text: "What do they need to collect?", answer: "Information." }, { id: "q3", text: "Is it a silly task?", answer: "No, it is a serious task." }, { id: "q4", text: "Did they follow instructions?", answer: "Yes, carefully." }, { id: "q5", text: "Was the project a failure?", answer: "No, it was a total success." }]
        }
    },
    {
        id: 404, week: 4, day: 4, type: 'pronunciation', title: "Winner's Voice",
        content: {
            text: "An athlete needs ability and effort to win. Practice every day to reach your goal. Take part in the competition and be a professional player. Success is personal and valuable. Of course, you can be a champion.",
            tips: ["Pronounce 'Success' with a strong 'S'.", "Syllables: Ath-lete."],
            vocabulary: [{ word: "ability", translation: "יכולת" }, { word: "effort", translation: "מאמץ" }]
        }
    },
    {
        id: 405, week: 4, day: 5, type: 'pronunciation', title: "Performance Stage",
        content: {
            text: "The audience is quiet as the players appear on stage. It is a great opportunity to perform. You must be prepared and serious. Discover your voice and show your success. It doesn't matter if you are nervous. Just a minute!",
            tips: ["Speak with a clear voice.", "Take a breath before long sentences."]
        }
    },

    {
        id: 406, week: 4, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 5: The Mystery Island (Page 5)
    // ==========================================
    {
        id: 501, week: 5, day: 1, type: 'vocabulary_matching', title: "Mystery & Discovery",
        content: {
            pairs: [
                { word: "airplane", translation: "מטוס", context: "The airplane is above the clouds.", contextTranslation: "המטוס מעל העננים." },
                { word: "area", translation: "אזור", context: "This area is very quiet.", contextTranslation: "האזור הזה שקט מאוד." },
                { word: "belief", translation: "אמונה", context: "She has a strong belief in peace.", contextTranslation: "יש לה אמונה חזקה בשלום." },
                { word: "island", translation: "אי", context: "We visited a small island.", contextTranslation: "ביקרנו באי קטן." },
                { word: "ocean", translation: "אוקיינוס", context: "The ocean is deep and blue.", contextTranslation: "האוקיינוס עמוק וכחול." },
                { word: "storm", translation: "סערה", context: "A big storm is coming.", contextTranslation: "סערה גדולה מגיעה." },
                { word: "disappear", translation: "להיעלם", context: "The magician made the coin disappear.", contextTranslation: "הקוסם העלים את המטבע." },
                { word: "escape", translation: "לברוח", context: "The bird managed to escape the cage.", contextTranslation: "הציפור הצליחה לברוח מהכלוב." },
                { word: "explore", translation: "לחקור", context: "Let's explore the forest.", contextTranslation: "בואו נחקור את היער." },
                { word: "wonder", translation: "לתהות", context: "I wonder what is in the box.", contextTranslation: "אני תוהה מה יש בקופסה." }
            ]
        }
    },
    {
        id: 502, week: 5, day: 2, type: 'reading', title: "The Mystery Island",
        content: {
            text: "A small airplane flies over the blue ocean. Suddenly, the pilot sees a green island in a remote area. There is a mystery about this place. Many objects disappear here without an explanation. A clever explorer wants to explore the island and solve the mystery. He is able to land his plane on the beach. He sees deep caves and high mountains. He must survive the night before a big storm starts. He has a strong belief that he can find the truth. He starts to explore the bottom of the hill. He wonders what he will find among the trees.",
            vocabulary: [{ word: "island", translation: "אי" }, { word: "ocean", translation: "אוקיינוס" }, { word: "mystery", translation: "תעלומה" }, { word: "explore", translation: "לחקור" }, { word: "survive", translation: "לשרוד" }],
            questions: [
                { id: "q1", text: "What flies over the ocean?", answer: "A small airplane." },
                { id: "q2", text: "Where is the island?", answer: "In a remote area." },
                { id: "q3", text: "What happens to objects there?", answer: "They disappear." },
                { id: "q4", text: "Who wants to solve the mystery?", answer: "A clever explorer." },
                { id: "q5", text: "Is the ocean shallow?", answer: "No, it is deep." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "The explorer wants to _____ the island.", answer: "explore", options: ["explore", "hide", "repeat"] },
                    { id: "fb2", sentence: "Things sometimes _____ in this place.", answer: "disappear", options: ["disappear", "examine", "lead"] },
                    { id: "fb3", sentence: "A big _____ is coming tonight.", answer: "storm", options: ["storm", "peace", "island"] },
                    { id: "fb4", sentence: "He is a _____ man.", answer: "clever", options: ["clever", "deep", "additional"] },
                    { id: "fb5", sentence: "The _____ is very big and blue.", answer: "ocean", options: ["ocean", "airplane", "drawer"] }
                ]
            }
        }
    },
    {
        id: 503, week: 5, day: 3, type: 'reading', title: "A Peaceful Place",
        content: {
            text: "Nadav loves to sit by the ocean. He feels peace when he looks at the waves. The population of his village is small, so it is quiet. Sometimes he likes to wonder about the world. He reads a story about a hero who managed to escape from a dangerous cave. The hero had to survive on an island for a long time. Nadav thinks this is an amazing tale. He is happy that his own life is fine and safe. He prefers peace and quiet.",
            vocabulary: [{ word: "peace", translation: "שלום" }, { word: "population", translation: "אוכלוסייה" }, { word: "escape", translation: "לברוח" }, { word: "wonder", translation: "לתהות" }],
            questions: [{ id: "q1", text: "Where does Nadav sit?", answer: "By the ocean." }, { id: "q2", text: "Is the village population large?", answer: "No, it is small." }, { id: "q3", text: "What does he read about?", answer: "A hero who escaped a cave." }, { id: "q4", text: "How does he feel by the ocean?", answer: "He feels peace." }, { id: "q5", text: "Is his life dangerous?", answer: "No, it is fine and safe." }]
        }
    },
    {
        id: 504, week: 5, day: 4, type: 'pronunciation', title: "Ocean Sounds",
        content: {
            text: "The ocean is deep and peaceful. Explore the island and find the mystery. The storm will disappear as quickly as possible. A clever pilot can escape the danger. Wonder about the world among the stars.",
            tips: ["Smile for 'Deep'.", "Pronounce 'Mystery' as Mys-ter-y."],
            vocabulary: [{ word: "ocean", translation: "אוקיינוס" }, { word: "clever", translation: "חכם" }]
        }
    },
    {
        id: 505, week: 5, day: 5, type: 'pronunciation', title: "Island Mystery",
        content: {
            text: "A huge storm is over the area. The amount of rain is additional. We must lead the people to a safe island. Can you survive the deep water? Explore every cave and hide from the wind. It is a mystery!",
            tips: ["The 's' in 'Storm' is strong.", "Keep the 'p' in 'Explore' soft."]
        }
    },
    {
        id: 506, week: 5, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },
    // ==========================================
    // WEEK 6: Health & Lifestyle
    // ==========================================
    {
        id: 601, week: 6, day: 1, type: 'vocabulary_matching', title: "Health & Body",
        content: {
            pairs: [
                { word: "exercise", translation: "תרגיל/אימון", context: "Daily exercise is good for you.", contextTranslation: "אימון יומי טוב עבורך." },
                { word: "healthy", translation: "בריא", context: "Eat healthy food like fruit.", contextTranslation: "אכול אוכל בריא כמו פירות." },
                { word: "medicine", translation: "תרופה", context: "The doctor gave me medicine.", contextTranslation: "הרופא נתן לי תרופה." },
                { word: "muscle", translation: "שריר", context: "Lifting weights builds muscle.", contextTranslation: "הרמת משקולות בונה שריר." },
                { word: "patient", translation: "מטופל/סבלני", context: "The patient is waiting for the doctor.", contextTranslation: "המטופל מחכה לרופא." },
                { word: "energy", translation: "אנרגיה", context: "I have a lot of energy today.", contextTranslation: "יש לי הרבה אנרגיה היום." },
                { word: "habit", translation: "הרגל", context: "Drinking water is a good habit.", contextTranslation: "שתיית מים היא הרגל טוב." },
                { word: "prevent", translation: "למנוע", context: "Wash hands to prevent illness.", contextTranslation: "שטוף ידיים כדי למנוע מחלה." },
                { word: "strong", translation: "חזק", context: "He is a very strong man.", contextTranslation: "הוא איש חזק מאוד." },
                { word: "weight", translation: "משקל", context: "Check your weight on the scale.", contextTranslation: "בדוק את המשקל שלך על המאזניים." }
            ]
        }
    },
    {
        id: 602, week: 6, day: 2, type: 'reading', title: "The Secret to Health",
        content: {
            text: "To be healthy, you must have good habits. First, exercise is very important for your heart and muscles. You should try to move your body every day. Second, the food you eat gives you energy. Avoid too much sugar and salt. If you feel sick, you might need medicine from a doctor. A doctor treats every patient with care. It is better to prevent a problem than to fix it later. Many people join a gym to stay strong and maintain a healthy weight. Remember to drink plenty of water throughout the day. Your health is your greatest wealth.",
            vocabulary: [{ word: "healthy", translation: "בריא" }, { word: "exercise", translation: "אימון" }, { word: "energy", translation: "אנרגיה" }, { word: "prevent", translation: "למנוע" }, { word: "habit", translation: "הרגל" }],
            questions: [
                { id: "q1", text: "What is important for your heart?", answer: "Exercise." },
                { id: "q2", text: "What gives you energy?", answer: "The food you eat." },
                { id: "q3", text: "Who gives you medicine?", answer: "A doctor." },
                { id: "q4", text: "What should you avoid?", answer: "Too much sugar and salt." },
                { id: "q5", text: "What is a good habit?", answer: "Drinking plenty of water." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "Good _____ help you stay fit.", answer: "habits", options: ["habits", "stems", "boxes"] },
                    { id: "fb2", sentence: "I go to the gym to ____.", answer: "exercise", options: ["exercise", "sleep", "forget"] },
                    { id: "fb3", sentence: "The doctor treats the ____.", answer: "patient", options: ["patient", "driver", "pilot"] },
                    { id: "fb4", sentence: "Fruit is a ____ snack.", answer: "healthy", options: ["healthy", "broken", "scary"] },
                    { id: "fb5", sentence: "We must ____ pollution.", answer: "prevent", options: ["prevent", "amaze", "join"] }
                ]
            }
        }
    },
    {
        id: 603, week: 6, day: 3, type: 'reading', title: "Nadav's New Routine",
        content: {
            text: "Nadav decided to improve his fitness. He went to the local gym to start his new routine. He met a trainer who helped him with different exercises. Nadav felt a bit weak at first, but he knew he would get strong soon. He wants to increase his muscle strength. He also learned about the importance of sleep. Sleep helps the body recover. Now, Nadav feels more active and has a lot of energy for school. He is proud of his progress.",
            vocabulary: [{ word: "fitness", translation: "כושר" }, { word: "routine", translation: "שגרה" }, { word: "active", translation: "פעיל" }, { word: "strength", translation: "חוזק" }],
            questions: [{ id: "q1", text: "Where did Nadav go?", answer: "To the gym." }, { id: "q2", text: "How did he feel at first?", answer: "A bit weak." }, { id: "q3", text: "What helps the body recover?", answer: "Sleep." }, { id: "q4", text: "What is he proud of?", answer: "His progress." }, { id: "q5", text: "Does he have energy now?", answer: "Yes, a lot." }]
        }
    },
    {
        id: 604, week: 6, day: 4, type: 'pronunciation', title: "Active Voice",
        content: {
            text: "Healthy habits give you energy for exercise. Be patient and build your muscles slowly. Prevent sickness by eating well and maintaining a good weight. It is a strong choice for a better life.",
            tips: ["The 'h' in 'Healthy' is a soft breath.", "Pronounce 'Muscle' as Mus-sel (the 'c' is silent)."],
            vocabulary: [{ word: "strong", translation: "חזק" }, { word: "patient", translation: "סבלני" }]
        }
    },
    {
        id: 605, week: 6, day: 5, type: 'pronunciation', title: "Breathing & Relaxing",
        content: {
            text: "Take a deep breath and relax your body. Your fitness routine should be fun. When you sleep, your muscles recover and grow. Keep active and enjoy your progress every day. Good health is possible!",
            tips: ["Smile when you say 'Fitness'.", "The 'ee' in 'Deep' and 'Sleep' is long."]
        }
    },
    {
        id: 606, week: 6, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 7: Technology & Innovation
    // ==========================================
    {
        id: 701, week: 7, day: 1, type: 'vocabulary_matching', title: "Tech & Gadgets",
        content: {
            pairs: [
                { word: "computer", translation: "מחשב", context: "I use my computer for work.", contextTranslation: "אני משתמש במחשב שלי לעבודה." },
                { word: "device", translation: "מכשיר", context: "A phone is a mobile device.", contextTranslation: "טלפון הוא מכשיר נייד." },
                { word: "future", translation: "עתיד", context: "Who knows what the future holds?", contextTranslation: "מי יודע מה צופן העתיד?" },
                { word: "internet", translation: "אינטרנט", context: "I search for info on the internet.", contextTranslation: "אני מחפש מידע באינטרנט." },
                { word: "invention", translation: "המצאה", context: "The lightbulb was a great invention.", contextTranslation: "הנורה הייתה המצאה גדולה." },
                { word: "machine", translation: "מכונה", context: "This machine makes coffee.", contextTranslation: "המכונה הזו מכינה קפה." },
                { word: "online", translation: "מקוון", context: "I like to shop online.", contextTranslation: "אני אוהב לקנות ברשת." },
                { word: "screen", translation: "מסך", context: "Don't look at the screen too long.", contextTranslation: "אל תסתכל על המסך זמן רב מדי." },
                { word: "smart", translation: "חכם", context: "He is a very smart student.", contextTranslation: "הוא תלמיד חכם מאוד." },
                { word: "technology", translation: "טכנולוגיה", context: "Technology changes every day.", contextTranslation: "הטכנולוגיה משתנה כל יום." }
            ]
        }
    },
    {
        id: 702, week: 7, day: 2, type: 'reading', title: "The World of Tomorrow",
        content: {
            text: "Technology is all around us. We use many devices like smartphones and laptops every day. The internet allows us to connect with people across the world. In the past, people did not have these inventions. Now, we can find any information online in seconds. Scientists are working on new machines that can help us in the future. For example, some cars can drive themselves! This is very smart and efficient. However, we must be careful not to spend too much time in front of a screen. We need to find a balance between the digital world and real life. Innovation never stops.",
            vocabulary: [{ word: "technology", translation: "טכנולוגיה" }, { word: "device", translation: "מכשיר" }, { word: "invention", translation: "המצאה" }, { word: "online", translation: "מקוון" }, { word: "future", translation: "עתיד" }],
            questions: [
                { id: "q1", text: "What do we use every day?", answer: "Devices like smartphones." },
                { id: "q2", text: "What does the internet allow?", answer: "To connect with people." },
                { id: "q3", text: "What are scientists working on?", answer: "New machines." },
                { id: "q4", text: "What is an example of smart tech?", answer: "Self-driving cars." },
                { id: "q5", text: "What should we be careful about?", answer: "Screen time." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "My phone is a smart _____.", answer: "device", options: ["device", "river", "bridge"] },
                    { id: "fb2", sentence: "The _____ connects everyone.", answer: "internet", options: ["internet", "garbage", "forest"] },
                    { id: "fb3", sentence: "I love to play games _____.", answer: "online", options: ["online", "under", "between"] },
                    { id: "fb4", sentence: "The _____ of the wheel changed the world.", answer: "invention", options: ["invention", "pollution", "habit"] },
                    { id: "fb5", sentence: "The laptop has a bright _____.", answer: "screen", options: ["screen", "button", "weight"] }
                ]
            }
        }
    },
    {
        id: 703, week: 7, day: 3, type: 'reading', title: "The First Computer",
        content: {
            text: "Did you know the first computer was as big as a room? It was a huge machine. Today, we have smart devices that fit in our pockets. This is because technology has improved very fast. Scientists explore new ideas to make things smaller and faster. We use computers for math, history, and science. In the future, computers will be even more amazing. We must learn how to use them to create a better world.",
            vocabulary: [{ word: "machine", translation: "מכונה" }, { word: "smart", translation: "חכם" }, { word: "explore", translation: "לחקור" }, { word: "scientists", translation: "מדענים" }],
            questions: [{ id: "q1", text: "Was the first computer small?", answer: "No, it was as big as a room." }, { id: "q2", text: "Where do modern devices fit?", answer: "In our pockets." }, { id: "q3", text: "Why are things smaller now?", answer: "Because technology improved fast." }, { id: "q4", text: "What do scientists do?", answer: "Explore new ideas." }, { id: "q5", text: "Will computers be better in the future?", answer: "Yes, even more amazing." }]
        }
    },
    {
        id: 704, week: 7, day: 4, type: 'pronunciation', title: "Digital Sounds",
        content: {
            text: "Technology and the internet change our future. Use your device to go online and find information. Look at the screen and learn about a new invention. Scientists create smart machines for everyone.",
            tips: ["'Technology' has 4 syllables: Tech-nol-o-gy.", "The 'sc' in 'Scientists' is like a sharp 'S'."],
            vocabulary: [{ word: "online", translation: "מקוון" }, { word: "screen", translation: "מסך" }]
        }
    },
    {
        id: 705, week: 7, day: 5, type: 'pronunciation', title: "Tech Talk",
        content: {
            text: "Is it a laptop or a mobile device? Innovation is smart and fast. We explore the digital world every day. Be careful and find a balance. The future is bright with computers!",
            tips: ["Practice the 'f' in 'Future'.", "Keep the 'p' in 'Laptop' short and clear."]
        }
    },
    {
        id: 706, week: 7, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 8: Jobs & Careers
    // ==========================================
    {
        id: 801, week: 8, day: 1, type: 'vocabulary_matching', title: "Work & Success",
        content: {
            pairs: [
                { word: "boss", translation: "בוס/מנהל", context: "My boss is very kind.", contextTranslation: "הבוס שלי מאוד אדיב." },
                { word: "career", translation: "קריירה", context: "She wants a career in medicine.", contextTranslation: "היא רוצה קריירה ברפואה." },
                { word: "company", translation: "חברה", context: "He works for a big company.", contextTranslation: "הוא עובד בחברה גדולה." },
                { word: "employee", translation: "עובד", context: "The employee finished the task.", contextTranslation: "העובד סיים את המשימה." },
                { word: "interview", translation: "ראיון", context: "I have a job interview tomorrow.", contextTranslation: "יש לי ראיון עבודה מחר." },
                { word: "job", translation: "עבודה", context: "He is looking for a new job.", contextTranslation: "הוא מחפש עבודה חדשה." },
                { word: "meeting", translation: "פגישה", context: "We have a meeting at ten.", contextTranslation: "יש לנו פגישה בעשר." },
                { word: "office", translation: "משרד", context: "The office is in the city center.", contextTranslation: "המשרד נמצא במרכז העיר." },
                { word: "salary", translation: "משכורת", context: "Her salary is paid every month.", contextTranslation: "המשכורת שלה משולמת כל חודש." },
                { word: "work", translation: "לעבוד/עבודה", context: "I work from home on Fridays.", contextTranslation: "אני עובד מהבית בימי שישי." }
            ]
        }
    },
    {
        id: 802, week: 8, day: 2, type: 'reading', title: "The Job Interview",
        content: {
            text: "Sarah is very excited because she has a job interview today. She wants to work for a famous technology company. She prepared many answers to potential questions. Her goal is to start a successful career as an engineer. She arrived at the office early and met the manager. The interview went very well. They talked about her skills and her previous experience. The company offers a good salary and great benefits for every employee. Sarah hopes she will get the job. She thinks it is a wonderful opportunity to grow and learn.",
            vocabulary: [{ word: "interview", translation: "ראיון" }, { word: "career", translation: "קריירה" }, { word: "office", translation: "משרד" }, { word: "salary", translation: "משכורת" }, { word: "employee", translation: "עובד" }],
            questions: [
                { id: "q1", text: "Why is Sarah excited?", answer: "She has a job interview." },
                { id: "q2", text: "Where does she want to work?", answer: "At a tech company." },
                { id: "q3", text: "Did she arrive late?", answer: "No, she arrived early." },
                { id: "q4", text: "What did they talk about?", answer: "Her skills and experience." },
                { id: "q5", text: "What does the company offer?", answer: "A good salary and benefits." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "I work in a large _____.", answer: "office", options: ["office", "desert", "island"] },
                    { id: "fb2", sentence: "The _____ is happy with my work.", answer: "boss", options: ["boss", "meal", "storm"] },
                    { id: "fb3", sentence: "We have a _____ with the team.", answer: "meeting", options: ["meeting", "recipe", "habit"] },
                    { id: "fb4", sentence: "He is a hard-working _____.", answer: "employee", options: ["employee", "invention", "nature"] },
                    { id: "fb5", sentence: "She wants a _____ in law.", answer: "career", options: ["career", "garbage", "blanket"] }
                ]
            }
        }
    },
    {
        id: 803, week: 8, day: 3, type: 'reading', title: "A Day at Work",
        content: {
            text: "Nadav's father works in a big company. He goes to the office every morning. His boss is professional and helpful. At noon, he has a meeting with his colleagues to discuss new tasks. He uses his skills to solve problems. He is happy because he has a good salary and likes his job. He thinks that experience is very important for success. In the evening, he comes home and tells Nadav about his day.",
            vocabulary: [{ word: "company", translation: "חברה" }, { word: "manager", translation: "מנהל" }, { word: "skills", translation: "מיומנויות" }, { word: "experience", translation: "ניסיון" }],
            questions: [{ id: "q1", text: "Where does Nadav's father work?", answer: "In a big company." }, { id: "q2", text: "When does he have a meeting?", answer: "At noon." }, { id: "q3", text: "Is his boss mean?", answer: "No, he is professional and helpful." }, { id: "q4", text: "What does he use to solve problems?", answer: "His skills." }, { id: "q5", text: "Is experience important?", answer: "Yes, for success." }]
        }
    },
    {
        id: 804, week: 8, day: 4, type: 'pronunciation', title: "Professional Voice",
        content: {
            text: "The employee has a job interview at the office. The boss offers a good salary and a great career. Be professional during the meeting. Experience and skills are important for a successful job.",
            tips: ["'Salary' is Sal-a-ry.", "The 'oy' in 'Employee' sounds like 'boy'."],
            vocabulary: [{ word: "office", translation: "משרד" }, { word: "salary", translation: "משכורת" }]
        }
    },
    {
        id: 805, week: 8, day: 5, type: 'pronunciation', title: "Meeting Talk",
        content: {
            text: "Let's discuss the tasks in the meeting. Prepare your answers for the manager. It is a wonderful opportunity to grow. The company is famous and successful. Work hard and be proud!",
            tips: ["Practice the 'v' in 'Opportunity'.", "Connect the words: 'Work-hard'."]
        }
    },

    {
        id: 806, week: 8, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 9: Culture & Food
    // ==========================================
    {
        id: 901, week: 9, day: 1, type: 'vocabulary_matching', title: "Food & Traditions",
        content: {
            pairs: [
                { word: "breakfast", translation: "ארוחת בוקר", context: "I eat eggs for breakfast.", contextTranslation: "אני אוכל ביצים לארוחת בוקר." },
                { word: "culture", translation: "תרבות", context: "I love learning about new cultures.", contextTranslation: "אני אוהב ללמוד על תרבויות חדשות." },
                { word: "delicious", translation: "טעים", context: "This cake is delicious!", contextTranslation: "העוגה הזו טעימה!" },
                { word: "dinner", translation: "ארוחת ערב", context: "What's for dinner tonight?", contextTranslation: "מה יש לארוחת ערב הלילה?" },
                { word: "famous", translation: "מפורסם", context: "He is a famous singer.", contextTranslation: "הוא זמר מפורסם." },
                { word: "festival", translation: "פסטיבל", context: "The music festival was great.", contextTranslation: "פסטיבל המוזיקה היה נהדר." },
                { word: "ingredient", translation: "מרכיב", context: "Flour is a main ingredient.", contextTranslation: "קמח הוא מרכיב עיקרי." },
                { word: "meal", translation: "ארוחה", context: "Lunch is my favorite meal.", contextTranslation: "ארוחת צהריים היא הארוחה האהובה עליי." },
                { word: "recipe", translation: "מתכון", context: "Follow the recipe to bake a cake.", contextTranslation: "עקוב אחר המתכון כדי לאפות עוגה." },
                { word: "taste", translation: "טעם/לטעום", context: "The soup has a salty taste.", contextTranslation: "למרק יש טעם מלוח." }
            ]
        }
    },
    {
        id: 902, week: 9, day: 2, type: 'reading', title: "A Taste of Italy",
        content: {
            text: "Italy is a country famous for its culture and delicious food. People travel from all over the world to taste real Italian pizza and pasta. The secret is in the fresh ingredients. Every family has its own special recipe for tomato sauce. A typical meal in Italy can last for hours. Dinner is a time for family and friends to sit together and talk. There are also many food festivals throughout the year. If you visit Italy, you must try the gelato. It is the best ice cream in the world. Cooking is an art in Italian culture.",
            vocabulary: [{ word: "culture", translation: "תרבות" }, { word: "delicious", translation: "טעים" }, { word: "ingredient", translation: "מרכיב" }, { word: "recipe", translation: "מתכון" }, { word: "meal", translation: "ארוחה" }],
            questions: [
                { id: "q1", text: "What is Italy famous for?", answer: "Its culture and food." },
                { id: "q2", text: "What is the secret to Italian food?", answer: "Fresh ingredients." },
                { id: "q3", text: "How long can a meal last?", answer: "For hours." },
                { id: "q4", text: "When do family and friends sit together?", answer: "At dinner." },
                { id: "q5", text: "What is gelato?", answer: "Italian ice cream." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "The cake has a sweet _____.", answer: "taste", options: ["taste", "muscle", "screen"] },
                    { id: "fb2", sentence: "Pizza is a _____ food.", answer: "famous", options: ["famous", "dry", "unusual"] },
                    { id: "fb3", sentence: "I eat _____ at 8 AM.", answer: "breakfast", options: ["breakfast", "salary", "arrival"] },
                    { id: "fb4", sentence: "We are having a large _____.", answer: "meal", options: ["meal", "boss", "topic"] },
                    { id: "fb5", sentence: "The _____ was full of music.", answer: "festival", options: ["festival", "office", "weight"] }
                ]
            }
        }
    },
    {
        id: 903, week: 9, day: 3, type: 'reading', title: "The Special Sauce",
        content: {
            text: "Nadav loves to cook with his grandmother. She has a secret recipe for a special sauce. They use fresh tomatoes and garlic as the main ingredients. Nadav thinks the sauce is delicious. They prepare a large dinner for the whole family. Everyone sits together and enjoys the meal. Nadav loves this tradition. He wants to learn more about international food and different cultures. He dreams of traveling to many countries one day.",
            vocabulary: [{ word: "special", translation: "מיוחד" }, { word: "tradition", translation: "מסורת" }, { word: "sauce", translation: "רוטב" }, { word: "international", translation: "בינלאומי" }],
            questions: [{ id: "q1", text: "Who does Nadav cook with?", answer: "His grandmother." }, { id: "q2", text: "What do they use for the sauce?", answer: "Tomatoes and garlic." }, { id: "q3", text: "Is the sauce bad?", answer: "No, it is delicious." }, { id: "q4", text: "What does Nadav love?", answer: "This tradition." }, { id: "q5", text: "What does he dream of?", answer: "Traveling to many countries." }]
        }
    },
    {
        id: 904, week: 9, day: 4, type: 'pronunciation', title: "Tasty Sounds",
        content: {
            text: "Breakfast, lunch, and dinner are important meals. Every culture has famous and delicious recipes. Use fresh ingredients for a great taste. Join a food festival and celebrate traditions.",
            tips: ["'Delicious' is De-li-cious.", "The 'ch' in 'Recipe' is like 'S' (Res-i-pee)."],
            vocabulary: [{ word: "delicious", translation: "טעים" }, { word: "culture", translation: "תרבות" }]
        }
    },
    {
        id: 905, week: 9, day: 5, type: 'pronunciation', title: "Cooking Class",
        content: {
            text: "Taste the special Italian sauce. It is an international tradition. Follow the recipe carefully to make a meal. It is a real joy to cook together. Smile and eat!",
            tips: ["Practice the 'th' in 'Together'.", "Syllables: Tra-di-tion."]
        }
    },

    {
        id: 906, week: 9, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },

    // ==========================================
    // WEEK 10: Final Review & Celebration
    // ==========================================
    {
        id: 1001, week: 10, day: 1, type: 'vocabulary_matching', title: "Final Review 1",
        content: {
            pairs: [
                { word: "believe", translation: "להאמין", context: "I believe in you.", contextTranslation: "אני מאמין בך." },
                { word: "celebrate", translation: "לחגוג", context: "Let's celebrate your birthday.", contextTranslation: "בוא נחגוג את יום ההולדת שלך." },
                { word: "finish", translation: "לסיים", context: "I need to finish my work.", contextTranslation: "אני צריך לסיים את העבודה שלי." },
                { word: "knowledge", translation: "ידע", context: "Knowledge is power.", contextTranslation: "ידע הוא כוח." },
                { word: "memory", translation: "זיכרון", context: "I have a good memory.", contextTranslation: "יש לי זיכרון טוב." },
                { word: "proud", translation: "גאה", context: "I am proud of your success.", contextTranslation: "אני גאה בהצלחה שלך." },
                { word: "remember", translation: "לזכור", context: "Remember to call me.", contextTranslation: "זכור להתקשר אליי." },
                { word: "review", translation: "לחזור על/סקירה", context: "Review the words before the test.", contextTranslation: "חזור על המילים לפני המבחן." },
                { word: "smile", translation: "חיוך", context: "She has a beautiful smile.", contextTranslation: "יש לה חיוך יפה." },
                { word: "understand", translation: "להבין", context: "Do you understand the lesson?", contextTranslation: "האם אתה מבין את השיעור?" }
            ]
        }
    },
    {
        id: 1002, week: 10, day: 2, type: 'reading', title: "The End of the Journey",
        content: {
            text: "Congratulations! You have finished the 10-week English program. You should be very proud of yourself. Think about all the new words and knowledge you have gained. You learned about school, environment, travel, sports, mystery, health, technology, jobs, and culture. It has been an amazing journey. Now it is time to celebrate your success. Remember to review your lessons often so you don't forget. Your memory will stay strong if you practice. Keep a smile on your face and continue to explore the world. You now understand much more English than before. Good luck in your future!",
            vocabulary: [{ word: "finish", translation: "לסיים" }, { word: "proud", translation: "גאה" }, { word: "knowledge", translation: "ידע" }, { word: "celebrate", translation: "לחגוג" }, { word: "understand", translation: "להבין" }],
            questions: [
                { id: "q1", text: "How long was the program?", answer: "10 weeks." },
                { id: "q2", text: "How should you feel?", answer: "Very proud." },
                { id: "q3", text: "What should you do to not forget?", answer: "Review the lessons." },
                { id: "q4", text: "Is it time to cry?", answer: "No, it is time to celebrate." },
                { id: "q5", text: "Do you understand more now?", answer: "Yes, much more." }
            ],
            fillInTheBlanks: {
                exercises: [
                    { id: "fb1", sentence: "I _____ in your ability.", answer: "believe", options: ["believe", "disappear", "reduce"] },
                    { id: "fb2", sentence: "We will _____ the victory.", answer: "celebrate", options: ["celebrate", "prevent", "discuss"] },
                    { id: "fb3", sentence: "I have a happy _____ of my trip.", answer: "memory", options: ["memory", "ingredient", "distance"] },
                    { id: "fb4", sentence: "Please _____ the lesson.", answer: "review", options: ["review", "amaze", "join"] },
                    { id: "fb5", sentence: "I finally _____ the task.", answer: "finish", options: ["finish", "land", "amaze"] }
                ]
            }
        }
    },
    {
        id: 1003, week: 10, day: 3, type: 'reading', title: "Look at Your Progress",
        content: {
            text: "Nadav looks at his notebook. He remembers his first day of English class. Back then, he didn't understand many words. Now, he has so much knowledge. He can write stories and talk about many topics. His teacher is very proud of him. Nadav knows that he must continue to practice. He decides to review a few words every morning. He has a big smile because he knows he achieved his goal. The future looks bright and full of opportunities.",
            vocabulary: [{ word: "remember", translation: "לזכור" }, { word: "understand", translation: "להבין" }, { word: "knowledge", translation: "ידע" }, { word: "goal", translation: "מטרה" }],
            questions: [{ id: "q1", text: "What does Nadav look at?", answer: "His notebook." }, { id: "q2", text: "Did he understand everything on the first day?", answer: "No, he didn't." }, { id: "q3", text: "Who is proud of him?", answer: "His teacher." }, { id: "q4", text: "What will he do every morning?", answer: "Review a few words." }, { id: "q5", text: "Why does he have a big smile?", answer: "Because he achieved his goal." }]
        }
    },
    {
        id: 1004, week: 10, day: 4, type: 'pronunciation', title: "Celebration Voice",
        content: {
            text: "I believe in my knowledge and memory. I am proud to finish this journey. Review your lessons and remember to smile. Now I understand English much better. Let's celebrate!",
            tips: ["Say 'Believe' with a long 'E'.", "The 'kn' in 'Knowledge' is silent (Now-ledge)."],
            vocabulary: [{ word: "believe", translation: "להאמין" }, { word: "finish", translation: "לסיים" }]
        }
    },
    {
        id: 1005, week: 10, day: 5, type: 'pronunciation', title: "The Final Words",
        content: {
            text: "Always remember to keep learning. The world is full of wonder and mystery. Explore new places and meet new people. Your future is in your hands. Good luck and goodbye!",
            tips: ["Speak with confidence.", "Take a deep breath and enjoy your success!"],
            vocabulary: [{ word: "remember", translation: "לזכור" }, { word: "future", translation: "עתיד" }]
        }
    },
    {
        id: 1006, week: 10, day: 6, type: 'vocabulary', title: "Weekly Review",
        content: {
            description: "Review all the words you learned this week."
        }
    },
];