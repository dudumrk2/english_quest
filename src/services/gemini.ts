const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getChatResponse(history: { role: string; text: string }[], userMessage: string) {
    if (!GEMINI_API_KEY) {
        console.warn("Missing VITE_GEMINI_API_KEY");
        return "I'm sorry, I can't think right now because my AI brain is missing its key. Please check the settings.";
    }

    try {
        // Convert chat history to Gemini format
        // Gemini expects: { role: "user" | "model", parts: [{ text: "..." }] }
        const contents = history.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));

        // Add the new message
        contents.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: contents,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 150, // Keep responses concise for a tutor
                    }
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to get response from Gemini');
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        return text;

    } catch (error) {
        console.error("AI Error:", error);
        return "I'm having trouble connecting to the internet. Please try again.";
    }
}
