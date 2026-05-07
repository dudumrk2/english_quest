import type { GrammarDay } from '../../types/grammar-practice';

export const day01: GrammarDay = {
  id: 1,
  title: 'Present Simple — Positive & Negative',
  tense: 'Present Simple',
  focus: 'Positive & Negative',
  explanation: {
    formula:
      'Positive: Subject + base verb (he/she/it → add s/es)\nNegative: Subject + don\'t / doesn\'t + base verb',
    usage:
      'Use the Present Simple for habits, routines, facts, and things that are always true.',
    signalWords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day', 'every week', 'on Mondays'],
    examples: {
      positive: 'She goes to school every day.',
      negative: 'He doesn\'t play basketball on Sundays.',
      yesNo: 'Do you study English every night?',
      wh: 'What does she do after school?',
    },
    narration: {
      formula: 'In the Present Simple, for a positive sentence, you take the subject and add the base verb. But be careful — if the subject is he, she, or it, you need to add s or es to the verb. For a negative sentence, use don\'t for I, you, we, and they, or doesn\'t for he, she, and it, followed by the base verb.',
      signalWords: 'These are the time words that tell you to use Present Simple. Words like always, usually, often, sometimes, and every day all point to habits and routines.',
      examples: 'Let\'s look at some examples. In the positive: She goes to school every day. In the negative: He doesn\'t play basketball on Sundays. For a yes-no question: Do you study English every night? And for a WH question: What does she do after school?',
    },
  },
  exercises: [
    {
      id: 'd01-e01',
      type: 'fill_in',
      sentence: 'My brother ___ (play) basketball every Saturday.',
      answer: 'plays',
    },
    {
      id: 'd01-e02',
      type: 'fill_in',
      sentence: 'We ___ (not / eat) lunch at school on Fridays.',
      answer: "don't eat",
    },
    {
      id: 'd01-e03',
      type: 'fill_in',
      sentence: 'The teacher ___ (explain) the rules every lesson.',
      answer: 'explains',
    },
    {
      id: 'd01-e04',
      type: 'fill_in',
      sentence: 'My parents ___ (not / watch) TV in the morning.',
      answer: "don't watch",
    },
    {
      id: 'd01-e05',
      type: 'fill_in',
      sentence: 'Sarah ___ (not / like) rainy days.',
      answer: "doesn't like",
    },
    {
      id: 'd01-e06',
      type: 'multiple_choice',
      sentence: 'Tom ___ to school by bus every morning.',
      options: ['go', 'goes', 'is going', "doesn't goes"],
      answer: 'goes',
    },
    {
      id: 'd01-e07',
      type: 'multiple_choice',
      sentence: 'They ___ their homework before dinner.',
      options: ['does', "doesn't do", 'do', 'doing'],
      answer: 'do',
    },
    {
      id: 'd01-e08',
      type: 'multiple_choice',
      sentence: 'My sister ___ read comic books. She prefers novels.',
      options: ["don't", "doesn't", "isn't", "aren't"],
      answer: "doesn't",
    },
    {
      id: 'd01-e09',
      type: 'fill_in',
      sentence: 'Our cat ___ (sleep) on the sofa every afternoon.',
      answer: 'sleeps',
    },
    {
      id: 'd01-e10',
      type: 'multiple_choice',
      sentence: 'I ___ tea in the morning. I prefer coffee.',
      options: ["don't drink", "doesn't drink", "am not drinking", "isn't drinking"],
      answer: "don't drink",
    },
    {
      id: 'd01-e11',
      type: 'fill_in',
      sentence: 'The school library ___ (close) at five o\'clock every day.',
      answer: 'closes',
    },
    {
      id: 'd01-e12',
      type: 'multiple_choice',
      sentence: 'My best friend ___ live near me, so we travel to school together.',
      options: ['lives', "doesn't live", "don't live", 'living'],
      answer: 'lives',
    },
    {
      id: 'd01-e13',
      type: 'fill_in',
      sentence: 'They ___ (not / speak) English at home — they speak Hebrew.',
      answer: "don't speak",
    },
  ],
};
