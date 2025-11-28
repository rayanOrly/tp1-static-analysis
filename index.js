require('dotenv').config();
const express = require('express');
const _ = require('lodash');

const helmet = require('helmet');
app.use(helmet());

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route simple pour tester
app.get('/', (req, res) => {
  res.send('Hello from TP1 Static Analysis project 👋');
});

// Route volontairement un peu "sale" pour donner du boulot aux outils SAST
app.get('/search', (req, res) => {
  const query = req.query.q || '';
  const items = ['admin', 'user', 'guest', 'root'];
  const filtered = items.filter(i => i.includes(query));
  res.json({ query, results: filtered });
});

// Route qui utilise lodash
app.post('/sum', (req, res) => {
  const numbers = req.body.numbers || [];
  const sum = _.sum(numbers);
  res.json({ sum });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
