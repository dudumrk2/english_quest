import { Lesson } from '../../types';

// =========================================================================
// WEEK 7: FRIENDSHIP & RELATIONSHIPS
// =========================================================================
export const week07Lessons: Lesson[] = [
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
    }
];
