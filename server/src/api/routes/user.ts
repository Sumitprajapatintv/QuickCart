import { Router } from 'express';
import { signup, login, get, update, list } from './../../controller/user'

const route = Router();
export default (app: Router) => {
  app.use('/quotations', route);

  app.use('/user', route);

  route.post('/signup', signup);

  route.post('/login', login);

  route.post('/get:id', get);

  route.post('/update:id', update);

  route.post('/list', list);


};


