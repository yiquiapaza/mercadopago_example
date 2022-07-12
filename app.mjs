import express from 'express';
import routes from './routes/index.mjs'
//import users from './controllers/users.mjs';
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', routes);
//app.use('/', users);

export default  app;
