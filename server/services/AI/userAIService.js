const client = require("../AI/aiClient");

const userAIService = async (message, pizzas) => {
    const response = await client.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
            {
                role: "system",
                content: `
You are a pizza ordering assistant.

Menu:
${JSON.stringify(pizzas)}

Help users:
- choose pizzas
- recommend pizzas
- answer menu questions
`
            },
            {
                role: "user",
                content: message
            }
        ]
    });

    return response.choices[0].message.content;
}

module.exports = userAIService;