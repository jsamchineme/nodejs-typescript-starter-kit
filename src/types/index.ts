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
