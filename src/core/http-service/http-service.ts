import { ApiError } from "@/types/http-errors.interface";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { errorHandler, networkErrorStrategy } from "./http-error-strategies";
import { API_URL } from "@/configs/app.config";

const httpService = axios.create({
  baseURL: API_URL,
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;

        errorHandler[statusCode](errorData);
      }
    } else {
      networkErrorStrategy();
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);

  return response.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  let options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
  };

  if (data instanceof FormData) {
    options.data = data;
  } else {
    options.data = JSON.stringify(data);
    options.headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  let options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
  };

  if (data instanceof FormData) {
    options.data = data;
  } else {
    options.data = JSON.stringify(data);
    options.headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData };
