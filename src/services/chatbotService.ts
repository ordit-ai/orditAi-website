import chatbotApi from "@/utils/chatbotApi.ts";
import { CHATBOT_URLS } from "@/constants/chatbotUrl.ts";
import type {
  CreateChatSessionResponse,
  GetChatSessionHistoryResponse,
  GetChatSessionResponse,
  IAskAgentResponse,
  TChatSession,
} from "@/types/chatTypes";
import { handleApiError } from "@/utils/httpApiErrors";
import { setSession } from "@/helpers/authHelpers";

type TDirectMessageChat = {
  question: string;
  user_id: string;
  session_id?: string | null;
};

type TChatUpload = {
  file: File;
  payload: TDirectMessageChat;
};

export const directMessageChat = async (payload: TDirectMessageChat) => {
  return await askAgent({ chat: JSON.stringify(payload) });
};

export const directChatUpload = async ({ file, payload }: TChatUpload) => {
  return await askAgent({ chat: JSON.stringify(payload), file: file });
};

export const askAgent = async (payload: { file?: File; chat: string }) => {
  try {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const { data } = await chatbotApi.post<IAskAgentResponse>(CHATBOT_URLS.DIRECT_MESSAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data.data, "AI Response");
    if (data.data.session_id) {
      setSession(data.data.session_id as string);
    }
    return data.data;
  } catch (err) {
    console.log(err);
    throw handleApiError(err);
  }
};

export const getChatHistory = async ({ session_id, user_id }: { session_id: string; user_id: string }) => {
  try {
    const { data } = await chatbotApi.get<GetChatSessionHistoryResponse>(
      CHATBOT_URLS.SINGLE_CHAT_HISTORY(session_id, user_id),
    );
    console.log(data, " chat history goes here");
    return data;
  } catch (err) {
    console.log(err);
    throw handleApiError(err);
  }
};

export const getChatSessions = async ({ user_id }: { user_id: string }) => {
  try {
    const { data } = await chatbotApi.get<GetChatSessionResponse>(CHATBOT_URLS.CHAT_SESSIONS(user_id), {
      data: {
        user_id,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    throw handleApiError(err);
  }
};

export const updateSession = async ({
  session_id,
  payload,
  user_id,
}: {
  session_id: string;
  payload: TChatSession;
  user_id: string;
}) => {
  try {
    const { data } = await chatbotApi.put(CHATBOT_URLS.SESSION_INSTANCE(session_id), {
      ...payload,
      user_id,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw handleApiError(err);
  }
};

export const createSession = async ({ user_id }: { user_id: string }) => {
  try {
    const { data } = await chatbotApi.post<CreateChatSessionResponse>(CHATBOT_URLS.SESSION_INSTANCE("start"), {
      user_id,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw handleApiError(err);
  }
};
