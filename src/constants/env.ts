import * as dotenv from 'dotenv';
import { EnvironmentName } from 'src/types';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || EnvironmentName.DEVELOPMENT;
const DEBUG = process.env.DEBUG === 'true';
const { PORT } = process.env;

export {
  NODE_ENV,
  DEBUG,
  PORT,
};
