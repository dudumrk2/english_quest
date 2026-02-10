import { Lesson } from '../../types';

// =========================================================================
// WEEK 10: GRADUATION & SUCCESS
// =========================================================================
export const week10Lessons: Lesson[] = [
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
