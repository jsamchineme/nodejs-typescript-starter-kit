import { Router } from 'express';

const baseRouter = Router();

baseRouter.get('*', (req, res) => {
  return res.status(200).send({ error: 'not found' });
});

export default baseRouter;
