const OpenAI = require('openai');
<<<<<<< Updated upstream
const apiKey = process.env.OPENAI;
=======
require('dotenv').config()
const apiKey = process.env.OPENAI
>>>>>>> Stashed changes

const key = new OpenAI({
    apiKey: apiKey
})

const openai = new OpenAI(key);

async function gptResponse(prompt) {
    let res = ""
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        stream: true,
        temperature: 1,
    });
    for await (const chunk of stream) {
        res += (chunk.choices[0]?.delta?.content || "");
    }
    return res;
}

module.exports = gptResponse

