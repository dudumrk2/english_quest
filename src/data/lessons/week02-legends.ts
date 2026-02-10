import { Lesson } from '../../types';

// =========================================================================
// WEEK 2: JORDAN VS LEBRON
// =========================================================================
export const week02Lessons: Lesson[] = [
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
    }
];
