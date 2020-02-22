export enum EnvironmentName {
  DEVELOPMENT = 'development',
  TEST = 'test',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export interface ErrorResponse {
  status: number;
  stack?: string;
  message: string;
}

export enum ModelName {
  USER = 'user'
}

export enum ValidationErrorType {
  ANY_REQUIRED = 'any.required',
  ANY_EMPTY = 'any.empty',
  STRING_MAX = 'string.max',
  STRING_MIN = 'string.min',
  STRING_EMAIL = 'string.email',
}

export enum ErrorTypeCode {
  _01 = '01',
  _02 = '02',
  _03 = '03',
  _04 = '04',
  _05 = '05',
}

export interface ErrorTypeCodeMap {
  [ValidationErrorType.ANY_EMPTY]: ErrorTypeCode._01,
  [ValidationErrorType.ANY_REQUIRED]: ErrorTypeCode._02,
  [ValidationErrorType.STRING_EMAIL]: ErrorTypeCode._03,
  [ValidationErrorType.STRING_MAX]: ErrorTypeCode._04,
  [ValidationErrorType.STRING_MIN]: ErrorTypeCode._05,
}