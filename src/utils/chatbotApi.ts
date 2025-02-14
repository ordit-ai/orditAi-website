// import { Toast } from "@/configs/toast";
import axios from "axios";
import { setupGlobalAxiosInstanceAuth } from "./axios";

const ChatBotApi = axios.create({
  baseURL: "https://chat.orditai.com/",
  headers: {
    Accept: "application/json",
  },
});

setupGlobalAxiosInstanceAuth(ChatBotApi);

ChatBotApi.interceptors.request.use(
  (config) => {
    config.headers.set("workspace_id", localStorage.getItem("wsId"));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default ChatBotApi;
