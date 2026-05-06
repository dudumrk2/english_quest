import type { GrammarDay } from '../../types/grammar-practice';

export const day11: GrammarDay = {
  id: 11,
  title: 'Mixed Tenses — Positive Sentences',
  tense: 'Mixed Tenses',
  focus: 'Choosing the Right Tense: Positive',
  explanation: {
    formula:
      'Present Simple: Subject + base verb (s/es)\nPresent Progressive: Subject + am/is/are + verb-ing\nPast Simple: Subject + verb+ed / irregular form\nFuture Simple: Subject + will + base verb',
    usage:
      'Read the time clue carefully to choose the right tense.\nEvery day / usually → Present Simple\nRight now / at the moment → Present Progressive\nYesterday / last week / ago → Past Simple\nTomorrow / next week / soon → Future Simple',
    signalWords: ['every day', 'right now', 'yesterday', 'tomorrow', 'last week', 'at the moment', 'usually', 'next year', 'ago', 'soon'],
    examples: {
      positive: 'She reads every night. / She is reading now. / She read last night. / She will read tomorrow.',
      negative: "He doesn't play now. / He isn't playing. / He didn't play. / He won't play.",
      yesNo: 'Does she read? / Is she reading? / Did she read? / Will she read?',
      wh: 'What does she read? / What is she reading? / What did she read? / What will she read?',
    },
  },
  exercises: [
    {
      id: 'd11-e01',
      type: 'multiple_choice',
      sentence: 'Look! My cat ___ on my homework right now.',
      options: ['sits', 'sat', 'is sitting', 'will sit'],
      answer: 'is sitting',
    },
    {
      id: 'd11-e02',
      type: 'multiple_choice',
      sentence: 'My family ___ the mountains last summer.',
      options: ['visits', 'is visiting', 'visited', 'will visit'],
      answer: 'visited',
    },
    {
      id: 'd11-e03',
      type: 'multiple_choice',
      sentence: 'I think our class ___ the best project at the fair next month.',
      options: ['presents', 'presented', 'is presenting', 'will present'],
      answer: 'will present',
    },
    {
      id: 'd11-e04',
      type: 'multiple_choice',
      sentence: 'We always ___ football together on Sundays.',
      options: ['are playing', 'played', 'play', 'will play'],
      answer: 'play',
    },
    {
      id: 'd11-e05',
      type: 'fill_in',
      sentence: 'She ___ (travel) to London tomorrow for a school competition.',
      answer: 'will travel',
    },
    {
      id: 'd11-e06',
      type: 'fill_in',
      sentence: 'The detective ___ (discover) the truth two days ago.',
      answer: 'discovered',
    },
    {
      id: 'd11-e07',
      type: 'fill_in',
      sentence: 'My teacher usually ___ (start) the lesson with a warm-up activity.',
      answer: 'starts',
    },
    {
      id: 'd11-e08',
      type: 'fill_in',
      sentence: 'Shh! The baby ___ (sleep) right now.',
      answer: 'is sleeping',
    },
    {
      id: 'd11-e09',
      type: 'multiple_choice',
      sentence: 'Tom ___ his project last night and got a great mark.',
      options: ['finishes', 'is finishing', 'finished', 'will finish'],
      answer: 'finished',
    },
    {
      id: 'd11-e10',
      type: 'multiple_choice',
      sentence: 'I believe technology ___ change our lives a lot in the next ten years.',
      options: ['changes', 'changed', 'is changing', 'will change'],
      answer: 'will change',
    },
    {
      id: 'd11-e11',
      type: 'fill_in',
      sentence: 'The birds ___ (sing) outside my window every morning.',
      answer: 'sing',
    },
    {
      id: 'd11-e12',
      type: 'multiple_choice',
      sentence: 'Be quiet! The baby ___ in the next room.',
      options: ['sleeps', 'slept', 'is sleeping', 'will sleep'],
      answer: 'is sleeping',
    },
    {
      id: 'd11-e13',
      type: 'fill_in',
      sentence: 'My team ___ (lose) the final game last Saturday.',
      answer: 'lost',
    },
  ],
};
