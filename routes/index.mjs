import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/users', (req, res) => {
  res.render('users');
});

router.get('/plans', (req, res) => {
  res.render('plans');
});

router.get('/cards', (req, res) => {
  res.render('cards');
});

export default router;
