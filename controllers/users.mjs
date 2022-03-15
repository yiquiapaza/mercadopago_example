import express from 'express';

import { createUser } from '../services/users.mjs';

const users = express.Router();

users.get('/create-user', (req, res) => {
  console.log(req.body);
  console.log(createUser());
  res.render('users');
});



export default users;