import User from 'src/modules/user/model';
import { Response, Request } from 'express';

export const userSignup = async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);

  return res.status(201).send(newUser);
};
