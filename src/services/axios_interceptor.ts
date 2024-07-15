import { API_URL } from "@env";
import axios from "axios";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;