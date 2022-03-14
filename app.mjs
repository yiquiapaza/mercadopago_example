import express from 'express';
import routes from './routes/index.mjs'

import cards from './controllers/cards.mjs';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', routes);
app.use('/', cards);

export default  app;
