import { Lesson } from '../../types';

// =========================================================================
// WEEK 14: SKI TRIP TO ITALY (PAST SIMPLE)
// =========================================================================
export const week14Lessons: Lesson[] = [
    {
        id: 1401,
        week: 14,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Ski Trip Vocabulary Review',
        content: {
            pairs: [
                { word: "vacation", translation: "חופשה", context: "Last winter vacation was great.", contextTranslation: "חופשת החורף שעברה הייתה נהדרת." },
                { word: "adventure", translation: "הרפתקה", context: "Skiing is an adventure.", contextTranslation: "סקי זה הרפתקה." },
                { word: "arrival", translation: "הגעה", context: "Our arrival was late.", contextTranslation: "ההגעה שלנו הייתה מאוחרת." },
                { word: "ticket", translation: "כרטיס", context: "I bought a ski ticket.", contextTranslation: "קניתי כרטיס סקי." },
                { word: "plane", translation: "מטוס", context: "We flew on a big plane.", contextTranslation: "טסנו במטוס גדול." },
                { word: "country", translation: "מדינה / ארץ", context: "Italy is a beautiful country.", contextTranslation: "איטליה היא מדינה יפה." },
                { word: "experience", translation: "חוויה", context: "It was a cold experience.", contextTranslation: "זו הייתה חוויה קרה." },
                { word: "offer", translation: "להציע / הצעה", context: "He offered to help me ski.", contextTranslation: "הוא הציע לעזור לי לגלוש." },
                { word: "save", translation: "לחסוך / להציל", context: "We saved money for the trip.", contextTranslation: "חסכנו כסף לטיול." },
                { word: "seem", translation: "להיראות", context: "The hill seemed high.", contextTranslation: "הגבעה נראתה גבוהה." },
                { word: "suggest", translation: "להציע", context: "Dad suggested we drink cocoa.", contextTranslation: "אבא הציע שנשתה שוקו." },
                { word: "recent", translation: "אחרון", context: "My recent trip was to Italy.", contextTranslation: "הטיול האחרון שלי היה לאיטליה." },
                { word: "wonderful", translation: "נפלא", context: "The view was wonderful.", contextTranslation: "הנוף היה נפלא." },
                { word: "cool", translation: "מגניב / קריר", context: "The air was cool and fresh.", contextTranslation: "האוויר היה קריר ורענן." },
                { word: "especially", translation: "במיוחד", context: "I liked the pizza, especially the cheese.", contextTranslation: "אהבתי את הפיצה, במיוחד הגבינה." },
                { word: "throughout", translation: "לאורך כל", context: "It snowed throughout the day.", contextTranslation: "ירד גשם לאורך כל היום." },
                { word: "take a trip", translation: "לצאת לטיול", context: "We took a trip to the Alps.", contextTranslation: "יצאנו לטיול לאלפים." },
                { word: "mail", translation: "דואר", context: "I sent a postcard by mail.", contextTranslation: "שלחתי גלויה בדואר." },
                { word: "purpose", translation: "מטרה", context: "The purpose of the trip was fun.", contextTranslation: "מטרת הטיול הייתה הנאה." },
                { word: "type", translation: "סוג", context: "What type of skis do you need?", contextTranslation: "איזה סוג מגלשיים אתה צריך?" },
                { word: "sort", translation: "סוג / מיון", context: "What sort of hotel is it?", contextTranslation: "איזה סוג מלון זה?" },
                { word: "anyplace", translation: "בכל מקום", context: "We could ski anyplace.", contextTranslation: "יכולנו לגלוש בכל מקום." },
                { word: "anytime", translation: "בכל זמן", context: "You can visit anytime.", contextTranslation: "אתה יכול לבקר בכל זמן." },
                { word: "normally", translation: "בדרך כלל", context: "We normally go in summer.", contextTranslation: "אנחנו בדרך כלל נוסעים בקיץ." },
                { word: "middle", translation: "אמצע", context: "We stayed in the middle of town.", contextTranslation: "נשארנו באמצע העיר." },
                { word: "near", translation: "קרוב / ליד", context: "Is the lift near here?", contextTranslation: "האם המעלית קרובה לכאן?" },
                { word: "take a tour", translation: "לעשות סיור", context: "We took a tour of the village.", contextTranslation: "ערכנו סיור בכפר." }
            ]
        }
    },
    {
        id: 1402,
        week: 14,
        day: 2,
        type: 'reading',
        title: 'The Ski Adventure',
        content: {
            text: "Last winter, my family decided to take a special trip. 'Let's go somewhere cold!' Dad suggested. So, we booked tickets and flew on a large plane all the way to Italy. The purpose of our journey was simple: to have a wonderful ski vacation. Upon our arrival, the country looked amazing. White snow covered everything, especially the tall mountains. It was a cool experience to see so much white! We rented a small wooden house near the ski resort. 'This place seems magical,' my sister said. We normally go to the beach, but this time, we wanted a real winter adventure. Throughout the week, we learned to ski and drank hot chocolate. It was the best recent memory I have.",
            vocabulary: [
                { word: "vacation", translation: "חופשה" },
                { word: "adventure", translation: "הרפתקה" },
                { word: "country", translation: "מדינה / ארץ" },
                { word: "suggest", translation: "להציע" },
                { word: "wonderful", translation: "נפלא" },
                { word: "purpose", translation: "מטרה" },
                { word: "arrival", translation: "הגעה" }
            ],
            questions: [
                { id: "q1", text: "Where did the family go for their vacation?", answer: "They flew to Italy." },
                { id: "q2", text: "What was the purpose of their journey?", answer: "To have a wonderful ski vacation." },
                { id: "q3", text: "What covered the mountains?", answer: "White snow covered the mountains." },
                { id: "q4", text: "Where did they stay?", answer: "They rented a small wooden house near the ski resort." },
                { id: "q5", text: "What did they do throughout the week?", answer: "They learned to ski and drank hot chocolate." }
            ],
            fillInTheBlanks: {
                title: "Trip Details",
                exercises: [
                    { id: "f1", sentence: "We _____ a trip to Italy.", answer: "took", options: ["took", "take", "taking"] },
                    { id: "f2", sentence: "The _____ was very cold.", answer: "mountain", options: ["mountain", "vacation", "ticket"] },
                    { id: "f3", sentence: "I _____ to eat pizza.", answer: "wanted", options: ["wanted", "want", "wanting"] },
                    { id: "f4", sentence: "It was a _____ experience.", answer: "wonderful", options: ["wonderful", "recent", "throughout"] },
                    { id: "f5", sentence: "We _____ money for the flight.", answer: "saved", options: ["saved", "save", "saving"] }
                ]
            }
        }
    },
    {
        id: 1403,
        week: 14,
        day: 3,
        type: 'reading',
        title: 'Lost in the Snow',
        content: {
            text: "On the third day, a real adventure began. I stood in a long line to get my ski lift ticket. The snow was deep and soft. I felt confident, so I went to the top of the mountain. Suddenly, a heavy fog came down, and I couldn't see anything. I tried to ski down, but I drifted away from the path. I was lost in the middle of nowhere! I felt very cold and a bit scared. 'I must find help,' I thought. I looked for anyplace with people. Then, I saw a light. A ski patrol officer came towards me. He offered to guide me back to safety. 'You are lucky,' he said. 'This mountain can be dangerous.' It was a scary experience, but I was happy to be safe.",
            vocabulary: [
                { word: "line", translation: "תור" },
                { word: "ticket", translation: "כרטיס" },
                { word: "offer", translation: "להציע" },
                { word: "seem", translation: "להיראות" },
                { word: "middle", translation: "אמצע" },
                { word: "experience", translation: "חוויה" },
                { word: "anyplace", translation: "בכל מקום" }
            ],
            questions: [
                { id: "q1", text: "Where was he standing?", answer: "He stood in a long line for a ticket." },
                { id: "q2", text: "What happened on the mountain?", answer: "A heavy fog came down and he got lost." },
                { id: "q3", text: "How did he feel?", answer: "He felt cold and scared." },
                { id: "q4", text: "Who found him?", answer: "A ski patrol officer found him." },
                { id: "q5", text: "What did the officer offer?", answer: "He offered to guide him back to safety." }
            ],
            matchDefinitions: {
                title: "Match Past Verbs",
                pairs: [
                    { id: "m1", word: "stood", definition: "Past of 'stand'" },
                    { id: "m2", word: "fell", definition: "Past of 'fall'" },
                    { id: "m3", word: "thought", definition: "Past of 'think'" },
                    { id: "m4", word: "came", definition: "Past of 'come'" },
                    { id: "m5", word: "saw", definition: "Past of 'see'" }
                ]
            }
        }
    },
    {
        id: 1404,
        week: 14,
        day: 4,
        type: 'pronunciation',
        title: 'Past Tense Sounds',
        content: {
            text: "Dad suggested a trip. Mom offered to help. We saved our money. It seemed wonderful. We talked all day. She insisted on paying.",
            vocabulary: [
                { word: "suggested", translation: "הציע (בעבר)" },
                { word: "offered", translation: "הציע (בעבר)" },
                { word: "saved", translation: "חסך / הציל (בעבר)" },
                { word: "seemed", translation: "נראה (בעבר)" },
                { word: "talked", translation: "דיבר (בעבר)" },
                { word: "insisted", translation: "התעקש (בעבר)" }
            ],
            tips: [
                "Regular verbs ending in 'ed' have 3 sounds: 't', 'd', or 'id'.",
                "Sounds like 'd': Offered, Saved, Seemed.",
                "Sounds like 't': Talked.",
                "Sounds like 'id': Suggested, Insisted (because they end in 't')."
            ]
        }
    },
    {
        id: 1405,
        week: 14,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Dinner Talk',
        content: {
            text: "We talked about the trip. Dad suggested we eat pizza. The waiter offered us water. It seemed like a good place. I insisted on paying.",
            vocabulary: [
                { word: "talked", translation: "דיבר (בעבר)" },
                { word: "suggested", translation: "הציע (בעבר)" },
                { word: "offered", translation: "הציע (בעבר)" },
                { word: "seemed", translation: "נראה (בעבר)" },
                { word: "insisted", translation: "התעקש (בעבר)" }
            ],
            tips: [
                "Stress the correct syllable: sug-GES-ted.",
                "Remember: Talked ends with a 't' sound (Talk-t)."
            ]
        }
    },
    {
        id: 1406,
        week: 14,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    }
];
