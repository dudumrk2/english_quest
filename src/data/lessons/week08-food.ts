import { Lesson } from '../../types';

// =========================================================================
// WEEK 8: FOOD & RESTAURANTS
// =========================================================================
export const week08Lessons: Lesson[] = [
    {
        id: 801,
        week: 8,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Food Vocabulary',
        content: {
            pairs: [
                { word: "meal", translation: "ארוחה", context: "Breakfast is a meal.", contextTranslation: "ארוחת בוקר היא ארוחה." },
                { word: "bowl", translation: "קערה", context: "Eat soup from a bowl.", contextTranslation: "אכול מרק מקערה." },
                { word: "lemon", translation: "לימון", context: "A lemon is sour.", contextTranslation: "לימון הוא חמוץ." },
                { word: "pepper", translation: "פלפל", context: "Add salt and pepper.", contextTranslation: "הוסף מלח ופלפל." },
                { word: "salt", translation: "מלח", context: "The food needs salt.", contextTranslation: "האוכל צריך מלח." },
                { word: "oil", translation: "שמן", context: "Fry it in oil.", contextTranslation: "טגן את זה בשמן." },
                { word: "fresh", translation: "טרי", context: "These eggs are fresh.", contextTranslation: "הביצים האלו טריות." },
                { word: "dry", translation: "יבש", context: "The bread is dry.", contextTranslation: "הלחם יבש." },
                { word: "serve", translation: "להגיש", context: "They serve pizza here.", contextTranslation: "הם מגישים פיצה כאן." },
                { word: "order", translation: "להזמין", context: "I want to order lunch.", contextTranslation: "אני רוצה להזמין ארוחת צהריים." },
                { word: "feed", translation: "להאכיל", context: "Feed the dog.", contextTranslation: "האכל את הכלב." },
                { word: "hunger", translation: "רעב (שם עצם)", context: "He felt great hunger.", contextTranslation: "הוא הרגיש רעב גדול." },
                { word: "quality", translation: "איכות", context: "This meat is good quality.", contextTranslation: "הבשר הזה הוא באיכות טובה." },
                { word: "amount", translation: "כמות", context: "A small amount of sugar.", contextTranslation: "כמות קטנה של סוכר." },
                { word: "choice", translation: "בחירה", context: "You have a choice.", contextTranslation: "יש לך בחירה." },
                { word: "variety", translation: "מגוון", context: "A variety of fruits.", contextTranslation: "מגוון פירות." },
                { word: "healthy", translation: "בריא", context: "Vegetables are healthy.", contextTranslation: "ירקות הם בריאים." },
                { word: "menu", translation: "תפריט", context: "Look at the menu.", contextTranslation: "תסתכל בתפריט." },
                { word: "tasty", translation: "טעים", context: "The cake is tasty.", contextTranslation: "העוגה טעימה." },
                { word: "drink", translation: "לשתות / משקה", context: "I want a cold drink.", contextTranslation: "אני רוצה משקה קר." }
            ]
        }
    },
    {
        id: 802,
        week: 8,
        day: 2,
        type: 'reading',
        title: 'Dinner Time',
        content: {
            text: "The family sits down for a meal. Mom puts a big bowl of salad on the table. 'It is very healthy,' she says. Dad wants to order a pizza, but Mom says no. 'We have fresh food here,' she insists. She puts oil and lemon on the salad. 'Pass the salt, please,' asks the boy. There is a variety of things to eat. The quality of the food is high. They drink water with the meal. Everyone eats until the hunger is gone.",
            vocabulary: [
                { word: "meal", translation: "ארוחה" },
                { word: "bowl", translation: "קערה" },
                { word: "healthy", translation: "בריא" },
                { word: "order", translation: "להזמין" },
                { word: "fresh", translation: "טרי" },
                { word: "variety", translation: "מגוון" }
            ],
            questions: [
                { id: "q1", text: "What does Mom put on the table?", answer: "She puts a big bowl of salad." },
                { id: "q2", text: "What does Dad want to do?", answer: "He wants to order a pizza." },
                { id: "q3", text: "What does she put on the salad?", answer: "She puts oil and lemon." },
                { id: "q4", text: "Is the food fresh?", answer: "Yes, they have fresh food." },
                { id: "q5", text: "What do they drink?", answer: "They drink water." }
            ],
            fillInTheBlanks: {
                title: "In the Kitchen",
                exercises: [
                    { id: "f1", sentence: "Add some black _____.", answer: "pepper", options: ["pepper", "bowl", "hunger"] },
                    { id: "f2", sentence: "The cake is very _____.", answer: "dry", options: ["dry", "oil", "feed"] },
                    { id: "f3", sentence: "I will _____ the guests.", answer: "serve", options: ["serve", "choice", "amount"] },
                    { id: "f4", sentence: "Did you _____ the cat?", answer: "feed", options: ["feed", "order", "salt"] },
                    { id: "f5", sentence: "Use a small _____ of salt.", answer: "amount", options: ["amount", "meal", "quality"] }
                ]
            }
        }
    },
    {
        id: 803,
        week: 8,
        day: 3,
        type: 'reading',
        title: 'At the Restaurant',
        content: {
            text: "Waiter: 'Are you ready to order?' Customer: 'Yes, what do you serve today?' Waiter: 'We have a choice of fish or meat.' Customer: 'I will take the fish with lemon.' Waiter: 'And to drink?' Customer: 'Just water.' The waiter brings the meal. It looks tasty. The customer puts pepper on the fish. 'This is great quality,' he thinks.",
            vocabulary: [
                { word: "order", translation: "להזמין" },
                { word: "serve", translation: "להגיש" },
                { word: "choice", translation: "בחירה" },
                { word: "lemon", translation: "לימון" },
                { word: "meal", translation: "ארוחה" },
                { word: "quality", translation: "איכות" }
            ],
            questions: [
                { id: "q1", text: "What does the customer ask?", answer: "He asks what they serve today." },
                { id: "q2", text: "What is the choice?", answer: "The choice is fish or meat." },
                { id: "q3", text: "What does the customer take?", answer: "He takes the fish with lemon." },
                { id: "q4", text: "What does he put on the fish?", answer: "He puts pepper on the fish." },
                { id: "q5", text: "What does he think about the quality?", answer: "He thinks it is great quality." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "order", definition: "To ask for food" },
                    { id: "m2", word: "serve", definition: "To give food to someone" },
                    { id: "m3", word: "choice", definition: "The act of picking" },
                    { id: "m4", word: "meal", definition: "Food eaten at one time" },
                    { id: "m5", word: "quality", definition: "How good something is" }
                ]
            }
        }
    },
    {
        id: 804,
        week: 8,
        day: 4,
        type: 'pronunciation',
        title: 'Cooking Sounds',
        content: {
            text: "I want to feed my family a healthy dinner. Uses fresh vegetables from the garden. Add a little oil and salt for taste. Squeeze a lemon over the fish. It is delicious!",
            vocabulary: [
                { word: "fresh", translation: "טרי" },
                { word: "healthy", translation: "בריא" },
                { word: "oil", translation: "שמן" },
                { word: "salt", translation: "מלח" },
                { word: "lemon", translation: "לימון" },
                { word: "feed", translation: "להאכיל" }
            ],
            tips: [
                "The 'H' in 'Healthy' is strong. Hell-thy.",
                "Say 'Oil' as one smooth sound. OY-l."
            ]
        }
    },
    {
        id: 805,
        week: 8,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: Taste',
        content: {
            text: "This restaurant is famous for high quality. They serve a huge variety of dishes. You have a hard choice to make. I will order the steak. The amount of food is very big.",
            vocabulary: [
                { word: "serve", translation: "להגיש" },
                { word: "variety", translation: "מגוון" },
                { word: "choice", translation: "בחירה" },
                { word: "amount", translation: "כמות" },
                { word: "quality", translation: "איכות" },
                { word: "order", translation: "להזמין" }
            ],
            tips: [
                "Practice the 'Ch' in 'Choice'.",
                "In 'Variety', stress the 'ri'. Va-RYE-e-tee."
            ]
        }
    },
    {
        id: 806,
        week: 8,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    }
];
