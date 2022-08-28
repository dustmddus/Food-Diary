import axios, { AxiosRequestConfig } from "axios";

const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: "https://api.dongkyurami.link",
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosDefaultInstance = axios.create(axiosDefaultConfig);

export const axiosAuthInstance = axios.create({
  ...axiosDefaultConfig,
  withCredentials: true,
});
