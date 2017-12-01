const express = require('express');
const { getUser } = require('../utils/utils');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error : 'Page not found',
    name: 'Todo app 1.0v'
  });
})

app.get('/users', (req, res) => {
  const users = [
    {
      name: "Felipe",
      age : 30
    },
    {
      name: 'Elisa',
      age: 29
    },
    {
      name: 'Woody',
      age: 4
    }
  ];

  res.status(200).json(users);
});

app.get('/user/detail', (req, res) => {
  getUser()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

app.listen(3030, () => {
  console.log('Listen on port 3030');
})

module.exports.app = app;