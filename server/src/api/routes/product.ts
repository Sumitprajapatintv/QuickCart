import { Router } from 'express';
import { create, list, get, update ,importdata } from '@/controller/product';

const route = Router();
export default (app: Router) => {
  app.use('/product', route);

  route.post('/create', create);

  route.post('/list', list);

  route.post('/get/:id', get);

  route.post('/update/:_id', update);

  route.post('/importData', importdata);

};