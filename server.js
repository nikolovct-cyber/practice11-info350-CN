//Constantine Nikolov
//INFO350-002
//Practice 9 server

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your first Express API!' });
});

app.post('/api/notes', (req, res) => {
  const { name, note } = req.body;

  if (!name || !note) {
    return res.status(400).json({
      error: 'Both name and note are required.'
    });
  }

  res.status(201).json({
    message: 'Note received!',
    data: { name, note }
  });
});

app.get('/', (req, res) => {
  res.send('Application is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});