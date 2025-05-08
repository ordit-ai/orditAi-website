import axios, { Axios } from "axios";
// import { getToken } from "@/helpers/authHelpers";

const AccountApi = axios.create({
  baseURL: "https://account.orditai.com/api/",
  headers: {
    Accept: "application/json",
  },
});

export function setupGlobalAxiosInstanceAuth(axios: Axios) {
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      return Promise.reject(error);
    },
  );
}

setupGlobalAxiosInstanceAuth(AccountApi);

export default AccountApi;
