import type { GrammarDay } from '../../types/grammar-practice';

export const day13: GrammarDay = {
  id: 13,
  title: 'Mixed Tenses — Forming Questions',
  tense: 'Mixed Tenses',
  focus: 'Questions Across All Tenses',
  explanation: {
    formula:
      'Present Simple: Do/Does + subject + base verb?\nPresent Progressive: Am/Is/Are + subject + verb-ing?\nPast Simple: Did + subject + base verb?\nFuture Simple: Will + subject + base verb?',
    usage:
      'Each tense has its own question helper. Always use the BASE verb after do/does/did/will.',
    signalWords: ['every day', 'right now', 'yesterday', 'tomorrow', 'last week', 'next month'],
    examples: {
      positive: 'She travels every summer.',
      negative: "She doesn't travel every summer.",
      yesNo: 'Does she travel every summer?',
      wh: 'When does she travel?',
    },
  },
  exercises: [
    {
      id: 'd13-e01',
      type: 'multiple_choice',
      sentence: '___ she go to the gym every morning?',
      options: ['Is', 'Did', 'Does', 'Will'],
      answer: 'Does',
    },
    {
      id: 'd13-e02',
      type: 'multiple_choice',
      sentence: '___ your friends come to the party tomorrow?',
      options: ['Do', 'Are', 'Did', 'Will'],
      answer: 'Will',
    },
    {
      id: 'd13-e03',
      type: 'multiple_choice',
      sentence: '___ the students taking a test right now?',
      options: ['Do', 'Did', 'Are', 'Will'],
      answer: 'Are',
    },
    {
      id: 'd13-e04',
      type: 'multiple_choice',
      sentence: '___ he bring his lunch to school yesterday?',
      options: ['Does', 'Is', 'Did', 'Will'],
      answer: 'Did',
    },
    {
      id: 'd13-e05',
      type: 'fill_in',
      sentence: 'What ___ you (do) ___ right now? (Present Progressive question)',
      answer: 'are you doing',
    },
    {
      id: 'd13-e06',
      type: 'fill_in',
      sentence: 'Where ___ they (go) ___ for the school trip last year? (Past Simple question)',
      answer: 'did they go',
    },
    {
      id: 'd13-e07',
      type: 'fill_in',
      sentence: 'How often ___ your class (have) ___ PE lessons? (Present Simple question)',
      answer: 'does your class have',
    },
    {
      id: 'd13-e08',
      type: 'fill_in',
      sentence: 'Who ___ (win) ___ the tournament next weekend? (Future Simple question)',
      answer: 'will win',
    },
    {
      id: 'd13-e09',
      type: 'multiple_choice',
      sentence: 'Why ___ he crying at the end of the film last night?',
      options: ['does', 'is', 'did', 'was'],
      answer: 'was',
    },
    {
      id: 'd13-e10',
      type: 'multiple_choice',
      sentence: 'What time ___ the school bus arrive every morning?',
      options: ['did', 'does', 'will', 'is'],
      answer: 'does',
    },
  ],
};
