import type { GrammarDay } from '../../types/grammar-practice';

export const day05: GrammarDay = {
  id: 5,
  title: 'Present Simple vs Present Progressive',
  tense: 'Present Simple / Present Progressive',
  focus: 'Choosing the Right Tense',
  explanation: {
    formula:
      'Present Simple: Subject + base verb (s/es for he/she/it)\nPresent Progressive: Subject + am/is/are + verb-ing',
    usage:
      'Present Simple → habits, routines, permanent facts.\nPresent Progressive → happening right now or temporarily.\nState verbs NEVER use -ing: know, like, love, hate, want, need, believe, understand, remember, prefer.',
    signalWords: ['every day', 'usually', 'always', 'now', 'right now', 'at the moment', 'this week', 'today'],
    examples: {
      positive: 'She reads every night. / She is reading right now.',
      negative: "He doesn't play on Tuesdays. / He isn't playing at the moment.",
      yesNo: 'Do you travel often? / Are you travelling this summer?',
      wh: 'Where does she go after school? / Where is she going right now?',
    },
  },
  exercises: [
    {
      id: 'd05-e01',
      type: 'multiple_choice',
      sentence: 'I ___ basketball every Saturday with my team.',
      options: ['am playing', 'play', "don't playing", 'is playing'],
      answer: 'play',
    },
    {
      id: 'd05-e02',
      type: 'multiple_choice',
      sentence: 'Look! She ___ her essay right now.',
      options: ['write', 'writes', 'is writing', 'are writing'],
      answer: 'is writing',
    },
    {
      id: 'd05-e03',
      type: 'multiple_choice',
      sentence: 'I ___ this detective story. It is very exciting!',
      options: ['am loving', 'love', 'loves', 'are loving'],
      answer: 'love',
    },
    {
      id: 'd05-e04',
      type: 'fill_in',
      sentence: 'My dad usually ___ (drive) to work, but today he ___ (take) the train.',
      answer: "drives / is taking",
    },
    {
      id: 'd05-e05',
      type: 'multiple_choice',
      sentence: 'We ___ a geography test at the moment. Please be quiet!',
      options: ['have', 'are having', 'is having', 'having'],
      answer: 'are having',
    },
    {
      id: 'd05-e06',
      type: 'multiple_choice',
      sentence: 'She ___ three languages: Hebrew, English, and French.',
      options: ['is knowing', 'know', 'knows', 'are knowing'],
      answer: 'knows',
    },
    {
      id: 'd05-e07',
      type: 'fill_in',
      sentence: 'Tom always ___ (sit) near the window in class.',
      answer: 'sits',
    },
    {
      id: 'd05-e08',
      type: 'fill_in',
      sentence: 'Why ___ you (cry) ___? What happened?',
      answer: 'are you crying',
    },
    {
      id: 'd05-e09',
      type: 'multiple_choice',
      sentence: 'My mum ___ dinner right now, so please set the table.',
      options: ['cooks', 'cook', 'is cooking', 'are cooking'],
      answer: 'is cooking',
    },
    {
      id: 'd05-e10',
      type: 'multiple_choice',
      sentence: 'Our science teacher ___ us about space every Friday.',
      options: ['is telling', 'tell', 'tells', 'are telling'],
      answer: 'tells',
    },
    {
      id: 'd05-e11',
      type: 'fill_in',
      sentence: 'She ___ (not / understand) the question — she looks confused.',
      answer: "doesn't understand",
    },
    {
      id: 'd05-e12',
      type: 'multiple_choice',
      sentence: 'We ___ a new unit this week because the teacher changed the plan.',
      options: ['study', 'studies', 'are studying', 'were studying'],
      answer: 'are studying',
    },
    {
      id: 'd05-e13',
      type: 'fill_in',
      sentence: 'My grandfather ___ (walk) in the park every morning at seven.',
      answer: 'walks',
    },
  ],
};
