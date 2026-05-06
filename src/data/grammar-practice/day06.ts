import type { GrammarDay } from '../../types/grammar-practice';

export const day06: GrammarDay = {
  id: 6,
  title: 'Past Simple — Regular Verbs',
  tense: 'Past Simple',
  focus: 'Regular Verbs: Positive & Negative',
  explanation: {
    formula:
      'Positive: Subject + verb+ed\nNegative: Subject + didn\'t + base verb\nSpelling: stop→stopped, dance→danced, play→played, study→studied',
    usage:
      'Use the Past Simple for completed actions in the past. The time is usually clear.',
    signalWords: ['yesterday', 'last week', 'last year', 'ago', 'in 2020', 'last night', 'last Monday'],
    examples: {
      positive: 'She walked to school yesterday.',
      negative: "He didn't finish his homework last night.",
      yesNo: 'Did you watch the game yesterday?',
      wh: 'What did she study last night?',
    },
  },
  exercises: [
    {
      id: 'd06-e01',
      type: 'fill_in',
      sentence: 'We ___ (visit) our grandparents last weekend.',
      answer: 'visited',
    },
    {
      id: 'd06-e02',
      type: 'fill_in',
      sentence: 'She ___ (not / finish) the book last night.',
      answer: "didn't finish",
    },
    {
      id: 'd06-e03',
      type: 'fill_in',
      sentence: 'The detective ___ (search) the room carefully.',
      answer: 'searched',
    },
    {
      id: 'd06-e04',
      type: 'fill_in',
      sentence: 'They ___ (not / play) football yesterday because it rained.',
      answer: "didn't play",
    },
    {
      id: 'd06-e05',
      type: 'fill_in',
      sentence: 'My mum ___ (bake) a chocolate cake for my birthday.',
      answer: 'baked',
    },
    {
      id: 'd06-e06',
      type: 'multiple_choice',
      sentence: 'I ___ my bag before school yesterday.',
      options: ['pack', 'packed', "didn't packed", 'packs'],
      answer: 'packed',
    },
    {
      id: 'd06-e07',
      type: 'multiple_choice',
      sentence: 'He ___ the answer to the teacher\'s question.',
      options: ['not answered', "didn't answer", "doesn't answer", 'not answer'],
      answer: "didn't answer",
    },
    {
      id: 'd06-e08',
      type: 'multiple_choice',
      sentence: 'The students ___ a poster about recycling last week.',
      options: ['create', 'created', 'are creating', 'creates'],
      answer: 'created',
    },
  ],
};
