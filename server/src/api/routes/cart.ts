import { Router } from 'express';
import { create, list, get, update } from '@/controller/cart'

const route = Router();
export default (app: Router) => {
  app.use('/cart', route);

  route.post('/create', create);

  route.post('/list', list);

  route.post('/get/:id', get);

  route.post('/update/:_id', update);

};