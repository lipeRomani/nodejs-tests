const express = require('express');

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

app.listen(3030, () => {
  console.log('Listen on port 3030');
})

module.exports = app;