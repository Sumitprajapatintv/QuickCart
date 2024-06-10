import { Router } from 'express';
import { signup } from '../controller/user'

const route = Router();

route.post('./signup', signup);




