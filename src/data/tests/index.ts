import type { Test } from '../../types/test';
import { test01Staycations } from './test01-staycations';
import { test02MixedTenses1 } from './test02-mixed-tenses-1';
import { test03MixedTenses2 } from './test03-mixed-tenses-2';
import { test04MixedTenses3 } from './test04-mixed-tenses-3';
import { test05MixedTensesExam } from './test05-mixed-tenses-exam';

export const tests: Test[] = [
    test01Staycations,
    test02MixedTenses1,
    test03MixedTenses2,
    test04MixedTenses3,
    test05MixedTensesExam,
];
