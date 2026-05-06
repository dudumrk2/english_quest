import type { Test } from '../../types/test';

export const test03MixedTenses2: Test = {
    id: 'test03-mixed-tenses-2',
    title: 'Mixed Tenses — Practice 2',
    subtitle: 'Present Simple · Present Progressive · Past Simple · Future Simple',
    totalPoints: 59,
    lockedUntil: 'test02-mixed-tenses-1',
    sections: [
        {
            type: 'sentence_completion',
            title: 'A. Fill in the correct form of the verb',
            pointsNote: '(10 × 2)',
            pointsPerAnswer: 2,
            instructions: 'Use Present Simple, Present Progressive, Past Simple, or Future Simple. Positive or negative.',
            sentences: [
                {
                    id: 'a1',
                    text: 'Every Friday, my family ___ (celebrate) with a special dinner.',
                    answer: 'celebrates',
                },
                {
                    id: 'a2',
                    text: 'Look! The chef ___ (serve) the meal right now.',
                    answer: 'is serving',
                },
                {
                    id: 'a3',
                    text: 'My brother ___ (not / pay) for his lunch yesterday.',
                    answer: "didn't pay",
                    acceptAlso: ['did not pay'],
                },
                {
                    id: 'a4',
                    text: 'Next summer, our family ___ (take) a trip to Italy.',
                    answer: 'will take',
                },
                {
                    id: 'a5',
                    text: 'She ___ (notice) something strange at the cinema last night.',
                    answer: 'noticed',
                },
                {
                    id: 'a6',
                    text: 'He ___ (not / like) coffee — he prefers tea.',
                    answer: "doesn't like",
                    acceptAlso: ['does not like'],
                },
                {
                    id: 'a7',
                    text: 'They ___ (plan) a graduation party right now.',
                    answer: 'are planning',
                },
                {
                    id: 'a8',
                    text: 'We ___ (not / travel) to Spain next year — we will stay in Israel.',
                    answer: "won't travel",
                    acceptAlso: ['will not travel'],
                },
                {
                    id: 'a9',
                    text: 'My mother ___ (manage) a large office in Tel Aviv.',
                    answer: 'manages',
                },
                {
                    id: 'a10',
                    text: 'She ___ (complete) the difficult project all by herself last week.',
                    answer: 'completed',
                },
            ],
        },
        {
            type: 'passage_fill',
            title: 'B. Complete the passage — fill in the correct verb form',
            pointsNote: '(8 × 1 + 3 × 3)',
            pointsPerBlank: 1,
            pointsPerQuestion: 3,
            instructions: 'Fill in each blank with the correct form of the verb in brackets, then answer the comprehension questions in full sentences.',
            segments: [
                { type: 'text', content: 'Every summer, the Levi family ' },
                { type: 'blank', id: 'b1', hint: 'take', answer: 'takes' },
                { type: 'text', content: ' a trip to a different country. Last year, they ' },
                { type: 'blank', id: 'b2', hint: 'fly', answer: 'flew' },
                { type: 'text', content: ' to France and ' },
                { type: 'blank', id: 'b3', hint: 'stay', answer: 'stayed' },
                { type: 'text', content: ' in a wonderful hotel near Paris. Each day, they ' },
                { type: 'blank', id: 'b4', hint: 'visit', answer: 'visited' },
                { type: 'text', content: ' a new place. At a famous restaurant, they ' },
                { type: 'blank', id: 'b5', hint: 'order', answer: 'ordered' },
                { type: 'text', content: ' fresh soup and tasty bread. The food ' },
                { type: 'blank', id: 'b6', hint: 'be', answer: 'was' },
                { type: 'text', content: ' absolutely delicious. Now, back home, the family ' },
                { type: 'blank', id: 'b7', hint: 'plan', answer: 'is planning' },
                { type: 'text', content: ' their next vacation. Next summer, they ' },
                { type: 'blank', id: 'b8', hint: 'travel', answer: 'will travel' },
                { type: 'text', content: ' to Italy to see the ancient ruins.' },
            ],
            questions: [
                {
                    id: 'bq1',
                    text: 'Where did the Levi family go last year?',
                    answer: 'The Levi family flew to France last year.',
                },
                {
                    id: 'bq2',
                    text: 'What did they order at the restaurant?',
                    answer: 'They ordered fresh soup and tasty bread.',
                },
                {
                    id: 'bq3',
                    text: 'What is the family doing now? Where will they go next summer?',
                    answer: 'The family is planning their next vacation. They will travel to Italy.',
                },
            ],
        },
        {
            type: 'question_formation',
            title: 'C. Write a suitable question for each answer',
            pointsNote: '(7 × 2)',
            pointsPerAnswer: 2,
            instructions: 'Pay attention to Yes/No or WH questions. Use the correct tense.',
            items: [
                {
                    id: 'c1',
                    givenAnswer: 'Yes, she notices things quickly in class.',
                    correctQuestion: 'Does she notice things quickly in class?',
                },
                {
                    id: 'c2',
                    givenAnswer: 'They flew to France last summer.',
                    correctQuestion: 'Where did they fly last summer?',
                },
                {
                    id: 'c3',
                    givenAnswer: "No, he isn't planning a party right now.",
                    correctQuestion: 'Is he planning a party right now?',
                },
                {
                    id: 'c4',
                    givenAnswer: 'She will complete the project next month.',
                    correctQuestion: 'When will she complete the project?',
                },
                {
                    id: 'c5',
                    givenAnswer: "I didn't pay for the ticket because my dad paid.",
                    correctQuestion: "Why didn't you pay for the ticket?",
                },
                {
                    id: 'c6',
                    givenAnswer: 'She manages a team of twenty people.',
                    correctQuestion: 'How many people does she manage?',
                },
                {
                    id: 'c7',
                    givenAnswer: "No, they don't celebrate every weekend.",
                    correctQuestion: 'Do they celebrate every weekend?',
                },
            ],
        },
        {
            type: 'fill_from_bank',
            title: 'D. Complete each sentence with a word from the box',
            pointsNote: '(8 × 1)',
            pointsPerAnswer: 1,
            wordBank: ['opinion', 'suggest', 'ordinary', 'vacation', 'manage', 'celebrate', 'technology', 'opportunity'],
            sentences: [
                {
                    id: 'd1',
                    text: 'In my ___, this is the best restaurant in the city.',
                    answer: 'opinion',
                },
                {
                    id: 'd2',
                    text: 'I ___ we try the new pizza place for lunch this weekend.',
                    answer: 'suggest',
                },
                {
                    id: 'd3',
                    text: 'Nothing exciting happened — it was just an ___ day at school.',
                    answer: 'ordinary',
                },
                {
                    id: 'd4',
                    text: 'The family saved money all year for their summer ___.',
                    answer: 'vacation',
                },
                {
                    id: 'd5',
                    text: 'She worked hard for years and can now ___ a large team.',
                    answer: 'manage',
                },
                {
                    id: 'd6',
                    text: 'After winning the championship, the whole school came out to ___!',
                    answer: 'celebrate',
                },
                {
                    id: 'd7',
                    text: 'Modern ___ has changed the way we learn and communicate.',
                    answer: 'technology',
                },
                {
                    id: 'd8',
                    text: 'Studying abroad is a wonderful ___ to improve your English.',
                    answer: 'opportunity',
                },
            ],
        },
    ],
};
