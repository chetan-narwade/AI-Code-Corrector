const aiService = require("../services/ai.service");

exports.getResponse = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const prompt = `
You are a senior JavaScript developer.

Your task:
1. Find bugs and logical errors in the JavaScript code.
2. Correct the code.
3. Explain what was wrong.
4. Give the final corrected JavaScript code.
5. Format the answer in Markdown.
6. Put the corrected code inside triple backticks.

JavaScript code:
\`\`\`js
${code}
\`\`\`
`;

    const response = await aiService.getAIResponse(prompt);

    res.json({ response });

  } catch (error) {
    console.error("AI Controller Error:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
};
