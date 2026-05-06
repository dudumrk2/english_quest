import type { GrammarDay } from '../../types/grammar-practice';

export const day07: GrammarDay = {
  id: 7,
  title: 'Past Simple — Irregular Verbs',
  tense: 'Past Simple',
  focus: 'Irregular Verbs',
  explanation: {
    formula:
      'Positive: Subject + irregular past form\nNegative: Subject + didn\'t + BASE verb (not the irregular form!)',
    usage:
      'Many common verbs have irregular past forms. You must memorise them.',
    signalWords: ['yesterday', 'last week', 'ago', 'last night', 'in 2022'],
    examples: {
      positive: 'She went to the park yesterday.',
      negative: "He didn't come to school last Monday.",
      yesNo: 'Did they see the new film?',
      wh: 'Where did you go last summer?',
    },
  },
  exercises: [
    {
      id: 'd07-e01',
      type: 'fill_in',
      sentence: 'The detective ___ (find) an important clue in the old house.',
      answer: 'found',
    },
    {
      id: 'd07-e02',
      type: 'fill_in',
      sentence: 'My friend ___ (give) me a great book for my birthday.',
      answer: 'gave',
    },
    {
      id: 'd07-e03',
      type: 'fill_in',
      sentence: 'We ___ (eat) pizza at the school celebration last Friday.',
      answer: 'ate',
    },
    {
      id: 'd07-e04',
      type: 'fill_in',
      sentence: 'She ___ (not / come) to school yesterday because she was sick.',
      answer: "didn't come",
    },
    {
      id: 'd07-e05',
      type: 'fill_in',
      sentence: 'He ___ (write) a long letter to his friend who moved away.',
      answer: 'wrote',
    },
    {
      id: 'd07-e06',
      type: 'multiple_choice',
      sentence: 'I ___ a strange message on my phone last night.',
      options: ['see', 'saw', 'seen', 'sawn'],
      answer: 'saw',
    },
    {
      id: 'd07-e07',
      type: 'multiple_choice',
      sentence: 'They ___ their tickets online before the trip.',
      options: ['buyed', 'buy', 'bought', 'buys'],
      answer: 'bought',
    },
    {
      id: 'd07-e08',
      type: 'multiple_choice',
      sentence: 'Our team ___ the whole game last week.',
      options: ['runned', 'ran', 'run', 'runs'],
      answer: 'ran',
    },
    {
      id: 'd07-e09',
      type: 'fill_in',
      sentence: 'The children ___ (swim) in the pool for an hour at the sports day.',
      answer: 'swam',
    },
    {
      id: 'd07-e10',
      type: 'multiple_choice',
      sentence: 'She ___ her keys and was late for school.',
      options: ['losed', 'losted', 'lost', 'lose'],
      answer: 'lost',
    },
    {
      id: 'd07-e11',
      type: 'fill_in',
      sentence: 'My grandma ___ (teach) English for thirty years before she retired.',
      answer: 'taught',
    },
    {
      id: 'd07-e12',
      type: 'multiple_choice',
      sentence: 'He ___ to school on a different route and discovered a new café.',
      options: ['goed', 'goes', 'going', 'went'],
      answer: 'went',
    },
    {
      id: 'd07-e13',
      type: 'fill_in',
      sentence: 'We ___ (drink) all the juice before the party even started.',
      answer: 'drank',
    },
  ],
};
