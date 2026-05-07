import type { GrammarDay } from '../../types/grammar-practice';

export const day03: GrammarDay = {
  id: 3,
  title: 'Present Progressive — Positive & Negative',
  tense: 'Present Progressive',
  focus: 'Positive & Negative',
  explanation: {
    formula:
      'Positive: Subject + am/is/are + verb-ing\nNegative: Subject + am/is/are + not + verb-ing',
    usage:
      'Use the Present Progressive for actions happening right now or around this time.',
    signalWords: ['now', 'right now', 'at the moment', 'look!', 'listen!', 'today', 'this week'],
    examples: {
      positive: 'She is writing a letter right now.',
      negative: 'They are not playing football at the moment.',
      yesNo: 'Is he reading a book?',
      wh: 'What are you doing right now?',
    },
  },
  exercises: [
    {
      id: 'd03-e01',
      type: 'fill_in',
      sentence: 'Look! The dog ___ (run) in the garden.',
      answer: 'is running',
    },
    {
      id: 'd03-e02',
      type: 'fill_in',
      sentence: 'My friends ___ (not / listen) to the teacher right now.',
      answer: 'are not listening',
      acceptAlso: ["aren't listening"],
    },
    {
      id: 'd03-e03',
      type: 'fill_in',
      sentence: 'I ___ (write) an email to my pen pal at the moment.',
      answer: 'am writing',
    },
    {
      id: 'd03-e04',
      type: 'fill_in',
      sentence: 'She ___ (not / study) now. She is watching TV.',
      answer: 'is not studying',
      acceptAlso: ["isn't studying"],
    },
    {
      id: 'd03-e05',
      type: 'fill_in',
      sentence: 'We ___ (have) a great time at the school trip today.',
      answer: 'are having',
    },
    {
      id: 'd03-e06',
      type: 'multiple_choice',
      sentence: 'Listen! Someone ___ in the next room.',
      options: ['is sing', 'is singing', 'are singing', 'sings'],
      answer: 'is singing',
    },
    {
      id: 'd03-e07',
      type: 'multiple_choice',
      sentence: 'The students ___ their test right now.',
      options: ["isn't taking", 'are taking', 'is taking', 'takes'],
      answer: 'are taking',
    },
    {
      id: 'd03-e08',
      type: 'multiple_choice',
      sentence: 'My dad ___ basketball with my brother at the moment.',
      options: ["aren't playing", 'are playing', 'is playing', 'plays'],
      answer: 'is playing',
    },
    {
      id: 'd03-e09',
      type: 'fill_in',
      sentence: 'The children ___ (not / eat) their lunch right now.',
      answer: 'are not eating',
      acceptAlso: ["aren't eating"],
    },
    {
      id: 'd03-e10',
      type: 'multiple_choice',
      sentence: 'She ___ her bag because she is going home soon.',
      options: ['packs', 'is packing', 'are packing', 'packed'],
      answer: 'is packing',
    },
    {
      id: 'd03-e11',
      type: 'fill_in',
      sentence: 'My parents ___ (watch) a film on TV at the moment.',
      answer: 'are watching',
    },
    {
      id: 'd03-e12',
      type: 'multiple_choice',
      sentence: 'The teacher ___ an interesting experiment right now.',
      options: ['show', 'shows', 'is showing', 'are showing'],
      answer: 'is showing',
    },
    {
      id: 'd03-e13',
      type: 'fill_in',
      sentence: 'Tom and his sister ___ (not / play) outside now — it is raining.',
      answer: 'are not playing',
      acceptAlso: ["aren't playing"],
    },
  ],
};
