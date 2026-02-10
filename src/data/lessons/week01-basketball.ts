import { Lesson } from '../../types';

// =========================================================================
// WEEK 1: BASKETBALL
// =========================================================================
export const week01Lessons: Lesson[] = [
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
    }
];
