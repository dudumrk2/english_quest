import { Lesson } from '../../types';

// =========================================================================
// WEEK 4: FORTNITE & STRATEGY
// =========================================================================
export const week04Lessons: Lesson[] = [
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
    }
];
