const client = require("./aiClient")

const adminAIService = async (message, pizzas, analytics) => {
    const response = await client.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
            {
                role: "system",
                content: `
You are an AI assistant for a pizza store admin.

Menu:
${JSON.stringify(pizzas)}

Analytics:
${JSON.stringify(analytics)}

Help admin understand:
- menu insights
- pricing suggestions
- product analysis
`
            },
            {
                role: "user",
                content: message
            }
        ]
    });
    return response.choices[0].message.content;
};

module.exports = adminAIService;