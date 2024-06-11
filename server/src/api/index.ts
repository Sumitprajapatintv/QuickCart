import user from './routes/user'
import { Router } from 'express';
export default () => {
  const app = Router();
  user(app);
  return app;
};
