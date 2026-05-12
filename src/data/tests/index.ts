import type { Test } from '../../types/test';
import { test01Staycations } from './test01-staycations';
import { test02MixedTenses1 } from './test02-mixed-tenses-1';
import { test03MixedTenses2 } from './test03-mixed-tenses-2';
import { test04MixedTenses3 } from './test04-mixed-tenses-3';
import { test05MixedTensesHarder } from './test05-mixed-tenses-harder';
import { test06MixedTensesExam } from './test06-mixed-tenses-exam';
import { test07MixedTensesPractice5 } from './test07-mixed-tenses-practice5';

export const tests: Test[] = [
    test01Staycations,
    test02MixedTenses1,
    test03MixedTenses2,
    test04MixedTenses3,
    test05MixedTensesHarder,
    test06MixedTensesExam,
    test07MixedTensesPractice5,
];
