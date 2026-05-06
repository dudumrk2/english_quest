import type { GrammarDay } from '../../types/grammar-practice';

export const day12: GrammarDay = {
  id: 12,
  title: 'Mixed Tenses — Negative Forms',
  tense: 'Mixed Tenses',
  focus: 'Negative Forms Across All Tenses',
  explanation: {
    formula:
      "Present Simple: don't / doesn't + base verb\nPresent Progressive: am not / isn't / aren't + verb-ing\nPast Simple: didn't + base verb\nFuture Simple: won't + base verb",
    usage:
      'Each tense has its own negative helper. Match the helper to the time clue.',
    signalWords: ['every day', 'right now', 'yesterday', 'tomorrow', 'last week', 'at the moment'],
    examples: {
      positive: 'They play football every day.',
      negative: "They don't play football every day. / They aren't playing now. / They didn't play yesterday. / They won't play tomorrow.",
      yesNo: "Don't they play? / Aren't they playing? / Didn't they play? / Won't they play?",
      wh: "Why don't they play? / Why aren't they playing? / Why didn't they play? / Why won't they play?",
    },
  },
  exercises: [
    {
      id: 'd12-e01',
      type: 'multiple_choice',
      sentence: 'We ___ go to school on Saturdays. It is the weekend.',
      options: ["aren't", "didn't", "don't", "won't"],
      answer: "don't",
    },
    {
      id: 'd12-e02',
      type: 'multiple_choice',
      sentence: 'She ___ finish her lunch right now. She is still eating.',
      options: ["isn't", "doesn't", "didn't", "won't"],
      answer: "isn't",
    },
    {
      id: 'd12-e03',
      type: 'multiple_choice',
      sentence: 'I ___ watch that horror film last night. It was too scary.',
      options: ["don't", "didn't", "won't", "isn't"],
      answer: "didn't",
    },
    {
      id: 'd12-e04',
      type: 'multiple_choice',
      sentence: 'They promised they ___ be late for the trip tomorrow.',
      options: ["don't", "didn't", "aren't", "won't"],
      answer: "won't",
    },
    {
      id: 'd12-e05',
      type: 'fill_in',
      sentence: 'My brother ___ (not / do) any sport at the moment because of his leg.',
      answer: "isn't doing",
    },
    {
      id: 'd12-e06',
      type: 'fill_in',
      sentence: 'The team ___ (not / score) any goals in the first half last Saturday.',
      answer: "didn't score",
    },
    {
      id: 'd12-e07',
      type: 'fill_in',
      sentence: 'My parents usually ___ (not / use) social media.',
      answer: "don't use",
    },
    {
      id: 'd12-e08',
      type: 'fill_in',
      sentence: 'I promise I ___ (not / tell) anyone your secret.',
      answer: "won't tell",
    },
    {
      id: 'd12-e09',
      type: 'multiple_choice',
      sentence: 'She ___ understand the maths problem at the moment.',
      options: ["doesn't", "isn't understand", "didn't", "isn't understanding"],
      answer: "doesn't",
    },
    {
      id: 'd12-e10',
      type: 'multiple_choice',
      sentence: 'The detective ___ give up the case two months ago.',
      options: ["doesn't", "isn't", "didn't", "won't"],
      answer: "didn't",
    },
  ],
};
