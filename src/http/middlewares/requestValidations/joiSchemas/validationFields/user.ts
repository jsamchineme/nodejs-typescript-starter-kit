import * as joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const email = joi.string().strict().trim().strict()
  .min(3)
  .max(70)
  .email()
  .required()
  .error((errors) => {
    return loadErrors(ModelName.USER, errors);
  });

export const password = joi.string().trim().strict()
  .max(40)
  .required()
  .error((errors) => {
    return loadErrors(ModelName.USER, errors);
  });

export const firstname = joi.string().trim().min(1).max(30)
  .required()
  .error((errors) => {
    return loadErrors(ModelName.USER, errors);
  });

export const lastname = joi.string().trim().min(1).max(30)
.required()
.error((errors) => {
  return loadErrors(ModelName.USER, errors);
});

export const username = joi.string().trim().min(6).max(30)
.required()
.error((errors) => {
  return loadErrors(ModelName.USER, errors);
});
