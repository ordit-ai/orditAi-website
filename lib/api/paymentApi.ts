import axios from "axios";
import { setupGlobalAxiosInstanceAuth } from "./axios";

const PaymentApi = axios.create({
  baseURL: "https://payment.api.orditai.com/api/v1/payments/payments",
  headers: {
    Accept: "application/json",
  },
});

setupGlobalAxiosInstanceAuth(PaymentApi);

export default PaymentApi;
