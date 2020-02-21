import * as joi from 'joi';
import loadErrors from '../helpers/loadErrors';

export const email = joi.string().strict().trim().strict()
  .min(3)
  .max(70)
  .email()
  .required()
  .error((errors) => {
    return loadErrors(errors);
  });

export const password = joi.string().trim().strict()
  .max(40)
  .required()
  .error((errors) => {
    return loadErrors(errors);
  });

export const firstname = joi.string().trim().min(8).max(60)
  .required()
  .error((errors) => {
    return loadErrors(errors);
  });

export const lastname = joi.string().trim().min(8).max(60)
.required()
.error((errors) => {
  return loadErrors(errors);
});

export const username = joi.string().trim().min(8).max(60)
.required()
.error((errors) => {
  return loadErrors(errors);
});
