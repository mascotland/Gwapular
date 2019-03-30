const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});

app.listen(PORT, () => console.log(`Application LIVE on ${PORT}`))
