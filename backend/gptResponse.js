import OpenAI from 'openai';
const apiKey = "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";

const key = new OpenAI({
  apiKey: apiKey
})

const openai = new OpenAI(key);

async function gptResponse(prompt) {
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        stream: true,
        temperature: 0.7,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

export default gptResponse