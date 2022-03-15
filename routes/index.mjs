import express from 'express';
import { listUsers } from '../services/users.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/users', (req, res) => {
  let users = listUsers
  res.render('users', users);
});

router.get('/plans', (req, res) => {
  res.render('plans');
});

router.get('/cards', (req, res) => {
  res.render('cards');
});

export default router;
