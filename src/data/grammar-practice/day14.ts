import type { GrammarDay } from '../../types/grammar-practice';

export const day14: GrammarDay = {
  id: 14,
  title: 'Full Review — All Tenses',
  tense: 'All Tenses',
  focus: 'Complete Review',
  explanation: {
    formula:
      'Present Simple: do/does + base verb | he/she/it + s/es\nPresent Progressive: am/is/are + verb-ing\nPast Simple: verb+ed or irregular | did + base verb\nFuture Simple: will + base verb',
    usage:
      'Every day / usually → Present Simple\nRight now / at the moment → Present Progressive\nYesterday / ago / last week → Past Simple\nTomorrow / next week / soon / will → Future Simple',
    signalWords: ['always', 'now', 'yesterday', 'tomorrow', 'every day', 'last week', 'at the moment', 'next year', 'ago', 'soon'],
    examples: {
      positive: 'She reads every night. / She is reading now. / She read last night. / She will read tomorrow.',
      negative: "He doesn't play on Mondays. / He isn't playing. / He didn't play. / He won't play.",
      yesNo: 'Does she read? / Is she reading? / Did she read? / Will she read?',
      wh: 'What does she read? / What is she reading? / What did she read? / What will she read?',
    },
  },
  exercises: [
    {
      id: 'd14-e01',
      type: 'multiple_choice',
      sentence: 'My mum ___ coffee every morning without fail.',
      options: ['is drinking', 'drunk', 'drinks', 'will drink'],
      answer: 'drinks',
    },
    {
      id: 'd14-e02',
      type: 'multiple_choice',
      sentence: 'We ___ a brilliant mystery novel in class right now.',
      options: ['read', 'reads', 'are reading', 'will read'],
      answer: 'are reading',
    },
    {
      id: 'd14-e03',
      type: 'multiple_choice',
      sentence: 'The school trip last month ___ absolutely amazing.',
      options: ['is', 'will be', 'was', 'are'],
      answer: 'was',
    },
    {
      id: 'd14-e04',
      type: 'multiple_choice',
      sentence: 'I think robots ___ help doctors in hospitals very soon.',
      options: ['help', 'helped', 'are helping', 'will help'],
      answer: 'will help',
    },
    {
      id: 'd14-e05',
      type: 'fill_in',
      sentence: 'Our coach always ___ (encourage) us before a big match.',
      answer: 'encourages',
    },
    {
      id: 'd14-e06',
      type: 'fill_in',
      sentence: 'She ___ (not / finish) her dinner last night.',
      answer: "didn't finish",
    },
    {
      id: 'd14-e07',
      type: 'fill_in',
      sentence: 'Listen! Someone ___ (knock) at the door right now.',
      answer: 'is knocking',
    },
    {
      id: 'd14-e08',
      type: 'fill_in',
      sentence: 'I promise I ___ (call) you as soon as I arrive.',
      answer: "will call",
    },
    {
      id: 'd14-e09',
      type: 'multiple_choice',
      sentence: '___ you finish the test before the bell yesterday?',
      options: ['Do', 'Did', 'Will', 'Are'],
      answer: 'Did',
    },
    {
      id: 'd14-e10',
      type: 'multiple_choice',
      sentence: 'The detective ___ at all the evidence right now.',
      options: ['looks', 'looked', 'is looking', 'will look'],
      answer: 'is looking',
    },
    {
      id: 'd14-e11',
      type: 'multiple_choice',
      sentence: '___ she come to your birthday party next Saturday?',
      options: ['Does', 'Did', 'Is', 'Will'],
      answer: 'Will',
    },
    {
      id: 'd14-e12',
      type: 'fill_in',
      sentence: 'Tom ___ (go) to football practice three times a week.',
      answer: 'goes',
    },
  ],
};
