import { ModelName, ValidationErrorType, ErrorTypeCode, ErrorTypeCodeMap } from 'src/types';

const modelCodePrefixes = {
  [ModelName.USER]: 'USR'
};

const ErrorTypeCodes: ErrorTypeCodeMap = {
  [ValidationErrorType.ANY_EMPTY]: ErrorTypeCode._01,
  [ValidationErrorType.ANY_REQUIRED]: ErrorTypeCode._02,
  [ValidationErrorType.STRING_EMAIL]: ErrorTypeCode._03,
  [ValidationErrorType.STRING_MAX]: ErrorTypeCode._04,
  [ValidationErrorType.STRING_MIN]: ErrorTypeCode._05,
}

/*
    These codes are to represent certain types of validation failure
    'any.required': 'USR_02',
    'any.empty': 'USR_03',
    'string.max': 'USR_07',
    'string.min': 'USR_10',
    'string.email': 'USR_03',

    We use USR prefix to refer to errors on the User Entity.
    Errors on a Project Entity should use 'PRJ' prefix for example
  */


const loadErrors = (modelName: ModelName, errors) => {
  const { type, context } : { type: ValidationErrorType, context: any} = errors[0];
  const { key: field } = context;

  let message;
  const status = 422;
  const errorCode = `${modelCodePrefixes[modelName]}_${ErrorTypeCodes[type]}`;

  switch (type) {
    case 'any.required':
      message = `The ${field} field is required`;
      break;
    case 'string.email':
      message = `The ${field} field is invalid`;
      break;
    case 'any.empty':
      message = `The ${field} field is empty`;
      break;
    case 'string.min':
      message = `The ${field} field is less than ${context.limit} in character length`;
      break;
    case 'string.max':
      message = `The ${field} field is longer than ${context.limit} in character length`;
      break;
    default:
      message = 'failed validation';
  }
  return {
    message: `${errorCode}|${status}|${message}`,
  };
};
export default loadErrors;
