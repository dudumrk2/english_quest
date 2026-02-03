import { Lesson } from '../types';

export const lessons: Lesson[] = [
    // =========================================================================
    // WEEK 1: BASKETBALL
    // =========================================================================
    {
        id: 101,
        week: 1,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Basketball Vocabulary',
        content: {
            pairs: [
                { word: "team", translation: "קבוצה / צוות", context: "Nadav plays on a basketball team.", contextTranslation: "נדב משחק בקבוצת כדורסל." },
                { word: "park", translation: "פארק / לחנות", context: "We play basketball at the park.", contextTranslation: "אנחנו משחקים כדורסל בפארק." },
                { word: "player", translation: "שחקן", context: "Michael Jordan is a famous player.", contextTranslation: "מייקל ג'ורדן הוא שחקן מפורסם." },
                { word: "catch", translation: "לתפוס", context: "Can you catch the ball?", contextTranslation: "אתה יכול לתפוס את הכדור?" },
                { word: "jump (off)", translation: "לקפוץ (מ)", context: "He can jump high.", contextTranslation: "הוא יכול לקפוץ גבוה." },
                { word: "practice", translation: "להתאמן", context: "You must practice every day.", contextTranslation: "אתה חייב להתאמן כל יום." },
                { word: "win", translation: "לנצח", context: "We want to win the game.", contextTranslation: "אנחנו רוצים לנצח במשחק." },
                { word: "lose", translation: "להפסיד / לאבד", context: "I hate to lose.", contextTranslation: "אני שונא להפסיד." },
                { word: "move", translation: "לזוז / לעבור", context: "Move your feet quickly.", contextTranslation: "הזז את הרגליים שלך מהר." },
                { word: "hand", translation: "יד / למסור", context: "Use your hand to dribble.", contextTranslation: "השתמש ביד שלך כדי לכדרר." },
                { word: "judge", translation: "שופט / לשפוט", context: "The judge watches the game.", contextTranslation: "השופט צופה במשחק." },
                { word: "athlete", translation: "אתלט", context: "LeBron is a strong athlete.", contextTranslation: "לברון הוא אתלט חזק." },
                { word: "guide", translation: "מדריך", context: "The coach is our guide.", contextTranslation: "המאמן הוא המדריך שלנו." },
                { word: "activity", translation: "פעילות", context: "Basketball is a fun activity.", contextTranslation: "כדורסל זו פעילות כיפית." },
                { word: "exercise", translation: "תרגיל", context: "Running is good exercise.", contextTranslation: "ריצה זה תרגיל טוב." },
                { word: "goal", translation: "מטרה / שער", context: "My goal is to score points.", contextTranslation: "המטרה שלי היא לקלוע נקודות." },
                { word: "audience", translation: "קהל", context: "The audience cheers loudly.", contextTranslation: "הקהל מריע בקול רם." },
                { word: "chance", translation: "סיכוי / הזדמנות", context: "This is your chance to shoot.", contextTranslation: "זו ההזדמנות שלך לזרוק." },
                { word: "effort", translation: "מאמץ", context: "It takes effort to be good.", contextTranslation: "נדרש מאמץ כדי להיות טוב." },
                { word: "success", translation: "הצלחה", context: "Hard work brings success.", contextTranslation: "עבודה קשה מביאה הצלחה." }
            ]
        }
    },
    {
        id: 102,
        week: 1,
        day: 2,
        type: 'reading',
        title: 'Nadav at the Park',
        content: {
            text: "Nadav loves basketball. Every Friday, he goes to the park to play with his friends. He is part of a local team. Nadav is a good player, but he wants to be better. He likes to practice his shooting and passing. Sometimes, it is hard to catch the ball when it moves fast. Today, there is a big game. A judge watches the match closely. The audience is very excited. Nadav makes a big effort to run fast. He wants to win, but he knows it is okay to lose too. His goal is to have fun and improve.",
            vocabulary: [
                { word: "team", translation: "קבוצה / צוות" },
                { word: "park", translation: "פארק / לחנות" },
                { word: "player", translation: "שחקן" },
                { word: "practice", translation: "להתאמן" },
                { word: "effort", translation: "מאמץ" },
                { word: "catch", translation: "לתפוס" },
                { word: "win", translation: "לנצח" },
                { word: "judge", translation: "שופט / לשפוט" }
            ],
            questions: [
                { id: "q1", text: "Where does Nadav go every Friday?", answer: "He goes to the park." },
                { id: "q2", text: "What does Nadav want to do?", answer: "He wants to be better and improve." },
                { id: "q3", text: "Who watches the match?", answer: "A judge watches the match." },
                { id: "q4", text: "What is Nadav's goal?", answer: "His goal is to have fun and improve." },
                { id: "q5", text: "Is it okay to lose?", answer: "Yes, he knows it is okay to lose too." }
            ],
            fillInTheBlanks: {
                title: "Complete the Sentences",
                exercises: [
                    { id: "f1", sentence: "Nadav plays on a basketball _____.", answer: "team", options: ["team", "judge", "park"] },
                    { id: "f2", sentence: "He goes to the _____ to play.", answer: "park", options: ["park", "hand", "goal"] },
                    { id: "f3", sentence: "You must _____ to get better.", answer: "practice", options: ["practice", "lose", "catch"] },
                    { id: "f4", sentence: "The _____ watched the game carefully.", answer: "judge", options: ["judge", "ball", "park"] },
                    { id: "f5", sentence: "It takes a lot of _____ to win.", answer: "effort", options: ["effort", "player", "park"] }
                ]
            }
        }
    },
    {
        id: 103,
        week: 1,
        day: 3,
        type: 'reading',
        title: 'The Coach Speaks',
        content: {
            text: "Coach Mike talks to the athletes. 'Listen, everyone,' he says. 'This is a great activity for your health.' He explains that running is good exercise. He tells them to use their hand to control the ball. 'Do not just jump off the ground without looking,' he warns. 'You must move your feet.' The coach says that success comes from team work. 'Give every player a chance,' he adds. The team listens to their guide. They are ready to play.",
            vocabulary: [
                { word: "athlete", translation: "אתלט" },
                { word: "exercise", translation: "תרגיל" },
                { word: "success", translation: "הצלחה" },
                { word: "guide", translation: "מדריך" },
                { word: "chance", translation: "סיכוי / הזדמנות" },
                { word: "activity", translation: "פעילות" }
            ],
            questions: [
                { id: "q1", text: "Who talks to the athletes?", answer: "Coach Mike talks to them." },
                { id: "q2", text: "What is good exercise?", answer: "Running is good exercise." },
                { id: "q3", text: "What must the players move?", answer: "They must move their feet." },
                { id: "q4", text: "Where does success come from?", answer: "Success comes from team work." },
                { id: "q5", text: "What does the coach tell them to give every player?", answer: "He tells them to give every player a chance." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "athlete", definition: "A person who is good at sports" },
                    { id: "m2", word: "exercise", definition: "Physical activity to keep fit" },
                    { id: "m3", word: "guide", definition: "Someone who shows the way" },
                    { id: "m4", word: "success", definition: "Achieving a goal" },
                    { id: "m5", word: "chance", definition: "An opportunity to do something" }
                ]
            }
        }
    },
    {
        id: 104,
        week: 1,
        day: 4,
        type: 'pronunciation',
        title: 'Practice Your Sounds',
        content: {
            text: "Nadav is a young player on the school team. Every day, he goes to the park to practice. He uses his hand to throw and catch the ball. A judge watches him closely. He wants to be the best!",
            vocabulary: [
                { word: "player", translation: "שחקן" },
                { word: "park", translation: "פארק / לחנות" },
                { word: "practice", translation: "להתאמן" },
                { word: "catch", translation: "לתפוס" },
                { word: "hand", translation: "יד / למסור" },
                { word: "judge", translation: "שופט / לשפוט" },
                { word: "team", translation: "קבוצה / צוות" }
            ],
            tips: [
                "Focus on the 'P' sound in 'Player', 'Park', and 'Practice'. It should be a small puff of air.",
                "The 'J' in 'Judge' and 'Jump' is strong."
            ]
        }
    },
    {
        id: 105,
        week: 1,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Basketball',
        content: {
            text: "Basketball is a fun activity but requires hard work. Every athlete wants to achieve success. You must make a big effort to win. The coach is your guide on the court. Listen to the cheering audience!",
            vocabulary: [
                { word: "audience", translation: "קהל" },
                { word: "success", translation: "הצלחה" },
                { word: "athlete", translation: "אתלט" },
                { word: "effort", translation: "מאמץ" },
                { word: "activity", translation: "פעילות" },
                { word: "guide", translation: "מדריך" }
            ],
            tips: [
                "Try to read the whole sentence without stopping.",
                "Pronounce 'audience' carefully: Awe-dee-ence."
            ]
        }
    },
    {
        id: 106,
        week: 1,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 2: JORDAN VS LEBRON
    // =========================================================================
    {
        id: 201,
        week: 2,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Legends Vocabulary',
        content: {
            pairs: [
                { word: "champion", translation: "אלוף", context: "Jordan is a champion.", contextTranslation: "ג'ורדן הוא אלוף." },
                { word: "competition", translation: "תחרות", context: "The competition is hard.", contextTranslation: "התחרות קשה." },
                { word: "beat", translation: "להביס / להכות", context: "Can he beat the other team?", contextTranslation: "האם הוא יכול להביס את הקבוצה השנייה?" },
                { word: "professional", translation: "מקצועי", context: "He is a professional player.", contextTranslation: "הוא שחקן מקצועי." },
                { word: "well-known", translation: "ידוע", context: "LeBron is well-known.", contextTranslation: "לברון ידוע." },
                { word: "serious", translation: "רציני", context: "Be serious about the game.", contextTranslation: "תהיה רציני לגבי המשחק." },
                { word: "great", translation: "נהדר", context: "That was a great shot.", contextTranslation: "זאת הייתה זריקה נהדרת." },
                { word: "history", translation: "היסטוריה", context: "This moment is history.", contextTranslation: "הרגע הזה הוא היסטוריה." },
                { word: "become", translation: "להפוך ל", context: "He wants to become a star.", contextTranslation: "הוא רוצה להפוך לכוכב." },
                { word: "dream", translation: "לחלום", context: "I dream of winning.", contextTranslation: "אני חולם לנצח." },
                { word: "hero", translation: "גיבור", context: "He is my hero.", contextTranslation: "הוא הגיבור שלי." },
                { word: "job", translation: "עבודה", context: "Basketball is his job.", contextTranslation: "כדורסל זה העבודה שלו." },
                { word: "amaze", translation: "להדהים", context: "He can amaze the crowd.", contextTranslation: "הוא יכול להדהים את הקהל." },
                { word: "amazing", translation: "מדהים", context: "The game was amazing.", contextTranslation: "המשחק היה מדהים." },
                { word: "perform", translation: "להופיע / לבצע", context: "They perform well tonight.", contextTranslation: "הם מופיעים טוב הערב." },
                { word: "role model", translation: "מודל לחיקוי", context: "Be a good role model.", contextTranslation: "היה מודל לחיקוי טוב." },
                { word: "follow", translation: "לעקוב", context: "Follow your dreams.", contextTranslation: "עקוב אחרי החלומות שלך." },
                { word: "similar", translation: "דומה", context: "They have a similar style.", contextTranslation: "יש להם סגנון דומה." },
                { word: "total", translation: "סך הכל / מוחלט", context: "The total score is high.", contextTranslation: "הניקוד הכולל גבוה." },
                { word: "valuable", translation: "בעל ערך", context: "He is the most valuable player.", contextTranslation: "הוא השחקן הכי בעל ערך." }
            ]
        }
    },
    {
        id: 202,
        week: 2,
        day: 2,
        type: 'reading',
        title: 'Who is the Best?',
        content: {
            text: "Many people love basketball history. They ask, who is the best player? Michael Jordan is a champion who won many games. He was amazing on the court. LeBron James is also a professional athlete. He is well-known all over the world. Some say Jordan is the hero of the sport. Others follow LeBron and think he is better. Both players have a similar talent. They take their job very serious. It is a great competition between two legends. Who is your role model?",
            vocabulary: [
                { word: "history", translation: "היסטוריה" },
                { word: "champion", translation: "אלוף" },
                { word: "professional", translation: "מקצועי" },
                { word: "role model", translation: "מודל לחיקוי" },
                { word: "similar", translation: "דומה" },
                { word: "competition", translation: "תחרות" },
                { word: "hero", translation: "גיבור" }
            ],
            questions: [
                { id: "q1", text: "Who are the two players in the text?", answer: "Michael Jordan and LeBron James." },
                { id: "q2", text: "Is LeBron James well-known?", answer: "Yes, he is well-known all over the world." },
                { id: "q3", text: "How do they take their job?", answer: "They take their job very serious." },
                { id: "q4", text: "What do people ask about history?", answer: "They ask who is the best player." },
                { id: "q5", text: "Do both players have talent?", answer: "Yes, they have a similar talent." }
            ],
            fillInTheBlanks: {
                title: "Compare the Legends",
                exercises: [
                    { id: "f1", sentence: "Jordan is a true _____.", answer: "champion", options: ["champion", "job", "total"] },
                    { id: "f2", sentence: "LeBron is a _____ player.", answer: "professional", options: ["professional", "similar", "dream"] },
                    { id: "f3", sentence: "The two players are _____.", answer: "similar", options: ["similar", "amaze", "beat"] },
                    { id: "f4", sentence: "This is a great _____.", answer: "competition", options: ["competition", "dream", "job"] },
                    { id: "f5", sentence: "He is a _____ for kids.", answer: "role model", options: ["role model", "history", "total"] }
                ]
            }
        }
    },
    {
        id: 203,
        week: 2,
        day: 3,
        type: 'reading',
        title: 'Dreaming Big',
        content: {
            text: "Danny wants to become a basketball star. He watches videos to see how pros perform. 'I want to beat the best teams,' he says. His dream is to be valuable to his team. 'You are amazing,' his dad tells him. 'But you must work hard.' Danny knows the total effort matters. He wants to amaze the fans one day. 'I will follow my heart,' Danny thinks. It will be a long journey to success.",
            vocabulary: [
                { word: "become", translation: "להפוך ל" },
                { word: "perform", translation: "להופיע / לבצע" },
                { word: "beat", translation: "להביס / להכות" },
                { word: "valuable", translation: "בעל ערך" },
                { word: "amaze", translation: "להדהים" },
                { word: "dream", translation: "לחלום" },
                { word: "follow", translation: "לעקוב" }
            ],
            questions: [
                { id: "q1", text: "What does Danny want to become?", answer: "He wants to become a basketball star." },
                { id: "q2", text: "What does he want to do to the best teams?", answer: "He wants to beat them." },
                { id: "q3", text: "What does his dad tell him?", answer: "His dad says he is amazing but must work hard." },
                { id: "q4", text: "What matters to Danny?", answer: "The total effort matters." },
                { id: "q5", text: "What will Danny follow?", answer: "He will follow his heart." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "become", definition: "To start to be something" },
                    { id: "m2", word: "valuable", definition: "Very important or worth a lot" },
                    { id: "m3", word: "amaze", definition: "To surprise someone very much" },
                    { id: "m4", word: "perform", definition: "To do an action for an audience" },
                    { id: "m5", word: "dream", definition: "Something you want to happen" }
                ]
            }
        }
    },
    {
        id: 204,
        week: 2,
        day: 4,
        type: 'pronunciation',
        title: 'Words of Champions',
        content: {
            text: "Do you want to become a hero? You must be serious about your training. The competition is very hard. Only a true champion can beat everyone else. Watch how the pros perform and learn.",
            vocabulary: [
                { word: "champion", translation: "אלוף" },
                { word: "serious", translation: "רציני" },
                { word: "competition", translation: "תחרות" },
                { word: "beat", translation: "להביס / להכות" },
                { word: "perform", translation: "להופיע / לבצע" },
                { word: "hero", translation: "גיבור" },
                { word: "become", translation: "להפוך ל" }
            ],
            tips: [
                "The 'ph' in 'champion' is NOT an 'f' sound. It is 'CH' like 'Cheese'.",
                "Say 'Serious' slowly: See-ree-us."
            ]
        }
    },
    {
        id: 205,
        week: 2,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Legends',
        content: {
            text: "LeBron is a well-known and professional star. He is the most valuable player on the court. He continues to amaze us with his skills. He is a great role model for kids. Many players have a similar style, but he is unique.",
            vocabulary: [
                { word: "professional", translation: "מקצועי" },
                { word: "well-known", translation: "ידוע" },
                { word: "valuable", translation: "בעל ערך" },
                { word: "similar", translation: "דומה" },
                { word: "amaze", translation: "להדהים" },
                { word: "role model", translation: "מודל לחיקוי" }
            ],
            tips: [
                "Practice the 'L' sound in 'Valuable', 'Role', and 'Model'.",
                "Make sure 'Well-known' flows together."
            ]
        }
    },
    {
        id: 206,
        week: 2,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 3: ROBLOX & CREATIVITY
    // =========================================================================
    {
        id: 301,
        week: 3,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Creativity Vocabulary',
        content: {
            pairs: [
                { word: "imagine", translation: "לדמיין", context: "Imagine a new world.", contextTranslation: "דמיין עולם חדש." },
                { word: "idea", translation: "רעיון", context: "I have a good idea.", contextTranslation: "יש לי רעיון טוב." },
                { word: "plan", translation: "תוכנית", context: "We need a plan to build.", contextTranslation: "אנחנו צריכים תוכנית כדי לבנות." },
                { word: "project", translation: "פרויקט", context: "This is my big project.", contextTranslation: "זה הפרויקט הגדול שלי." },
                { word: "world", translation: "עולם", context: "Roblox is a digital world.", contextTranslation: "רובלוקס הוא עולם דיגיטלי." },
                { word: "share", translation: "חלק / לשתף", context: "Share your game with friends.", contextTranslation: "שתף את המשחק שלך עם חברים." },
                { word: "join", translation: "להצטרף", context: "Join my server.", contextTranslation: "הצטרף לשרת שלי." },
                { word: "like", translation: "כמו / לחבב", context: "I like to play this.", contextTranslation: "אני אוהב לשחק בזה." },
                { word: "band", translation: "להקה", context: "We are a band of builders.", contextTranslation: "אנחנו להקה של בנאים." },
                { word: "color", translation: "צבע", context: "Pick a nice color.", contextTranslation: "בחר צבע יפה." },
                { word: "paint", translation: "לצבוע", context: "Paint the walls red.", contextTranslation: "צבע את הקירות באדום." },
                { word: "writing", translation: "כתיבה", context: "Writing code is fun.", contextTranslation: "כתיבת קוד היא כיפית." },
                { word: "own", translation: "להיות בעלים של", context: "Create your own game.", contextTranslation: "צור משחק משלך." },
                { word: "choice", translation: "בחירה", context: "It is your choice.", contextTranslation: "זו הבחירה שלך." },
                { word: "list", translation: "רשימה", context: "Make a list of items.", contextTranslation: "הכן רשימה של פריטים." },
                { word: "variety", translation: "מגוון", context: "Use a variety of blocks.", contextTranslation: "השתמש במגוון בלוקים." },
                { word: "object", translation: "חפץ", context: "Move the object here.", contextTranslation: "הזז את החפץ לכאן." },
                { word: "form", translation: "טופס / צורה", context: "Change the form of the block.", contextTranslation: "שנה את צורת הבלוק." },
                { word: "puzzle", translation: "חידה / פאזל", context: "Solve the puzzle.", contextTranslation: "פתור את החידה." },
                { word: "solve", translation: "לפתור", context: "Can you solve it?", contextTranslation: "האם אתה יכול לפתור את זה?" }
            ]
        }
    },
    {
        id: 302,
        week: 3,
        day: 2,
        type: 'reading',
        title: 'Building a New World',
        content: {
            text: "In Roblox, you can imagine anything. Gal wants to start a new project. He has an idea to make a city. First, he makes a plan. He wants his world to be full of fun things. He uses a variety of blocks to build houses. He likes to paint them with a bright color. Gal creates a list of things he needs. He puts a special object in every room. It is like a puzzle to fit everything together. He hopes his friends will join him soon.",
            vocabulary: [
                { word: "imagine", translation: "לדמיין" },
                { word: "project", translation: "פרויקט" },
                { word: "variety", translation: "מגוון" },
                { word: "object", translation: "חפץ" },
                { word: "puzzle", translation: "חידה / פאזל" },
                { word: "idea", translation: "רעיון" },
                { word: "plan", translation: "תוכנית" }
            ],
            questions: [
                { id: "q1", text: "What can you do in Roblox?", answer: "You can imagine anything." },
                { id: "q2", text: "What is Gal's idea?", answer: "He has an idea to make a city." },
                { id: "q3", text: "What does he use to build?", answer: "He uses a variety of blocks." },
                { id: "q4", text: "What does he put in every room?", answer: "He puts a special object in every room." },
                { id: "q5", text: "Who does he hope will join him?", answer: "He hopes his friends will join him." }
            ],
            fillInTheBlanks: {
                title: "Creator Mode",
                exercises: [
                    { id: "f1", sentence: "I have a great _____ for a game.", answer: "idea", options: ["idea", "band", "form"] },
                    { id: "f2", sentence: "Please _____ my game server.", answer: "join", options: ["join", "solve", "list"] },
                    { id: "f3", sentence: "Choose a _____ for the car.", answer: "color", options: ["color", "puzzle", "plan"] },
                    { id: "f4", sentence: "He wants to _____ his own house.", answer: "own", options: ["own", "paint", "variety"] },
                    { id: "f5", sentence: "Can you _____ this problem?", answer: "solve", options: ["solve", "imagine", "object"] }
                ]
            }
        }
    },
    {
        id: 303,
        week: 3,
        day: 3,
        type: 'reading',
        title: 'Game Design Chat',
        content: {
            text: "Sara and Ben talk about games. 'I made a new form of parkour map,' says Sara. 'That sounds cool. Can I share it?' asks Ben. Sara says, 'Yes, it is your choice.' Ben looks at the writing on the screen. 'Did you write this code?' he asks. 'Yes, I like to solve hard problems,' Sara answers. They decide to form a band of developers. 'We can paint the lobby together,' Ben suggests. They make a list of tasks. It is fun to create your own things.",
            vocabulary: [
                { word: "form", translation: "טופס / צורה" },
                { word: "share", translation: "חלק / לשתף" },
                { word: "choice", translation: "בחירה" },
                { word: "writing", translation: "כתיבה" },
                { word: "band", translation: "להקה" },
                { word: "solve", translation: "לפתור" },
                { word: "paint", translation: "צבע / לצבוע" }
            ],
            questions: [
                { id: "q1", text: "What did Sara make?", answer: "She made a new form of parkour map." },
                { id: "q2", text: "What does Ben want to do?", answer: "He wants to share it." },
                { id: "q3", text: "Who wrote the code?", answer: "Sara wrote the code." },
                { id: "q4", text: "What do they decide to form?", answer: "They decide to form a band of developers." },
                { id: "q5", text: "Is it fun to create?", answer: "Yes, it is fun to create your own things." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "form", definition: "To create or organize" },
                    { id: "m2", word: "share", definition: "To give a part to others" },
                    { id: "m3", word: "solve", definition: "To find the answer" },
                    { id: "m4", word: "band", definition: "A group of people" },
                    { id: "m5", word: "paint", definition: "To put color on something" }
                ]
            }
        }
    },
    {
        id: 304,
        week: 3,
        day: 4,
        type: 'pronunciation',
        title: 'Creative Sounds',
        content: {
            text: "In Roblox, you can imagine any object you want. This project is your own special puzzle. You have the choice to build or destroy. Paint the walls blue and green. Do not forget to share your world with friends.",
            vocabulary: [
                { word: "imagine", translation: "לדמיין" },
                { word: "project", translation: "פרויקט" },
                { word: "paint", translation: "צבע / לצבוע" },
                { word: "share", translation: "חלק / לשתף" },
                { word: "choice", translation: "בחירה" },
                { word: "puzzle", translation: "חידה / פאזל" },
                { word: "object", translation: "חפץ" }
            ],
            tips: [
                "In 'Imagine', the 'G' sounds like 'J'.",
                "Say 'Project' with a strong 'Pro' at the start."
            ]
        }
    },
    {
        id: 305,
        week: 3,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Builders',
        content: {
            text: "I have a great idea for a new game. I will create the writing for the code myself. I have a plan to solve every bug. There is a huge variety of blocks to use. It feels good to create your own map.",
            vocabulary: [
                { word: "variety", translation: "מגוון" },
                { word: "writing", translation: "כתיבה" },
                { word: "own", translation: "להיות בעלים של" },
                { word: "plan", translation: "תוכנית" },
                { word: "idea", translation: "רעיון" },
                { word: "solve", translation: "לפתור" }
            ],
            tips: [
                "Practice the 'V' in 'Variety'. Bite your lip slightly.",
                "The word 'Writing' starts with a silent 'W'. Just say 'Riting'."
            ]
        }
    },
    {
        id: 306,
        week: 3,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 4: FORTNITE & STRATEGY
    // =========================================================================
    {
        id: 401,
        week: 4,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Survival Vocabulary',
        content: {
            pairs: [
                { word: "danger", translation: "סכנה", context: "There is danger ahead.", contextTranslation: "יש סכנה לפנינו." },
                { word: "dangerous", translation: "מסוכן", context: "The storm is dangerous.", contextTranslation: "הסופה מסוכנת." },
                { word: "hide", translation: "להתחבא", context: "Hide behind the tree.", contextTranslation: "תתחבא מאחורי העץ." },
                { word: "survive", translation: "לשרוד", context: "Try to survive until the end.", contextTranslation: "נסה לשרוד עד הסוף." },
                { word: "fight", translation: "לריב / להילחם", context: "Do not fight alone.", contextTranslation: "אל תילחם לבד." },
                { word: "area", translation: "אזור", context: "Go to the safe area.", contextTranslation: "לך לאזור הבטוח." },
                { word: "island", translation: "אי", context: "We drop onto the island.", contextTranslation: "אנחנו צונחים על האי." },
                { word: "storm", translation: "סערה", context: "Run from the storm.", contextTranslation: "רוץ מהסערה." },
                { word: "key", translation: "מפתח", context: "This item is the key to win.", contextTranslation: "הפריט הזה הוא המפתח לניצחון." },
                { word: "land", translation: "לנחות", context: "Where will we land?", contextTranslation: "איפה ננחת?" },
                { word: "drop", translation: "להפיל", context: "Drop your items here.", contextTranslation: "תפיל את הפריטים שלך כאן." },
                { word: "take off", translation: "להמריא / להוריד", context: "The bus will take off soon.", contextTranslation: "האוטובוס ימריא בקרוב." },
                { word: "explore", translation: "לחקור", context: "Let's explore the map.", contextTranslation: "בוא נחקור את המפה." },
                { word: "discover", translation: "לגלות", context: "You might discover loot.", contextTranslation: "אתה עשוי לגלות שלל." },
                { word: "protect", translation: "להגן", context: "Protect your team.", contextTranslation: "הגן על הצוות שלך." },
                { word: "escape", translation: "לברוח", context: "Escape the trap.", contextTranslation: "תברח מהמלכודת." },
                { word: "life", translation: "חיים", context: "You have one life in the game.", contextTranslation: "יש לך חיים אחדים במשחק." },
                { word: "remain", translation: "להישאר", context: "Only five players remain.", contextTranslation: "רק חמישה שחקנים נותרו." },
                { word: "leader", translation: "מנהיג", context: "Who is the squad leader?", contextTranslation: "מי מנהיג היחידה?" },
                { word: "control", translation: "שליטה", context: "Take control of the base.", contextTranslation: "קח שליטה על הבסיס." }
            ]
        }
    },
    {
        id: 402,
        week: 4,
        day: 2,
        type: 'reading',
        title: 'The Storm is Coming',
        content: {
            text: "The battle bus is ready to take off. 'Where should we land?' asks Tom. 'Let's drop on the big island,' says his friend. They jump and fall fast. The area looks safe, but there is danger everywhere. 'We must find weapons to protect ourselves,' Tom says. Suddenly, the storm begins to move. It is very dangerous to stay outside. They run to hide inside a house. 'We need to survive,' Tom whispers. They explore the rooms and discover a gold box. Now they are ready to fight.",
            vocabulary: [
                { word: "take off", translation: "להמריא / להוריד" },
                { word: "land", translation: "לנחות" },
                { word: "storm", translation: "סערה" },
                { word: "protect", translation: "להגן" },
                { word: "hide", translation: "להתחבא" },
                { word: "danger", translation: "סכנה" },
                { word: "survive", translation: "לשרוד" }
            ],
            questions: [
                { id: "q1", text: "What is ready to take off?", answer: "The battle bus is ready to take off." },
                { id: "q2", text: "Where do they drop?", answer: "They drop on the big island." },
                { id: "q3", text: "Why is it dangerous?", answer: "Because the storm is moving and there is danger everywhere." },
                { id: "q4", text: "Where do they hide?", answer: "They hide inside a house." },
                { id: "q5", text: "What do they discover?", answer: "They discover a gold box." }
            ],
            fillInTheBlanks: {
                title: "Survival Tactics",
                exercises: [
                    { id: "f1", sentence: "The _____ is shrinking.", answer: "storm", options: ["storm", "key", "life"] },
                    { id: "f2", sentence: "We must _____ the building.", answer: "explore", options: ["explore", "drop", "danger"] },
                    { id: "f3", sentence: "Only one player will _____.", answer: "survive", options: ["survive", "land", "area"] },
                    { id: "f4", sentence: "This is a _____ mission.", answer: "dangerous", options: ["dangerous", "remain", "drop"] },
                    { id: "f5", sentence: "Use the _____ to open the door.", answer: "key", options: ["key", "control", "fight"] }
                ]
            }
        }
    },
    {
        id: 403,
        week: 4,
        day: 3,
        type: 'reading',
        title: 'Squad Goals',
        content: {
            text: "The leader of the team shouts orders. 'Do not let them escape!' he yells. The other team tries to take control of the hill. 'How many players remain?' asks the leader. 'Only three,' says the scout. 'This is the key to winning.' They fight hard for their life. One player drops a shield for his friend. It is important to help your team. 'We did it!' they cheer. They are safe from danger.",
            vocabulary: [
                { word: "leader", translation: "מנהיג" },
                { word: "escape", translation: "לברוח" },
                { word: "control", translation: "שליטה" },
                { word: "remain", translation: "להישאר" },
                { word: "key", translation: "מפתח" },
                { word: "life", translation: "חיים" }
            ],
            questions: [
                { id: "q1", text: "Who shouts orders?", answer: "The leader shouts orders." },
                { id: "q2", text: "What does the other team try to do?", answer: "They try to take control of the hill." },
                { id: "q3", text: "How many players remain?", answer: "Only three players remain." },
                { id: "q4", text: "What did one player drop?", answer: "One player dropped a shield." },
                { id: "q5", text: "What is important to do?", answer: "It is important to help your team." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "leader", definition: "The person in charge" },
                    { id: "m2", word: "escape", definition: "To get away from danger" },
                    { id: "m3", word: "control", definition: "The power to direct something" },
                    { id: "m4", word: "remain", definition: "To stay in the same place" },
                    { id: "m5", word: "life", definition: "Being alive" }
                ]
            }
        }
    },
    {
        id: 404,
        week: 4,
        day: 4,
        type: 'pronunciation',
        title: 'Action Words',
        content: {
            text: "The bus will take off and then we drop onto the island. There is danger everywhere we look. We must explore the houses to find loot. If you see enemies to fight, hide or run. We must survive until the end!",
            vocabulary: [
                { word: "danger", translation: "סכנה" },
                { word: "hide", translation: "להתחבא" },
                { word: "survive", translation: "לשרוד" },
                { word: "fight", translation: "לריב / להילחם" },
                { word: "island", translation: "אי" },
                { word: "drop", translation: "להפיל" },
                { word: "take off", translation: "להמריא / להוריד" },
                { word: "explore", translation: "לחקור" }
            ],
            tips: [
                "The 'G' in 'Danger' is soft, like 'Jeep'.",
                "In 'Island', the 'S' is silent. Say 'Eye-land'."
            ]
        }
    },
    {
        id: 405,
        week: 4,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Battle',
        content: {
            text: "We need to land in a safe spot. The storm is coming fast! We can discover a fast car to escape. Stay calm and keep control of the wheel. We must protect our teammates. Only two players remain in the game.",
            vocabulary: [
                { word: "storm", translation: "סערה" },
                { word: "land", translation: "לנחות" },
                { word: "escape", translation: "לברוח" },
                { word: "control", translation: "שליטה" },
                { word: "discover", translation: "לגלות" },
                { word: "protect", translation: "להגן" },
                { word: "remain", translation: "להישאר" }
            ],
            tips: [
                "Make sure 'Escape' starts with 'Es', not 'Ex'.",
                "Pronounce the 'L' in 'Calm' very softly or not at all."
            ]
        }
    },
    {
        id: 406,
        week: 4,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },
    // =========================================================================
    // WEEK 5: SCIENCE & EXPLORATION
    // =========================================================================
    {
        id: 501,
        week: 5,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Science Vocabulary',
        content: {
            pairs: [
                { word: "science", translation: "מדע", context: "I like to study science.", contextTranslation: "אני אוהב ללמוד מדע." },
                { word: "planet", translation: "כוכב לכת", context: "Mars is a red planet.", contextTranslation: "מאדים הוא כוכב לכת אדום." },
                { word: "space", translation: "חלל / מקום", context: "Astronauts travel to space.", contextTranslation: "אסטרונאוטים מטיילים לחלל." },
                { word: "Earth", translation: "כדור הארץ", context: "We live on Earth.", contextTranslation: "אנחנו חיים על כדור הארץ." },
                { word: "physics", translation: "פיזיקה", context: "Physics explains how things move.", contextTranslation: "פיזיקה מסבירה איך דברים זזים." },
                { word: "energy", translation: "אנרגיה", context: "The sun gives us energy.", contextTranslation: "השמש נותנת לנו אנרגיה." },
                { word: "explore", translation: "לחקור", context: "They want to explore the moon.", contextTranslation: "הם רוצים לחקור את הירח." },
                { word: "discover", translation: "לגלות", context: "Scientists discover new things.", contextTranslation: "מדענים מגלים דברים חדשים." },
                { word: "prove", translation: "להוכיח", context: "Can you prove your theory?", contextTranslation: "אתה יכול להוכיח את התיאוריה שלך?" },
                { word: "examine", translation: "לבחון", context: "Examine the rock carefully.", contextTranslation: "בחן את האבן בזהירות." },
                { word: "mystery", translation: "תעלומה", context: "Space is a big mystery.", contextTranslation: "החלל הוא תעלומה גדולה." },
                { word: "explanation", translation: "הסבר", context: "Give me an explanation.", contextTranslation: "תן לי הסבר." },
                { word: "brain", translation: "מוח", context: "Use your brain to think.", contextTranslation: "השתמש במוח שלך כדי לחשוב." },
                { word: "huge", translation: "ענק", context: "The universe is huge.", contextTranslation: "היקום הוא ענק." },
                { word: "deep", translation: "עמוק", context: "The ocean is very deep.", contextTranslation: "האוקיינוס עמוק מאוד." },
                { word: "impossible", translation: "בלתי אפשרי", context: "Nothing is impossible.", contextTranslation: "שום דבר אינו בלתי אפשרי." },
                { word: "real", translation: "אמיתי", context: "Is this photo real?", contextTranslation: "האם התמונה הזאת אמיתית?" },
                { word: "wonder", translation: "לתהות", context: "I wonder what is out there.", contextTranslation: "אני תוהה מה יש שם בחוץ." },
                { word: "realize", translation: "להבין / לקלוט", context: "I realize now that I was wrong.", contextTranslation: "אני קולט עכשיו שטעיתי." },
                { word: "bright", translation: "בהיר", context: "The stars are bright.", contextTranslation: "הכוכבים בהירים." }
            ]
        }
    },
    {
        id: 502,
        week: 5,
        day: 2,
        type: 'reading',
        title: 'Journey to the Stars',
        content: {
            text: "Nadav loves science class. Today, the teacher talks about a huge mystery. 'Space is deep and dark,' she says. 'But there are many bright stars.' Nadav wants to explore the galaxy. He wants to discover a new planet like Earth. 'Is it impossible to go there?' he asks. The teacher gives an explanation. 'We need a lot of energy to fly that far.' Nadav starts to wonder about the future.",
            vocabulary: [
                { word: "science", translation: "מדע" },
                { word: "mystery", translation: "תעלומה" },
                { word: "space", translation: "חלל / מקום" },
                { word: "explore", translation: "לחקור" },
                { word: "planet", translation: "כוכב לכת" },
                { word: "explanation", translation: "הסבר" }
            ],
            questions: [
                { id: "q1", text: "What class does Nadav love?", answer: "He loves science class." },
                { id: "q2", text: "What does Nadav want to explore?", answer: "He wants to explore the galaxy." },
                { id: "q3", text: "What does he want to discover?", answer: "He wants to discover a new planet." },
                { id: "q4", text: "Why is it hard to go there?", answer: "Because we need a lot of energy." },
                { id: "q5", text: "What are bright in space?", answer: "The stars are bright." }
            ],
            fillInTheBlanks: {
                title: "Space Terms",
                exercises: [
                    { id: "f1", sentence: "The sun is a very _____ star.", answer: "bright", options: ["bright", "deep", "impossible"] },
                    { id: "f2", sentence: "We live on planet _____.", answer: "Earth", options: ["Earth", "Brain", "Energy"] },
                    { id: "f3", sentence: "I want to _____ the ocean.", answer: "explore", options: ["explore", "prove", "realize"] },
                    { id: "f4", sentence: "It is a _____ that we cannot solve.", answer: "mystery", options: ["mystery", "science", "physics"] },
                    { id: "f5", sentence: "This box is _____.", answer: "huge", options: ["huge", "real", "deep"] }
                ]
            }
        }
    },
    {
        id: 503,
        week: 5,
        day: 3,
        type: 'reading',
        title: 'The Physics Experiment',
        content: {
            text: "Tom and Dan study physics together. They want to prove a new idea. 'Let's examine this machine,' says Tom. 'It uses solar energy.' Dan looks at the data. 'I realize something important,' Dan says. 'This is real science!' They write an explanation for the teacher. 'Your brain is working fast today,' Tom laughs. They are happy to learn how things work. It is not impossible to understand if you try.",
            vocabulary: [
                { word: "physics", translation: "פיזיקה" },
                { word: "prove", translation: "להוכיח" },
                { word: "examine", translation: "לבחון" },
                { word: "energy", translation: "אנרגיה" },
                { word: "realize", translation: "להבין / לקלוט" },
                { word: "brain", translation: "מוח" }
            ],
            questions: [
                { id: "q1", text: "What do Tom and Dan study?", answer: "They study physics." },
                { id: "q2", text: "What do they want to prove?", answer: "They want to prove a new idea." },
                { id: "q3", text: "What does the machine use?", answer: "It uses solar energy." },
                { id: "q4", text: "What does Dan realize?", answer: "He realizes something important." },
                { id: "q5", text: "Is it impossible to understand?", answer: "No, it is not impossible if you try." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "physics", definition: "The study of matter and energy" },
                    { id: "m2", word: "prove", definition: "To show something is true" },
                    { id: "m3", word: "examine", definition: "To look at closely" },
                    { id: "m4", word: "energy", definition: "Power to do work" },
                    { id: "m5", word: "brain", definition: "The organ inside your head" }
                ]
            }
        }
    },
    {
        id: 504,
        week: 5,
        day: 4,
        type: 'pronunciation',
        title: 'Scientific Sounds',
        content: {
            text: "Gravity is a rule of physics. It keeps our feet on Earth. The sun gives us huge amounts of energy. Can you prove how it works? Scientists try to find a clear explanation. It is fascinating!",
            vocabulary: [
                { word: "physics", translation: "פיזיקה" },
                { word: "prove", translation: "להוכיח" },
                { word: "Earth", translation: "כדור הארץ" },
                { word: "energy", translation: "אנרגיה" },
                { word: "explanation", translation: "הסבר" },
                { word: "huge", translation: "ענק" }
            ],
            tips: [
                "The 'Ph' in 'Physics' sounds like 'F'.",
                "In 'Huge', pronounce the 'H' clearly. Hyoo-j."
            ]
        }
    },
    {
        id: 505,
        week: 5,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: The Unknown',
        content: {
            text: "Look at the bright stars in the sky. It is a big mystery what is out there. I wonder if aliens exist in deep space. It seems impossible to travel that far. One day we might discover the truth.",
            vocabulary: [
                { word: "wonder", translation: "לתהות" },
                { word: "mystery", translation: "תעלומה" },
                { word: "discover", translation: "לגלות" },
                { word: "deep", translation: "עמוק" },
                { word: "impossible", translation: "בלתי אפשרי" },
                { word: "bright", translation: "בהיר" }
            ],
            tips: [
                "Practice the 'Th' sound in 'Truth' and 'Nothing'.",
                "Say 'Impossible' with stress on 'pos': Im-POS-si-ble."
            ]
        }
    },
    {
        id: 506,
        week: 5,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 6: ELON MUSK & MARS
    // =========================================================================
    {
        id: 601,
        week: 6,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Future & Innovation Vocabulary',
        content: {
            pairs: [
                { word: "leader", translation: "מנהיג", context: "He is a great leader.", contextTranslation: "הוא מנהיג דגול." },
                { word: "airplane", translation: "מטוס", context: "The airplane flies high.", contextTranslation: "המטוס טס גבוה." },
                { word: "flight", translation: "טיסה", context: "The flight was long.", contextTranslation: "הטיסה הייתה ארוכה." },
                { word: "pilot", translation: "טייס", context: "The pilot controls the plane.", contextTranslation: "הטייס שולט במטוס." },
                { word: "passenger", translation: "נוסע", context: "I am a passenger on this bus.", contextTranslation: "אני נוסע באוטובוס הזה." },
                { word: "travel", translation: "טיול / לטייל", context: "I love to travel to new places.", contextTranslation: "אני אוהב לטייל למקומות חדשים." },
                { word: "journey", translation: "מסע", context: "Life is a journey.", contextTranslation: "החיים הם מסע." },
                { word: "reach", translation: "להגיע", context: "We will reach Mars soon.", contextTranslation: "נגיע למאדים בקרוב." },
                { word: "distance", translation: "מרחק", context: "The distance is far.", contextTranslation: "המרחק הוא רחוק." },
                { word: "improve", translation: "לשפר", context: "We must improve our technology.", contextTranslation: "אנחנו חייבים לשפר את הטכנולוגיה שלנו." },
                { word: "increase", translation: "להגדיל / לגדול", context: "Increase the speed.", contextTranslation: "הגבר את המהירות." },
                { word: "prepared", translation: "מוכן", context: "Are you prepared for the test?", contextTranslation: "האם אתה מוכן למבחן?" },
                { word: "necessary", translation: "נחוץ", context: "Water is necessary for life.", contextTranslation: "מים נחוצים לחיים." },
                { word: "available", translation: "זמין", context: "Tickets are available now.", contextTranslation: "כרטיסים זמינים כעת." },
                { word: "public", translation: "ציבורי", context: "This is a public park.", contextTranslation: "זהו פארק ציבורי." },
                { word: "well-known", translation: "ידוע", context: "Elon is well-known.", contextTranslation: "אילון הוא ידוע." },
                { word: "serious", translation: "רציני", context: "This is a serious plan.", contextTranslation: "זו תוכנית רצינית." },
                { word: "plan", translation: "תוכנית", context: "What is the plan?", contextTranslation: "מה התוכנית?" },
                { word: "goal", translation: "מטרה / שער", context: "My goal is to go to space.", contextTranslation: "המטרה שלי היא ללכת לחלל." },
                { word: "project", translation: "פרויקט", context: "This is a big project.", contextTranslation: "זה פרויקט גדול." }
            ]
        }
    },
    {
        id: 602,
        week: 6,
        day: 2,
        type: 'reading',
        title: 'The Red Planet Plan',
        content: {
            text: "Elon is a famous leader in technology. He has a big project to take people to Mars. It is not an ordinary airplane flight. The distance to Mars is very long. Every passenger must be prepared for a hard journey. Elon wants to improve the rockets. His goal is to reach the red planet soon. It is necessary to build a new city there. Some people think he is too serious. But Elon believes travel to space will be available for everyone.",
            vocabulary: [
                { word: "leader", translation: "מנהיג" },
                { word: "project", translation: "פרויקט" },
                { word: "distance", translation: "מרחק" },
                { word: "journey", translation: "מסע" },
                { word: "prepared", translation: "מוכן" },
                { word: "available", translation: "זמין" }
            ],
            questions: [
                { id: "q1", text: "Who is Elon?", answer: "He is a famous leader in technology." },
                { id: "q2", text: "What is his big project?", answer: "His project is to take people to Mars." },
                { id: "q3", text: "Is the distance short?", answer: "No, the distance is very long." },
                { id: "q4", text: "What must every passenger be?", answer: "Every passenger must be prepared." },
                { id: "q5", text: "What does Elon believe?", answer: "He believes space travel will be available for everyone." }
            ],
            fillInTheBlanks: {
                title: "Mars Mission",
                exercises: [
                    { id: "f1", sentence: "The _____ controls the ship.", answer: "pilot", options: ["pilot", "plan", "goal"] },
                    { id: "f2", sentence: "We need to _____ the speed.", answer: "increase", options: ["increase", "travel", "flight"] },
                    { id: "f3", sentence: "Water is _____ to survive.", answer: "necessary", options: ["necessary", "public", "serious"] },
                    { id: "f4", sentence: "They went on a long _____.", answer: "journey", options: ["journey", "airplane", "leader"] },
                    { id: "f5", sentence: "He is a _____ scientist.", answer: "well-known", options: ["well-known", "prepared", "available"] }
                ]
            }
        }
    },
    {
        id: 603,
        week: 6,
        day: 3,
        type: 'reading',
        title: 'Interview with a Pilot',
        content: {
            text: "Reporter: 'Are you the pilot of this new ship?' Pilot: 'Yes, I am. I love to travel fast.' Reporter: 'Is it dangerous?' Pilot: 'We try to improve safety every day.' Reporter: 'When will the flight be available to the public?' Pilot: 'Soon. We plan to increase the number of seats.' Reporter: 'Is it hard to reach the stars?' Pilot: 'Yes, but it is our goal. We are serious about this.'",
            vocabulary: [
                { word: "pilot", translation: "טייס" },
                { word: "travel", translation: "טיול / לטייל" },
                { word: "improve", translation: "לשפר" },
                { word: "public", translation: "ציבורי" },
                { word: "increase", translation: "להגדיל / לגדול" },
                { word: "serious", translation: "רציני" }
            ],
            questions: [
                { id: "q1", text: "What does the pilot love?", answer: "He loves to travel fast." },
                { id: "q2", text: "What do they try to improve?", answer: "They try to improve safety." },
                { id: "q3", text: "Who will the flight be available to?", answer: "It will be available to the public." },
                { id: "q4", text: "What do they plan to increase?", answer: "They plan to increase the number of seats." },
                { id: "q5", text: "Is it hard to reach the stars?", answer: "Yes, but it is their goal." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "pilot", definition: "A person who flies a plane" },
                    { id: "m2", word: "travel", definition: "To go from place to place" },
                    { id: "m3", word: "improve", definition: "To make better" },
                    { id: "m4", word: "public", definition: "For everyone" },
                    { id: "m5", word: "increase", definition: "To make bigger or more" }
                ]
            }
        }
    },
    {
        id: 604,
        week: 6,
        day: 4,
        type: 'pronunciation',
        title: 'Future Sounds',
        content: {
            text: "The leader of the mission is well-known. He wants to travel a huge distance to Mars. The airplane is not enough, we need a rocket. Every astronaut is prepared for the flight. It will be historic.",
            vocabulary: [
                { word: "leader", translation: "מנהיג" },
                { word: "travel", translation: "טיול / לטייל" },
                { word: "distance", translation: "מרחק" },
                { word: "airplane", translation: "מטוס" },
                { word: "prepared", translation: "מוכן" },
                { word: "well-known", translation: "ידוע" }
            ],
            tips: [
                "In 'Prepared', the second 'e' is silent. Say 'Pre-pared'.",
                "Make sure 'Flight' ends with a crisp 'T'."
            ]
        }
    },
    {
        id: 605,
        week: 6,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Innovation',
        content: {
            text: "This journey is open to the public. Tickets are now available for every passenger. We must increase the speed of the engine. Engineers try to improve safety every day. Mars is waiting for us.",
            vocabulary: [
                { word: "increase", translation: "להגדיל / לגדול" },
                { word: "journey", translation: "מסע" },
                { word: "public", translation: "ציבורי" },
                { word: "available", translation: "זמין" },
                { word: "passenger", translation: "נוסע" },
                { word: "improve", translation: "לשפר" }
            ],
            tips: [
                "Practice the 'J' in 'Journey'.",
                "In 'Passenger', the 'g' is soft, like 'j'."
            ]
        }
    },
    {
        id: 606,
        week: 6,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 7: FRIENDSHIP & RELATIONSHIPS
    // =========================================================================
    {
        id: 701,
        week: 7,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Relationship Vocabulary',
        content: {
            pairs: [
                { word: "friend", translation: "חבר", context: "He is my best friend.", contextTranslation: "הוא החבר הכי טוב שלי." },
                { word: "trust", translation: "אמון / לבטוח", context: "I trust you completely.", contextTranslation: "אני סומך עליך לגמרי." },
                { word: "love", translation: "אהבה / לאהוב", context: "They love each other.", contextTranslation: "הם אוהבים אחד את השני." },
                { word: "couple", translation: "זוג", context: "Look at that happy couple.", contextTranslation: "תסתכל על הזוג המאושר הזה." },
                { word: "guy", translation: "בחור", context: "He is a nice guy.", contextTranslation: "הוא בחור נחמד." },
                { word: "share", translation: "חלק / לשתף", context: "Share your toys.", contextTranslation: "שתף את הצעצועים שלך." },
                { word: "discuss", translation: "לדון", context: "Let's discuss the problem.", contextTranslation: "בוא נדון בבעיה." },
                { word: "conversation", translation: "שיחה", context: "We had a long conversation.", contextTranslation: "הייתה לנו שיחה ארוכה." },
                { word: "promise", translation: "להבטיח", context: "I promise to help.", contextTranslation: "אני מבטיח לעזור." },
                { word: "help", translation: "עזרה / לעזור", context: "Can you help me?", contextTranslation: "אתה יכול לעזור לי?" },
                { word: "angry", translation: "כועס", context: "Do not be angry.", contextTranslation: "אל תהיה כועס." },
                { word: "personal", translation: "אישי", context: "This is a personal question.", contextTranslation: "זו שאלה אישית." },
                { word: "lovely", translation: "מקסים", context: "She has a lovely smile.", contextTranslation: "יש לה חיוך מקסים." },
                { word: "admit", translation: "להודות", context: "You must admit the truth.", contextTranslation: "אתה חייב להודות באמת." },
                { word: "respond", translation: "להגיב", context: "Please respond to my email.", contextTranslation: "אנא הגב לאימייל שלי." },
                { word: "heart", translation: "לב", context: "Listen to your heart.", contextTranslation: "תקשיב ללב שלך." },
                { word: "interested (in)", translation: "מתעניין (ב)", context: "I am interested in art.", contextTranslation: "אני מתעניין באומנות." },
                { word: "hide", translation: "להסתיר / להתחבא", context: "Do not hide your feelings.", contextTranslation: "אל תסתיר את הרגשות שלך." },
                { word: "together", translation: "יחד", context: "We work together.", contextTranslation: "אנחנו עובדים יחד." },
                { word: "along with", translation: "יחד עם", context: "Come along with us.", contextTranslation: "בוא יחד איתנו." }
            ]
        }
    },
    {
        id: 702,
        week: 7,
        day: 2,
        type: 'reading',
        title: 'Best Friends',
        content: {
            text: "Ben and Dan are good friends. They like to do everything together. One day, they had a personal conversation. 'I need to discuss something with you,' said Ben. 'I am angry because you did not share the cake.' Dan felt sad. 'I admit I was wrong,' Dan said. 'I promise it will not happen again.' Ben smiled. 'I trust you, Dan. You are a great guy.' They shook hands. It is lovely to have a friend who understands you.",
            vocabulary: [
                { word: "friend", translation: "חבר" },
                { word: "together", translation: "יחד" },
                { word: "discuss", translation: "לדון" },
                { word: "share", translation: "חלק / לשתף" },
                { word: "admit", translation: "להודות" },
                { word: "trust", translation: "אמון / לבטוח" }
            ],
            questions: [
                { id: "q1", text: "Who are Ben and Dan?", answer: "They are good friends." },
                { id: "q2", text: "Why was Ben angry?", answer: "Because Dan did not share the cake." },
                { id: "q3", text: "What did Dan admit?", answer: "He admitted he was wrong." },
                { id: "q4", text: "What did Dan promise?", answer: "He promised it will not happen again." },
                { id: "q5", text: "What does Ben think of Dan?", answer: "He thinks he is a great guy." }
            ],
            fillInTheBlanks: {
                title: "Friendship Rules",
                exercises: [
                    { id: "f1", sentence: "They make a lovely _____.", answer: "couple", options: ["couple", "heart", "help"] },
                    { id: "f2", sentence: "He is a funny _____.", answer: "guy", options: ["guy", "share", "admit"] },
                    { id: "f3", sentence: "Do not _____ from me.", answer: "hide", options: ["hide", "discuss", "respond"] },
                    { id: "f4", sentence: "I am _____ in your story.", answer: "interested", options: ["interested", "angry", "personal"] },
                    { id: "f5", sentence: "Please _____ to my question.", answer: "respond", options: ["respond", "love", "trust"] }
                ]
            }
        }
    },
    {
        id: 703,
        week: 7,
        day: 3,
        type: 'reading',
        title: 'A Love Story',
        content: {
            text: "Ruth and Gil differ in many ways. But they love each other very much. 'You have a kind heart,' Gil tells her. They like to walk along with their dog. One day, Gil asked a question. 'Will you marry me?' Ruth was happy. 'Yes!' she said. They told the happy news to every couple they knew. 'We are interested in a big wedding,' they said. It is important to help each other in life.",
            vocabulary: [
                { word: "love", translation: "אהבה / לאהוב" },
                { word: "heart", translation: "לב" },
                { word: "along with", translation: "יחד עם" },
                { word: "couple", translation: "זוג" },
                { word: "interested (in)", translation: "מתעניין (ב)" },
                { word: "help", translation: "עזרה / לעזור" }
            ],
            questions: [
                { id: "q1", text: "How do Ruth and Gil feel about each other?", answer: "They love each other very much." },
                { id: "q2", text: "What does Gil tell Ruth?", answer: "He tells her she has a kind heart." },
                { id: "q3", text: "What did Gil ask?", answer: "He asked her to marry him." },
                { id: "q4", text: "Who did they tell the news to?", answer: "They told every couple they knew." },
                { id: "q5", text: "What is important in life?", answer: "It is important to help each other." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "love", definition: "A very strong feeling of affection" },
                    { id: "m2", word: "heart", definition: "The center of feelings" },
                    { id: "m3", word: "couple", definition: "Two people together" },
                    { id: "m4", word: "help", definition: "To make it easier for someone" },
                    { id: "m5", word: "interested", definition: "Wanting to know more" }
                ]
            }
        }
    },
    {
        id: 704,
        week: 7,
        day: 4,
        type: 'pronunciation',
        title: 'Expressing Feelings',
        content: {
            text: "We need to have an honest conversation. I admit that I was angry before. I promise to listen more next time. Let's work together to fix this. Please help me understand you.",
            vocabulary: [
                { word: "conversation", translation: "שיחה" },
                { word: "angry", translation: "כועס" },
                { word: "promise", translation: "להבטיח" },
                { word: "help", translation: "עזרה / לעזור" },
                { word: "admit", translation: "להודות" },
                { word: "together", translation: "יחד" }
            ],
            tips: [
                "In 'Conversation', stress the 'sa': Con-ver-SA-tion.",
                "The 'gry' in 'Angry' blends together."
            ]
        }
    },
    {
        id: 705,
        week: 7,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Relationships',
        content: {
            text: "That lovely couple has strong trust. They discuss everything openly. She told him a personal secret. He knew exactly how to respond. They are happy together.",
            vocabulary: [
                { word: "trust", translation: "אמון / לבטוח" },
                { word: "discuss", translation: "לדון" },
                { word: "personal", translation: "אישי" },
                { word: "respond", translation: "להגיב" },
                { word: "couple", translation: "זוג" },
                { word: "lovely", translation: "מקסים" }
            ],
            tips: [
                "Practice the 'R' sound in 'Trust' and 'Relationship'.",
                "Say 'Couple' like 'Cup-le'."
            ]
        }
    },
    {
        id: 706,
        week: 7,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },
    // =========================================================================
    // WEEK 8: FOOD & RESTAURANTS
    // =========================================================================
    {
        id: 801,
        week: 8,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Food Vocabulary',
        content: {
            pairs: [
                { word: "meal", translation: "ארוחה", context: "Breakfast is a meal.", contextTranslation: "ארוחת בוקר היא ארוחה." },
                { word: "bowl", translation: "קערה", context: "Eat soup from a bowl.", contextTranslation: "אכול מרק מקערה." },
                { word: "lemon", translation: "לימון", context: "A lemon is sour.", contextTranslation: "לימון הוא חמוץ." },
                { word: "pepper", translation: "פלפל", context: "Add salt and pepper.", contextTranslation: "הוסף מלח ופלפל." },
                { word: "salt", translation: "מלח", context: "The food needs salt.", contextTranslation: "האוכל צריך מלח." },
                { word: "oil", translation: "שמן", context: "Fry it in oil.", contextTranslation: "טגן את זה בשמן." },
                { word: "fresh", translation: "טרי", context: "These eggs are fresh.", contextTranslation: "הביצים האלו טריות." },
                { word: "dry", translation: "יבש", context: "The bread is dry.", contextTranslation: "הלחם יבש." },
                { word: "serve", translation: "להגיש", context: "They serve pizza here.", contextTranslation: "הם מגישים פיצה כאן." },
                { word: "order", translation: "להזמין", context: "I want to order lunch.", contextTranslation: "אני רוצה להזמין ארוחת צהריים." },
                { word: "feed", translation: "להאכיל", context: "Feed the dog.", contextTranslation: "האכל את הכלב." },
                { word: "hunger", translation: "רעב (שם עצם)", context: "He felt great hunger.", contextTranslation: "הוא הרגיש רעב גדול." },
                { word: "quality", translation: "איכות", context: "This meat is good quality.", contextTranslation: "הבשר הזה הוא באיכות טובה." },
                { word: "amount", translation: "כמות", context: "A small amount of sugar.", contextTranslation: "כמות קטנה של סוכר." },
                { word: "choice", translation: "בחירה", context: "You have a choice.", contextTranslation: "יש לך בחירה." },
                { word: "variety", translation: "מגוון", context: "A variety of fruits.", contextTranslation: "מגוון פירות." },
                { word: "healthy", translation: "בריא", context: "Vegetables are healthy.", contextTranslation: "ירקות הם בריאים." },
                { word: "menu", translation: "תפריט", context: "Look at the menu.", contextTranslation: "תסתכל בתפריט." },
                { word: "tasty", translation: "טעים", context: "The cake is tasty.", contextTranslation: "העוגה טעימה." },
                { word: "drink", translation: "לשתות / משקה", context: "I want a cold drink.", contextTranslation: "אני רוצה משקה קר." }
            ]
        }
    },
    {
        id: 802,
        week: 8,
        day: 2,
        type: 'reading',
        title: 'Dinner Time',
        content: {
            text: "The family sits down for a meal. Mom puts a big bowl of salad on the table. 'It is very healthy,' she says. Dad wants to order a pizza, but Mom says no. 'We have fresh food here,' she insists. She puts oil and lemon on the salad. 'Pass the salt, please,' asks the boy. There is a variety of things to eat. The quality of the food is high. They drink water with the meal. Everyone eats until the hunger is gone.",
            vocabulary: [
                { word: "meal", translation: "ארוחה" },
                { word: "bowl", translation: "קערה" },
                { word: "healthy", translation: "בריא" },
                { word: "order", translation: "להזמין" },
                { word: "fresh", translation: "טרי" },
                { word: "variety", translation: "מגוון" }
            ],
            questions: [
                { id: "q1", text: "What does Mom put on the table?", answer: "She puts a big bowl of salad." },
                { id: "q2", text: "What does Dad want to do?", answer: "He wants to order a pizza." },
                { id: "q3", text: "What does she put on the salad?", answer: "She puts oil and lemon." },
                { id: "q4", text: "Is the food fresh?", answer: "Yes, they have fresh food." },
                { id: "q5", text: "What do they drink?", answer: "They drink water." }
            ],
            fillInTheBlanks: {
                title: "In the Kitchen",
                exercises: [
                    { id: "f1", sentence: "Add some black _____.", answer: "pepper", options: ["pepper", "bowl", "hunger"] },
                    { id: "f2", sentence: "The cake is very _____.", answer: "dry", options: ["dry", "oil", "feed"] },
                    { id: "f3", sentence: "I will _____ the guests.", answer: "serve", options: ["serve", "choice", "amount"] },
                    { id: "f4", sentence: "Did you _____ the cat?", answer: "feed", options: ["feed", "order", "salt"] },
                    { id: "f5", sentence: "Use a small _____ of salt.", answer: "amount", options: ["amount", "meal", "quality"] }
                ]
            }
        }
    },
    {
        id: 803,
        week: 8,
        day: 3,
        type: 'reading',
        title: 'At the Restaurant',
        content: {
            text: "Waiter: 'Are you ready to order?' Customer: 'Yes, what do you serve today?' Waiter: 'We have a choice of fish or meat.' Customer: 'I will take the fish with lemon.' Waiter: 'And to drink?' Customer: 'Just water.' The waiter brings the meal. It looks tasty. The customer puts pepper on the fish. 'This is great quality,' he thinks.",
            vocabulary: [
                { word: "order", translation: "להזמין" },
                { word: "serve", translation: "להגיש" },
                { word: "choice", translation: "בחירה" },
                { word: "lemon", translation: "לימון" },
                { word: "meal", translation: "ארוחה" },
                { word: "quality", translation: "איכות" }
            ],
            questions: [
                { id: "q1", text: "What does the customer ask?", answer: "He asks what they serve today." },
                { id: "q2", text: "What is the choice?", answer: "The choice is fish or meat." },
                { id: "q3", text: "What does the customer take?", answer: "He takes the fish with lemon." },
                { id: "q4", text: "What does he put on the fish?", answer: "He puts pepper on the fish." },
                { id: "q5", text: "What does he think about the quality?", answer: "He thinks it is great quality." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "order", definition: "To ask for food" },
                    { id: "m2", word: "serve", definition: "To give food to someone" },
                    { id: "m3", word: "choice", definition: "The act of picking" },
                    { id: "m4", word: "meal", definition: "Food eaten at one time" },
                    { id: "m5", word: "quality", definition: "How good something is" }
                ]
            }
        }
    },
    {
        id: 804,
        week: 8,
        day: 4,
        type: 'pronunciation',
        title: 'Cooking Sounds',
        content: {
            text: "I want to feed my family a healthy dinner. Uses fresh vegetables from the garden. Add a little oil and salt for taste. Squeeze a lemon over the fish. It is delicious!",
            vocabulary: [
                { word: "fresh", translation: "טרי" },
                { word: "healthy", translation: "בריא" },
                { word: "oil", translation: "שמן" },
                { word: "salt", translation: "מלח" },
                { word: "lemon", translation: "לימון" },
                { word: "feed", translation: "להאכיל" }
            ],
            tips: [
                "The 'H' in 'Healthy' is strong. Hell-thy.",
                "Say 'Oil' as one smooth sound. OY-l."
            ]
        }
    },
    {
        id: 805,
        week: 8,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Taste',
        content: {
            text: "This restaurant is famous for high quality. They serve a huge variety of dishes. You have a hard choice to make. I will order the steak. The amount of food is very big.",
            vocabulary: [
                { word: "serve", translation: "להגיש" },
                { word: "variety", translation: "מגוון" },
                { word: "choice", translation: "בחירה" },
                { word: "amount", translation: "כמות" },
                { word: "quality", translation: "איכות" },
                { word: "order", translation: "להזמין" }
            ],
            tips: [
                "Practice the 'Ch' in 'Choice'.",
                "In 'Variety', stress the 'ri'. Va-RYE-e-tee."
            ]
        }
    },
    {
        id: 806,
        week: 8,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 9: MODERN LIFE & AI
    // =========================================================================
    {
        id: 901,
        week: 9,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Tech Vocabulary',
        content: {
            pairs: [
                { word: "modern", translation: "מודרני", context: "We live in a modern city.", contextTranslation: "אנחנו חיים בעיר מודרנית." },
                { word: "international", translation: "בינלאומי", context: "This is an international company.", contextTranslation: "זו חברה בינלאומית." },
                { word: "daily", translation: "יומי", context: "I check my email daily.", contextTranslation: "אני בודק את האימייל שלי מדי יום." },
                { word: "simple", translation: "פשוט", context: "The answer is simple.", contextTranslation: "התשובה פשוטה." },
                { word: "clever", translation: "חכם", context: "That is a clever idea.", contextTranslation: "זה רעיון חכם." },
                { word: "solve", translation: "לפתור", context: "Can AI solve this?", contextTranslation: "האם בינה מלאכותית יכולה לפתור את זה?" },
                { word: "difficulty", translation: "קושי", context: "I have difficulty with math.", contextTranslation: "יש לי קושי במתמטיקה." },
                { word: "telephone number", translation: "מספר טלפון", context: "What is your telephone number?", contextTranslation: "מה מספר הטלפון שלך?" },
                { word: "immediately", translation: "מיד", context: "Come here immediately.", contextTranslation: "בוא הנה מיד." },
                { word: "available", translation: "זמין", context: "Is the bot available?", contextTranslation: "האם הבוט זמין?" },
                { word: "additional", translation: "נוסף", context: "Do you have additional questions?", contextTranslation: "יש לך שאלות נוספות?" },
                { word: "useful", translation: "שימושי", context: "This tool is useful.", contextTranslation: "הכלי הזה שימושי." },
                { word: "sign", translation: "שלט / סימן", context: "It is a good sign.", contextTranslation: "זה סימן טוב." },
                { word: "notice", translation: "לשים לב / הודעה", context: "Did you notice the change?", contextTranslation: "האם שמת לב לשינוי?" },
                { word: "effect", translation: "השפעה", context: "The effect is big.", contextTranslation: "ההשפעה גדולה." },
                { word: "computer", translation: "מחשב", context: "I use a computer to work.", contextTranslation: "אני משתמש במחשב לעבודה." },
                { word: "robot", translation: "רובוט", context: "The robot cleans the floor.", contextTranslation: "הרובוט מנקה את הרצפה." },
                { word: "technology", translation: "טכנולוגיה", context: "Technology moves fast.", contextTranslation: "הטכנולוגיה זזה מהר." },
                { word: "connect", translation: "לחבר", context: "Connect to the wifi.", contextTranslation: "התחבר לוויי-פיי." },
                { word: "screen", translation: "מסך", context: "Look at the screen.", contextTranslation: "הסתכל על המסך." }
            ]
        }
    },
    {
        id: 902,
        week: 9,
        day: 2,
        type: 'reading',
        title: 'Smart Home',
        content: {
            text: "In the modern world, houses are clever. You can control the lights with a computer. It makes daily life simple. If there is a difficulty, the system helps you solve it. You can send a message immediately to your phone. It is very useful for busy people. Some people worry about the effect of technology. But it is available to help us. Just notice the signs of change. The future is here.",
            vocabulary: [
                { word: "modern", translation: "מודרני" },
                { word: "clever", translation: "חכם" },
                { word: "simple", translation: "פשוט" },
                { word: "solve", translation: "לפתור" },
                { word: "useful", translation: "שימושי" },
                { word: "effect", translation: "השפעה" }
            ],
            questions: [
                { id: "q1", text: "What are houses like in the modern world?", answer: "They are clever." },
                { id: "q2", text: "What makes daily life simple?", answer: "Controlling lights with a computer makes it simple." },
                { id: "q3", text: "What does the system help you do?", answer: "It helps you solve difficulties." },
                { id: "q4", text: "Who is it useful for?", answer: "It is useful for busy people." },
                { id: "q5", text: "What should you notice?", answer: "You should notice the signs of change." }
            ],
            fillInTheBlanks: {
                title: "Digital Life",
                exercises: [
                    { id: "f1", sentence: "Give me your _____.", answer: "telephone number", options: ["telephone number", "robot", "sign"] },
                    { id: "f2", sentence: "This is an _____ problem.", answer: "international", options: ["international", "daily", "simple"] },
                    { id: "f3", sentence: "I need _____ help.", answer: "additional", options: ["additional", "clever", "modern"] },
                    { id: "f4", sentence: "He will come _____.", answer: "immediately", options: ["immediately", "difficulty", "effect"] },
                    { id: "f5", sentence: "Did you _____ the error?", answer: "notice", options: ["notice", "solve", "connect"] }
                ]
            }
        }
    },
    {
        id: 903,
        week: 9,
        day: 3,
        type: 'reading',
        title: 'Tech Support',
        content: {
            text: "User: 'I have a difficulty with my robot.' Support: 'What is the sign of the problem?' User: 'It does not connect to the screen.' Support: 'Okay, that is simple to fix.' User: 'Do I need additional cables?' Support: 'No, just restart it immediately.' User: 'Thank you, that was useful.' Support: 'We are available 24 hours daily.'",
            vocabulary: [
                { word: "difficulty", translation: "קושי" },
                { word: "sign", translation: "שלט / סימן" },
                { word: "simple", translation: "פשוט" },
                { word: "additional", translation: "נוסף" },
                { word: "immediately", translation: "מיד" },
                { word: "useful", translation: "שימושי" }
            ],
            questions: [
                { id: "q1", text: "What does the user have?", answer: "He has a difficulty with his robot." },
                { id: "q2", text: "What is the problem?", answer: "It does not connect to the screen." },
                { id: "q3", text: "Is it hard to fix?", answer: "No, it is simple to fix." },
                { id: "q4", text: "Does he need additional cables?", answer: "No, he does not." },
                { id: "q5", text: "When are they available?", answer: "They are available 24 hours daily." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "difficulty", definition: "Something that is hard to do" },
                    { id: "m2", word: "sign", definition: "Evidence that something is happening" },
                    { id: "m3", word: "simple", definition: "Not complicated" },
                    { id: "m4", word: "additional", definition: "More than what is already there" },
                    { id: "m5", word: "immediately", definition: "Right now" }
                ]
            }
        }
    },
    {
        id: 904,
        week: 9,
        day: 4,
        type: 'pronunciation',
        title: 'Robot Talk',
        content: {
            text: "Modern robots are very clever. They can solve simple problems for us. This has a big effect on our daily life. It makes everything easier. The future is exciting.",
            vocabulary: [
                { word: "modern", translation: "מודרני" },
                { word: "clever", translation: "חכם" },
                { word: "solve", translation: "לפתור" },
                { word: "simple", translation: "פשוט" },
                { word: "daily", translation: "יומי" },
                { word: "effect", translation: "השפעה" }
            ],
            tips: [
                "The 'T' in 'Robot' is often soft at the end.",
                "In 'Daily', say 'Day-lee'."
            ]
        }
    },
    {
        id: 905,
        week: 9,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Global Tech',
        content: {
            text: "I need your telephone number for the form. Is there any additional info? This is an international service. It is available to everyone. Look for the sign that says 'Help'. It is very useful.",
            vocabulary: [
                { word: "international", translation: "בינלאומי" },
                { word: "telephone number", translation: "מספר טלפון" },
                { word: "additional", translation: "נוסף" },
                { word: "available", translation: "זמין" },
                { word: "useful", translation: "שימושי" },
                { word: "sign", translation: "שלט / סימן" }
            ],
            tips: [
                "International is long: In-ter-NA-tio-nal.",
                "Telephone starts with 'Tel', not 'Tal'."
            ]
        }
    },
    {
        id: 906,
        week: 9,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    },

    // =========================================================================
    // WEEK 10: GRADUATION & SUCCESS
    // =========================================================================
    {
        id: 1001,
        week: 10,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Success Vocabulary',
        content: {
            pairs: [
                { word: "success", translation: "הצלחה", context: "I wish you success.", contextTranslation: "אני מאחל לך הצלחה." },
                { word: "complete", translation: "שלם / להשלים", context: "Complete the task.", contextTranslation: "השלם את המשימה." },
                { word: "job", translation: "עבודה", context: "I need a new job.", contextTranslation: "אני צריך עבודה חדשה." },
                { word: "work", translation: "עבודה / לעבוד", context: "He goes to work.", contextTranslation: "הוא הולך לעבודה." },
                { word: "office", translation: "משרד", context: "The office is big.", contextTranslation: "המשרד גדול." },
                { word: "manage", translation: "לנהל / להסתדר", context: "Can you manage the team?", contextTranslation: "אתה יכול לנהל את הצוות?" },
                { word: "pay", translation: "תשלום / לשלם", context: "I will pay for lunch.", contextTranslation: "אני אשלם על ארוחת הצהריים." },
                { word: "cash", translation: "מזומן", context: "Do you have cash?", contextTranslation: "יש לך מזומן?" },
                { word: "proud", translation: "גאה", context: "I am proud of you.", contextTranslation: "אני גאה בך." },
                { word: "realize", translation: "להבין / לקלוט", context: "Did you realize it?", contextTranslation: "האם קלטת את זה?" },
                { word: "continue", translation: "להמשיך", context: "Please continue reading.", contextTranslation: "אנא המשך לקרוא." },
                { word: "final", translation: "סופי", context: "This is the final test.", contextTranslation: "זה המבחן הסופי." },
                { word: "perfect", translation: "מושלם", context: "The day was perfect.", contextTranslation: "היום היה מושלם." },
                { word: "successful", translation: "מוצלח", context: "He is a successful man.", contextTranslation: "הוא אדם מוצלח." },
                { word: "opportunity", translation: "הזדמנות", context: "Take this opportunity.", contextTranslation: "קח את ההזדמנות הזאת." },
                { word: "event", translation: "אירוע", context: "The party is a big event.", contextTranslation: "המסיבה היא אירוע גדול." },
                { word: "goal", translation: "מטרה", context: "Reach your goal.", contextTranslation: "הגע למטרה שלך." },
                { word: "effort", translation: "מאמץ", context: "Good effort!", contextTranslation: "מאמץ טוב!" },
                { word: "future", translation: "עתיד", context: "Plan for the future.", contextTranslation: "תכנן לעתיד." },
                { word: "celebrate", translation: "לחגוג", context: "Let's celebrate now.", contextTranslation: "בוא נחגוג עכשיו." }
            ]
        }
    },
    {
        id: 1002,
        week: 10,
        day: 2,
        type: 'reading',
        title: 'Graduation Day',
        content: {
            text: "Today is a special event. Nadav will complete his studies. His parents are very proud of him. 'You worked hard for this success,' his dad says. Nadav wants to find a good job in an office. He knows it takes effort to be successful. 'I want to manage my own business one day,' he says. It is a perfect day to celebrate. He sees a bright future ahead. He is ready for the next opportunity.",
            vocabulary: [
                { word: "event", translation: "אירוע" },
                { word: "complete", translation: "שלם / להשלים" },
                { word: "proud", translation: "גאה" },
                { word: "success", translation: "הצלחה" },
                { word: "job", translation: "עבודה" },
                { word: "manage", translation: "לנהל / להסתדר" }
            ],
            questions: [
                { id: "q1", text: "What is special about today?", answer: "It is a special event, Graduation Day." },
                { id: "q2", text: "How do his parents feel?", answer: "They are very proud of him." },
                { id: "q3", text: "What does Nadav want to find?", answer: "He wants to find a good job." },
                { id: "q4", text: "What does he want to manage?", answer: "He wants to manage his own business." },
                { id: "q5", text: "What does he see ahead?", answer: "He sees a bright future ahead." }
            ],
            fillInTheBlanks: {
                title: "Career Goals",
                exercises: [
                    { id: "f1", sentence: "I go to _____ every morning.", answer: "work", options: ["work", "cash", "proud"] },
                    { id: "f2", sentence: "He sits in a big _____.", answer: "office", options: ["office", "success", "final"] },
                    { id: "f3", sentence: "You need to _____ for the ticket.", answer: "pay", options: ["pay", "continue", "realize"] },
                    { id: "f4", sentence: "This is the _____ game.", answer: "final", options: ["final", "perfect", "successful"] },
                    { id: "f5", sentence: "Do not miss this _____.", answer: "opportunity", options: ["opportunity", "job", "event"] }
                ]
            }
        }
    },
    {
        id: 1003,
        week: 10,
        day: 3,
        type: 'reading',
        title: 'Looking Back',
        content: {
            text: "Nadav talks to his teacher. 'I realize how much I learned,' he says. 'You made a great effort,' the teacher answers. 'Now you must continue to learn.' Nadav smiles. 'It was a successful year.' He wants to pay for a gift for the class. 'Do you have cash?' asks his friend. 'Yes, I saved money from work.' It is the final day of school. Everything is perfect.",
            vocabulary: [
                { word: "realize", translation: "להבין / לקלוט" },
                { word: "effort", translation: "מאמץ" },
                { word: "continue", translation: "להמשיך" },
                { word: "successful", translation: "מוצלח" },
                { word: "pay", translation: "תשלום / לשלם" },
                { word: "cash", translation: "מזומן" }
            ],
            questions: [
                { id: "q1", text: "What does Nadav realize?", answer: "He realizes how much he learned." },
                { id: "q2", text: "What did he make?", answer: "He made a great effort." },
                { id: "q3", text: "What must he continue to do?", answer: "He must continue to learn." },
                { id: "q4", text: "How does he pay for the gift?", answer: "He pays with cash." },
                { id: "q5", text: "Is it the final day?", answer: "Yes, it is the final day of school." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "realize", definition: "To understand clearly" },
                    { id: "m2", word: "effort", definition: "Hard work to do something" },
                    { id: "m3", word: "continue", definition: "To keep going" },
                    { id: "m4", word: "successful", definition: "Having achieved what you wanted" },
                    { id: "m5", word: "pay", definition: "To give money for something" }
                ]
            }
        }
    },
    {
        id: 1004,
        week: 10,
        day: 4,
        type: 'pronunciation',
        title: 'Words of Wisdom',
        content: {
            text: "You should be proud of your success. You worked hard to complete the project. Now you manage a big team in the office. Please continue to do great work. You are a star!",
            vocabulary: [
                { word: "success", translation: "הצלחה" },
                { word: "proud", translation: "גאה" },
                { word: "complete", translation: "שלם / להשלים" },
                { word: "manage", translation: "לנהל / להסתדר" },
                { word: "office", translation: "משרד" },
                { word: "continue", translation: "להמשיך" }
            ],
            tips: [
                "Success has two 'S' sounds: Suc-cess.",
                "In 'Office', the 'i' is short."
            ]
        }
    },
    {
        id: 1005,
        week: 10,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: The End',
        content: {
            text: "This is your final chance to shine. Do not miss this opportunity. I realize now that you are successful. The party was perfect. Let's celebrate all night long!",
            vocabulary: [
                { word: "final", translation: "סופי" },
                { word: "opportunity", translation: "הזדמנות" },
                { word: "perfect", translation: "מושלם" },
                { word: "successful", translation: "מוצלח" },
                { word: "realize", translation: "להבין / לקלוט" },
                { word: "celebrate", translation: "לחגוג" }
            ],
            tips: [
                "Opportunity is long: Op-por-TU-ni-ty.",
                "Successful stresses the middle: Suc-CESS-ful."
            ]
        }
    },
    {
        id: 1006,
        week: 10,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    }
];