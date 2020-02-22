import User from 'src/modules/user/model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';
import generateToken from 'src/utils/generateToken';

export const userSignup = async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);

  return response.created(res, newUser);
};


export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getByField('email', email);
  if (!user) {
    throw httpException.handle(ERROR_CODES.USR_07);
  }

  const isCorrectPassword = await User.hasCorrectPassword(password, user);
  if (!isCorrectPassword) {
    throw httpException.handle(ERROR_CODES.USR_07);
  }

  const { token, expiresIn } = generateToken(user);

  const userData = user.toJSON();

  delete user.password;

  const data = {
    ...userData,
    token,
    expiresIn
  };
  return response.success(res, data);
};