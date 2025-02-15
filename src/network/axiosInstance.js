import axios from "axios";
import store from '../Redux/stores/load'; // Check the file exists
import theme from '../Redux/stores/theme'; // Check the file exists

import { load } from "../Redux/Actions/load";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  // API_KEY: ""
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent

  // call loader action   (by default is true )
  store.dispatch(load(true));

  config["headers"] = {
    Authorization: "MYTOKEN"
  }

  config["params"] = {
    API_KEY: ""
  }
  return config;
},

function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // call loader action   (by response is true ) stop loader
  store.dispatch(load(false));

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});