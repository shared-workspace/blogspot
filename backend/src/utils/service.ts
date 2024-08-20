import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY;
const BLOGGER_API_BASE_URL = process.env.BLOGGER_API_BASE_URL;

const http_create = axios.create({
  baseURL: BLOGGER_API_BASE_URL,
  params: {
    key: BLOGGER_API_KEY,
  },
});

http_create.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export const http = {
  get: http_create.get,
  post: http_create.post,
  put: http_create.put,
  delete: http_create.delete,
};
