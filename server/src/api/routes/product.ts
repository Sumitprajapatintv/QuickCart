import { Router } from 'express';
import { create, list } from '@/controller/product';

const route = Router();
export default (app: Router) => {
  app.use('/product', route);

  route.post('/create', create);

  route.post('/list', list);

};