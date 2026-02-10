import { Lesson } from '../../types';

// =========================================================================
// WEEK 9: MODERN LIFE & AI
// =========================================================================
export const week09Lessons: Lesson[] = [
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
    }
];
