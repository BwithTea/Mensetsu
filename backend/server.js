import express from 'express';
import cors from 'cors';
import "dotenv/config";
import OpenAI from 'openai';


const app = express();
const PORT = process.env.PORT || 3000;
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});



app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/api/ai', async (req, res) => {
    const { prompt } = req.body;
    // Make sure a prompt was provided

    try {
        const response = await openai.responses.create({
            model: "gpt-3.5-turbo",
            input: prompt,
            max_output_tokens: 100
        });
        res.json({ response: response.output[0].content[0].text });
        console.log(response);
    } catch (error) {
        console.error("Error fetching AI response:", error);
        res.status(500).json({ error: "Failed to fetch AI response" });
    }
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})
