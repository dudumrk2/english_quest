import type { GrammarDay } from '../../types/grammar-practice';

export const day04: GrammarDay = {
  id: 4,
  title: 'Present Progressive — Yes/No & WH Questions',
  tense: 'Present Progressive',
  focus: 'Yes/No & WH Questions',
  explanation: {
    formula:
      'Yes/No: Am/Is/Are + subject + verb-ing?\nWH: WH word + am/is/are + subject + verb-ing?',
    usage:
      'Move am/is/are to the front for yes/no questions. Add a WH word before am/is/are for WH questions.',
    signalWords: ['right now', 'at the moment', 'now', 'look', 'listen'],
    examples: {
      positive: 'She is studying at the moment.',
      negative: 'He is not watching TV.',
      yesNo: 'Is she studying at the moment?',
      wh: 'What is he doing right now?',
    },
  },
  exercises: [
    {
      id: 'd04-e01',
      type: 'fill_in',
      sentence: '___ your sister doing her homework right now? (Is/Are)',
      answer: 'Is',
    },
    {
      id: 'd04-e02',
      type: 'fill_in',
      sentence: 'What ___ the children playing in the yard? (is/are)',
      answer: 'are',
    },
    {
      id: 'd04-e03',
      type: 'fill_in',
      sentence: '___ the teacher explaining the homework? (Is/Are)',
      answer: 'Is',
    },
    {
      id: 'd04-e04',
      type: 'fill_in',
      sentence: 'Where ___ you going after school? (am/are)',
      answer: 'are',
    },
    {
      id: 'd04-e05',
      type: 'fill_in',
      sentence: 'Why ___ he laughing? (is/are)',
      answer: 'is',
    },
    {
      id: 'd04-e06',
      type: 'multiple_choice',
      sentence: '___ they working on the science project right now?',
      options: ['Is', 'Are', 'Do', 'Does'],
      answer: 'Are',
    },
    {
      id: 'd04-e07',
      type: 'multiple_choice',
      sentence: 'What ___ the detective looking for?',
      options: ['do', 'does', 'is', 'are'],
      answer: 'is',
    },
    {
      id: 'd04-e08',
      type: 'multiple_choice',
      sentence: 'Who ___ she talking to on the phone?',
      options: ['do', 'are', 'is', 'does'],
      answer: 'is',
    },
  ],
};
