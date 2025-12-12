import { Lesson } from '../types';

export const lessons: Lesson[] = [
    {
        "id": 101,
        "week": 1,
        "day": 1,
        "type": "reading",
        "title": "Welcome to the Club",
        "content": {
            "text": "Nadav walks into the busy hallway after his first class. He sees a long list of every school club and activity on the main wall. He really wants to join a team and make new friends this year. However, he has a hard choice to make. He looks at the options closely. Should he pick the loud band, the drama theater, or the cool science group? He is interested in math and history, but creative English writing is his main interest. He can imagine creating a new world in his stories.\n\nThe club guide, Mrs. Miller, smiles at him and says, 'Welcome! We have a variety of groups for everyone.' It is not a usual day for Nadav; he feels excited. He wants to amaze everyone with his writing skills. Finally, he decides to fill in the form for the writing club.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What does Nadav want to join?",
                    "answer": "a team"
                },
                {
                    "id": "q2",
                    "text": "What is his main interest?",
                    "answer": "writing"
                },
                {
                    "id": "q3",
                    "text": "Where is the list of clubs?",
                    "answer": "on the main wall"
                },
                {
                    "id": "q4",
                    "text": "Who is the club guide?",
                    "answer": "Mrs. Miller"
                },
                {
                    "id": "q5",
                    "text": "What does Nadav fill in?",
                    "answer": "the form"
                }
            ],
            "vocabulary": [
                { "word": "club", "translation": "מועדון" },
                { "word": "list", "translation": "רשימה" },
                { "word": "activity", "translation": "פעילות" },
                { "word": "band", "translation": "להקה" },
                { "word": "science", "translation": "מדע" },
                { "word": "theater", "translation": "תיאטרון" },
                { "word": "choice", "translation": "בחירה" },
                { "word": "guide", "translation": "מדריך" },
                { "word": "welcome", "translation": "לקבל בברכה" },
                { "word": "join", "translation": "להצטרף" },
                { "word": "team", "translation": "צוות/קבוצה" },
                { "word": "interested in", "translation": "מתעניין ב" },
                { "word": "English", "translation": "אנגלית" },
                { "word": "history", "translation": "היסטוריה" },
                { "word": "math", "translation": "מתמטיקה" },
                { "word": "main", "translation": "עיקרי" },
                { "word": "writing", "translation": "כתיבה" },
                { "word": "imagine", "translation": "לדמיין" },
                { "word": "variety", "translation": "מגוון" },
                { "word": "world", "translation": "עולם" },
                { "word": "usual", "translation": "רגיל" },
                { "word": "amaze", "translation": "להדהים" },
                { "word": "fill in", "translation": "למלא" },
                { "word": "form", "translation": "טופס" },
                { "word": "hallway", "translation": "מסדרון" },
                { "word": "busy", "translation": "עמוס" },
                { "word": "smile", "translation": "לחייך" },
                { "word": "excited", "translation": "נרגש" },
                { "word": "skills", "translation": "כישורים" }
            ]
        }
    },
    {
        "id": 102,
        "week": 1,
        "day": 2,
        "type": "grammar",
        "title": "Nouns, Verbs, Adjectives",
        "content": {
            "rule": "Nouns are people, places, or things (e.g., lemon, office). Verbs are actions (e.g., run, eat). Adjectives describe nouns (e.g., happy, big).",
            "exercises": [
                { "id": "e1", "question": "The lemon is yellow.", "targetWord": "lemon", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e2", "question": "I feed the cat.", "targetWord": "feed", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e3", "question": "It is a lovely day.", "targetWord": "lovely", "answer": "Adjective", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e4", "question": "She opens the door.", "targetWord": "opens", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e5", "question": "The bridge is long.", "targetWord": "bridge", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e6", "question": "He is careful.", "targetWord": "careful", "answer": "Adjective", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e7", "question": "They fix the car.", "targetWord": "fix", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e8", "question": "The physics test was hard.", "targetWord": "physics", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e9", "question": "We serve lunch.", "targetWord": "serve", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e10", "question": "A typical day.", "targetWord": "typical", "answer": "Adjective", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e11", "question": "He has a good job.", "targetWord": "job", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e12", "question": "I brush my teeth.", "targetWord": "brush", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e13", "question": "She uses a comb.", "targetWord": "comb", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e14", "question": "We pay cash.", "targetWord": "pay", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e15", "question": "They sleep late.", "targetWord": "sleep", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e16", "question": "I work hard.", "targetWord": "work", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e17", "question": "Can you help me?", "targetWord": "help", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e18", "question": "I love this color.", "targetWord": "love", "answer": "Verb", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e19", "question": "What is the point?", "targetWord": "point", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] },
                { "id": "e20", "question": "He is in the office.", "targetWord": "office", "answer": "Noun", "options": ["Noun", "Verb", "Adjective"] }
            ]
        }
    },
    {
        "id": 103,
        "week": 1,
        "day": 3,
        "type": "reading",
        "title": "A Journey to the Mountains",
        "content": {
            "text": "Nadav packs his bags and goes on a long journey to a foreign nation. He loves geography and wants to travel to see the world. During his trip, he drives across a wide bridge that goes over a rushing river. Suddenly, he sees a big, snowy mountain in the distance. It is amazing.\n\nAfter driving for hours, he stops in a small village to rest. He knows he must be careful because the road is dangerous and might have slippery oil on it. The locals say it is possible to see unusual animals in the forest nearby. Later that evening, he sits down and eats a warm meal. He enjoys a hot bowl of vegetable soup and adds a little salt and pepper. He feels happy to be on an adventure.",
            "questions": [
                { "id": "q1", "text": "Where does Nadav go?", "answer": "to a foreign nation" },
                { "id": "q2", "text": "What is on the road?", "answer": "oil" },
                {
                    "id": "q3", "text": "What does he drive across?",
                    "answer": "a wide bridge"
                },
                { "id": "q4", "text": "What does he eat?", "answer": "a warm meal" },
                { "id": "q5", "text": "What does he add to the soup?", "answer": "salt and pepper" }
            ],
            "vocabulary": [
                { "word": "journey", "translation": "מסע" },
                { "word": "mountain", "translation": "הר" },
                { "word": "drive", "translation": "לנהוג" },
                { "word": "across", "translation": "לרוחב/מעבר ל" },
                { "word": "nation", "translation": "אומה" },
                { "word": "bridge", "translation": "גשר" },
                { "word": "river", "translation": "נהר" },
                { "word": "amazing", "translation": "מדהים" },
                { "word": "village", "translation": "כפר" },
                { "word": "careful", "translation": "זהיר" },
                { "word": "dangerous", "translation": "מסוכן" },
                { "word": "oil", "translation": "שמן/נפט" },
                { "word": "possible", "translation": "אפשרי" },
                { "word": "foreign", "translation": "זר" },
                { "word": "unusual", "translation": "לא רגיל" },
                { "word": "travel", "translation": "לטייל" },
                { "word": "meal", "translation": "ארוחה" },
                { "word": "bowl", "translation": "קערה" },
                { "word": "salt", "translation": "מלח" },
                { "word": "pepper", "translation": "פלפל" },
                { "word": "warm", "translation": "חמים" },
                { "word": "wide", "translation": "רחב" },
                { "word": "geography", "translation": "גיאוגרפיה" },
                { "word": "pack", "translation": "לארוז" },
                { "word": "snowy", "translation": "מושלג" },
                { "word": "distance", "translation": "מרחק" },
                { "word": "slippery", "translation": "חלקלק" },
                { "word": "locals", "translation": "מקומיים" },
                { "word": "vegetable", "translation": "ירק" },
                { "word": "adventure", "translation": "הרפתקה" }
            ]
        }
    },
    {
        "id": 104,
        "week": 1,
        "day": 4,
        "type": "pronunciation",
        "title": "Meeting New Friends",
        "content": {
            "text": "Hello! Nice to meet you. Would you like to shake hands? I'd love to be your friend. What about you? Do you prefer tea or coffee? I realize we have a lot in common. Let's continue our talk directly. According to the plan, we meet next to the park. Is anybody around here? I am certain we will receive a gift. Just follow me. We depend on you. Don't fall in love too fast!",
            "tips": [
                "Say 'Nice to meet you' with a smile.",
                "Link words together: 'Would you' sounds like 'Would-ja'."
            ],
            "vocabulary": [
                { "word": "Nice to meet you", "translation": "נעים להכיר" },
                { "word": "Would you like", "translation": "האם תרצה" },
                { "word": "shake hands", "translation": "ללחוץ ידיים" },
                { "word": "I'd love to", "translation": "אשמח מאוד" },
                { "word": "What about", "translation": "מה לגבי" },
                { "word": "prefer", "translation": "להעדיף" },
                { "word": "realize", "translation": "להבין" },
                { "word": "continue", "translation": "להמשיך" },
                { "word": "directly", "translation": "ישירות" },
                { "word": "According to", "translation": "לפי" },
                { "word": "next to", "translation": "ליד" },
                { "word": "anybody", "translation": "מישהו" },
                { "word": "around here", "translation": "בסביבה" },
                { "word": "certain", "translation": "בטוח" },
                { "word": "receive", "translation": "לקבל" },
                { "word": "follow", "translation": "לעקוב" },
                { "word": "depend on", "translation": "תלוי ב" },
                { "word": "fall in love", "translation": "להתאהב" }
            ]
        }
    },
    {
        "id": 105,
        "week": 1,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Introductions",
        "content": {
            "topic": "Meeting new people and making friends.",
            "initialMessage": "Hi! I'm your new AI friend. Nice to meet you! What is your name and what do you like to do?"
        }
    },
    {
        "id": 1,
        "week": 2,
        "day": 1,
        "type": "reading",
        "title": "Nadav's New Club",
        "content": {
            "text": "Nadav loves his new school because there is a huge variety of things to do. After his math class finishes, he runs to the office to see the list of clubs again. He is interested in the science club, but he also really likes the gaming team. It is a difficult choice for him!\n\nFinally, he decides to join the gaming team. The club guide, Mr. Cohen, welcomes him at the door. \"Nice to meet you,\" says Mr. Cohen with a smile. \"We depend on good players like you.\" Nadav is very happy. He realizes that this will be an amazing journey and a great way to make friends.\n\nLater that afternoon, Nadav goes to the cafeteria for a meal. He eats a big bowl of pasta with salt and pepper. He sits and talks to his new friends about the danger of the final boss in their favorite video game. They imagine a world where they are the heroes saving the day. It is a lovely day.",
            "questions": [
                {
                    "id": "q1",
                    "text": "Where does Nadav go to see the list of clubs?",
                    "answer": "the office"
                },
                {
                    "id": "q2",
                    "text": "What club does Nadav join?",
                    "answer": "the gaming team"
                },
                {
                    "id": "q3",
                    "text": "Who is the club guide?",
                    "answer": "Mr. Cohen"
                },
                {
                    "id": "q4",
                    "text": "What does Nadav eat?",
                    "answer": "a bowl of pasta"
                },
                {
                    "id": "q5",
                    "text": "What do they talk about?",
                    "answer": "the danger in a video game"
                }
            ],
            "vocabulary": [
                {
                    "word": "variety",
                    "translation": "מגוון"
                },
                {
                    "word": "choice",
                    "translation": "בחירה"
                },
                {
                    "word": "realize",
                    "translation": "להבין/לקלוט"
                },
                {
                    "word": "journey",
                    "translation": "מסע"
                },
                {
                    "word": "office",
                    "translation": "משרד"
                },
                {
                    "word": "guide",
                    "translation": "מדריך"
                },
                {
                    "word": "meal",
                    "translation": "ארוחה"
                },
                {
                    "word": "danger",
                    "translation": "סכנה"
                },
                {
                    "word": "huge",
                    "translation": "עצום"
                },
                {
                    "word": "cafeteria",
                    "translation": "קפיטריה"
                },
                {
                    "word": "pasta",
                    "translation": "פסטה"
                },
                {
                    "word": "boss",
                    "translation": "בוס/מנהיג"
                },
                {
                    "word": "hero",
                    "translation": "גיבור"
                },
                {
                    "word": "depend on",
                    "translation": "תלוי ב"
                },
                {
                    "word": "lovely",
                    "translation": "מקסימה"
                }
            ]
        }
    },
    {
        "id": 2,
        "week": 2,
        "day": 2,
        "type": "grammar",
        "title": "Present Simple: Daily Routine",
        "content": {
            "rule": "We use the Present Simple to talk about facts, habits, and routines. For he/she/it, add 's' or 'es' to the verb.\nExample: I play (habit). He plays (habit).",
            "exercises": [
                {
                    "id": "e1",
                    "question": "Nadav _____ (love) playing video games.",
                    "answer": "loves",
                    "options": ["love", "loves", "loving"]
                },
                {
                    "id": "e2",
                    "question": "They _____ (eat) lunch at 1:00 PM.",
                    "answer": "eat",
                    "options": ["eat", "eats", "eating"]
                },
                {
                    "id": "e3",
                    "question": "The teacher _____ (teach) math.",
                    "answer": "teaches",
                    "options": ["teach", "teaches", "teaching"]
                },
                {
                    "id": "e4",
                    "question": "We _____ (go) to the park every Friday.",
                    "answer": "go",
                    "options": ["go", "goes", "going"]
                },
                {
                    "id": "e5",
                    "question": "He _____ (watch) TV in the evening.",
                    "answer": "watches",
                    "options": ["watch", "watches", "watching"]
                },
                {
                    "id": "e6",
                    "question": "My sister _____ (play) the piano.",
                    "answer": "plays",
                    "options": ["play", "plays", "playing"]
                },
                {
                    "id": "e7",
                    "question": "I _____ (read) a book before bed.",
                    "answer": "read",
                    "options": ["read", "reads", "reading"]
                },
                {
                    "id": "e8",
                    "question": "The sun _____ (rise) in the east.",
                    "answer": "rises",
                    "options": ["rise", "rises", "rising"]
                },
                {
                    "id": "e9",
                    "question": "You _____ (study) hard.",
                    "answer": "study",
                    "options": ["study", "studies", "studying"]
                },
                {
                    "id": "e10",
                    "question": "She _____ (drink) water.",
                    "answer": "drinks",
                    "options": ["drink", "drinks", "drinking"]
                },
                {
                    "id": "e11",
                    "question": "It _____ (rain) a lot in winter.",
                    "answer": "rains",
                    "options": ["rain", "rains", "raining"]
                },
                {
                    "id": "e12",
                    "question": "We _____ (live) in a big city.",
                    "answer": "live",
                    "options": ["live", "lives", "living"]
                },
                {
                    "id": "e13",
                    "question": "The bus _____ (stop) here.",
                    "answer": "stops",
                    "options": ["stop", "stops", "stopping"]
                },
                {
                    "id": "e14",
                    "question": "Cats _____ (sleep) a lot.",
                    "answer": "sleep",
                    "options": ["sleep", "sleeps", "sleeping"]
                },
                {
                    "id": "e15",
                    "question": "He _____ (brush) his teeth.",
                    "answer": "brushes",
                    "options": ["brush", "brushes", "brushing"]
                }
            ]
        }
    },
    {
        "id": 3,
        "week": 2,
        "day": 3,
        "type": "reading",
        "title": "A Family Trip",
        "content": {
            "text": "On Saturday morning, Nadav goes on a trip with his family. They drive across a long bridge and look out the window to see a high mountain. The view is unusual and beautiful, with green trees everywhere. \"Look at that blue river!\" shouts his little sister, Shachar, pointing out the window.\n\nAfter a few hours, they stop at a small village to buy some food for lunch. They go to a market and buy fresh lemons and olive oil to make a tasty salad. The people in the village are very warm and friendly. Nadav takes a photo of a wide field near the market. He loves geography and nature.\n\nSuddenly, they see a big yellow sign on the road: \"Danger! Falling Rocks.\" They need to be careful as they drive past the cliffs. Nadav's dad drives slowly and safely. Finally, they continue their drive and reach an old open-air theater in the middle of the forest. A local band is playing happy music. It is a typical weekend for them, full of fun surprises.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What do they see after the bridge?",
                    "answer": "a high mountain"
                },
                {
                    "id": "q2",
                    "text": "What sign do they see?",
                    "answer": "Danger! Falling Rocks"
                },
                {
                    "id": "q3",
                    "text": "Who points at the river?",
                    "answer": "Shachar"
                },
                {
                    "id": "q4",
                    "text": "What do they buy in the village?",
                    "answer": "lemons and oil"
                },
                {
                    "id": "q5",
                    "text": "Where is the band playing?",
                    "answer": "in the theater"
                }
            ],
            "vocabulary": [
                {
                    "word": "bridge",
                    "translation": "גשר"
                },
                {
                    "word": "mountain",
                    "translation": "הר"
                },
                {
                    "word": "unusual",
                    "translation": "לא רגיל"
                },
                {
                    "word": "village",
                    "translation": "כפר"
                },
                {
                    "word": "nature",
                    "translation": "טבע"
                },
                {
                    "word": "careful",
                    "translation": "זהיר"
                },
                {
                    "word": "theater",
                    "translation": "תיאטרון"
                },
                {
                    "word": "typical",
                    "translation": "טיפוסי"
                },
                {
                    "word": "view",
                    "translation": "נוף"
                },
                {
                    "word": "shout",
                    "translation": "לצעוק"
                },
                {
                    "word": "point",
                    "translation": "להצביע"
                },
                {
                    "word": "market",
                    "translation": "שוק"
                },
                {
                    "word": "fresh",
                    "translation": "טרי"
                },
                {
                    "word": "tasty",
                    "translation": "טעים"
                },
                {
                    "word": "friendly",
                    "translation": "ידידותי"
                },
                {
                    "word": "sign",
                    "translation": "שלט"
                },
                {
                    "word": "cliffs",
                    "translation": "צוקים"
                },
                {
                    "word": "safely",
                    "translation": "בבטחה"
                },
                {
                    "word": "surprise",
                    "translation": "הפתעה"
                }
            ]
        }
    },
    {
        "id": 4,
        "week": 2,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: Nature",
        "content": {
            "text": "The wide world is full of wonders. We walk across the bridge and watch the water in the river. The weather is warm and the wind is whispering. We wonder where the white wolf went. With my wide eyes, I watch the waves crash on the rocks.",
            "tips": [
                "Focus on the 'w' sound: round your lips like you are blowing a candle.",
                "Practice the 'th' in 'weather' and 'with': put your tongue between your teeth."
            ],
            "vocabulary": [
                {
                    "word": "wonders",
                    "translation": "פלאים"
                },
                {
                    "word": "whispering",
                    "translation": "לוחשת"
                },
                {
                    "word": "waves",
                    "translation": "גלים"
                },
                {
                    "word": "crash",
                    "translation": "להתנפץ"
                }
            ]
        }
    },
    {
        "id": 5,
        "week": 2,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Hobbies",
        "content": {
            "topic": "Talk about your favorite hobbies and clubs.",
            "initialMessage": "Hi Nadav! I heard you joined a new club. That's awesome! Which club did you choose and why?"
        }
    },
    {
        "id": 6,
        "week": 3,
        "day": 1,
        "type": "reading",
        "title": "The Basketball YouTuber",
        "content": {
            "text": "Nadav loves watching YouTube after school, especially a channel called \"HoopsLife\". The YouTuber is a former professional player who teaches basketball skills to kids. Yesterday, he uploaded a fascinating video about the history of basketball. He explained how a man named James Naismith invented the game in 1891 using only two old peach baskets and a soccer ball.\n\nThe YouTuber showed the viewers how to do a perfect jump shot. He explained that while being fast is good, teamwork is the main key to winning any game. He looked at the camera and said, \"You must follow the rules, but also be creative on the court.\"\n\nNadav ran outside and practiced the moves in his yard for hours. He imagines being on a famous team one day, playing in a big stadium. He knows it is a long journey, but he is ready to work hard. He wants to amaze his friends at school with his new skills.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What is the name of the YouTube channel?",
                    "answer": "HoopsLife"
                },
                {
                    "id": "q2",
                    "text": "What is the main key to winning?",
                    "answer": "teamwork"
                },
                {
                    "id": "q3",
                    "text": "Who invented basketball?",
                    "answer": "James Naismith"
                },
                {
                    "id": "q4",
                    "text": "What did Naismith use for hoops?",
                    "answer": "peach baskets"
                },
                {
                    "id": "q5",
                    "text": "Who does Nadav want to amaze?",
                    "answer": "his friends"
                }
            ],
            "vocabulary": [
                {
                    "word": "skills",
                    "translation": "כישורים"
                },
                {
                    "word": "history",
                    "translation": "היסטוריה"
                },
                {
                    "word": "invented",
                    "translation": "המציא"
                },
                {
                    "word": "basket",
                    "translation": "סל"
                },
                {
                    "word": "teamwork",
                    "translation": "עבודת צוות"
                },
                {
                    "word": "key",
                    "translation": "מפתח"
                },
                {
                    "word": "creative",
                    "translation": "יצירתי"
                },
                {
                    "word": "amaze",
                    "translation": "להדהים"
                },
                {
                    "word": "professional",
                    "translation": "מקצועי"
                },
                {
                    "word": "fascinating",
                    "translation": "מרתק"
                },
                {
                    "word": "explain",
                    "translation": "להסביר"
                },
                {
                    "word": "jump shot",
                    "translation": "זריקת קפיצה"
                },
                {
                    "word": "court",
                    "translation": "מגרש"
                },
                {
                    "word": "rules",
                    "translation": "חוקים"
                },
                {
                    "word": "yard",
                    "translation": "חצר"
                },
                {
                    "word": "stadium",
                    "translation": "אצטדיון"
                }
            ]
        }
    },
    {
        "id": 7,
        "week": 3,
        "day": 2,
        "type": "grammar",
        "title": "Past Simple: Finished Actions",
        "content": {
            "rule": "We use the Past Simple for actions that started and finished in the past. Regular verbs add '-ed'. Irregular verbs change form.\nExample: watch -> watched, go -> went.",
            "exercises": [
                {
                    "id": "e1",
                    "question": "Yesterday, Nadav _____ (watch) a video.",
                    "answer": "watched"
                },
                {
                    "id": "e2",
                    "question": "James Naismith _____ (invent) basketball.",
                    "answer": "invented"
                },
                {
                    "id": "e3",
                    "question": "He _____ (go) to the park.",
                    "answer": "went"
                },
                {
                    "id": "e4",
                    "question": "We _____ (play) soccer.",
                    "answer": "played"
                },
                {
                    "id": "e5",
                    "question": "She _____ (visit) her grandma.",
                    "answer": "visited"
                },
                {
                    "id": "e6",
                    "question": "I _____ (see) a movie.",
                    "answer": "saw"
                },
                {
                    "id": "e7",
                    "question": "They _____ (walk) to school.",
                    "answer": "walked"
                },
                {
                    "id": "e8",
                    "question": "He _____ (buy) a computer.",
                    "answer": "bought"
                },
                {
                    "id": "e9",
                    "question": "We _____ (eat) pizza.",
                    "answer": "ate"
                },
                {
                    "id": "e10",
                    "question": "It _____ (rain) yesterday.",
                    "answer": "rained"
                },
                {
                    "id": "e11",
                    "question": "You _____ (do) your homework.",
                    "answer": "did"
                },
                {
                    "id": "e12",
                    "question": "The cat _____ (jump) on the table.",
                    "answer": "jumped"
                },
                {
                    "id": "e13",
                    "question": "I _____ (have) fun.",
                    "answer": "had"
                },
                {
                    "id": "e14",
                    "question": "She _____ (cook) dinner.",
                    "answer": "cooked"
                },
                {
                    "id": "e15",
                    "question": "They _____ (win) the game.",
                    "answer": "won"
                }
            ]
        }
    },
    {
        "id": 8,
        "week": 3,
        "day": 3,
        "type": "reading",
        "title": "Spider-Man's Story",
        "content": {
            "text": "Spider-Man is a very popular superhero known all over the world. But before that, Peter Parker was just a normal student who loved science and reading books. One day, a special spider bit him in a lab. He got amazing powers. He could suddenly climb walls and shoot webs from his hands.\n\nPeter decided to use his new powers to help people. He made a cool red and blue suit and called himself Spider-Man. He fights bad guys and saves the city from danger. But even superheroes have normal problems. He still has math homework and difficult exams.\n\nPeter's job is not easy. He has to form a plan to stop villains. Usually, he follows the bad guys quietly and confronts them directly. Sometimes he receives a lot of praise, but other times people are angry. He must also remember to feed his cat, write his history essay, and not fall in love too fast! He would prefer to just be a normal student sometimes. He even has to fill out a form for his physics homework tonight. It is a lot of work for one boy.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What did Peter Parker love?",
                    "answer": "science"
                },
                {
                    "id": "q2",
                    "text": "What does Peter have to fill out for physics?",
                    "answer": "a form"
                },
                {
                    "id": "q3",
                    "text": "What bit Peter?",
                    "answer": "a spider"
                },
                {
                    "id": "q4",
                    "text": "What color is his suit?",
                    "answer": "red and blue"
                },
                {
                    "id": "q5",
                    "text": "Who does he fight?",
                    "answer": "bad guys"
                }
            ],
            "vocabulary": [
                {
                    "word": "science",
                    "translation": "מדע"
                },
                {
                    "word": "climb",
                    "translation": "לטפס"
                },
                {
                    "word": "suit",
                    "translation": "חליפה"
                },
                {
                    "word": "fights",
                    "translation": "נלחם"
                },
                {
                    "word": "form",
                    "translation": "לנסח / טופס"
                },
                {
                    "word": "receive",
                    "translation": "לקבל"
                },
                {
                    "word": "praise",
                    "translation": "שבחים"
                },
                {
                    "word": "prefer",
                    "translation": "להעדיף"
                },
                {
                    "word": "superhero",
                    "translation": "גיבור על"
                },
                {
                    "word": "spider",
                    "translation": "עכביש"
                },
                {
                    "word": "webs",
                    "translation": "קורים"
                },
                {
                    "word": "villains",
                    "translation": "נבלים"
                },
                {
                    "word": "confront",
                    "translation": "להתעמת"
                },
                {
                    "word": "directly",
                    "translation": "ישירות"
                },
                {
                    "word": "physics",
                    "translation": "פיזיקה"
                },
                {
                    "word": "essay",
                    "translation": "חיבור"
                }
            ]
        }
    },
    {
        "id": 9,
        "week": 3,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: Past Events",
        "content": {
            "text": "Yesterday I walked to the park and looked at the birds. I played a game and talked to my friends. We laughed and danced. Then, it started to rain, so we waited under a tree. I loved that day because we were all together.",
            "tips": [
                "'-ed' can sound like 't' (walked, looked, laughed).",
                "'-ed' can sound like 'd' (played, loved, rained)."
            ],
            "vocabulary": [
                {
                    "word": "laughed",
                    "translation": "צחקנו"
                },
                {
                    "word": "danced",
                    "translation": "רקדנו"
                },
                {
                    "word": "waited",
                    "translation": "חיכינו"
                },
                {
                    "word": "together",
                    "translation": "ביחד"
                }
            ]
        }
    },
    {
        "id": 10,
        "week": 3,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Superpowers",
        "content": {
            "topic": "If you could have a superpower.",
            "initialMessage": "Hey! If you could be a superhero for one day, which superpower would you choose? Flying, invisibility, or super strength?"
        }
    },
    {
        "id": 11,
        "week": 4,
        "day": 1,
        "type": "reading",
        "title": "Understanding AI",
        "content": {
            "text": "Artificial Intelligence, or AI, is changing our world very fast. Nadav uses AI tools to help him study for his tests. He asks the computer questions, and it answers fast with good information. AI is like a very smart robot brain inside the computer that never gets tired.\n\nSome people think AI will do everything for us in the future. It might drive our cars, clean our houses, or even cook our food. Nadav thinks this is exciting. He wants to learn how to code so he can build his own AI program to help students learn math.\n\nBut we must be careful with this new power. AI needs humans to teach it right from wrong. It learns from us, so we are its teachers. If we are good, the AI will be good. It is an important partnership between humans and machines. We need to guide it correctly so it helps everyone.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What does Nadav use AI for?",
                    "answer": "to study"
                },
                {
                    "id": "q2",
                    "text": "Who needs to teach AI?",
                    "answer": "humans"
                },
                {
                    "id": "q3",
                    "text": "What is AI like inside the computer?",
                    "answer": "a smart robot brain"
                },
                {
                    "id": "q4",
                    "text": "What does Nadav want to build?",
                    "answer": "his own AI program"
                },
                {
                    "id": "q5",
                    "text": "What kind of relationship is it?",
                    "answer": "a partnership"
                }
            ],
            "vocabulary": [
                {
                    "word": "artificial",
                    "translation": "מלאכותי"
                },
                {
                    "word": "brain",
                    "translation": "מוח"
                },
                {
                    "word": "future",
                    "translation": "עתיד"
                },
                {
                    "word": "program",
                    "translation": "תוכנית"
                },
                {
                    "word": "partnership",
                    "translation": "שותפות"
                },
                {
                    "word": "guide",
                    "translation": "להדריך"
                },
                {
                    "word": "correctly",
                    "translation": "בצורה נכונה"
                },
                {
                    "word": "humans",
                    "translation": "בני אדם"
                },
                {
                    "word": "tired",
                    "translation": "עייף"
                },
                {
                    "word": "exciting",
                    "translation": "מרתק/מלהיב"
                },
                {
                    "word": "code",
                    "translation": "קוד / לקודד"
                },
                {
                    "word": "power",
                    "translation": "כוח"
                },
                {
                    "word": "machines",
                    "translation": "מכונות"
                }
            ]
        }
    },
    {
        "id": 12,
        "week": 4,
        "day": 2,
        "type": "grammar",
        "title": "Future Simple: Predictions",
        "content": {
            "rule": "We use 'will' + verb to talk about the future or make predictions.\nExample: It will rain tomorrow. I will help you.",
            "exercises": [
                {
                    "id": "e1",
                    "question": "Cars _____ (fly) in the future.",
                    "answer": "will fly"
                },
                {
                    "id": "e2",
                    "question": "I _____ (be) a programmer.",
                    "answer": "will be"
                },
                {
                    "id": "e3",
                    "question": "Robots _____ (cook) dinner.",
                    "answer": "will cook"
                },
                {
                    "id": "e4",
                    "question": "It _____ (rain) tomorrow.",
                    "answer": "will rain"
                },
                {
                    "id": "e5",
                    "question": "We _____ (visit) the moon.",
                    "answer": "will visit"
                },
                {
                    "id": "e6",
                    "question": "She _____ (help) you.",
                    "answer": "will help"
                },
                {
                    "id": "e7",
                    "question": "They _____ (win) the cup.",
                    "answer": "will win"
                },
                {
                    "id": "e8",
                    "question": "I _____ (call) you.",
                    "answer": "will call"
                },
                {
                    "id": "e9",
                    "question": "He _____ (buy) a car.",
                    "answer": "will buy"
                },
                {
                    "id": "e10",
                    "question": "Tech _____ (change) lives.",
                    "answer": "will change"
                },
                {
                    "id": "e11",
                    "question": "You _____ (love) this.",
                    "answer": "will love"
                },
                {
                    "id": "e12",
                    "question": "We _____ (go) to the beach.",
                    "answer": "will go"
                },
                {
                    "id": "e13",
                    "question": "The teacher _____ (explain) it.",
                    "answer": "will explain"
                },
                {
                    "id": "e14",
                    "question": "Everyone _____ (have) a robot.",
                    "answer": "will have"
                },
                {
                    "id": "e15",
                    "question": "I _____ (finish) soon.",
                    "answer": "will finish"
                }
            ]
        }
    },
    {
        "id": 13,
        "week": 4,
        "day": 3,
        "type": "reading",
        "title": "Electric Cars",
        "content": {
            "text": "Electric cars are becoming very popular all over the world. They do not use gas like old cars. Instead, they use big, powerful batteries. This is much better for the planet because it is cleaner and quieter for everyone.\n\nTesla is a famous company that makes many electric cars. Some of them can even drive themselves! Nadav's dad wants to buy a new electric car soon. He says it is quiet and feels very smooth on the road. You do not go to a gas station. You simply plug it into the wall to charge it, just like a mobile phone.\n\nIn the future, maybe all cars will be electric. This change will help stop pollution in our cities. Nadav hopes to drive a cool electric sports car when he finally gets his license. It is certain that technology will improve and cars will become even better.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What do electric cars use instead of gas?",
                    "answer": "batteries"
                },
                {
                    "id": "q2",
                    "text": "What does Nadav want to drive in the future?",
                    "answer": "electric sports car"
                },
                {
                    "id": "q3",
                    "text": "What is good for the planet?",
                    "answer": "electric cars"
                },
                {
                    "id": "q4",
                    "text": "How do you charge the car?",
                    "answer": "plug it into the wall"
                },
                {
                    "id": "q5",
                    "text": "What will electric cars help stop?",
                    "answer": "pollution"
                }
            ],
            "vocabulary": [
                {
                    "word": "planet",
                    "translation": "כוכב לכת"
                },
                {
                    "word": "cleaner",
                    "translation": "נקי יותר"
                },
                {
                    "word": "batteries",
                    "translation": "סוללות"
                },
                {
                    "word": "famous",
                    "translation": "מפורסם"
                },
                {
                    "word": "charge",
                    "translation": "להטעין"
                },
                {
                    "word": "pollution",
                    "translation": "זיהום"
                },
                {
                    "word": "license",
                    "translation": "רישיון"
                },
                {
                    "word": "improve",
                    "translation": "להשתפר"
                },
                {
                    "word": "gas",
                    "translation": "דלק"
                },
                {
                    "word": "powerful",
                    "translation": "עוצמתי"
                },
                {
                    "word": "quieter",
                    "translation": "שקט יותר"
                },
                {
                    "word": "company",
                    "translation": "חברה"
                },
                {
                    "word": "smooth",
                    "translation": "חלק"
                },
                {
                    "word": "simply",
                    "translation": "פשוט"
                },
                {
                    "word": "plug",
                    "translation": "לחבר לחשמל"
                },
                {
                    "word": "certain",
                    "translation": "בטוח"
                }
            ]
        }
    },
    {
        "id": 14,
        "week": 4,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: The Future",
        "content": {
            "text": "The robot ran down the road. It was ready to race. The red car roared like a rocket. Raining is rare in this region. We realize the real reason for the race. Are you ready to ride in the red rocket?",
            "tips": [
                "Focus on the 'r' sound: curl your tongue back, do not roll it like in Spanish.",
                "Practice the flow: 'ready to race' should sound smooth and connected."
            ],
            "vocabulary": [
                {
                    "word": "race",
                    "translation": "מירוץ"
                },
                {
                    "word": "roared",
                    "translation": "שאג"
                },
                {
                    "word": "rare",
                    "translation": "נדיר"
                },
                {
                    "word": "region",
                    "translation": "אזור"
                }
            ]
        }
    },
    {
        "id": 15,
        "week": 4,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Future Tech",
        "content": {
            "topic": "Robots and the Future.",
            "initialMessage": "Hello! Do you think you will have a robot helper in your house in the future? What would you ask it to do for you?"
        }
    },
    {
        "id": 16,
        "week": 5,
        "day": 1,
        "type": "reading",
        "title": "Amazing Drones",
        "content": {
            "text": "Drones are small flying machines that are becoming very popular. You control them with a handheld remote or even a phone. Some drones have high-quality cameras attached to them. They can take beautiful photos from high in the sky. Nadav thinks drones are awesome and wants one for his birthday.\n\nThere are even exciting drone races! Professional pilots wear special goggles to see exactly what the drone sees. It feels like they are flying inside the drone itself. The drones fly very fast through small hoops and dark tunnels.\n\nFarmers also use drones to check their fields and crops. Police use them to find lost people in forests. Drones are not just fun toys; they are very useful tools for many jobs. It is possible to see the whole nation from above with these amazing machines.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What do pilots wear to see?",
                    "answer": "special goggles"
                },
                {
                    "id": "q2",
                    "text": "Who uses drones to check fields?",
                    "answer": "farmers"
                },
                {
                    "id": "q3",
                    "text": "How do you control a drone?",
                    "answer": "with a remote"
                },
                {
                    "id": "q4",
                    "text": "Where do racing drones fly?",
                    "answer": "through hoops and tunnels"
                },
                {
                    "id": "q5",
                    "text": "What does Nadav think about drones?",
                    "answer": "they are awesome"
                }
            ],
            "vocabulary": [
                {
                    "word": "machines",
                    "translation": "מכונות"
                },
                {
                    "word": "control",
                    "translation": "לשלוט"
                },
                {
                    "word": "remote",
                    "translation": "שלט"
                },
                {
                    "word": "goggles",
                    "translation": "משקפת מגן"
                },
                {
                    "word": "tunnels",
                    "translation": "מנהרות"
                },
                {
                    "word": "farmers",
                    "translation": "חקלאים"
                },
                {
                    "word": "useful",
                    "translation": "שימושי"
                },
                {
                    "word": "nation",
                    "translation": "אומה"
                },
                {
                    "word": "handheld",
                    "translation": "כף יד"
                },
                {
                    "word": "camera",
                    "translation": "מצלמה"
                },
                {
                    "word": "attached",
                    "translation": "מחובר"
                },
                {
                    "word": "awesome",
                    "translation": "מדהים"
                },
                {
                    "word": "pilot",
                    "translation": "טייס"
                },
                {
                    "word": "hoops",
                    "translation": "חישוקים"
                },
                {
                    "word": "crops",
                    "translation": "יבולים"
                },
                {
                    "word": "police",
                    "translation": "משטרה"
                },
                {
                    "word": "toy",
                    "translation": "צעצוע"
                },
                {
                    "word": "possible",
                    "translation": "אפשרי"
                }
            ]
        }
    },
    {
        "id": 17,
        "week": 5,
        "day": 2,
        "type": "grammar",
        "title": "Comparatives: Comparing Things",
        "content": {
            "rule": "To compare two things, add '-er' to short adjectives (fast -> faster) or use 'more' for long adjectives (expensive -> more expensive).\nDon't forget to use 'than'.",
            "exercises": [
                {
                    "id": "e1",
                    "question": "A drone is _____ (fast) than a bike.",
                    "answer": "faster"
                },
                {
                    "id": "e2",
                    "question": "This game is _____ (exciting) than that.",
                    "answer": "more exciting"
                },
                {
                    "id": "e3",
                    "question": "My phone is _____ (small) than yours.",
                    "answer": "smaller"
                },
                {
                    "id": "e4",
                    "question": "Summer is _____ (hot) than winter.",
                    "answer": "hotter"
                },
                {
                    "id": "e5",
                    "question": "An elephant is _____ (big) than a mouse.",
                    "answer": "bigger"
                },
                {
                    "id": "e6",
                    "question": "This book is _____ (interesting) than the movie.",
                    "answer": "more interesting"
                },
                {
                    "id": "e7",
                    "question": "A car is _____ (expensive) than a bike.",
                    "answer": "more expensive"
                },
                {
                    "id": "e8",
                    "question": "I am _____ (tall) than him.",
                    "answer": "taller"
                },
                {
                    "id": "e9",
                    "question": "Today is _____ (cold) than yesterday.",
                    "answer": "colder"
                },
                {
                    "id": "e10",
                    "question": "English is _____ (easy) than Chinese.",
                    "answer": "easier"
                },
                {
                    "id": "e11",
                    "question": "My bag is _____ (heavy) than yours.",
                    "answer": "heavier"
                },
                {
                    "id": "e12",
                    "question": "This test was _____ (difficult).",
                    "answer": "more difficult"
                },
                {
                    "id": "e13",
                    "question": "Running is _____ (tiring).",
                    "answer": "more tiring"
                },
                {
                    "id": "e14",
                    "question": "A cheetah is _____ (fast) than a lion.",
                    "answer": "faster"
                },
                {
                    "id": "e15",
                    "question": "She is _____ (old) than me.",
                    "answer": "older"
                }
            ]
        }
    },
    {
        "id": 18,
        "week": 5,
        "day": 3,
        "type": "reading",
        "title": "The Smart Home",
        "content": {
            "text": "Imagine a house where the lights turn on automatically when you walk in. The smart fridge orders milk when you run out. This is called a \"Smart Home\" or the \"Internet of Things\". It sounds like magic, but it is real.\n\nIn a smart home, many devices talk to each other to help you. You can tell your house, \"I am cold,\" and the heater turns on to warm you up. Nadav wants a smart room. He wants his window blinds to open automatically in the morning to wake him up with sunlight.\n\nThis technology makes life easier and more comfortable. But you need good internet for everything to work. If the internet stops, your house might stop working too! It is funny to think about a smart toaster needing wifi just to brown your bread for breakfast.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What orders milk when you run out?",
                    "answer": "the smart fridge"
                },
                {
                    "id": "q2",
                    "text": "What does a smart toaster need?",
                    "answer": "wifi"
                },
                {
                    "id": "q3",
                    "text": "What talks to each other in a smart home?",
                    "answer": "devices"
                },
                {
                    "id": "q4",
                    "text": "What does Nadav want to open automatically?",
                    "answer": "his window blinds"
                },
                {
                    "id": "q5",
                    "text": "What does the technology make easier?",
                    "answer": "life"
                }
            ],
            "vocabulary": [
                {
                    "word": "fridge",
                    "translation": "מקרר"
                },
                {
                    "word": "devices",
                    "translation": "מכשירים"
                },
                {
                    "word": "heater",
                    "translation": "תנור חימום"
                },
                {
                    "word": "automatically",
                    "translation": "באופן אוטומטי"
                },
                {
                    "word": "technology",
                    "translation": "טכנולוגיה"
                },
                {
                    "word": "easier",
                    "translation": "קל יותר"
                },
                {
                    "word": "toaster",
                    "translation": "טוסטר"
                },
                {
                    "word": "internet",
                    "translation": "אינטרנט"
                },
                {
                    "word": "order",
                    "translation": "להזמין"
                },
                {
                    "word": "run out",
                    "translation": "נגמר"
                },
                {
                    "word": "magic",
                    "translation": "קסם"
                },
                {
                    "word": "blinds",
                    "translation": "תריסים/וילונות"
                },
                {
                    "word": "sunlight",
                    "translation": "אור שמש"
                },
                {
                    "word": "comfortable",
                    "translation": "נוח"
                },
                {
                    "word": "wifi",
                    "translation": "וייפיי"
                }
            ]
        }
    },
    {
        "id": 19,
        "week": 5,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: Vowels",
        "content": {
            "text": "This is a bit tricky. The ship is big, but the sheep is sleeping. Sit on the seat and feel the heat. Did you fit your feet in the shoes? It is a hit to eat the meat. Please leave the leaf on the tree.",
            "tips": [
                "Short 'i' (ship, sit, fit) is quick and sharp.",
                "Long 'ea/ee' (sheep, seat, heat) is a longer sound, like a smile."
            ],
            "vocabulary": [
                {
                    "word": "tricky",
                    "translation": "מסובך"
                },
                {
                    "word": "seat",
                    "translation": "מושב"
                },
                {
                    "word": "fit",
                    "translation": "להתאים"
                },
                {
                    "word": "leaf",
                    "translation": "עלה"
                }
            ]
        }
    },
    {
        "id": 20,
        "week": 5,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Gadgets",
        "content": {
            "topic": "Cool Gadgets.",
            "initialMessage": "Hi! What is the coolest gadget you have or want to have? A drone, a smart watch, or maybe VR goggles?"
        }
    },
    {
        "id": 21,
        "week": 6,
        "day": 1,
        "type": "reading",
        "title": "Virtual Reality",
        "content": {
            "text": "Virtual Reality, or VR, is a new technology that takes you to another world. You wear a special headset over your eyes and ears. Suddenly, you are not in your bedroom anymore. You are floating in space, or swimming under the deep blue ocean!\n\nNadav tried VR at the mall last week. He played a fantasy game where he had to fight big dragons with a shiny sword. It felt so real. He moved his arms and the game copied him exactly. He was sweating from the excitement.\n\nVR is great for gaming, but also for learning. Doctors use it to practice difficult operations before touching a real patient. Students use it to visit historical places without traveling. It is the future of entertainment and education.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What do you wear for VR?",
                    "answer": "a headset"
                },
                {
                    "id": "q2",
                    "text": "What did Nadav fight in the game?",
                    "answer": "dragons"
                },
                {
                    "id": "q3",
                    "text": "What did the game copy?",
                    "answer": "his moves"
                },
                {
                    "id": "q4",
                    "text": "Who uses VR to practice operations?",
                    "answer": "doctors"
                },
                {
                    "id": "q5",
                    "text": "Where can students visit with VR?",
                    "answer": "historical places"
                }
            ],
            "vocabulary": [
                {
                    "word": "technology",
                    "translation": "טכנולוגיה"
                },
                {
                    "word": "headset",
                    "translation": "קסדה/אוזניות"
                },
                {
                    "word": "ocean",
                    "translation": "אוקיינוס"
                },
                {
                    "word": "sword",
                    "translation": "חרב"
                },
                {
                    "word": "copied",
                    "translation": "חיקה/העתיק"
                },
                {
                    "word": "operations",
                    "translation": "ניתוחים"
                },
                {
                    "word": "entertainment",
                    "translation": "בידור"
                },
                {
                    "word": "education",
                    "translation": "חינוך"
                },
                {
                    "word": "float",
                    "translation": "לצוף"
                },
                {
                    "word": "deep",
                    "translation": "עמוק"
                },
                {
                    "word": "mall",
                    "translation": "קניון"
                },
                {
                    "word": "fantasy",
                    "translation": "פנטזיה"
                },
                {
                    "word": "dragon",
                    "translation": "דרקון"
                },
                {
                    "word": "shiny",
                    "translation": "מבריק"
                },
                {
                    "word": "sweat",
                    "translation": "להזיע"
                },
                {
                    "word": "patient",
                    "translation": "חולה/מטופל"
                },
                {
                    "word": "historical",
                    "translation": "היסטורי"
                }
            ]
        }
    },
    {
        "id": 22,
        "week": 6,
        "day": 2,
        "type": "grammar",
        "title": "Superlatives: The Best and Worst",
        "content": {
            "rule": "To compare three or more things (the #1), add '-est' to short adjectives (fast -> the fastest) or use 'the most' for long adjectives (expensive -> the most expensive).\nExample: Everest is the highest mountain.",
            "exercises": [
                {
                    "id": "e1",
                    "question": "Jupiter is the _____ (big) planet.",
                    "answer": "biggest"
                },
                {
                    "id": "e2",
                    "question": "This is the _____ (fun) game.",
                    "answer": "funniest"
                },
                {
                    "id": "e3",
                    "question": "He is the _____ (famous) player.",
                    "answer": "most famous"
                },
                {
                    "id": "e4",
                    "question": "Everest is the _____ (high) mountain.",
                    "answer": "highest"
                },
                {
                    "id": "e5",
                    "question": "She is the _____ (smart) girl.",
                    "answer": "smartest"
                },
                {
                    "id": "e6",
                    "question": "This is the _____ (good) pizza.",
                    "answer": "best"
                },
                {
                    "id": "e7",
                    "question": "That was the _____ (bad) movie.",
                    "answer": "worst"
                },
                {
                    "id": "e8",
                    "question": "Winter is the _____ (cold) season.",
                    "answer": "coldest"
                },
                {
                    "id": "e9",
                    "question": "Cheetahs are the _____ (fast) animals.",
                    "answer": "fastest"
                },
                {
                    "id": "e10",
                    "question": "The _____ (expensive) car.",
                    "answer": "most expensive"
                },
                {
                    "id": "e11",
                    "question": "The _____ (interesting) book.",
                    "answer": "most interesting"
                },
                {
                    "id": "e12",
                    "question": "He is the _____ (tall) boy.",
                    "answer": "tallest"
                },
                {
                    "id": "e13",
                    "question": "The _____ (dangerous) animal.",
                    "answer": "most dangerous"
                },
                {
                    "id": "e14",
                    "question": "July is the _____ (hot) month.",
                    "answer": "hottest"
                },
                {
                    "id": "e15",
                    "question": "This puzzle is the _____ (hard).",
                    "answer": "hardest"
                }
            ]
        }
    },
    {
        "id": 23,
        "week": 6,
        "day": 3,
        "type": "reading",
        "title": "Clean Energy",
        "content": {
            "text": "We use a lot of electricity every day for our lights, phones, and computers. Usually, we burn coal or oil to make this power. This is bad for the Earth because it creates pollution. But there is a better way: Renewable Energy. This means energy that does not run out and is clean.\n\nSolar power comes from the sun. Wind power comes from the wind. You can see big white wind turbines on hills. They spin in the wind and make electricity. Solar panels are put on roofs to catch sunlight.\n\nNadav thinks this is important for our future. If we use the sun and wind, we keep the air clean. It is free energy from nature. We just need the technology to catch it. It is a foreign concept to some, but vital for us.",
            "questions": [
                {
                    "id": "q1",
                    "text": "Where does solar power come from?",
                    "answer": "the sun"
                },
                {
                    "id": "q2",
                    "text": "What do wind turbines make?",
                    "answer": "electricity"
                },
                {
                    "id": "q3",
                    "text": "What is usually burned to make power?",
                    "answer": "coal or oil"
                },
                {
                    "id": "q4",
                    "text": "Where are solar panels put?",
                    "answer": "on roofs"
                },
                {
                    "id": "q5",
                    "text": "What is vital for us?",
                    "answer": "renewable energy"
                }
            ],
            "vocabulary": [
                {
                    "word": "electricity",
                    "translation": "חשמל"
                },
                {
                    "word": "coal",
                    "translation": "פחם"
                },
                {
                    "word": "renewable",
                    "translation": "מתחדש"
                },
                {
                    "word": "energy",
                    "translation": "אנרגיה"
                },
                {
                    "word": "turbines",
                    "translation": "טורבינות"
                },
                {
                    "word": "panels",
                    "translation": "לוחות (סולאריים)"
                },
                {
                    "word": "foreign",
                    "translation": "זר"
                },
                {
                    "word": "vital",
                    "translation": "חיוני"
                },
                {
                    "word": "burn",
                    "translation": "לשרוף"
                },
                {
                    "word": "solar",
                    "translation": "סולארי"
                },
                {
                    "word": "wind",
                    "translation": "רוח"
                },
                {
                    "word": "hills",
                    "translation": "גבעות"
                },
                {
                    "word": "spin",
                    "translation": "להסתובב"
                },
                {
                    "word": "roof",
                    "translation": "גג"
                },
                {
                    "word": "catch",
                    "translation": "לתפוס"
                },
                {
                    "word": "concept",
                    "translation": "מושג/רעיון"
                }
            ]
        }
    },
    {
        "id": 24,
        "week": 6,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: Clusters",
        "content": {
            "text": "The strong spring stream is strange. I scream for ice cream on the screen. The spray spreads in the spring. Don't stress on the street. Strike the string straight. The strong student studied eagerly.",
            "tips": [
                "Practice 'str' (street, strong): say s-t-r quickly together.",
                "Practice 'spr' (spring, spray): say s-p-r quickly without adding a vowel in between."
            ],
            "vocabulary": [
                {
                    "word": "stream",
                    "translation": "נחל"
                },
                {
                    "word": "strange",
                    "translation": "מוזר"
                },
                {
                    "word": "spreads",
                    "translation": "מתפשט"
                },
                {
                    "word": "eagerly",
                    "translation": "בלהיטות"
                }
            ]
        }
    },
    {
        "id": 25,
        "week": 6,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: VR Worlds",
        "content": {
            "topic": "Visiting Virtual Worlds.",
            "initialMessage": "Hello! If you could visit any place in Virtual Reality right now, where would you go? Space, a volcano, or maybe the past?"
        }
    },
    {
        "id": 26,
        "week": 7,
        "day": 1,
        "type": "reading",
        "title": "Learning to Code",
        "content": {
            "text": "Coding is the language of computers. When you write code, you give special instructions to the machine to tell it what to do. It is like writing a recipe for a cake, but instead of food, you are making a program.\n\nNadav is learning Python, which is a popular coding language. He sits at his computer and writes lines of text. Suddenly, the computer draws shapes on the screen. He feels like a wizard casting spells. If he makes a mistake, it is called a 'bug'. He has to look closely to find the bug and fix it.\n\nCoders build everything we use on phones and computers: apps, websites, and video games. It is a very useful skill to have. Nadav wants to build his own app for his friends to use. It is hard work, but he will continue to learn every day.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What is a mistake in code called?",
                    "answer": "a bug"
                },
                {
                    "id": "q2",
                    "text": "What language is Nadav learning?",
                    "answer": "Python"
                },
                {
                    "id": "q3",
                    "text": "What is coding like?",
                    "answer": "writing a recipe"
                },
                {
                    "id": "q4",
                    "text": "What does Nadav feel like?",
                    "answer": "a wizard"
                },
                {
                    "id": "q5",
                    "text": "What do coders build?",
                    "answer": "apps and websites"
                }
            ],
            "vocabulary": [
                {
                    "word": "language",
                    "translation": "שפה"
                },
                {
                    "word": "instructions",
                    "translation": "הוראות"
                },
                {
                    "word": "recipe",
                    "translation": "מתכון"
                },
                {
                    "word": "wizard",
                    "translation": "קוסם"
                },
                {
                    "word": "mistake",
                    "translation": "טעות"
                },
                {
                    "word": "fix",
                    "translation": "לתקן"
                },
                {
                    "word": "websites",
                    "translation": "אתרי אינטרנט"
                },
                {
                    "word": "continue",
                    "translation": "להמשיך"
                },
                {
                    "word": "coding",
                    "translation": "קידוד"
                },
                {
                    "word": "cake",
                    "translation": "עוגה"
                },
                {
                    "word": "draw",
                    "translation": "לצייר"
                },
                {
                    "word": "shape",
                    "translation": "צורה"
                },
                {
                    "word": "cast",
                    "translation": "להטיל"
                },
                {
                    "word": "spell",
                    "translation": "כישוף"
                },
                {
                    "word": "bug",
                    "translation": "באג/טעות תכנות"
                },
                {
                    "word": "coder",
                    "translation": "מקודד/מתכנת"
                },
                {
                    "word": "app",
                    "translation": "אפליקציה"
                }
            ]
        }
    },
    {
        "id": 27,
        "week": 7,
        "day": 2,
        "type": "grammar",
        "title": "Modals: Should and Must",
        "content": {
            "rule": "Use 'should' for advice (it's a good idea). Use 'must' for rules (it is necessary/obligatory).\nExample: You should sleep early. You must stop at red lights.",
            "exercises": [
                {
                    "id": "e1",
                    "question": "You _____ (should/must) brush your teeth.",
                    "answer": "should"
                },
                {
                    "id": "e2",
                    "question": "Drivers _____ (should/must) stop.",
                    "answer": "must"
                },
                {
                    "id": "e3",
                    "question": "It rains, you _____ (should/must) take an umbrella.",
                    "answer": "should"
                },
                {
                    "id": "e4",
                    "question": "We _____ (should/must) be quiet.",
                    "answer": "must"
                },
                {
                    "id": "e5",
                    "question": "You _____ (should/must) eat veggies.",
                    "answer": "should"
                },
                {
                    "id": "e6",
                    "question": "Students _____ (should/must) listen.",
                    "answer": "must"
                },
                {
                    "id": "e7",
                    "question": "I _____ (should/must) finish homework.",
                    "answer": "should"
                },
                {
                    "id": "e8",
                    "question": "You _____ (should/must) look both ways.",
                    "answer": "must"
                },
                {
                    "id": "e9",
                    "question": "He _____ (should/must) see a doctor.",
                    "answer": "should"
                },
                {
                    "id": "e10",
                    "question": "We _____ (should/must) not litter.",
                    "answer": "must"
                },
                {
                    "id": "e11",
                    "question": "You _____ (should/must) be kind.",
                    "answer": "should"
                },
                {
                    "id": "e12",
                    "question": "Soldiers _____ (should/must) wear uniforms.",
                    "answer": "must"
                },
                {
                    "id": "e13",
                    "question": "You _____ (should/must) try this.",
                    "answer": "should"
                },
                {
                    "id": "e14",
                    "question": "We _____ (should/must) follow rules.",
                    "answer": "must"
                },
                {
                    "id": "e15",
                    "question": "You _____ (should/must) call mom.",
                    "answer": "should"
                }
            ]
        }
    },
    {
        "id": 28,
        "week": 7,
        "day": 3,
        "type": "reading",
        "title": "Social Media Safety",
        "content": {
            "text": "Social media is fun, but you must be safe. Apps like TikTok and Instagram let you share photos and videos with the world. It is fun to see what your friends are doing.\n\nHowever, not everyone online is a friend. You should never give your address or phone number to strangers. Also, people often only show the good parts of their lives online. Do not feel bad if their life looks perfect. It is not always real. People use filters and edit their pictures.\n\nNadav has a private account. This means only his real friends can see his posts. This is the best way to enjoy social media safely. He is very careful about anybody who wants to follow him. He keeps his information safe.",
            "questions": [
                {
                    "id": "q1",
                    "text": "What should you never give to strangers?",
                    "answer": "address or phone number"
                },
                {
                    "id": "q2",
                    "text": "What kind of account does Nadav have?",
                    "answer": "private account"
                },
                {
                    "id": "q3",
                    "text": "What do apps let you share?",
                    "answer": "photos and videos"
                },
                {
                    "id": "q4",
                    "text": "Who can see Nadav's posts?",
                    "answer": "his real friends"
                },
                {
                    "id": "q5",
                    "text": "What is not always real?",
                    "answer": "online lives"
                }
            ],
            "vocabulary": [
                {
                    "word": "safe",
                    "translation": "בטוח"
                },
                {
                    "word": "share",
                    "translation": "לשתף"
                },
                {
                    "word": "strangers",
                    "translation": "זרים"
                },
                {
                    "word": "perfect",
                    "translation": "מושלם"
                },
                {
                    "word": "private",
                    "translation": "פרטי"
                },
                {
                    "word": "account",
                    "translation": "חשבון"
                },
                {
                    "word": "careful",
                    "translation": "זהיר"
                },
                {
                    "word": "anybody",
                    "translation": "מישהו/כל אחד"
                },
                {
                    "word": "media",
                    "translation": "מדיה/תקשורת"
                },
                {
                    "word": "address",
                    "translation": "כתובת"
                },
                {
                    "word": "filters",
                    "translation": "פילטרים"
                },
                {
                    "word": "edit",
                    "translation": "לערוך"
                },
                {
                    "word": "post",
                    "translation": "פוסט/לפרסם"
                }
            ]
        }
    },
    {
        "id": 29,
        "week": 7,
        "day": 4,
        "type": "pronunciation",
        "title": "Reading Aloud: Sentences",
        "content": {
            "text": "I should go home now. We must finish the game. Can you help me with the code? I will post the photo later. Please don't share my password. Be safe and have fun. According to the rules, we must play fair.",
            "tips": [
                "Stress the important words (verbs and nouns) to sound natural.",
                "Don't stress small words like 'the', 'a', 'to'. Glide over them."
            ],
            "vocabulary": [
                {
                    "word": "finish",
                    "translation": "לסיים"
                },
                {
                    "word": "password",
                    "translation": "סיסמה"
                },
                {
                    "word": "share",
                    "translation": "לשתף"
                },
                {
                    "word": "fair",
                    "translation": "בהגינות"
                }
            ]
        }
    },
    {
        "id": 30,
        "week": 7,
        "day": 5,
        "type": "chatbot",
        "title": "Chat: Online Life",
        "content": {
            "topic": "Social Media and Safety.",
            "initialMessage": "Hi! Do you use social media? What is your favorite app? How do you stay safe online?"
        }
    },
    {
        "id": 106,
        "week": 1,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 1"
        }
    },
    {
        "id": 31,
        "week": 2,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 2"
        }
    },
    {
        "id": 32,
        "week": 3,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 3"
        }
    },
    {
        "id": 33,
        "week": 4,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 4"
        }
    },
    {
        "id": 34,
        "week": 5,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 5"
        }
    },
    {
        "id": 35,
        "week": 6,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 6"
        }
    },
    {
        "id": 36,
        "week": 7,
        "day": 6,
        "type": "vocabulary",
        "title": "Weekly Vocabulary Review",
        "content": {
            "description": "Review all words from Week 7"
        }
    }
];