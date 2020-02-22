import * as Joi from '@hapi/joi';
import {
  email,
  password,
  firstname,
  lastname,
  username,
} from './validationFields/user';


const schema = Joi.object({
  email,
  password,
  firstname,
  lastname,
  username,
});


export default schema;
