import { Lesson } from '../../types';

// =========================================================================
// WEEK 5: SCIENCE & EXPLORATION
// =========================================================================
export const week05Lessons: Lesson[] = [
    {
        id: 501,
        week: 5,
        day: 1,
        type: 'vocabulary_matching',
        title: 'Science Vocabulary',
        content: {
            pairs: [
                { word: "science", translation: "מדע", context: "I like to study science.", contextTranslation: "אני אוהב ללמוד מדע." },
                { word: "planet", translation: "כוכב לכת", context: "Mars is a red planet.", contextTranslation: "מאדים הוא כוכב לכת אדום." },
                { word: "space", translation: "חלל / מקום", context: "Astronauts travel to space.", contextTranslation: "אסטרונאוטים מטיילים לחלל." },
                { word: "Earth", translation: "כדור הארץ", context: "We live on Earth.", contextTranslation: "אנחנו חיים על כדור הארץ." },
                { word: "physics", translation: "פיזיקה", context: "Physics explains how things move.", contextTranslation: "פיזיקה מסבירה איך דברים זזים." },
                { word: "energy", translation: "אנרגיה", context: "The sun gives us energy.", contextTranslation: "השמש נותנת לנו אנרגיה." },
                { word: "explore", translation: "לחקור", context: "They want to explore the moon.", contextTranslation: "הם רוצים לחקור את הירח." },
                { word: "discover", translation: "לגלות", context: "Scientists discover new things.", contextTranslation: "מדענים מגלים דברים חדשים." },
                { word: "prove", translation: "להוכיח", context: "Can you prove your theory?", contextTranslation: "אתה יכול להוכיח את התיאוריה שלך?" },
                { word: "examine", translation: "לבחון", context: "Examine the rock carefully.", contextTranslation: "בחן את האבן בזהירות." },
                { word: "mystery", translation: "תעלומה", context: "Space is a big mystery.", contextTranslation: "החלל הוא תעלומה גדולה." },
                { word: "explanation", translation: "הסבר", context: "Give me an explanation.", contextTranslation: "תן לי הסבר." },
                { word: "brain", translation: "מוח", context: "Use your brain to think.", contextTranslation: "השתמש במוח שלך כדי לחשוב." },
                { word: "huge", translation: "ענק", context: "The universe is huge.", contextTranslation: "היקום הוא ענק." },
                { word: "deep", translation: "עמוק", context: "The ocean is very deep.", contextTranslation: "האוקיינוס עמוק מאוד." },
                { word: "impossible", translation: "בלתי אפשרי", context: "Nothing is impossible.", contextTranslation: "שום דבר אינו בלתי אפשרי." },
                { word: "real", translation: "אמיתי", context: "Is this photo real?", contextTranslation: "האם התמונה הזאת אמיתית?" },
                { word: "wonder", translation: "לתהות", context: "I wonder what is out there.", contextTranslation: "אני תוהה מה יש שם בחוץ." },
                { word: "realize", translation: "להבין / לקלוט", context: "I realize now that I was wrong.", contextTranslation: "אני קולט עכשיו שטעיתי." },
                { word: "bright", translation: "בהיר", context: "The stars are bright.", contextTranslation: "הכוכבים בהירים." }
            ]
        }
    },
    {
        id: 502,
        week: 5,
        day: 2,
        type: 'reading',
        title: 'Journey to the Stars',
        content: {
            text: "Nadav loves science class. Today, the teacher talks about a huge mystery. 'Space is deep and dark,' she says. 'But there are many bright stars.' Nadav wants to explore the galaxy. He wants to discover a new planet like Earth. 'Is it impossible to go there?' he asks. The teacher gives an explanation. 'We need a lot of energy to fly that far.' Nadav starts to wonder about the future.",
            vocabulary: [
                { word: "science", translation: "מדע" },
                { word: "mystery", translation: "תעלומה" },
                { word: "space", translation: "חלל / מקום" },
                { word: "explore", translation: "לחקור" },
                { word: "planet", translation: "כוכב לכת" },
                { word: "explanation", translation: "הסבר" }
            ],
            questions: [
                { id: "q1", text: "What class does Nadav love?", answer: "He loves science class." },
                { id: "q2", text: "What does Nadav want to explore?", answer: "He wants to explore the galaxy." },
                { id: "q3", text: "What does he want to discover?", answer: "He wants to discover a new planet." },
                { id: "q4", text: "Why is it hard to go there?", answer: "Because we need a lot of energy." },
                { id: "q5", text: "What are bright in space?", answer: "The stars are bright." }
            ],
            fillInTheBlanks: {
                title: "Space Terms",
                exercises: [
                    { id: "f1", sentence: "The sun is a very _____ star.", answer: "bright", options: ["bright", "deep", "impossible"] },
                    { id: "f2", sentence: "We live on planet _____.", answer: "Earth", options: ["Earth", "Brain", "Energy"] },
                    { id: "f3", sentence: "I want to _____ the ocean.", answer: "explore", options: ["explore", "prove", "realize"] },
                    { id: "f4", sentence: "It is a _____ that we cannot solve.", answer: "mystery", options: ["mystery", "science", "physics"] },
                    { id: "f5", sentence: "This box is _____.", answer: "huge", options: ["huge", "real", "deep"] }
                ]
            }
        }
    },
    {
        id: 503,
        week: 5,
        day: 3,
        type: 'reading',
        title: 'The Physics Experiment',
        content: {
            text: "Tom and Dan study physics together. They want to prove a new idea. 'Let's examine this machine,' says Tom. 'It uses solar energy.' Dan looks at the data. 'I realize something important,' Dan says. 'This is real science!' They write an explanation for the teacher. 'Your brain is working fast today,' Tom laughs. They are happy to learn how things work. It is not impossible to understand if you try.",
            vocabulary: [
                { word: "physics", translation: "פיזיקה" },
                { word: "prove", translation: "להוכיח" },
                { word: "examine", translation: "לבחון" },
                { word: "energy", translation: "אנרגיה" },
                { word: "realize", translation: "להבין / לקלוט" },
                { word: "brain", translation: "מוח" }
            ],
            questions: [
                { id: "q1", text: "What do Tom and Dan study?", answer: "They study physics." },
                { id: "q2", text: "What do they want to prove?", answer: "They want to prove a new idea." },
                { id: "q3", text: "What does the machine use?", answer: "It uses solar energy." },
                { id: "q4", text: "What does Dan realize?", answer: "He realizes something important." },
                { id: "q5", text: "Is it impossible to understand?", answer: "No, it is not impossible if you try." }
            ],
            matchDefinitions: {
                title: "Match Definitions",
                pairs: [
                    { id: "m1", word: "physics", definition: "The study of matter and energy" },
                    { id: "m2", word: "prove", definition: "To show something is true" },
                    { id: "m3", word: "examine", definition: "To look at closely" },
                    { id: "m4", word: "energy", definition: "Power to do work" },
                    { id: "m5", word: "brain", definition: "The organ inside your head" }
                ]
            }
        }
    },
    {
        id: 504,
        week: 5,
        day: 4,
        type: 'pronunciation',
        title: 'Scientific Sounds',
        content: {
            text: "Gravity is a rule of physics. It keeps our feet on Earth. The sun gives us huge amounts of energy. Can you prove how it works? Scientists try to find a clear explanation. It is fascinating!",
            vocabulary: [
                { word: "physics", translation: "פיזיקה" },
                { word: "prove", translation: "להוכיח" },
                { word: "Earth", translation: "כדור הארץ" },
                { word: "energy", translation: "אנרגיה" },
                { word: "explanation", translation: "הסבר" },
                { word: "huge", translation: "ענק" }
            ],
            tips: [
                "The 'Ph' in 'Physics' sounds like 'F'.",
                "In 'Huge', pronounce the 'H' clearly. Hyoo-j."
            ]
        }
    },
    {
        id: 505,
        week: 5,
        day: 5,
        type: 'pronunciation',
        title: 'Pronunciation Challenge: The Unknown',
        content: {
            text: "Look at the bright stars in the sky. It is a big mystery what is out there. I wonder if aliens exist in deep space. It seems impossible to travel that far. One day we might discover the truth.",
            vocabulary: [
                { word: "wonder", translation: "לתהות" },
                { word: "mystery", translation: "תעלומה" },
                { word: "discover", translation: "לגלות" },
                { word: "deep", translation: "עמוק" },
                { word: "impossible", translation: "בלתי אפשרי" },
                { word: "bright", translation: "בהיר" }
            ],
            tips: [
                "Practice the 'Th' sound in 'Truth' and 'Nothing'.",
                "Say 'Impossible' with stress on 'pos': Im-POS-si-ble."
            ]
        }
    },
    {
        id: 506,
        week: 5,
        day: 6,
        type: 'vocabulary',
        title: 'Weekly Review',
        content: { description: "Review all the words you learned this week." }
    }
];
