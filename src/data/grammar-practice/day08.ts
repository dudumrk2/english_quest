import type { GrammarDay } from '../../types/grammar-practice';

export const day08: GrammarDay = {
  id: 8,
  title: 'Past Simple — Yes/No & WH Questions',
  tense: 'Past Simple',
  focus: 'Yes/No & WH Questions',
  explanation: {
    formula:
      'Yes/No: Did + subject + base verb?\nWH: WH word + did + subject + base verb?',
    usage:
      'Use Did for all subjects. The main verb always stays in the BASE form — never add -ed after did.',
    signalWords: ['yesterday', 'last week', 'ago', 'in 2021', 'last night'],
    examples: {
      positive: 'She went to the library yesterday.',
      negative: "He didn't take the bus.",
      yesNo: 'Did she go to the library yesterday?',
      wh: 'Where did he go after school?',
    },
  },
  exercises: [
    {
      id: 'd08-e01',
      type: 'fill_in',
      sentence: '___ you finish your homework yesterday? (Did/Does)',
      answer: 'Did',
    },
    {
      id: 'd08-e02',
      type: 'fill_in',
      sentence: 'Where ___ she find the missing notebook? (did/does)',
      answer: 'did',
    },
    {
      id: 'd08-e03',
      type: 'fill_in',
      sentence: '___ the team win the basketball game last Tuesday? (Did/Do)',
      answer: 'Did',
    },
    {
      id: 'd08-e04',
      type: 'fill_in',
      sentence: 'What ___ your parents say when you told them the news? (did/do)',
      answer: 'did',
    },
    {
      id: 'd08-e05',
      type: 'fill_in',
      sentence: 'Why ___ he leave class early yesterday? (did/was)',
      answer: 'did',
    },
    {
      id: 'd08-e06',
      type: 'multiple_choice',
      sentence: '___ they see the detective film at the cinema last night?',
      options: ['Do', 'Does', 'Did', 'Were'],
      answer: 'Did',
    },
    {
      id: 'd08-e07',
      type: 'multiple_choice',
      sentence: 'Who ___ the prize at the school competition?',
      options: ['did win', 'won', 'wins', 'win'],
      answer: 'won',
    },
    {
      id: 'd08-e08',
      type: 'multiple_choice',
      sentence: 'How long ___ it take to travel to the camp?',
      options: ['does', 'do', 'did', 'was'],
      answer: 'did',
    },
  ],
};
