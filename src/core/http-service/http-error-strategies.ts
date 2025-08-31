import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, message: "Service not found" } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    message: "Access to the requested service is not allowed",
  } as UnauthorizedError;
};

export const forbiddenErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    message: "Access to the requested resource is forbidden",
  } as ForbiddenError;
};

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, message: "Server error" } as UnhandledException;
};

export const networkErrorStrategy = () => {
  throw { message: "Network error" } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.error ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  401: unauthorizedErrorStrategy,
  403: forbiddenErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
