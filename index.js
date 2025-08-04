
const express = require('express');
const app = express();
const port = 3000;

// Route 1: Home
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route 2: About
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Route 3: Contact
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});