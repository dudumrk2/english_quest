import { Lesson } from '../types';

export const lessons: Lesson[] = [
    // WEEK 1
    {
        id: 1,
        week: 1,
        day: 1,
        type: 'reading',
        title: 'The History of Video Games',
        content: {
            text: "Video games have come a long way since the 1970s. The first popular game was Pong, a simple tennis game. Today, games like Fortnite and Minecraft have millions of players. Graphics are realistic, and players can connect with friends all over the world. Gaming is not just a hobby; it is a professional sport called e-sports.",
            questions: [
                { id: 'q1', text: "What was the first popular video game?", answer: "Pong" },
                { id: 'q2', text: "What is professional gaming called?", answer: "e-sports" }
            ],
            vocabulary: [
                { word: "realistic", translation: "מציאותי" },
                { word: "connect", translation: "להתחבר" },
                { word: "hobby", translation: "תחביב" }
            ]
        }
    },
    {
        id: 2,
        week: 1,
        day: 2,
        type: 'grammar',
        title: 'Present Simple: Daily Routine',
        content: {
            rule: "We use Present Simple for things we do every day. Example: I play, He plays.",
            exercises: [
                { id: 'e1', question: "I ___ (play) Minecraft every day.", answer: "play" },
                { id: 'e2', question: "Nadav ___ (watch) YouTube videos.", answer: "watches" },
                { id: 'e3', question: "They ___ (go) to school by bus.", answer: "go" }
            ]
        }
    },
    {
        id: 3,
        week: 1,
        day: 3,
        type: 'reading',
        title: 'Space Exploration',
        content: {
            text: "Humans have always wanted to explore space. In 1969, Neil Armstrong was the first person to walk on the moon. Now, companies like SpaceX want to send people to Mars. Mars is called the Red Planet. It is very cold and has no air for us to breathe, but scientists are looking for ways to live there.",
            questions: [
                { id: 'q1', text: "Who was the first person on the moon?", answer: "Neil Armstrong" },
                { id: 'q2', text: "Which planet is called the Red Planet?", answer: "Mars" }
            ],
            vocabulary: [
                { word: "explore", translation: "לחקור" },
                { word: "breathe", translation: "לנשום" },
                { word: "scientist", translation: "מדען" }
            ]
        }
    },
    {
        id: 4,
        week: 1,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Technology',
        content: {
            text: "Technology changes our lives every day. Smartphones help us talk to friends. Computers help us learn new things. In the future, robots might do our homework!",
            tips: ["Focus on the 'th' sound in 'Technology' and 'things'.", "Pause after periods."]
        }
    },
    {
        id: 5,
        week: 1,
        day: 5,
        type: 'chatbot',
        title: 'Chat: Favorite Games',
        content: {
            topic: "Tell me about your favorite video game. Why do you like it?",
            initialMessage: "Hi Nadav! I love video games. What is your favorite game right now?"
        }
    },

    // WEEK 2
    {
        id: 6,
        week: 2,
        day: 1,
        type: 'reading',
        title: 'The World of YouTube',
        content: {
            text: "YouTube is the biggest video site in the world. You can find videos about everything: music, gaming, cooking, and science. Many people want to be YouTubers. To be successful, you need to be creative and upload videos regularly. Some YouTubers have millions of subscribers.",
            questions: [
                { id: 'q1', text: "What do you need to be to be a successful YouTuber?", answer: "creative" },
                { id: 'q2', text: "What can you find on YouTube?", answer: "videos about everything" }
            ],
            vocabulary: [
                { word: "successful", translation: "מצליח" },
                { word: "upload", translation: "להעלות" },
                { word: "subscriber", translation: "מנוי" }
            ]
        }
    },
    {
        id: 7,
        week: 2,
        day: 2,
        type: 'grammar',
        title: 'Past Simple: Yesterday',
        content: {
            rule: "We use Past Simple for finished actions. Regular verbs add -ed. Irregular verbs change form.",
            exercises: [
                { id: 'e1', question: "Yesterday, I ___ (play) football.", answer: "played" },
                { id: 'e2', question: "We ___ (watch) a movie last night.", answer: "watched" },
                { id: 'e3', question: "He ___ (go) to the park.", answer: "went" }
            ]
        }
    },
    {
        id: 8,
        week: 2,
        day: 3,
        type: 'reading',
        title: 'Superheroes',
        content: {
            text: "Everyone loves superheroes like Spider-Man and Iron Man. They have special powers. Spider-Man can climb walls, and Iron Man can fly. But superheroes also have problems, just like normal people. That is why we like them. They are brave and help others.",
            questions: [
                { id: 'q1', text: "What can Spider-Man do?", answer: "climb walls" },
                { id: 'q2', text: "Why do we like superheroes?", answer: "They are brave" }
            ],
            vocabulary: [
                { word: "power", translation: "כוח" },
                { word: "climb", translation: "לטפס" },
                { word: "brave", translation: "אמיץ" }
            ]
        }
    },
    {
        id: 9,
        week: 2,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Sports',
        content: {
            text: "Sports are good for your health. Football and basketball are very popular in Israel. When you play sports, you learn to work in a team.",
            tips: ["Pronounce 'health' carefully.", "Say 'popular' with stress on the first syllable."]
        }
    },
    {
        id: 10,
        week: 2,
        day: 5,
        type: 'chatbot',
        title: 'Chat: Weekend Plans',
        content: {
            topic: "What are you going to do this weekend?",
            initialMessage: "The weekend is coming! Do you have any cool plans?"
        }
    },

    // WEEK 3
    {
        id: 11,
        week: 3,
        day: 1,
        type: 'reading',
        title: 'Artificial Intelligence',
        content: {
            text: "Artificial Intelligence, or AI, is a computer program that can think like a human. AI is used in phones, cars, and games. Some people are afraid of AI, but others think it will help us solve big problems. For example, AI can help doctors find diseases.",
            questions: [
                { id: 'q1', text: "What does AI stand for?", answer: "Artificial Intelligence" },
                { id: 'q2', text: "How can AI help doctors?", answer: "find diseases" }
            ],
            vocabulary: [
                { word: "disease", translation: "מחלה" },
                { word: "solve", translation: "לפתור" },
                { word: "afraid", translation: "מפחד" }
            ]
        }
    },
    {
        id: 12,
        week: 3,
        day: 2,
        type: 'grammar',
        title: 'Future Simple: Will',
        content: {
            rule: "We use 'will' to talk about the future.",
            exercises: [
                { id: 'e1', question: "I ___ (be) a famous gamer one day.", answer: "will be" },
                { id: 'e2', question: "It ___ (rain) tomorrow.", answer: "will rain" },
                { id: 'e3', question: "We ___ (win) the game.", answer: "will win" }
            ]
        }
    },
    {
        id: 13,
        week: 3,
        day: 3,
        type: 'reading',
        title: 'Electric Cars',
        content: {
            text: "Electric cars are becoming very popular. Tesla is the most famous company for electric cars. These cars do not use gas, so they are better for the environment. They are also very quiet and fast. In the future, most cars will probably be electric.",
            questions: [
                { id: 'q1', text: "Why are electric cars better for the environment?", answer: "do not use gas" },
                { id: 'q2', text: "What is a famous electric car company?", answer: "Tesla" }
            ],
            vocabulary: [
                { word: "environment", translation: "סביבה" },
                { word: "gas", translation: "דלק" },
                { word: "probably", translation: "כנראה" }
            ]
        }
    },
    {
        id: 14,
        week: 3,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Music',
        content: {
            text: "Music makes us feel happy or sad. Some people like pop music, and others like rock. Playing an instrument like the guitar or piano takes a lot of practice.",
            tips: ["'Instrument' has stress on the first syllable.", "Practice the 'p' sound in 'pop' and 'piano'."]
        }
    },
    {
        id: 15,
        week: 3,
        day: 5,
        type: 'chatbot',
        title: 'Chat: Dream Vacation',
        content: {
            topic: "If you could go anywhere in the world, where would you go?",
            initialMessage: "I want to travel! If you had a plane ticket to anywhere, where would you go?"
        }
    },

    // WEEK 4
    {
        id: 16,
        week: 4,
        day: 1,
        type: 'reading',
        title: 'The Internet of Things',
        content: {
            text: "Imagine your fridge ordering milk when you run out. This is the Internet of Things (IoT). Everyday objects are connected to the internet. Smart homes can turn off lights automatically. This makes life easier, but we must be careful about our privacy.",
            questions: [
                { id: 'q1', text: "What can a smart fridge do?", answer: "order milk" },
                { id: 'q2', text: "What must we be careful about?", answer: "privacy" }
            ],
            vocabulary: [
                { word: "connect", translation: "לחבר" },
                { word: "automatically", translation: "באופן אוטומטי" },
                { word: "privacy", translation: "פרטיות" }
            ]
        }
    },
    {
        id: 17,
        week: 4,
        day: 2,
        type: 'grammar',
        title: 'Comparatives',
        content: {
            rule: "We use comparatives to compare two things. Add -er (taller) or use 'more' (more expensive).",
            exercises: [
                { id: 'e1', question: "The iPhone is ___ (expensive) than the Android.", answer: "more expensive" },
                { id: 'e2', question: "My brother is ___ (tall) than me.", answer: "taller" },
                { id: 'e3', question: "This game is ___ (good) than the last one.", answer: "better" }
            ]
        }
    },
    {
        id: 18,
        week: 4,
        day: 3,
        type: 'reading',
        title: 'Drones',
        content: {
            text: "Drones are flying robots. People use them for fun, to take photos from the sky. But drones are also used for work. Farmers use them to check their fields. Amazon wants to use drones to deliver packages to your house.",
            questions: [
                { id: 'q1', text: "What are drones?", answer: "flying robots" },
                { id: 'q2', text: "What does Amazon want to do with drones?", answer: "deliver packages" }
            ],
            vocabulary: [
                { word: "field", translation: "שדה" },
                { word: "deliver", translation: "לשלוח/להעביר" },
                { word: "package", translation: "חבילה" }
            ]
        }
    },
    {
        id: 19,
        week: 4,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Food',
        content: {
            text: "Pizza and hamburgers are delicious, but we should eat vegetables too. Healthy food gives us energy to play and learn. Try to eat an apple every day.",
            tips: ["'Vegetables' is pronounced veg-ta-bles (3 syllables).", "'Delicious' has 'sh' sound."]
        }
    },
    {
        id: 20,
        week: 4,
        day: 5,
        type: 'chatbot',
        title: 'Chat: School',
        content: {
            topic: "Talk about your favorite subject in school.",
            initialMessage: "School can be tough, but some classes are fun. What is your favorite subject?"
        }
    },

    // WEEK 5
    {
        id: 21,
        week: 5,
        day: 1,
        type: 'reading',
        title: 'Virtual Reality',
        content: {
            text: "Virtual Reality (VR) lets you enter a computer world. You wear a headset and see a 3D world around you. You can play games, visit museums, or travel to other countries without leaving your room. It feels very real.",
            questions: [
                { id: 'q1', text: "What do you wear for VR?", answer: "headset" },
                { id: 'q2', text: "What can you do with VR?", answer: "play games, visit museums" }
            ],
            vocabulary: [
                { word: "headset", translation: "קסדה/אוזניות" },
                { word: "museum", translation: "מוזיאון" },
                { word: "without", translation: "בלי" }
            ]
        }
    },
    {
        id: 22,
        week: 5,
        day: 2,
        type: 'grammar',
        title: 'Superlatives',
        content: {
            rule: "We use superlatives to compare one thing to a group. Add -est (tallest) or use 'most' (most expensive).",
            exercises: [
                { id: 'e1', question: "Everest is the ___ (high) mountain.", answer: "highest" },
                { id: 'e2', question: "This is the ___ (interesting) book.", answer: "most interesting" },
                { id: 'e3', question: "Who is the ___ (fast) runner?", answer: "fastest" }
            ]
        }
    },
    {
        id: 23,
        week: 5,
        day: 3,
        type: 'reading',
        title: 'Renewable Energy',
        content: {
            text: "We need energy for lights and cars. Most energy comes from oil and coal, but they are dirty. Renewable energy comes from the sun (solar) and wind. It is clean and will never run out. Israel uses a lot of solar energy.",
            questions: [
                { id: 'q1', text: "Where does solar energy come from?", answer: "the sun" },
                { id: 'q2', text: "Why is renewable energy good?", answer: "It is clean" }
            ],
            vocabulary: [
                { word: "renewable", translation: "מתחדש" },
                { word: "coal", translation: "פחם" },
                { word: "dirty", translation: "מלוכלך" }
            ]
        }
    },
    {
        id: 24,
        week: 5,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Animals',
        content: {
            text: "Lions are the kings of the jungle. They are big cats. Dolphins live in the ocean and are very smart. We must protect animals and their homes.",
            tips: ["'Ocean' has a 'sh' sound.", "Don't forget the 's' at the end of 'Lions' and 'cats'."]
        }
    },
    {
        id: 25,
        week: 5,
        day: 5,
        type: 'chatbot',
        title: 'Chat: Movies',
        content: {
            topic: "What is the best movie you ever saw?",
            initialMessage: "I love movies with lots of action. What is the best movie you have ever seen?"
        }
    },

    // WEEK 6
    {
        id: 26,
        week: 6,
        day: 1,
        type: 'reading',
        title: 'Coding',
        content: {
            text: "Coding is the language of computers. When you learn to code, you can build your own apps and games. It is like solving a puzzle. Many schools now teach coding because it is an important skill for the future.",
            questions: [
                { id: 'q1', text: "What is coding?", answer: "language of computers" },
                { id: 'q2', text: "Why do schools teach coding?", answer: "important skill" }
            ],
            vocabulary: [
                { word: "skill", translation: "מיומנות" },
                { word: "solve", translation: "לפתור" },
                { word: "build", translation: "לבנות" }
            ]
        }
    },
    {
        id: 27,
        week: 6,
        day: 2,
        type: 'grammar',
        title: 'Modals: Should/Must',
        content: {
            rule: "Use 'should' for advice. Use 'must' for rules.",
            exercises: [
                { id: 'e1', question: "You ___ (should) do your homework.", answer: "should" },
                { id: 'e2', question: "Drivers ___ (must) stop at a red light.", answer: "must" },
                { id: 'e3', question: "We ___ (should) eat healthy food.", answer: "should" }
            ]
        }
    },
    {
        id: 28,
        week: 6,
        day: 3,
        type: 'reading',
        title: 'Social Media',
        content: {
            text: "Instagram and TikTok are very popular social media apps. People share photos and funny videos. It is fun to see what your friends are doing. But spending too much time on social media can be bad. It is important to go outside too.",
            questions: [
                { id: 'q1', text: "Name two social media apps.", answer: "Instagram and TikTok" },
                { id: 'q2', text: "Why can it be bad?", answer: "spending too much time" }
            ],
            vocabulary: [
                { word: "share", translation: "לשתף" },
                { word: "spend time", translation: "לבלות זמן" },
                { word: "outside", translation: "בחוץ" }
            ]
        }
    },
    {
        id: 29,
        week: 6,
        day: 4,
        type: 'pronunciation',
        title: 'Reading Aloud: Weather',
        content: {
            text: "In the summer, it is hot and sunny. In the winter, it rains and sometimes snows. I like spring the best because the flowers bloom.",
            tips: ["'Weather' has 'th' sound.", "'Bloom' rhymes with 'room'."]
        }
    },
    {
        id: 30,
        week: 6,
        day: 5,
        type: 'chatbot',
        title: 'Chat: Future Jobs',
        content: {
            topic: "What do you want to be when you grow up?",
            initialMessage: "There are so many cool jobs. Astronaut, gamer, doctor... What do you want to be?"
        }
    }
];
