import express from 'express';
import { userCreate } from '../services/users.mjs';

const cards = express.Router();

cards.get('/create-user', (req, res) => {
  console.log(req.body);
  console.log(userCreate());
  res.render('users');
});

export default cards;
