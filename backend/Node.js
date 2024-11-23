const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const openai = require('openai');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openaiApi = new OpenAIApi(configuration);

app.post('/generate-question', async (req, res) => {
  const { topic } = req.body;
  try {
    const response = await openaiApi.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate interview questions for ${topic}.`,
      max_tokens: 150,
    });
    res.status(200).send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send('Error generating question.');
  }
});

app.listen(5000, () => {
  console.log('Backend API is running on port 5000');
});
