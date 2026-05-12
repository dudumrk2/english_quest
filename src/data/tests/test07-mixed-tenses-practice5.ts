import type { Test } from '../../types/test';

export const test07MixedTensesPractice5: Test = {
    id: 'test07-mixed-tenses-practice5',
    title: 'Mixed Tenses — Practice 5',
    subtitle: 'Present Simple · Present Progressive · Past Simple · Future Simple',
    totalPoints: 71,
    lockedUntil: 'test06-mixed-tenses-exam',
    sections: [
        {
            type: 'reading_comprehension',
            title: 'Reading Comprehension',
            pointsNote: '(4 × 3)',
            pointsPerAnswer: 3,
            passage: `Mia is fourteen years old and she loves photography. Every weekend, she takes her camera and goes to different places in her city to photograph interesting things. Last month, she entered a school photography competition. She worked very hard and took hundreds of photos before choosing her best one.

When the teacher announced the results, Mia couldn't believe it — she won first place! Her winning photo showed an old man reading a newspaper in a park. "I took this photo early in the morning," Mia explained. "The light was perfect and everything looked so peaceful."

Next month, Mia will exhibit her photos in the school library. She hopes that other students will discover their love of photography too. Her parents are very proud of her, and her mother already bought her a new camera lens as a gift.`,
            questions: [
                {
                    id: 'r1',
                    text: 'What does Mia do every weekend?',
                    answer: 'She takes her camera and goes to different places to photograph interesting things.',
                },
                {
                    id: 'r2',
                    text: 'What happened at the school photography competition?',
                    answer: 'She won first place.',
                },
                {
                    id: 'r3',
                    text: 'What did Mia\'s winning photo show?',
                    answer: 'It showed an old man reading a newspaper in a park.',
                },
                {
                    id: 'r4',
                    text: 'What will Mia do next month?',
                    answer: 'She will exhibit her photos in the school library.',
                },
            ],
        },
        {
            type: 'sentence_completion',
            title: 'A. Fill in the correct form of the verb',
            pointsNote: '(10 × 2)',
            pointsPerAnswer: 2,
            instructions: 'Use Present Simple, Present Progressive, Past Simple, or Future Simple. Positive or negative.',
            sentences: [
                {
                    id: 'a1',
                    text: 'Shira ___ (write) a letter to her pen pal right now.',
                    answer: 'is writing',
                },
                {
                    id: 'a2',
                    text: 'We ___ (not / see) that movie last Friday.',
                    answer: "didn't see",
                    acceptAlso: ['did not see'],
                },
                {
                    id: 'a3',
                    text: 'My grandfather ___ (walk) for half an hour every morning.',
                    answer: 'walks',
                },
                {
                    id: 'a4',
                    text: 'They ___ (move) to their new apartment next month.',
                    answer: 'will move',
                },
                {
                    id: 'a5',
                    text: 'Look! The dog ___ (chase) the cat in the garden.',
                    answer: 'is chasing',
                },
                {
                    id: 'a6',
                    text: 'She ___ (not / pass) the exam last week.',
                    answer: "didn't pass",
                    acceptAlso: ['did not pass'],
                },
                {
                    id: 'a7',
                    text: 'My cousin ___ (not / eat) vegetables. He hates them.',
                    answer: "doesn't eat",
                    acceptAlso: ['does not eat'],
                },
                {
                    id: 'a8',
                    text: 'We ___ (have) a big family party next Saturday.',
                    answer: 'will have',
                },
                {
                    id: 'a9',
                    text: 'Listen! The baby ___ (cry) again.',
                    answer: 'is crying',
                },
                {
                    id: 'a10',
                    text: 'The students ___ (finish) the exam two hours ago.',
                    answer: 'finished',
                },
            ],
        },
        {
            type: 'passage_fill',
            title: 'B. Complete the passage — write the correct verb form',
            pointsNote: '(9 × 1 + 2 × 3)',
            pointsPerBlank: 1,
            pointsPerQuestion: 3,
            instructions: 'Fill in each blank with the correct form of the verb in brackets. Then answer the comprehension questions in full sentences.',
            segments: [
                { type: 'text', content: 'Yael ' },
                { type: 'blank', id: 'b1', hint: 'love', answer: 'loves' },
                { type: 'text', content: ' cooking. She ' },
                { type: 'blank', id: 'b2', hint: 'spend', answer: 'spends' },
                { type: 'text', content: ' hours in the kitchen every weekend. Last Saturday, she ' },
                { type: 'blank', id: 'b3', hint: 'decide', answer: 'decided' },
                { type: 'text', content: ' to bake a birthday cake for her mother. She ' },
                { type: 'blank', id: 'b4', hint: 'not / know', answer: "didn't know", acceptAlso: ['did not know'] },
                { type: 'text', content: ' the recipe at first, so she ' },
                { type: 'blank', id: 'b5', hint: 'call', answer: 'called' },
                { type: 'text', content: ' her grandmother for help. Right now, Yael ' },
                { type: 'blank', id: 'b6', hint: 'mix', answer: 'is mixing' },
                { type: 'text', content: ' the ingredients carefully. She ' },
                { type: 'blank', id: 'b7', hint: 'want', answer: 'wants' },
                { type: 'text', content: ' everything to be perfect. Tomorrow, the whole family ' },
                { type: 'blank', id: 'b8', hint: 'come', answer: 'will come' },
                { type: 'text', content: ' for the birthday dinner and they ' },
                { type: 'blank', id: 'b9', hint: 'eat', answer: 'will eat' },
                { type: 'text', content: ' the cake together.' },
            ],
            questions: [
                {
                    id: 'bq1',
                    text: 'Why did Yael call her grandmother?',
                    answer: "Because she didn't know the recipe.",
                },
                {
                    id: 'bq2',
                    text: 'What will the family do tomorrow?',
                    answer: 'The family will come for the birthday dinner and eat the cake together.',
                },
            ],
        },
        {
            type: 'multiple_choice',
            title: 'F. Choose the correct question word or form',
            pointsNote: '(7 × 1)',
            pointsPerAnswer: 1,
            questions: [
                {
                    id: 'f1',
                    text: '___ you know the answer to question 3?',
                    options: ['Do', 'Are', 'Does'],
                    answer: 'Do',
                },
                {
                    id: 'f2',
                    text: 'How often ___ she go to the gym?',
                    options: ['does she go', 'do she go', 'does she goes'],
                    answer: 'does she go',
                },
                {
                    id: 'f3',
                    text: '___ the children playing outside right now?',
                    options: ['Is', 'Do', 'Are'],
                    answer: 'Are',
                },
                {
                    id: 'f4',
                    text: '___ he bring lunch to school every day?',
                    options: ['Do', 'Is', 'Does'],
                    answer: 'Does',
                },
                {
                    id: 'f5',
                    text: '___ they go to the party last night?',
                    options: ['Was', 'Were', 'Did'],
                    answer: 'Did',
                },
                {
                    id: 'f6',
                    text: '___ your brother usually late for school?',
                    options: ['Do', 'Is', 'Does'],
                    answer: 'Is',
                },
                {
                    id: 'f7',
                    text: 'Where ___ that jacket?',
                    options: ['do you buy', 'did you buy', 'does you buy'],
                    answer: 'did you buy',
                },
            ],
        },
        {
            type: 'question_formation',
            title: 'H. Write a suitable question for each answer',
            pointsNote: '(8 × 2)',
            pointsPerAnswer: 2,
            instructions: 'Pay attention to Yes/No or WH questions. Use the correct tense.',
            items: [
                {
                    id: 'h1',
                    givenAnswer: 'Yes, he plays football every Saturday.',
                    correctQuestion: 'Does he play football every Saturday?',
                },
                {
                    id: 'h2',
                    givenAnswer: 'She is cooking dinner right now.',
                    correctQuestion: 'What is she doing right now?',
                },
                {
                    id: 'h3',
                    givenAnswer: "We didn't go to the mall because it was raining.",
                    correctQuestion: "Why didn't you go to the mall?",
                },
                {
                    id: 'h4',
                    givenAnswer: 'They will arrive at the airport at 9 pm.',
                    correctQuestion: 'When will they arrive at the airport?',
                },
                {
                    id: 'h5',
                    givenAnswer: "No, she doesn't like spicy food.",
                    correctQuestion: 'Does she like spicy food?',
                },
                {
                    id: 'h6',
                    givenAnswer: 'He ran five kilometers this morning.',
                    correctQuestion: 'How many kilometers did he run this morning?',
                },
                {
                    id: 'h7',
                    givenAnswer: 'I am waiting for my friend right now.',
                    correctQuestion: 'Who are you waiting for right now?',
                },
                {
                    id: 'h8',
                    givenAnswer: 'The teacher explained the new lesson yesterday.',
                    correctQuestion: 'What did the teacher explain yesterday?',
                },
            ],
        },
    ],
};
