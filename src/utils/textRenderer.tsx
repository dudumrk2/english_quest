import React from 'react';
import { Tooltip, Typography } from '@mui/material';

export interface VocabularyWord {
    word: string;
    translation: string;
}

/**
 * Renders text with vocabulary words highlighted and showing translations on hover.
 * Vocabulary words are matched case-insensitively and longest words are matched first.
 */
export const renderTextWithTooltips = (
    text: string | undefined,
    vocabulary: VocabularyWord[] | undefined
): React.ReactNode => {
    if (!text || !vocabulary || vocabulary.length === 0) return text;

    // Sort by length desc to match longest first
    const sortedVocab = [...vocabulary].sort((a, b) => b.word.length - a.word.length);

    const escapeRegExp = (string: string): string =>
        string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create pattern: \b(word1|word2|...)\b
    const pattern = new RegExp(
        `\\b(${sortedVocab.map((v) => escapeRegExp(v.word)).join('|')})\\b`,
        'gi'
    );

    const parts = text.split(pattern);

    return parts.map((part, index) => {
        const vocabMatch = sortedVocab.find(
            (v) => v.word.toLowerCase() === part.toLowerCase()
        );

        if (vocabMatch) {
            return (
                <Tooltip
                    key={index}
                    title={
                        <Typography variant="h6" sx={{ p: 1 }}>
                            {vocabMatch.translation}
                        </Typography>
                    }
                    arrow
                    placement="top"
                    enterTouchDelay={0}
                >
                    <span
                        style={{
                            fontWeight: 'bold',
                            color: '#1976d2',
                            cursor: 'help',
                            borderBottom: '2px dotted #1976d2',
                            transition: 'all 0.2s',
                            display: 'inline-block',
                            margin: '0 2px',
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLSpanElement;
                            target.style.backgroundColor = '#1976d2';
                            target.style.color = 'white';
                            target.style.borderRadius = '4px';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLSpanElement;
                            target.style.backgroundColor = 'transparent';
                            target.style.color = '#1976d2';
                            target.style.borderRadius = '0px';
                        }}
                    >
                        {part}
                    </span>
                </Tooltip>
            );
        }
        return part;
    });
};

export interface HighlightRange {
    start: number;
    end: number;
}

/**
 * Renders text with vocabulary tooltips and an optional highlighted range.
 * Used for read-aloud functionality to show current word being spoken.
 */
export const renderTextWithHighlight = (
    text: string | undefined,
    vocabulary: VocabularyWord[] | undefined,
    highlightRange: HighlightRange | null
): React.ReactNode => {
    if (!text) return null;

    // If no highlight, just use the standard tooltip renderer
    if (!highlightRange) {
        return renderTextWithTooltips(text, vocabulary);
    }

    // Split text into 3 parts: before, highlighted, after
    const { start, end } = highlightRange;
    const before = text.slice(0, start);
    const highlighted = text.slice(start, end);
    const after = text.slice(end);

    return (
        <>
            {renderTextWithTooltips(before, vocabulary)}
            <span
                style={{
                    backgroundColor: '#ffeb3b',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    boxShadow: '0 0 5px #ffeb3b',
                    transition: 'all 0.1s',
                }}
            >
                {renderTextWithTooltips(highlighted, vocabulary)}
            </span>
            {renderTextWithTooltips(after, vocabulary)}
        </>
    );
};
