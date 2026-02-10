import { Lesson } from '../../types';

// =========================================================================
// WEEK 3: ROBLOX & CREATIVITY
// =========================================================================
export const week03Lessons: Lesson[] = [
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
    }
];
