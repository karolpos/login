const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/auth-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
}));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('login');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
