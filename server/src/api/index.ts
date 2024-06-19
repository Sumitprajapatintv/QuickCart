import user from './routes/user'
import product from './routes/product';
import { Router } from 'express';
export default () => {
  const app = Router();
  user(app);
  product(app);
  return app;
};
