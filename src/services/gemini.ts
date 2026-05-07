const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const USE_PROXY = import.meta.env.PROD || import.meta.env.VITE_USE_GEMINI_PROXY === 'true';

export async function getChatResponse(history: { role: string; text: string }[], userMessage: string) {
    if (!USE_PROXY && !GEMINI_API_KEY) {
        console.warn("Missing VITE_GEMINI_API_KEY");
        return "I'm sorry, I can't think right now because my AI brain is missing its key. Please check the settings.";
    }

    try {
        const contents = history.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));

        contents.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        const requestBody = {
            contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 150,
            },
        };

        const url = USE_PROXY
            ? '/.netlify/functions/gemini-proxy'
            : `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to get response from Gemini');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("AI Error:", error);
        return "I'm having trouble connecting to the internet. Please try again.";
    }
}
