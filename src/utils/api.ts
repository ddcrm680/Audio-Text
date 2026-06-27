// utils/api.ts

import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong.",
      );
    }

    throw new Error("Unexpected error occurred.");
  }
};

export const postApi = async <T>(url: string, payload: unknown): Promise<T> => {
  try {
    const response = await api.post<T>(url, payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong.",
      );
    }

    throw new Error("Unexpected error occurred.");
  }
};
