import { Router } from 'express';
import validateUserSignup from 'src/http/middlewares/requestValidations/userSignup';
import wrapAsync from 'src/http/wrapAsync';
import { userSignup } from './controller';

const authRouter = Router();

authRouter.post('/signup',
  validateUserSignup,
  wrapAsync(userSignup));

export default authRouter;
