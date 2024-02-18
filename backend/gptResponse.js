import OpenAI from 'openai';
const apiKey = "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"

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
        temperature: 0.7,
    });
    for await (const chunk of stream) {
        res += (chunk.choices[0]?.delta?.content || "");
    }
    process.stdout.write(res)
}

export default gptResponse

