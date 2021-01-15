import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.SERVER_URL
  ? `${process.env.SERVER_URL}/`
  : `http://localhost:3000/`;

const responseBody = (response: AxiosResponse) => response?.data;

export const requests = {
  get: (url: string, params?: any) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: any) => axios.post(url, body).then(responseBody),
  put: (url: string, body: any) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};
