


import axios from "axios";

import storage from "utils/storage";
import successHandler from "./utils/interceptors/successHandler";
import errorHandler from "./utils/interceptors/errorHandler";
import * as commonService from "utils/CommonService";
export const BASE_URL = () => {
  // if (process.env.REACT_APP_ENV === 'development') {
  let url = "http://13.234.59.166/";

  // if (process.env.REACT_APP_ENV === "staging") {
  //   console.log('SETTING BASE URL')
  //   url = "https://dev-openmic-backend.storiyoh.com/";
  // }
  // if (process.env.REACT_APP_ENV === "production") {
  //   console.log("production if");
  //   url = "";
  // }
  return url;
};
export const API_VIRSION = "/api";


const instance = axios.create({
  baseURL: BASE_URL(),
});
instance.interceptors.request.use((config) => {
  const token = storage.get('jwt');
const loader = document.getElementById('globalLoader');
  loader.classList.remove('hide');
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    //logout here
  }
  // show loader
  commonService.isLoading.onNext(true);
  return config;
},
(error) => {
const loader = document.getElementById('globalLoader');

  loader.classList.add('hide');
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
const loader = document.getElementById('globalLoader');

  // Do something with response data
  loader.classList.add('hide');
  return response;
}, function (error) {
const loader = document.getElementById('globalLoader');
  // Do something with response error
  loader.classList.add('hide');
  return Promise.reject(error);
});

const token = storage.get("humlog_authToken");
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
