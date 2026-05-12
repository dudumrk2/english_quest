import { Fragment, useState, useMemo, useEffect, useRef } from 'react';
import {
    Box, Typography, Card, CardContent, TextField, Button,
    Radio, RadioGroup, FormControlLabel, FormControl,
    Chip, Stack, Divider, Alert, LinearProgress, Table,
    TableBody, TableCell, TableHead, TableRow, Paper, Snackbar,
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as WrongIcon,
    Refresh as RetryIcon,
    EmojiEvents as TrophyIcon,
    ArrowBack as BackIcon,
    Save as SaveIcon,
} from '@mui/icons-material';

import { exactMatch, wordOverlapMatch } from '../utils/validation';

const DRAFT_PREFIX = 'nadav-english-test-draft-';
import type {
    Test, TestSection, MCQuestion, FillSentence, VerbPair,
    SentenceFill, QuestionFormItem, PassageQuestion, PassageSegment,
    ReadingQuestion, TestResult,
    MultipleChoiceSection, FillFromBankSection, VerbTableSection,
    SentenceCompletionSection, QuestionFormationSection, PassageFillSection,
    ReadingComprehensionSection,
} from '../types/test';

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
        } else if (section.type === 'reading_comprehension') {
            section.questions.forEach((q: ReadingQuestion) => {
                const key = `${si}_${q.id}`;
                const ok = wordOverlapMatch(answers[key] || '', q.answer, 0.5);
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
    const draftKey = `${DRAFT_PREFIX}${test.id}`;

    const [answers, setAnswers] = useState<Record<string, string>>(() => {
        try {
            const draft = localStorage.getItem(draftKey);
            return draft ? JSON.parse(draft) : {};
        } catch {
            return {};
        }
    });
    // Keys that have been checked and are correct — these are locked and cannot be edited
    const [lockedCorrect, setLockedCorrect] = useState<Set<string>>(new Set());
    // Whether we're currently showing check feedback (between check and user editing)
    const [showFeedback, setShowFeedback] = useState(false);
    // Final submission — all answers correct, score reported
    const [submitted, setSubmitted] = useState(false);
    const [hasDraft] = useState(() => !!localStorage.getItem(draftKey));
    const [saveSnackbar, setSaveSnackbar] = useState(false);

    const setAnswer = (key: string, value: string) => {
        // Don't allow editing locked (correct) answers
        if (lockedCorrect.has(key)) return;
        setAnswers(prev => ({ ...prev, [key]: value }));
    };

    // Auto-save draft to localStorage on every answer change
    const isFirstRender = useRef(true);
    useEffect(() => {
        // Skip saving on initial mount (draft was just loaded)
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (!submitted) {
            localStorage.setItem(draftKey, JSON.stringify(answers));
        }
    }, [answers, submitted, draftKey]);

    const handleSaveProgress = () => {
        localStorage.setItem(draftKey, JSON.stringify(answers));
        setSaveSnackbar(true);
    };

    // ── Compute results (used during feedback and final submission) ───────

    const { resultsMap, sectionScores, totalScore } = useMemo(
        () => (showFeedback || submitted)
            ? computeScore(test, answers)
            : { resultsMap: {} as Record<string, boolean>, sectionScores: [] as { earned: number; total: number }[], totalScore: 0 },
        [showFeedback, submitted, answers, test],
    );

    const handleCheck = () => {
        const { resultsMap: currentResults } = computeScore(test, answers);

        // Lock correct answers, clear wrong ones
        const newLocked = new Set(lockedCorrect);
        const updatedAnswers = { ...answers };

        Object.entries(currentResults).forEach(([key, isCorrect]) => {
            if (isCorrect) {
                newLocked.add(key);
            } else {
                // Clear wrong answer so user can retry
                delete updatedAnswers[key];
            }
        });

        setLockedCorrect(newLocked);
        setAnswers(updatedAnswers);
        setShowFeedback(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Check if ALL answers are now correct
        const allCorrect = Object.values(currentResults).every(v => v);
        if (allCorrect) {
            setSubmitted(true);
            localStorage.removeItem(draftKey);
            const score = computeScore(test, answers).totalScore;
            onComplete({
                testId: test.id,
                score,
                totalPoints: test.totalPoints,
                percentage: Math.round((score / test.totalPoints) * 100),
                completedAt: new Date().toISOString(),
            });
        }
    };

    const handleTryAgain = () => {
        // User acknowledged the feedback, go back to editing wrong answers
        setShowFeedback(false);
    };

    const handleRetry = () => {
        setAnswers({});
        setLockedCorrect(new Set());
        setShowFeedback(false);
        setSubmitted(false);
        localStorage.removeItem(draftKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const percentage = submitted ? Math.round((totalScore / test.totalPoints) * 100) : 0;
    const scoreColor = percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'error';
    const wrongCount = showFeedback ? Object.values(resultsMap).filter(v => !v).length : 0;

    return (
        <Box>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Button
                        startIcon={<BackIcon />}
                        onClick={onBack}
                        sx={{ color: 'text.secondary', textTransform: 'none' }}
                    >
                        Back to Practice Tests
                    </Button>
                    {!submitted && (
                        <Button
                            startIcon={<SaveIcon />}
                            variant="outlined"
                            size="small"
                            onClick={handleSaveProgress}
                            sx={{ textTransform: 'none', borderColor: 'rgba(99,102,241,0.4)', color: 'primary.light' }}
                        >
                            Save Progress
                        </Button>
                    )}
                </Stack>

                {hasDraft && !submitted && (
                    <Alert severity="info" sx={{ mb: 2, py: 0.5 }}>
                        Your saved progress has been loaded. Continue where you left off!
                    </Alert>
                )}

                <Typography variant="h4" fontWeight={700} color="primary">
                    {test.title}
                </Typography>
                {test.subtitle && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {test.subtitle}
                    </Typography>
                )}
            </Box>

            <Snackbar
                open={saveSnackbar}
                autoHideDuration={2500}
                onClose={() => setSaveSnackbar(false)}
                message="Progress saved!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />

            {/* Feedback banner: wrong answers to fix */}
            {showFeedback && !submitted && (
                <Alert
                    severity="warning"
                    sx={{ mb: 3 }}
                    action={
                        <Button color="inherit" size="small" onClick={handleTryAgain} sx={{ textTransform: 'none', fontWeight: 700 }}>
                            Fix Answers
                        </Button>
                    }
                >
                    You have <strong>{wrongCount}</strong> incorrect answer{wrongCount !== 1 ? 's' : ''}. Correct answers are saved — fix the rest and check again!
                </Alert>
            )}

            {/* Score summary (shown after all correct) */}
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
                            Start Over
                        </Button>
                    </CardContent>
                </Card>
            )}

            {/* Sections */}
            <Stack spacing={4}>
                {test.sections.map((section, si) =>
                    renderSection(section, si, answers, setAnswer, showFeedback || submitted, resultsMap, lockedCorrect)
                )}
            </Stack>

            {/* Check / Fix buttons */}
            {!submitted && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    {!showFeedback ? (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleCheck}
                            sx={{
                                px: 6,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            }}
                        >
                            ✅ Check My Answers
                        </Button>
                    ) : (
                        <Stack spacing={2} alignItems="center">
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleTryAgain}
                                sx={{
                                    px: 6,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #d97706, #b45309)',
                                    },
                                }}
                            >
                                🔄 Fix Wrong Answers
                            </Button>
                        </Stack>
                    )}
                </Box>
            )}

            {submitted && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="outlined" startIcon={<RetryIcon />} onClick={handleRetry} sx={{ mr: 2 }}>
                        Start Over
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
    showingResults: boolean,
    resultsMap: Record<string, boolean>,
    lockedCorrect: Set<string>,
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
                    renderMultipleChoice(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'fill_from_bank' &&
                    renderFillFromBank(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'verb_table' &&
                    renderVerbTable(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'sentence_completion' &&
                    renderSentenceCompletion(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'question_formation' &&
                    renderQuestionFormation(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'passage_fill' &&
                    renderPassageFill(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
                {section.type === 'reading_comprehension' &&
                    renderReadingComprehension(section, si, answers, setAnswer, showingResults, resultsMap, lockedCorrect)}
            </CardContent>
        </Card>
    );
}


// ── A: Multiple Choice ────────────────────────────────────────────────────

function renderMultipleChoice(section: MultipleChoiceSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
    return (
        <Stack spacing={2}>
            {section.questions.map((q: MCQuestion, qi: number) => {
                const key = `${si}_${q.id}`;
                const isLocked = lockedCorrect.has(key);
                const isCorrect = resultsMap[key];
                return (
                    <Box
                        key={q.id}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                            border: isLocked ? answerBorder(true, true) : answerBorder(showingResults, isCorrect),
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
                                                color: isLocked
                                                    ? 'success.main'
                                                    : showingResults
                                                        ? isCorrect ? 'success.main' : 'error.main'
                                                        : 'text.primary',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {answers[key] || '   '}
                                        </Box>
                                    )}
                                </Fragment>
                            ))}
                        </Typography>

                        <FormControl disabled={isLocked}>
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

                        {isLocked && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5, color: 'success.main' }}>
                                <CheckIcon fontSize="small" /> Correct!
                            </Box>
                        )}
                        {showingResults && !isLocked && !isCorrect && (
                            <Alert severity="warning" icon={<WrongIcon />} sx={{ mt: 1, py: 0.5 }}>
                                Try again!
                            </Alert>
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── B: Fill from Bank ─────────────────────────────────────────────────────

function renderFillFromBank(section: FillFromBankSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
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
                    const isLocked = lockedCorrect.has(key);
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
                                bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                                border: isLocked ? answerBorder(true, true) : answerBorder(showingResults, isCorrect),
                            }}
                        >
                            <Typography variant="body1">
                                <strong>{idx + 1}.</strong> {parts[0]}
                            </Typography>
                            <TextField
                                size="small"
                                value={answers[key] || ''}
                                onChange={e => setAnswer(key, e.target.value)}
                                disabled={isLocked}
                                placeholder="..."
                                sx={{
                                    width: 120,
                                    '& .MuiInputBase-input': { textAlign: 'center', py: 0.5, fontFamily: 'monospace' },
                                }}
                            />
                            {parts[1] && (
                                <Typography variant="body1">{parts[1]}</Typography>
                            )}
                            {isLocked && <CheckIcon fontSize="small" sx={{ color: 'success.main', ml: 0.5 }} />}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}

// ── C: Verb Table ─────────────────────────────────────────────────────────

function renderVerbTable(section: VerbTableSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
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
                        const lLocked = lockedCorrect.has(lKey);
                        const rLocked = rv ? lockedCorrect.has(rKey) : false;
                        const lOk = resultsMap[lKey];
                        const rOk = rv ? resultsMap[rKey] : undefined;

                        return (
                            <TableRow key={lv.id}>
                                <TableCell>
                                    <Typography fontFamily="monospace" fontWeight={600}>{lv.v1}</Typography>
                                </TableCell>
                                <TableCell>
                                    <VerbInput
                                        value={answers[lKey] || ''}
                                        onChange={val => setAnswer(lKey, val)}
                                        locked={lLocked}
                                        showingResults={showingResults}
                                        correct={lOk}
                                    />
                                </TableCell>
                                <TableCell>
                                    {rv && <Typography fontFamily="monospace" fontWeight={600}>{rv.v1}</Typography>}
                                </TableCell>
                                <TableCell>
                                    {rv && (
                                        <VerbInput
                                            value={answers[rKey] || ''}
                                            onChange={val => setAnswer(rKey, val)}
                                            locked={rLocked}
                                            showingResults={showingResults}
                                            correct={rOk}
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

function VerbInput({ value, onChange, locked, showingResults, correct }: {
    value: string;
    onChange: (v: string) => void;
    locked: boolean;
    showingResults: boolean;
    correct: boolean | undefined;
}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
                size="small"
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={locked}
                placeholder="past form..."
                sx={{
                    width: 130,
                    '& .MuiInputBase-root': {
                        bgcolor: locked
                            ? 'rgba(34,197,94,0.1)'
                            : showingResults && correct === false
                                ? 'rgba(239,68,68,0.1)'
                                : undefined,
                    },
                    '& .MuiInputBase-input': { py: 0.5, fontFamily: 'monospace' },
                }}
            />
            {locked && <CheckIcon fontSize="small" sx={{ color: 'success.main' }} />}
            {showingResults && !locked && correct === false && <WrongIcon fontSize="small" sx={{ color: 'error.main' }} />}
        </Box>
    );
}

// ── D: Sentence Completion ────────────────────────────────────────────────

function renderSentenceCompletion(section: SentenceCompletionSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
    return (
        <Stack spacing={2}>
            {section.sentences.map((s: SentenceFill, idx: number) => {
                const key = `${si}_${s.id}`;
                const isLocked = lockedCorrect.has(key);
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
                            bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                            border: isLocked ? answerBorder(true, true) : answerBorder(showingResults, isCorrect),
                        }}
                    >
                        <Typography variant="body1">
                            <strong>{idx + 1}.</strong> {parts[0]}
                        </Typography>
                        <TextField
                            size="small"
                            value={answers[key] || ''}
                            onChange={e => setAnswer(key, e.target.value)}
                            disabled={isLocked}
                            placeholder="verb..."
                            sx={{
                                width: 150,
                                '& .MuiInputBase-input': { textAlign: 'center', py: 0.5, fontFamily: 'monospace' },
                            }}
                        />
                        {parts[1] && <Typography variant="body1">{parts[1]}</Typography>}
                        {isLocked && <CheckIcon fontSize="small" sx={{ color: 'success.main', ml: 0.5 }} />}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── E: Question Formation ─────────────────────────────────────────────────

function renderQuestionFormation(section: QuestionFormationSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
    return (
        <Stack spacing={2.5}>
            {section.items.map((item: QuestionFormItem, idx: number) => {
                const key = `${si}_${item.id}`;
                const isLocked = lockedCorrect.has(key);
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
                                {'"'}{item.givenAnswer}{'"'}
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            size="small"
                            label={`${idx + 1}. Your question`}
                            value={answers[key] || ''}
                            onChange={e => setAnswer(key, e.target.value)}
                            disabled={isLocked}
                            placeholder="Write your question here..."
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                                },
                            }}
                        />
                        {isLocked && (
                            <Box sx={{ mt: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, color: 'success.main' }}>
                                <CheckIcon fontSize="small" />
                                <Typography variant="caption">Correct!</Typography>
                            </Box>
                        )}
                        {showingResults && !isLocked && !isCorrect && (
                            <Typography variant="caption" color="error.main" sx={{ mt: 0.5, display: 'block' }}>
                                <WrongIcon fontSize="inherit" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                                Try again!
                            </Typography>
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}

// ── G: Reading Comprehension ──────────────────────────────────────────────

function renderReadingComprehension(section: ReadingComprehensionSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 3,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    lineHeight: 2,
                }}
            >
                <Typography variant="body1" sx={{ lineHeight: 1.9, whiteSpace: 'pre-line' }}>
                    {section.passage}
                </Typography>
            </Paper>

            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>
                Answer the questions in full sentences:
            </Typography>
            <Stack spacing={2}>
                {section.questions.map((q: ReadingQuestion, idx: number) => {
                    const key = `${si}_${q.id}`;
                    const isLocked = lockedCorrect.has(key);
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
                                disabled={isLocked}
                                placeholder="Write your answer here..."
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                                    },
                                }}
                            />
                            {isLocked && (
                                <Typography variant="caption" color="success.main" sx={{ mt: 0.5, display: 'block' }}>
                                    ✓ Correct!
                                </Typography>
                            )}
                            {showingResults && !isLocked && !isCorrect && (
                                <Typography variant="caption" color="error.main" sx={{ mt: 0.5, display: 'block' }}>
                                    Try again!
                                </Typography>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}

// ── F: Passage Fill ───────────────────────────────────────────────────────

function renderPassageFill(section: PassageFillSection, si: number, answers: Record<string, string>, setAnswer: (key: string, value: string) => void, showingResults: boolean, resultsMap: Record<string, boolean>, lockedCorrect: Set<string>) {
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
                        const isLocked = lockedCorrect.has(key);
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
                                        disabled={isLocked}
                                        sx={{
                                            width: 100,
                                            '& .MuiInputBase-root': {
                                                bgcolor: isLocked
                                                    ? 'rgba(34,197,94,0.15)'
                                                    : showingResults && !isCorrect
                                                        ? 'rgba(239,68,68,0.15)'
                                                        : undefined,
                                                fontSize: '0.85rem',
                                            },
                                            '& .MuiInputBase-input': { py: 0.3, px: 1, textAlign: 'center', fontFamily: 'monospace' },
                                        }}
                                    />
                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
                                        ({seg.hint})
                                    </Typography>
                                    {isLocked && (
                                        <CheckIcon sx={{ fontSize: 14, color: 'success.main' }} />
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
                    const isLocked = lockedCorrect.has(key);
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
                                disabled={isLocked}
                                placeholder="Write your answer here..."
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: isLocked ? answerBg(true, true) : answerBg(showingResults, isCorrect),
                                    },
                                }}
                            />
                            {isLocked && (
                                <Typography variant="caption" color="success.main" sx={{ mt: 0.5, display: 'block' }}>
                                    ✓ Correct!
                                </Typography>
                            )}
                            {showingResults && !isLocked && !isCorrect && (
                                <Typography variant="caption" color="error.main" sx={{ mt: 0.5, display: 'block' }}>
                                    Try again!
                                </Typography>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
