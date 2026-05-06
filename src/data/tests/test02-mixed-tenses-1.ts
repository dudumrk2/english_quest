import type { Test } from '../../types/test';

export const test02MixedTenses1: Test = {
    id: 'test02-mixed-tenses-1',
    title: 'Mixed Tenses — Practice 1',
    subtitle: 'Present Simple · Present Progressive · Past Simple · Future Simple',
    totalPoints: 59,
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
                    text: 'The athlete ___ (practice) three times a week.',
                    answer: 'practices',
                },
                {
                    id: 'a2',
                    text: 'My friend ___ (not / win) the race last Saturday.',
                    answer: "didn't win",
                    acceptAlso: ['did not win'],
                },
                {
                    id: 'a3',
                    text: 'Look! Our coach ___ (guide) the players right now.',
                    answer: 'is guiding',
                },
                {
                    id: 'a4',
                    text: 'Next year, I ___ (join) a professional basketball team.',
                    answer: 'will join',
                },
                {
                    id: 'a5',
                    text: 'Scientists ___ (discover) a new planet last year.',
                    answer: 'discovered',
                },
                {
                    id: 'a6',
                    text: 'She ___ (not / like) to lose any competition.',
                    answer: "doesn't like",
                    acceptAlso: ['does not like'],
                },
                {
                    id: 'a7',
                    text: 'We ___ (explore) the island on our next trip.',
                    answer: 'will explore',
                },
                {
                    id: 'a8',
                    text: 'My teammate ___ (share) ideas with the group at the moment.',
                    answer: 'is sharing',
                },
                {
                    id: 'a9',
                    text: 'They ___ (fight) bravely to protect their team title last season.',
                    answer: 'fought',
                },
                {
                    id: 'a10',
                    text: 'The whole audience ___ (cheer) for our team every single game.',
                    answer: 'cheers',
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
                { type: 'text', content: 'Last month, the school basketball team ' },
                { type: 'blank', id: 'b1', hint: 'travel', answer: 'traveled' },
                { type: 'text', content: ' to Tel Aviv for a big competition. The players ' },
                { type: 'blank', id: 'b2', hint: 'practice', answer: 'practiced' },
                { type: 'text', content: ' very hard all week before the game. On the day of the competition, everyone ' },
                { type: 'blank', id: 'b3', hint: 'be', answer: 'was' },
                { type: 'text', content: ' excited and nervous. In the first half, Yoni ' },
                { type: 'blank', id: 'b4', hint: 'score', answer: 'scored' },
                { type: 'text', content: ' three amazing points, and the audience ' },
                { type: 'blank', id: 'b5', hint: 'cheer', answer: 'cheered' },
                { type: 'text', content: ' loudly. At the final minute, the team ' },
                { type: 'blank', id: 'b6', hint: 'win', answer: 'won' },
                { type: 'text', content: ' by two points. Everyone on the team ' },
                { type: 'blank', id: 'b7', hint: 'feel', answer: 'felt' },
                { type: 'text', content: ' very proud. Next week, they ' },
                { type: 'blank', id: 'b8', hint: 'play', answer: 'will play' },
                { type: 'text', content: ' again in the national championship.' },
            ],
            questions: [
                {
                    id: 'bq1',
                    text: 'Where did the school team travel to last month?',
                    answer: 'The school team traveled to Tel Aviv.',
                },
                {
                    id: 'bq2',
                    text: 'What did Yoni do in the first half?',
                    answer: 'Yoni scored three amazing points.',
                },
                {
                    id: 'bq3',
                    text: 'Did the team win the game? Write the sentence that supports your answer.',
                    answer: 'At the final minute, the team won by two points.',
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
                    givenAnswer: 'Yes, she practices basketball every evening.',
                    correctQuestion: 'Does she practice basketball every evening?',
                },
                {
                    id: 'c2',
                    givenAnswer: 'They discovered new things about space last summer.',
                    correctQuestion: 'What did they discover last summer?',
                },
                {
                    id: 'c3',
                    givenAnswer: "No, he isn't guiding the group right now.",
                    correctQuestion: 'Is he guiding the group right now?',
                },
                {
                    id: 'c4',
                    givenAnswer: 'She will join the team next month.',
                    correctQuestion: 'When will she join the team?',
                },
                {
                    id: 'c5',
                    givenAnswer: 'He fought hard because he wanted to win the championship.',
                    correctQuestion: 'Why did he fight hard?',
                },
                {
                    id: 'c6',
                    givenAnswer: 'We are exploring the new area at the moment.',
                    correctQuestion: 'What are you doing at the moment?',
                },
                {
                    id: 'c7',
                    givenAnswer: "No, I don't lose very often.",
                    correctQuestion: 'Do you lose very often?',
                },
            ],
        },
        {
            type: 'fill_from_bank',
            title: 'D. Complete each sentence with a word from the box',
            pointsNote: '(8 × 1)',
            pointsPerAnswer: 1,
            wordBank: ['champion', 'effort', 'discover', 'audience', 'adventure', 'professional', 'compete', 'healthy'],
            sentences: [
                {
                    id: 'd1',
                    text: 'After eating too much junk food, she decided to start being ___.',
                    answer: 'healthy',
                },
                {
                    id: 'd2',
                    text: 'He put a lot of ___ into his training every single day.',
                    answer: 'effort',
                },
                {
                    id: 'd3',
                    text: 'Her dream is to become a ___ basketball player one day.',
                    answer: 'professional',
                },
                {
                    id: 'd4',
                    text: 'Scientists can ___ amazing things about our world every year.',
                    answer: 'discover',
                },
                {
                    id: 'd5',
                    text: 'The ___ cheered loudly when the team scored the winning point.',
                    answer: 'audience',
                },
                {
                    id: 'd6',
                    text: 'She won every game and became the school ___.',
                    answer: 'champion',
                },
                {
                    id: 'd7',
                    text: 'All the schools in the country will ___ in the national tournament.',
                    answer: 'compete',
                },
                {
                    id: 'd8',
                    text: 'Climbing the mountain together was a great ___ for all of us.',
                    answer: 'adventure',
                },
            ],
        },
    ],
};
