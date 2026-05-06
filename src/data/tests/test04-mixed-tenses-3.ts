import type { Test } from '../../types/test';

export const test04MixedTenses3: Test = {
    id: 'test04-mixed-tenses-3',
    title: 'Mixed Tenses — Practice 3',
    subtitle: 'Present Simple · Present Progressive · Past Simple · Future Simple',
    totalPoints: 59,
    lockedUntil: 'test03-mixed-tenses-2',
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
                    text: 'The detective ___ (examine) the old room right now.',
                    answer: 'is examining',
                },
                {
                    id: 'a2',
                    text: 'She ___ (not / admit) her mistake in front of the class yesterday.',
                    answer: "didn't admit",
                    acceptAlso: ['did not admit'],
                },
                {
                    id: 'a3',
                    text: 'The police ___ (solve) the mystery before the end of the week.',
                    answer: 'will solve',
                },
                {
                    id: 'a4',
                    text: 'The suspect ___ (not / respond) to any questions.',
                    answer: "doesn't respond",
                    acceptAlso: ['does not respond'],
                },
                {
                    id: 'a5',
                    text: 'Suddenly, the old lamp ___ (vanish) from the table.',
                    answer: 'vanished',
                },
                {
                    id: 'a6',
                    text: 'He ___ (promise) to help his friends every time they need him.',
                    answer: 'promises',
                },
                {
                    id: 'a7',
                    text: 'She ___ (concentrate) on the difficult riddle at the moment.',
                    answer: 'is concentrating',
                },
                {
                    id: 'a8',
                    text: 'Explorers ___ (discover) amazing ancient ruins in that area last year.',
                    answer: 'discovered',
                },
                {
                    id: 'a9',
                    text: 'I ___ (not / believe) this incredible story.',
                    answer: "don't believe",
                    acceptAlso: ['do not believe'],
                },
                {
                    id: 'a10',
                    text: 'The guide ___ (announce) the winner of the competition next week.',
                    answer: 'will announce',
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
                { type: 'text', content: 'Last Monday, the school trophy ' },
                { type: 'blank', id: 'b1', hint: 'disappear', answer: 'disappeared' },
                { type: 'text', content: ' from the main hall. The principal ' },
                { type: 'blank', id: 'b2', hint: 'call', answer: 'called' },
                { type: 'text', content: ' a meeting immediately. Maya, the cleverest student, ' },
                { type: 'blank', id: 'b3', hint: 'notice', answer: 'noticed' },
                { type: 'text', content: ' a strange footprint near the back door. She ' },
                { type: 'blank', id: 'b4', hint: 'examine', answer: 'examined' },
                { type: 'text', content: ' every corner carefully. After two hours, she ' },
                { type: 'blank', id: 'b5', hint: 'find', answer: 'found' },
                { type: 'text', content: ' the trophy hidden behind some books in the library. The suspect ' },
                { type: 'blank', id: 'b6', hint: 'be', answer: 'was' },
                { type: 'text', content: ' a first-year student who wanted to keep the trophy. The principal ' },
                { type: 'blank', id: 'b7', hint: 'thank', answer: 'thanked' },
                { type: 'text', content: ' Maya for her hard work. Next week, the school ' },
                { type: 'blank', id: 'b8', hint: 'add', answer: 'will add' },
                { type: 'text', content: ' a new security camera to the hall.' },
            ],
            questions: [
                {
                    id: 'bq1',
                    text: 'What disappeared from the main hall?',
                    answer: 'The school trophy disappeared from the main hall.',
                },
                {
                    id: 'bq2',
                    text: 'How did Maya find the trophy?',
                    answer: 'Maya noticed a footprint and examined every corner until she found it.',
                },
                {
                    id: 'bq3',
                    text: 'Who took the trophy and why?',
                    answer: 'A first-year student took the trophy because he wanted to keep it.',
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
                    givenAnswer: 'Yes, the police officer examines the scene every morning.',
                    correctQuestion: 'Does the police officer examine the scene every morning?',
                },
                {
                    id: 'c2',
                    givenAnswer: 'The suspect ran away because he was afraid.',
                    correctQuestion: 'Why did the suspect run away?',
                },
                {
                    id: 'c3',
                    givenAnswer: "No, she isn't concentrating on the lesson right now.",
                    correctQuestion: 'Is she concentrating on the lesson right now?',
                },
                {
                    id: 'c4',
                    givenAnswer: 'They will solve the mystery next week.',
                    correctQuestion: 'When will they solve the mystery?',
                },
                {
                    id: 'c5',
                    givenAnswer: 'The detective found the footprint near the back door.',
                    correctQuestion: 'Where did the detective find the footprint?',
                },
                {
                    id: 'c6',
                    givenAnswer: 'She admitted her mistake because she is honest.',
                    correctQuestion: 'Why did she admit her mistake?',
                },
                {
                    id: 'c7',
                    givenAnswer: "No, they don't explore the forest every day.",
                    correctQuestion: 'Do they explore the forest every day?',
                },
            ],
        },
        {
            type: 'fill_from_bank',
            title: 'D. Complete each sentence with a word from the box',
            pointsNote: '(8 × 1)',
            pointsPerAnswer: 1,
            wordBank: ['incredible', 'ancient', 'legend', 'concentrate', 'suspect', 'announce', 'footprint', 'confident'],
            sentences: [
                {
                    id: 'd1',
                    text: 'The police found a strange ___ near the back door of the building.',
                    answer: 'footprint',
                },
                {
                    id: 'd2',
                    text: 'The museum has amazing ___ jewelry from thousands of years ago.',
                    answer: 'ancient',
                },
                {
                    id: 'd3',
                    text: 'There is an old ___ about a dragon that lives in the lake.',
                    answer: 'legend',
                },
                {
                    id: 'd4',
                    text: 'She felt ___ before the test because she had prepared well.',
                    answer: 'confident',
                },
                {
                    id: 'd5',
                    text: 'It is hard to ___ in class when there is too much noise.',
                    answer: 'concentrate',
                },
                {
                    id: 'd6',
                    text: 'The view from the top of the mountain was absolutely ___.',
                    answer: 'incredible',
                },
                {
                    id: 'd7',
                    text: 'The police thought he was the main ___ in the robbery.',
                    answer: 'suspect',
                },
                {
                    id: 'd8',
                    text: 'They will ___ the results of the competition tomorrow morning.',
                    answer: 'announce',
                },
            ],
        },
    ],
};
