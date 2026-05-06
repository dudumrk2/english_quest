import type { GrammarDay } from '../../types/grammar-practice';

export const day10: GrammarDay = {
  id: 10,
  title: 'Future Simple (will) — Yes/No & WH Questions',
  tense: 'Future Simple',
  focus: 'Yes/No & WH Questions with will',
  explanation: {
    formula:
      'Yes/No: Will + subject + base verb?\nWH: WH word + will + subject + base verb?',
    usage:
      'Move will to the front for yes/no questions. Add a WH word before will for WH questions. The main verb stays in the base form.',
    signalWords: ['tomorrow', 'next week', 'soon', 'in the future'],
    examples: {
      positive: 'She will travel abroad next summer.',
      negative: "He won't take the exam again.",
      yesNo: 'Will she travel abroad next summer?',
      wh: 'Where will you go for the school trip?',
    },
  },
  exercises: [
    {
      id: 'd10-e01',
      type: 'fill_in',
      sentence: '___ you help me with the science project tomorrow? (Will/Do)',
      answer: 'Will',
    },
    {
      id: 'd10-e02',
      type: 'fill_in',
      sentence: 'What ___ the weather be like next week? (will/would)',
      answer: 'will',
    },
    {
      id: 'd10-e03',
      type: 'fill_in',
      sentence: '___ our team win the championship this year? (Will/Does)',
      answer: 'Will',
    },
    {
      id: 'd10-e04',
      type: 'fill_in',
      sentence: 'Where ___ they go for the school trip next month? (will/do)',
      answer: 'will',
    },
    {
      id: 'd10-e05',
      type: 'fill_in',
      sentence: 'Who ___ be the next captain of the basketball team? (will/is)',
      answer: 'will',
    },
    {
      id: 'd10-e06',
      type: 'multiple_choice',
      sentence: '___ the detective find the stolen painting?',
      options: ['Do', 'Does', 'Will', 'Is'],
      answer: 'Will',
    },
    {
      id: 'd10-e07',
      type: 'multiple_choice',
      sentence: 'When ___ the new school library open?',
      options: ['does', 'did', 'will', 'is'],
      answer: 'will',
    },
    {
      id: 'd10-e08',
      type: 'multiple_choice',
      sentence: 'How long ___ the journey take?',
      options: ['does', 'did', 'will', 'do'],
      answer: 'will',
    },
  ],
};
