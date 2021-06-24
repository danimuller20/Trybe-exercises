const bodyParser = require('body-parser');
const express = require('express');

const authMiddleware = require('./auth-middleware');

const app = express();

app.use(bodyParser.json());
//? Exercício 1
app.get('/ping', (req, res) => {
  res.json( {message: 'pong' });
});

//? Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

//? Exercício 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({ message: `Hello, ${name}!` });
});

//? Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Seu nome é ${name} e voce tem ${age} anos de idade`})
});
//http PUT :3000/users/name/age name=Daniela age=30

//? Exercício 5

app.listen(3000, () => console.log('Ouvindo na porta 3000'));