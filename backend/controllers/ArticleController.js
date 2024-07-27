const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const createArticle = async (req, res) => {
    const { message } = req.body;
    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    const data = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
        ],
    };

    try {
        const response = await axios.post(url, data, { headers });
        const result = response.data.choices[0].message.content;
        res.status(201).json({ result });
    } catch (error) {
        console.error('Error response from OpenAI:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = { createArticle };
