import { Router } from 'express';
import { create } from '@/controller/order'

const route = Router();
export default (app: Router) => {
  app.use('/order', route);

  route.post('/create', create);

};