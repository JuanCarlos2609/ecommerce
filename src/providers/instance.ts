/* eslint-disable no-param-reassign */
import axios from 'axios';

const env = import.meta.env;

export const instance = axios.create({
  baseURL: env.VITE_APP_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Config nedeed interceptors to check requests & responses
instance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');

    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
