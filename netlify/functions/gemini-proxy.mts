import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    const apiKey = Netlify.env.get("GEMINI_API_KEY");
    if (!apiKey) {
        return Response.json({ error: "Gemini API key not configured on server" }, { status: 500 });
    }

    try {
        const body = await req.json();

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return Response.json(
                { error: data.error?.message || "Gemini API error" },
                { status: response.status }
            );
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
};
