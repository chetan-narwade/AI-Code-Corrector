const Groq = require("groq-sdk");

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function getAIResponse(prompt) {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful JavaScript code corrector." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    });

    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error("AI service unavailable");
  }
}

module.exports = { getAIResponse };
