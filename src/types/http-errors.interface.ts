interface Problem {
  error: string;
  statusCode: number;
  message?: string;
}

interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ForbiddenError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

type ApiError =
  | BadRequestError
  | NetworkError
  | NotFoundError
  | UnhandledException
  | UnauthorizedError
  | ValidationError;

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
  ApiError,
};
