import User from 'src/modules/user/model';
import response from 'src/http/response';
import { Response, Request } from 'express';

export const userSignup = async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);

  return response.created(res, newUser);
};