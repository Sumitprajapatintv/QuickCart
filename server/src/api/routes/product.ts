import { Router } from 'express';
import { create } from './../../controller/product'

const route = Router();
export default (app: Router) => {
  app.use('/product', route);

  route.post('/create', create);

};