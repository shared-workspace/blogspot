import axios from 'axios';
const proxyUrl = '/api/proxy';
const BLOGGER_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGGER_API_BASE_URL;

const http_create = axios.create({});

http_create.interceptors.request.use(
  (config) => {
    const bloggerUrl = config.url;
    if (!bloggerUrl) {
      throw new Error('URL is not defined');
    }
    const completeUrl = /^https?:\/\//i;
    if (completeUrl.test(bloggerUrl)) 
      return {
        ...config,
        url: proxyUrl,
        params: {
          url: bloggerUrl,
        },
      };
    return {
      ...config,
      url: proxyUrl,
      params: {
        url: `${BLOGGER_API_BASE_URL}${bloggerUrl}`,
      },
    }
  },
  (error) => {
    console.clear();
    console.log('Error from request interceptor');
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