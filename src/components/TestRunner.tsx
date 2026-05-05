import { Fragment, useState, useMemo } from 'react';
import {
    Box, Typography, Card, CardContent, TextField, Button,
    Radio, RadioGroup, FormControlLabel, FormControl,
    Chip, Stack, Divider, Alert, LinearProgress, Table,
    TableBody, TableCell, TableHead, TableRow, Paper,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as WrongIcon,
    Refresh as RetryIcon,
    EmojiEvents as TrophyIcon,
    ArrowBack as BackIcon,
} from '@mui/icons-material';
import type {
    Test, TestSection, MCQuestion, FillSentence, VerbPair,
    SentenceFill, QuestionFormItem, PassageQuestion, PassageSegment,
    TestResult,
    MultipleChoiceSection, FillFromBankSection, VerbTableSection,
    SentenceCompletionSection, QuestionFormationSection, PassageFillSection,
} from '../types/test';

// ─── Validation helpers ────────────────────────────────────────────────────

const normalizeStr = (s: string) =>
    s.toLowerCase()
        .replace(/‘|’/g, "'")
        .replace(/didn't/g, 'did not')
        .replace(/wasn't/g, 'was not')
        .replace(/isn't/g, 'is not')
        .replace(/weren't/g, 'were not')
        .replace(/[.,!?]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

function exactMatch(user: string, correct: string, acceptAlso?: string[]): boolean {
    const u = normalizeStr(user);
    if (u === normalizeStr(correct)) return true;
    if (acceptAlso) {
        return acceptAlso.some(alt => u === normalizeStr(alt));
    }
    return false;
}

function wordOverlapMatch(user: string, correct: string, threshold = 0.65): boolean {
    const userWords = new Set(normalizeStr(user).split(/\s+/).filter(w => w.length > 1));
    const correctWords = normalizeStr(correct).split(/\s+/).filter(w => w.length > 1);
    if (correctWords.length === 0) return true;
    const matched = correctWords.filter(w => userWords.has(w)).length;
    return matched / correctWords.length >= threshold;
}

function computeScore(test: Test, answers: Record<string, string>): { resultsMap: Record<string, boolean>; sectionScores: { earned: number; total: number }[]; totalScore: number } {
    const map: Record<string, boolean> = {};
    const sScores: { earned: number; total: number }[] = [];
    let grand = 0;

    test.sections.forEach((section, si) => {
        let earned = 0;
        let total = 0;

        if (section.type === 'multiple_choice') {
            section.questions.forEach((q: MCQuestion) => {
                const key = `${si}_${q.id}`;
                const ok = (answers[key] || '').toLowerCase() === q.answer.toLowerCase();
                map[key] = ok;
                if (ok) earned += section.pointsPerAnswer;
                total += section.pointsPerAnswer;
            });
        } else if (section.type === 'fill_from_bank') {
            section.sentences.forEach((s: FillSentence) => {
                const key = `${si}_${s.id}`;
                const ok = exactMatch(answers[key] || '', s.answer);
                map[key] = ok;
                if (ok) earned += section.pointsPerAnswer;
                total += section.pointsPerAnswer;
            });
        } else if (section.type === 'verb_table') {
            section.verbs.forEach((v: VerbPair) => {
                const key = `${si}_${v.id}`;
                const ok = exactMatch(answers[key] || '', v.v2);
                map[key] = ok;
                if (ok) earned += section.pointsPerAnswer;
                total += section.pointsPerAnswer;
            });
        } else if (section.type === 'sentence_completion') {
            section.sentences.forEach((s: SentenceFill) => {
                const key = `${si}_${s.id}`;
                const ok = exactMatch(answers[key] || '', s.answer, s.acceptAlso);
                map[key] = ok;
                if (ok) earned += section.pointsPerAnswer;
                total += section.pointsPerAnswer;
            });
        } else if (section.type === 'question_formation') {
            section.items.forEach((item: QuestionFormItem) => {
                const key = `${si}_${item.id}`;
                const ok = wordOverlapMatch(answers[key] || '', item.correctQuestion);
                map[key] = ok;
                if (ok) earned += section.pointsPerAnswer;
                total += section.pointsPerAnswer;
            });
        } else if (section.type === 'passage_fill') {
            section.segments.forEach(seg => {
                if (seg.type !== 'blank') return;
                const key = `${si}_${seg.id}`;
                const blankSeg = seg as Extract<PassageSegment, { type: 'blank' }>;
                const ok = exactMatch(answers[key] || '', blankSeg.answer, blankSeg.acceptAlso);
                map[key] = ok;
                if (ok) earned += section.pointsPerBlank;
                total += section.pointsPerBlank;
            });
            section.questions.forEach((q: PassageQuestion) => {
                const key = `${si}_${q.id}`;
                const ok = wordOverlapMatch(answers[key] || '', q.answer, 0.5);
                map[key] = ok;
                if (ok) earned += section.pointsPerQuestion;
                total += section.pointsPerQuestion;
            });
        }

        sScores.push({ earned, total });
        grand += earned;
    });

    return { resultsMap: map, sectionScores: sScores, totalScore: grand };
}

// ─── Props ────────────────────────────────────────────────────────────────

interface TestRunnerProps {
    test: Test;
    onBack: () => void;
    onComplete: (result: TestResult) => void;
}

// ─── Colour helpers ───────────────────────────────────────────────────────

function answerBg(submitted: boolean, correct: boolean | undefined) {
    if (!submitted) return undefined;
    return correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)';
}

function answerBorder(submitted: boolean, correct: boolean | undefined) {
    if (!submitted) return '1px solid rgba(255,255,255,0.1)';
    return correct ? '1px solid rgba(34,197,94,0.5)' : '1px solid rgba(239,68,68,0.5)';
}

// ─── Main Component ───────────────────────────────────────────────────────

export function TestRunner({ test, onBack, onComplete }: TestRunnerProps) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const setAnswer = (key: string, value: string) =>
        setAnswers(prev => ({ ...prev, [key]: value }));

    // ── Compute results after submission ──────────────────────────────────

    const { resultsMap, sectionScores, totalScore } = useMemo(
        () => submitted
            ? computeScore(test, answers)
            : { resultsMap: {} as Record<string, boolean>, sectionScores: [] as { earned: number; total: number }[], totalScore: 0 },
        [submitted, answers, test],
    );

    const handleSubmit = () => {
        // Compute score eagerly so onComplete receives the real value before re-render
        const { totalScore: score } = computeScore(test, answers);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onComplete({
            testId: test.id,
            score,
            totalPoints: test.totalPoints,
            percentage: Math.round((score / test.totalPoints) * 100),
            completedAt: new Date().toISOString(),
        });
    };

    const handleRetry = () => {
        setAnswers({});
        setSubmitted(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const percentage = submitted ? Math.round((totalScore / test.totalPoints) * 100) : 0;
    const scoreColor = percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'error';

    return (
        <Box>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Button
                    startIcon={<BackIcon />}
                    onClick={onBack}
                    sx={{ mb: 2, color: 'text.secondary', textTransform: 'none' }}
                >
                    Back to Practice Tests
                </Button>
                <Typography variant="h4" fontWeight={700} color="primary">
                    {test.title}
                </Typography>
                {test.subtitle && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {test.subtitle}
                    </Typography>
                )}
            </Box>

            {/* Score summary (shown after submit) */}
            {submitted && (
                <Card sx={{ mb: 4, border: `2px solid`, borderColor: `${scoreColor}.main`, bgcolor: 'background.paper' }}>
                    <CardContent sx={{ textAlign: 'center', py: 3 }}>
                        <TrophyIcon sx={{ fontSize: 48, color: `${scoreColor}.main`, mb: 1 }} />
                        <Typography variant="h3" fontWeight={800} color={`${scoreColor}.main`}>
                            {totalScore} / {test.totalPoints}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                            {percentage}%{' '}
                            {percentage >= 80 ? '🎉 Excellent!' : percentage >= 60 ? '👍 Good job!' : '💪 Keep practising!'}
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={percentage}
                            color={scoreColor}
                            sx={{ height: 10, borderRadius: 5, mb: 3 }}
                        />
                        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" gap={1}>
                            {test.sections.map((_section, si) => (
                                <Chip
                                    key={si}
                                    label={`${getSectionLetter(si)}: ${sectionScores[si]?.earned ?? 0}/${sectionScores[si]?.total ?? 0}`}
                                    color={
                                        (sectionScores[si]?.earned ?? 0) === (sectionScores[si]?.total ?? 0)
                                            ? 'success'
                                            : (sectionScores[si]?.earned ?? 0) >= (sectionScores[si]?.total ?? 1) * 0.6
                                            ? 'warning'
                                            : 'error'
                                    }
                                    size="small"
                                    variant="outlined"
                                />
                            ))}
                        </Stack>
                        <Button
                            startIcon={<RetryIcon />}
                            variant="outlined"
                            onClick={handleRetry}
                            sx={{ mt: 3 }}
                        >
                            Try Again
                        </Button>
                    </CardContent>
                </Card>
            )}

            {/* Sections */}
            <Stack spacing={4}>
                {test.sections.map((section, si) =>
                    renderSection(section, si, answers, setAnswer, submitted, resultsMap)
                )}
            </Stack>

            {/* Submit button */}
            {!submitted && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        sx={{
                            px: 6,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        }}
                    >
                        Check My Answers
                    </Button>
                </Box>
            )}

            {submitted && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="outlined" startIcon={<RetryIcon />} onClick={handleRetry} sx={{ mr: 2 }}>
                        Try Again
                    </Button>
                    <Button variant="text" startIcon={<BackIcon />} onClick={onBack}>
                        Back to Tests
                    </Button>
                </Box>
            )}
        </Box>
    );
}

// ─── Section letter helper ────────────────────────────────────────────────

function getSectionLetter(index: number) {
    return String.fromCharCode(65 + index);
}

// ─── Section renderers ────────────────────────────────────────────────────

function renderSection(
    section: TestSection,
    si: number,
    answers: Record<string, string>,
    setAnswer: (key: string, value: string) => void,
    submitted: boolean,
    resultsMap: Record<string, boolean>
) {
    return (
        <Card key={si} sx={{ bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.08)' }}>
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ mb: 2.5 }}>
                    <Typography variant="h6" fontWeight={700} color="primary">
                        {section.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {section.pointsNote}
                        {'instructions' in section && ` — ${section.instructions}`}
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2.5, borderColor: 'rgba(255,255,255,0.08)' }} />

                {section.type === 'multiple_choice' &&
                    renderMultipleChoice(section, si, answers, setAnswer, submitted, resultsMap)}
                {section.type === 'fill_from_bank' &&
                    renderFillFromBank(section, si, answers, setAnswer, submitted, resultsMap)}
                {section.type === 'verb_table' &&
                    renderVerbTable(section, si, answers, setAnswer, submitted, resultsMap)}
                {section.type === 'sentence_completion' &&
                    renderSentenceCompletion(section, si, answers, setAnswer, submitted, resultsMap)}
                {section.type === 'question_formation' &&
                    renderQuestionFormation(section, si, answers, setAnswer, submitted, resultsMap)}
                {section.type === 'passage_fill' &&
                    renderPassageFill(section, si, answers, setAnswer, submitted, resultsMap)}
            </CardContent>
        </Card>
    );
}

// ── A: Multiple Choice ────────────────────────────────────────────────────

function renderMultipleChoice(section: MultipleChoiceSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    return (
        <Stack spacing={2}>
            {section.questions.map((q: MCQuestion, qi: number) => {
                const key = `${si}_${q.id}`;
                const isCorrect = resultsMap[key];
                return (
                    <Box
                        key={q.id}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: answerBg(submitted, isCorrect),
                            border: answerBorder(submitted, isCorrect),
                        }}
                    >
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>{qi + 1}.</strong>{' '}
                            {q.text.split('___').map((part: string, i: number) => (
                                <Fragment key={i}>
                                    {part}
                                    {i < q.text.split('___').length - 1 && (
                                        <Box
                                            component="span"
                                            sx={{
                                                display: 'inline-block',
                                                borderBottom: '2px solid',
                                                borderColor: 'primary.main',
                                                minWidth: 100,
                                                mx: 0.5,
                                                textAlign: 'center',
                                                color: submitted
                                                    ? isCorrect
                                                        ? 'success.main'
                                                        : 'error.main'
                                                    : 'text.primary',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {answers[key] || '   '}
                                        </Box>
                                    )}
                                </Fragment>
                            ))}
                        </Typography>

                        <FormControl disabled={submitted}>
                            <RadioGroup
                                row
                                value={answers[key] || ''}
                                onChange={e => setAnswer(key, e.target.value)}
                            >
                                {q.options.map((opt: string, oi: number) => (
                                    <FormControlLabel
                                        key={opt}
                                        value={opt}
                                        control={<Radio size="small" />}
                                        label={`${String.fromCharCode(97 + oi)}. ${opt}`}
                                        sx={{ mr: 3 }}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>

                        {submitted && !isCorrect && (
                            <Alert severity="error" icon={<WrongIcon />} sx={{ mt: 1, py: 0.5 }}>
                                Correct answer: <strong>{q.answer}</strong>
                            </Alert>
                        )}
                        {submitted && isCorrect && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5, color: 'success.main' }}>
                                <CheckIcon fontSize="small" /> Correct!
                            </Box>
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── B: Fill from Bank ─────────────────────────────────────────────────────

function renderFillFromBank(section: FillFromBankSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    const usedWords = new Set(Object.entries(answers)
        .filter(([k]) => k.startsWith(`${si}_`))
        .map(([, v]) => (v as string).toLowerCase()));

    return (
        <Box>
            {/* Word bank */}
            <Box sx={{ mb: 3, p: 2, bgcolor: 'rgba(99,102,241,0.08)', borderRadius: 2, border: '1px solid rgba(99,102,241,0.2)' }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    Word Bank:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {section.wordBank.map((word: string) => {
                        const used = usedWords.has(word.toLowerCase());
                        return (
                            <Chip
                                key={word}
                                label={word}
                                size="small"
                                sx={{
                                    opacity: used ? 0.4 : 1,
                                    textDecoration: used ? 'line-through' : 'none',
                                    bgcolor: 'rgba(99,102,241,0.15)',
                                    color: 'primary.light',
                                    fontFamily: 'monospace',
                                }}
                            />
                        );
                    })}
                </Stack>
            </Box>

            <Stack spacing={2}>
                {section.sentences.map((s: FillSentence, idx: number) => {
                    const key = `${si}_${s.id}`;
                    const isCorrect = resultsMap[key];
                    const parts = s.text.split('___');
                    return (
                        <Box
                            key={s.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 0.5,
                                p: 1.5,
                                borderRadius: 2,
                                bgcolor: answerBg(submitted, isCorrect),
                                border: answerBorder(submitted, isCorrect),
                            }}
                        >
                            <Typography variant="body1">
                                <strong>{idx + 1}.</strong> {parts[0]}
                            </Typography>
                            <TextField
                                size="small"
                                value={answers[key] || ''}
                                onChange={e => setAnswer(key, e.target.value)}
                                disabled={submitted}
                                placeholder="..."
                                sx={{
                                    width: 120,
                                    '& .MuiInputBase-input': { textAlign: 'center', py: 0.5, fontFamily: 'monospace' },
                                }}
                            />
                            {parts[1] && (
                                <Typography variant="body1">{parts[1]}</Typography>
                            )}
                            {submitted && !isCorrect && (
                                <Chip
                                    label={`✓ ${s.answer}`}
                                    size="small"
                                    color="success"
                                    sx={{ ml: 1 }}
                                />
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}

// ── C: Verb Table ─────────────────────────────────────────────────────────

function renderVerbTable(section: VerbTableSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    const verbs: VerbPair[] = section.verbs;
    const half = Math.ceil(verbs.length / 2);
    const leftVerbs = verbs.slice(0, half);
    const rightVerbs = verbs.slice(half);

    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700, color: 'primary.main', width: '20%' }}>V1</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: 'primary.main', width: '30%' }}>V2 (Past Simple)</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: 'primary.main', width: '20%' }}>V1</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: 'primary.main', width: '30%' }}>V2 (Past Simple)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leftVerbs.map((lv: VerbPair, idx: number) => {
                        const rv = rightVerbs[idx];
                        const lKey = `${si}_${lv.id}`;
                        const rKey = rv ? `${si}_${rv.id}` : '';
                        const lOk = resultsMap[lKey];
                        const rOk = rv ? resultsMap[rKey] : undefined;

                        return (
                            <TableRow key={lv.id}>
                                {/* Left verb */}
                                <TableCell>
                                    <Typography fontFamily="monospace" fontWeight={600}>{lv.v1}</Typography>
                                </TableCell>
                                <TableCell>
                                    <VerbInput
                                        value={answers[lKey] || ''}
                                        onChange={val => setAnswer(lKey, val)}
                                        submitted={submitted}
                                        correct={lOk}
                                        correctAnswer={submitted && !lOk ? lv.v2 : undefined}
                                    />
                                </TableCell>
                                {/* Right verb */}
                                <TableCell>
                                    {rv && <Typography fontFamily="monospace" fontWeight={600}>{rv.v1}</Typography>}
                                </TableCell>
                                <TableCell>
                                    {rv && (
                                        <VerbInput
                                            value={answers[rKey] || ''}
                                            onChange={val => setAnswer(rKey, val)}
                                            submitted={submitted}
                                            correct={rOk}
                                            correctAnswer={submitted && !rOk ? rv.v2 : undefined}
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Box>
    );
}

function VerbInput({ value, onChange, submitted, correct, correctAnswer }: {
    value: string;
    onChange: (v: string) => void;
    submitted: boolean;
    correct: boolean | undefined;
    correctAnswer?: string;
}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
                size="small"
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={submitted}
                placeholder="past form..."
                sx={{
                    width: 130,
                    '& .MuiInputBase-root': {
                        bgcolor: submitted
                            ? correct
                                ? 'rgba(34,197,94,0.1)'
                                : 'rgba(239,68,68,0.1)'
                            : undefined,
                    },
                    '& .MuiInputBase-input': { py: 0.5, fontFamily: 'monospace' },
                }}
            />
            {submitted && correct && <CheckIcon fontSize="small" sx={{ color: 'success.main' }} />}
            {submitted && !correct && <WrongIcon fontSize="small" sx={{ color: 'error.main' }} />}
            {correctAnswer && (
                <Typography variant="caption" color="success.main" fontFamily="monospace">
                    → {correctAnswer}
                </Typography>
            )}
        </Box>
    );
}

// ── D: Sentence Completion ────────────────────────────────────────────────

function renderSentenceCompletion(section: SentenceCompletionSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    return (
        <Stack spacing={2}>
            {section.sentences.map((s: SentenceFill, idx: number) => {
                const key = `${si}_${s.id}`;
                const isCorrect = resultsMap[key];
                const parts = s.text.split('___');
                return (
                    <Box
                        key={s.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 0.5,
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: answerBg(submitted, isCorrect),
                            border: answerBorder(submitted, isCorrect),
                        }}
                    >
                        <Typography variant="body1">
                            <strong>{idx + 1}.</strong> {parts[0]}
                        </Typography>
                        <TextField
                            size="small"
                            value={answers[key] || ''}
                            onChange={e => setAnswer(key, e.target.value)}
                            disabled={submitted}
                            placeholder="verb..."
                            sx={{
                                width: 150,
                                '& .MuiInputBase-input': { textAlign: 'center', py: 0.5, fontFamily: 'monospace' },
                            }}
                        />
                        {parts[1] && <Typography variant="body1">{parts[1]}</Typography>}
                        {submitted && !isCorrect && (
                            <Chip label={`✓ ${s.answer}`} size="small" color="success" sx={{ ml: 1 }} />
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── E: Question Formation ─────────────────────────────────────────────────

function renderQuestionFormation(section: QuestionFormationSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    return (
        <Stack spacing={2.5}>
            {section.items.map((item: QuestionFormItem, idx: number) => {
                const key = `${si}_${item.id}`;
                const isCorrect = resultsMap[key];
                return (
                    <Box key={item.id}>
                        <Box
                            sx={{
                                p: 1.5,
                                mb: 1,
                                borderRadius: 1,
                                bgcolor: 'rgba(255,255,255,0.04)',
                                borderLeft: '3px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            <Typography variant="caption" color="text.secondary">
                                Answer given:
                            </Typography>
                            <Typography variant="body2" fontStyle="italic">
                                "{item.givenAnswer}"
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            size="small"
                            label={`${idx + 1}. Your question`}
                            value={answers[key] || ''}
                            onChange={e => setAnswer(key, e.target.value)}
                            disabled={submitted}
                            placeholder="Write your question here..."
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: answerBg(submitted, isCorrect),
                                },
                            }}
                        />
                        {submitted && (
                            <Box sx={{ mt: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                                {isCorrect ? (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'success.main' }}>
                                        <CheckIcon fontSize="small" />
                                        <Typography variant="caption">Correct!</Typography>
                                    </Box>
                                ) : (
                                    <Typography variant="caption" color="error.main">
                                        <WrongIcon fontSize="inherit" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                                        Expected: <strong>{item.correctQuestion}</strong>
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── F: Passage Fill ───────────────────────────────────────────────────────

function renderPassageFill(section: PassageFillSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, submitted: boolean, resultsMap: Record<string, boolean>) {
    return (
        <Box>
            {/* Passage */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 3,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    lineHeight: 2.5,
                }}
            >
                <Typography component="div" variant="body1" sx={{ lineHeight: 2.8 }}>
                    {section.segments.map((seg: PassageSegment, idx: number) => {
                        if (seg.type === 'text') {
                            return <Fragment key={idx}>{seg.content}</Fragment>;
                        }
                        const key = `${si}_${seg.id}`;
                        const isCorrect = resultsMap[key];
                        return (
                            <Fragment key={idx}>
                                <Box
                                    component="span"
                                    sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', mx: 0.5, verticalAlign: 'middle' }}
                                >
                                    <TextField
                                        size="small"
                                        value={answers[key] || ''}
                                        onChange={e => setAnswer(key, e.target.value)}
                                        disabled={submitted}
                                        sx={{
                                            width: 100,
                                            '& .MuiInputBase-root': {
                                                bgcolor: submitted
                                                    ? isCorrect
                                                        ? 'rgba(34,197,94,0.15)'
                                                        : 'rgba(239,68,68,0.15)'
                                                    : undefined,
                                                fontSize: '0.85rem',
                                            },
                                            '& .MuiInputBase-input': { py: 0.3, px: 1, textAlign: 'center', fontFamily: 'monospace' },
                                        }}
                                    />
                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
                                        ({seg.hint})
                                    </Typography>
                                    {submitted && !isCorrect && (
                                        <Typography variant="caption" color="success.main" fontFamily="monospace" sx={{ fontSize: '0.65rem' }}>
                                            ✓ {seg.answer}
                                        </Typography>
                                    )}
                                </Box>
                            </Fragment>
                        );
                    })}
                </Typography>
            </Paper>

            {/* Questions */}
            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>
                Answer the questions in full:
            </Typography>
            <Stack spacing={2}>
                {section.questions.map((q: PassageQuestion, idx: number) => {
                    const key = `${si}_${q.id}`;
                    const isCorrect = resultsMap[key];
                    return (
                        <Box key={q.id}>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                <strong>{idx + 1}.</strong> {q.text}
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                value={answers[key] || ''}
                                onChange={e => setAnswer(key, e.target.value)}
                                disabled={submitted}
                                placeholder="Write your answer here..."
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: answerBg(submitted, isCorrect),
                                    },
                                }}
                            />
                            {submitted && (
                                <Typography variant="caption" color={isCorrect ? 'success.main' : 'error.main'} sx={{ mt: 0.5, display: 'block' }}>
                                    {isCorrect ? '✓ Correct!' : `Expected: ${q.answer}`}
                                </Typography>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
