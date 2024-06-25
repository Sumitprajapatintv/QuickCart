import { Router } from 'express';
import { create, list, get, update } from '@/controller/order'

const route = Router();
export default (app: Router) => {
  app.use('/order', route);

  route.post('/create', create);

  route.post('/list', list);

  route.post('/get/:id', get);

  route.post('/update/:_id', update);

};