const client = require("./aiClient");

const guestAIService = async (message, pizzas) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system", content: `
You are a pizza assistant.

Help visitors explore the pizza menu.

Encourage them to login to place orders.

Menu:
${JSON.stringify(pizzas)}
` },
                { role: "user", content: message }
            ]
        });

        return response.choices[0].message.content;

    } catch (err) {
        console.error("Groq error:", err);
        return "I cant respond at this time...";
    }
};

module.exports = guestAIService;