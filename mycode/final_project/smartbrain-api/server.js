const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'heeeeeeey',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Jackson',
      email: 'jackson@gmail.com',
      password: 'heeeee__ey',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.json(database);
})

app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password) {
    res.json('success');
  }
  else {
    res.status(400).json('error logging in');
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
      id: '125',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    })
  res.json(database.users[database.users.length - 1]);
})

app.get('/profile/:id', (req, res) => {
  // req.params
  const { id } = req.params;
  database.users.forEach(user => {
    if (user.id === id) {
      return res.json(user);
    }
  })
  res.status(404).json('no such user');
})

app.post('/image', (req, res) => {
  // req.body
  const { id } = req.body;
  database.users.forEach(user => {
    console.log(user.id, id);
    if (user.id === id) {
      user.entries++; 
      return res.json(user.entries);
    }
  });
  res.status(404).json('not found');
  
})

app.listen(3000, () => {
  console.log("app is running on port 3000");
})
