import type { GrammarDay } from '../../types/grammar-practice';

export const day09: GrammarDay = {
  id: 9,
  title: 'Future Simple (will) — Positive & Negative',
  tense: 'Future Simple',
  focus: 'Positive & Negative with will',
  explanation: {
    formula:
      "Positive: Subject + will + base verb\nNegative: Subject + won't (will not) + base verb",
    usage:
      "Use will for predictions, spontaneous decisions, promises, and offers. Will is the same for ALL subjects.",
    signalWords: ['tomorrow', 'next week', 'next year', 'soon', 'in the future', 'I think', 'I believe', 'probably'],
    examples: {
      positive: 'I will help you with your homework tonight.',
      negative: "She won't be late for school tomorrow.",
      yesNo: 'Will they visit us next summer?',
      wh: 'What will you do after the exam?',
    },
  },
  exercises: [
    {
      id: 'd09-e01',
      type: 'fill_in',
      sentence: 'I think it ___ (rain) tomorrow. Bring an umbrella!',
      answer: 'will rain',
    },
    {
      id: 'd09-e02',
      type: 'fill_in',
      sentence: 'She ___ (not / forget) to call you. I promise.',
      answer: "won't forget",
    },
    {
      id: 'd09-e03',
      type: 'fill_in',
      sentence: 'We ___ (visit) the science museum next Friday.',
      answer: 'will visit',
    },
    {
      id: 'd09-e04',
      type: 'fill_in',
      sentence: 'He ___ (not / play) in the match because of his injury.',
      answer: "won't play",
    },
    {
      id: 'd09-e05',
      type: 'fill_in',
      sentence: 'I believe robots ___ (do) many jobs in the future.',
      answer: 'will do',
    },
    {
      id: 'd09-e06',
      type: 'multiple_choice',
      sentence: 'The new basketball court ___ be ready by next month.',
      options: ["won't", 'will', 'is', 'was'],
      answer: 'will',
    },
    {
      id: 'd09-e07',
      type: 'multiple_choice',
      sentence: 'My brother says he ___ study medicine when he grows up.',
      options: ["won't", "doesn't", 'will', 'is'],
      answer: 'will',
    },
    {
      id: 'd09-e08',
      type: 'multiple_choice',
      sentence: 'The detective ___ reveal the answer until the end of the show.',
      options: ["won't", 'will not to', "doesn't", 'not will'],
      answer: "won't",
    },
    {
      id: 'd09-e09',
      type: 'fill_in',
      sentence: 'My parents say I ___ (get) a new phone for my birthday.',
      answer: 'will get',
    },
    {
      id: 'd09-e10',
      type: 'multiple_choice',
      sentence: 'She is very tired, so she ___ stay up late tonight.',
      options: ["won't", 'will', 'does', "doesn't"],
      answer: "won't",
    },
    {
      id: 'd09-e11',
      type: 'fill_in',
      sentence: 'I think the summer holidays ___ (start) in three weeks.',
      answer: 'will start',
    },
    {
      id: 'd09-e12',
      type: 'multiple_choice',
      sentence: 'He promised he ___ help me study for the exam tomorrow.',
      options: ["won't", 'will', 'does', 'did'],
      answer: 'will',
    },
    {
      id: 'd09-e13',
      type: 'fill_in',
      sentence: 'They ___ (not / travel) by plane — they are afraid of flying.',
      answer: "won't travel",
    },
  ],
};
