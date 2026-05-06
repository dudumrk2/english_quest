import type { GrammarDay } from '../../types/grammar-practice';

export const day02: GrammarDay = {
  id: 2,
  title: 'Present Simple — Yes/No & WH Questions',
  tense: 'Present Simple',
  focus: 'Yes/No & WH Questions',
  explanation: {
    formula:
      'Yes/No: Do/Does + subject + base verb?\nWH: WH word + do/does + subject + base verb?',
    usage:
      'Use Do with I/you/we/they. Use Does with he/she/it. The main verb stays in the base form.',
    signalWords: ['do', 'does', 'what', 'where', 'when', 'who', 'why', 'how'],
    examples: {
      positive: 'She plays tennis every week.',
      negative: 'He doesn\'t study on Saturdays.',
      yesNo: 'Does she play tennis every week?',
      wh: 'Where do you usually eat lunch?',
    },
  },
  exercises: [
    {
      id: 'd02-e01',
      type: 'fill_in',
      sentence: '___ your teacher give a lot of homework? (Do/Does)',
      answer: 'Does',
    },
    {
      id: 'd02-e02',
      type: 'fill_in',
      sentence: 'Where ___ your family go on holiday? (do/does)',
      answer: 'does',
    },
    {
      id: 'd02-e03',
      type: 'fill_in',
      sentence: '___ you and your friends play football after school? (Do/Does)',
      answer: 'Do',
    },
    {
      id: 'd02-e04',
      type: 'fill_in',
      sentence: 'What time ___ the school bus arrive? (do/does)',
      answer: 'does',
    },
    {
      id: 'd02-e05',
      type: 'fill_in',
      sentence: 'Why ___ he always sit at the back of the class? (do/does)',
      answer: 'does',
    },
    {
      id: 'd02-e06',
      type: 'multiple_choice',
      sentence: '___ your parents speak English at home?',
      options: ['Do', 'Does', 'Are', 'Is'],
      answer: 'Do',
    },
    {
      id: 'd02-e07',
      type: 'multiple_choice',
      sentence: 'How often ___ she visit her grandparents?',
      options: ['do', 'does', 'is', 'are'],
      answer: 'does',
    },
    {
      id: 'd02-e08',
      type: 'multiple_choice',
      sentence: 'What ___ they usually eat for breakfast?',
      options: ['does', 'do', 'is', 'are'],
      answer: 'do',
    },
  ],
};
