import { Lesson } from '../../types';

// =========================================================================
// WEEK 11: TRAVEL & VACATIONS
// =========================================================================
export const week11Lessons: Lesson[] = [
    {
        id: 1101,
        week: 11,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Travel Vocabulary',
        content: {
            pairs: [
                { word: "vacation", translation: "חופשה", context: "We go on vacation every summer.", contextTranslation: "אנחנו יוצאים לחופשה כל קיץ." },
                { word: "adventure", translation: "הרפתקה", context: "This trip is a big adventure.", contextTranslation: "הטיול הזה הוא הרפתקה גדולה." },
                { word: "arrival", translation: "הגעה", context: "The arrival time is 3 PM.", contextTranslation: "זמן ההגעה הוא בשלוש אחר הצהריים." },
                { word: "ticket", translation: "כרטיס", context: "I need to buy a ticket.", contextTranslation: "אני צריך לקנות כרטיס." },
                { word: "plane", translation: "מטוס", context: "The plane flies to London.", contextTranslation: "המטוס טס ללונדון." },
                { word: "country", translation: "מדינה / ארץ", context: "Israel is a small country.", contextTranslation: "ישראל היא מדינה קטנה." },
                { word: "experience", translation: "חוויה / ניסיון", context: "It was a great experience.", contextTranslation: "זו הייתה חוויה נהדרת." },
                { word: "line", translation: "תור / קו", context: "Wait in line for the bus.", contextTranslation: "חכה בתור לאוטובוס." },
                { word: "mail", translation: "דואר", context: "I got a letter in the mail.", contextTranslation: "קיבלתי מכתב בדואר." },
                { word: "type", translation: "סוג", context: "What type of food do you like?", contextTranslation: "איזה סוג אוכל אתה אוהב?" },
                { word: "purpose", translation: "מטרה / תכלית", context: "What is the purpose of your trip?", contextTranslation: "מה מטרת הנסיעה שלך?" },
                { word: "sort", translation: "סוג / למיין", context: "What sort of music do you like?", contextTranslation: "איזה סוג מוזיקה אתה אוהב?" },
                { word: "offer", translation: "להציע / הצעה", context: "They offer free breakfast.", contextTranslation: "הם מציעים ארוחת בוקר חינם." },
                { word: "save", translation: "לחסוך / להציל", context: "Save money for the trip.", contextTranslation: "חסוך כסף לטיול." },
                { word: "seem", translation: "להיראות / נדמה", context: "You seem tired today.", contextTranslation: "אתה נראה עייף היום." },
                { word: "suggest", translation: "להציע", context: "I suggest we go to the beach.", contextTranslation: "אני מציע שנלך לחוף." },
                { word: "recent", translation: "אחרון / לאחרונה", context: "The recent trip was fun.", contextTranslation: "הטיול האחרון היה כיף." },
                { word: "wonderful", translation: "נפלא", context: "The view is wonderful.", contextTranslation: "הנוף נפלא." },
                { word: "cool", translation: "מגניב / קריר", context: "That is a cool idea.", contextTranslation: "זה רעיון מגניב." },
                { word: "anywhere", translation: "בכל מקום", context: "You can go anywhere you want.", contextTranslation: "אתה יכול ללכת לכל מקום שאתה רוצה." },
                { word: "anytime", translation: "בכל זמן", context: "Call me anytime.", contextTranslation: "תתקשר אליי בכל זמן." },
                { word: "anyplace", translation: "כל מקום", context: "Let's meet anyplace you like.", contextTranslation: "בוא ניפגש בכל מקום שאתה רוצה." },
                { word: "especially", translation: "במיוחד", context: "I like fruits, especially apples.", contextTranslation: "אני אוהב פירות, במיוחד תפוחים." },
                { word: "throughout", translation: "לאורך כל", context: "It rained throughout the day.", contextTranslation: "ירד גשם לאורך כל היום." },
                { word: "the middle", translation: "האמצע", context: "We sat in the middle of the room.", contextTranslation: "ישבנו באמצע החדר." },
                { word: "near", translation: "ליד / קרוב", context: "The hotel is near the beach.", contextTranslation: "המלון ליד החוף." },
                { word: "normally", translation: "בדרך כלל", context: "I normally wake up at 7.", contextTranslation: "בדרך כלל אני קם בשבע." },
                { word: "take a trip", translation: "לצאת לטיול", context: "Let's take a trip to Europe.", contextTranslation: "בוא נצא לטיול לאירופה." },
                { word: "take a tour", translation: "לעשות סיור", context: "We will take a tour of the city.", contextTranslation: "נעשה סיור בעיר." },
                { word: "have a good time", translation: "לבלות זמן טוב", context: "Have a good time on your vacation!", contextTranslation: "שיהיה לך זמן טוב בחופשה!" }
            ]
        }
    },
    {
        id: 1102,
        week: 11,
        day: 2,
        type: 'reading',
        title: 'Planning the Trip',
        content: {
            text: "The summer vacation is coming soon. Mom wants to take a trip to a new country. 'What sort of vacation do you want?' she asks. Dad says, 'I suggest we go somewhere cool and wonderful.' The kids are excited about the adventure. Mom checks the mail for special offers from travel companies. 'This hotel seems nice,' she says. 'It is near the beach.' They need to save money for the ticket and the plane ride. The experience will be amazing. 'We will have a good time,' Mom promises. They talk about the purpose of the trip - to relax and have fun throughout the whole week.",
            vocabulary: [
                { word: "vacation", translation: "חופשה" },
                { word: "country", translation: "מדינה / ארץ" },
                { word: "suggest", translation: "להציע" },
                { word: "adventure", translation: "הרפתקה" },
                { word: "offer", translation: "להציע / הצעה" },
                { word: "near", translation: "ליד / קרוב" },
                { word: "save", translation: "לחסוך / להציל" }
            ],
            questions: [
                { id: "q1", text: "When is the vacation coming?", answer: "The summer vacation is coming soon." },
                { id: "q2", text: "What does Mom want to do?", answer: "She wants to take a trip to a new country." },
                { id: "q3", text: "What does Dad suggest?", answer: "He suggests they go somewhere cool and wonderful." },
                { id: "q4", text: "What is near the beach?", answer: "The hotel is near the beach." },
                { id: "q5", text: "What is the purpose of the trip?", answer: "To relax and have fun." }
            ],
            fillInTheBlanks: {
                title: "Travel Planning",
                exercises: [
                    { id: "f1", sentence: "We will _____ to Italy next month.", answer: "take a trip", options: ["take a trip", "have a good time", "take a tour"] },
                    { id: "f2", sentence: "This place _____ very nice.", answer: "seems", options: ["seems", "saves", "offers"] },
                    { id: "f3", sentence: "I like all fruits, _____ oranges.", answer: "especially", options: ["especially", "normally", "anywhere"] },
                    { id: "f4", sentence: "The shop is ___ my house.", answer: "near", options: ["near", "the middle", "throughout"] },
                    { id: "f5", sentence: "What _____ of hotel do you want?", answer: "type", options: ["type", "sort", "line"] }
                ]
            }
        }
    },
    {
        id: 1103,
        week: 11,
        day: 3,
        type: 'reading',
        title: 'At the Airport',
        content: {
            text: "The day of the trip arrived. The family goes to the airport early. There is a long line to check in. 'What is the arrival time in London?' asks the boy. 'We arrive at 4 PM,' Dad answers. They show their tickets to the worker. The plane is very big and cool. 'This is my first experience on a plane!' says the little sister. She can go anywhere she wants to look. Throughout the flight, they watch movies. In the middle of the journey, they get food. 'I normally don't eat on planes,' says Mom, 'but this looks wonderful.' The recent hours went fast. 'Let's take a tour of the city when we land,' suggests Dad. They will have a good time in London!",
            vocabulary: [
                { word: "line", translation: "תור / קו" },
                { word: "arrival", translation: "הגעה" },
                { word: "ticket", translation: "כרטיס" },
                { word: "plane", translation: "מטוס" },
                { word: "experience", translation: "חוויה / ניסיון" },
                { word: "throughout", translation: "לאורך כל" },
                { word: "the middle", translation: "האמצע" }
            ],
            questions: [
                { id: "q1", text: "Where does the family go?", answer: "They go to the airport." },
                { id: "q2", text: "What time do they arrive in London?", answer: "They arrive at 4 PM." },
                { id: "q3", text: "What do they do throughout the flight?", answer: "They watch movies." },
                { id: "q4", text: "What does Dad suggest?", answer: "He suggests taking a tour of the city." },
                { id: "q5", text: "Is this the sister's first experience on a plane?", answer: "Yes, it is her first experience." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "ticket", definition: "A paper that lets you travel" },
                    { id: "m2", word: "arrival", definition: "When you get to a place" },
                    { id: "m3", word: "experience", definition: "Something you do or see" },
                    { id: "m4", word: "adventure", definition: "An exciting journey" },
                    { id: "m5", word: "suggest", definition: "To give an idea" }
                ]
            }
        }
    },
    {
        id: 1104,
        week: 11,
        day: 4,
        type: 'pronunciation',
        title: 'Vacation Sounds',
        content: {
            text: "We are going on a wonderful vacation. It will be a great adventure. I suggest we save money for the plane ticket. The hotel is near the beach. You can call me anytime during the trip. Let's have a good time!",
            vocabulary: [
                { word: "vacation", translation: "חופשה" },
                { word: "adventure", translation: "הרפתקה" },
                { word: "suggest", translation: "להציע" },
                { word: "save", translation: "לחסוך / להציל" },
                { word: "near", translation: "ליד / קרוב" },
                { word: "anytime", translation: "בכל זמן" }
            ],
            tips: [
                "In 'Vacation', stress the second syllable: va-CAY-shun.",
                "The 'dj' in 'Adventure' sounds like 'j'."
            ]
        }
    },
    {
        id: 1105,
        week: 11,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Traveling',
        content: {
            text: "I normally take a trip once a year. This recent journey was especially wonderful. We went anywhere we wanted throughout the country. The experience is something I will never forget. We stood in the middle of a beautiful city. It seemed like a dream!",
            vocabulary: [
                { word: "normally", translation: "בדרך כלל" },
                { word: "recent", translation: "אחרון / לאחרונה" },
                { word: "especially", translation: "במיוחד" },
                { word: "wonderful", translation: "נפלא" },
                { word: "throughout", translation: "לאורך כל" },
                { word: "experience", translation: "חוויה / ניסיון" }
            ],
            tips: [
                "Notice the 'th' sound in 'Throughout'. Make sure your tongue touches your teeth.",
                "In 'Experience', stress the second syllable: ex-PEE-ri-ence."
            ]
        }
    },
    {
        id: 1106,
        week: 11,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    }
];
