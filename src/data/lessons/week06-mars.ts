import { Lesson } from '../../types';

// =========================================================================
// WEEK 6: ELON MUSK & MARS
// =========================================================================
export const week06Lessons: Lesson[] = [
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
    }
];
