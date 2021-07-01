const express = require('express');
const bodyParser = require('body-parser');

const modelUsers = require('./models/modelUsers');
const validateUser = require('./middleware/validateUser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', validateUser, async (req, res) => {
  const {firstName, lastName, email, password} = req.body;

  const users = await modelUsers.insertUser(firstName, lastName, email, password);

  res.status(200).json(users);
});

app.get('/user', async (req, res) => {

  const user = await modelUsers.getUser();

  if(!user) return res.status(200).json([]);

  res.status(200).json(user);
});

app.get('/user/:id', async (req, res, next) => {
  const { id } = req.params;

  const user = await modelUsers.getUserById(id);

  if (user === null) {
    return next(res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    }))
  }
  res.status(200).json(user);
})

app.put('/user/:id', validateUser, async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  console.log('passei aqui');
  const updatedUser = await modelUsers.editUser(id, firstName, lastName, email, password);

  if (updatedUser === null) {
    return next(res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    }))
  }
  res.status(200).json(updatedUser);
})

app.use((err, _req, res, _next) => {
  res.send(err)
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
