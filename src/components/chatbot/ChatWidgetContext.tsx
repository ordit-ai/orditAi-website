import { directMessageChat } from "@/services/chatbotService";
import { IAskAgentResponse } from "@/types/chatTypes";
import { useMutation } from "@tanstack/react-query";
import { createContext, useState, ReactNode, useEffect } from "react";
import { OUIChatBoxMessageEntry } from "./types";
import { getToken } from "@/helpers/authHelpers";
import { useChatStore } from "@/store";

interface ChatContextType {
  conversation: OUIChatBoxMessageEntry[];
  addMessageToConversation: (message: OUIChatBoxMessageEntry) => void;
  // addCustomToConversation: (message: React.ReactNode, id: string, force?: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  publishQuery: () => void;
  publishQueryInstant: (query: string) => void;
  clear: () => void;
  registerScrollToBottomFun?: (fn: () => void) => void;
  fetchingAnswer: boolean;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProps {
  children: ReactNode;
  onResponse?: (response: IAskAgentResponse, context: ChatContextType) => boolean;
  // defaultSessionId: string;
}

const ChatProvider = ({ children }: ChatProps) => {
  // const [conversation, setConversation] = useState<OUIChatBoxMessageEntry[]>([]);

  const { conversation, addMessage, clearConversation } = useChatStore();

  const [query, setQuery] = useState("");

  const [sessionId, setSessionId] = useState("");

  let scrollToBottomFun = () => {
    // not implemented
  };

  function getRandomChatId() {
    const timestamp = Date.now();
    const randomComponent = Math.floor(Math.random() * 10000); // Add a 4-digit random number
    return `${timestamp}-${conversation.length + 1}-${randomComponent}`;
  }

  function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const user_id = getToken();

  function addMessageToStack(message: OUIChatBoxMessageEntry): Promise<void> {
    return new Promise((resolve) => {
      message.chat_id = getRandomChatId();
      addMessage(message);

      scrollToBottomFun();
      resolve(); // Resolve the Promise after state update and scrolling
    });
  }

  // function addCustomToStack(message: React.ReactNode, id: string, force?: boolean): Promise<void> {
  //   console.log("adding ", id, " to conversation stack");
  //   return new Promise((resolve) => {
  //     console.log(force);

  //     setConversation((prevValue) => {
  //       return [
  //         ...prevValue,
  //         {
  //           body: "",
  //           time: "",
  //           who: "AI",
  //           chat_id: id,
  //           custom: message,
  //           custom_id: id,
  //         },
  //       ];
  //     });

  //     scrollToBottomFun();

  //     resolve();
  //   });
  // }

  function publishQuery() {
    const payload: { question: string; user_id: string; session_id?: string } = {
      question: query,
      user_id: user_id ?? "",
      session_id: sessionId,
    };

    addMessageToStack({
      body: query,
      time: "",
      who: "USER",
      chat_id: "",
    });
    mutate(payload);
    setQuery("");
  }

  function publishQueryInstant(query: string) {
    addMessageToStack({
      body: query,
      time: "",
      who: "USER",
      chat_id: "",
    });
    mutate({ question: query, user_id: user_id ?? "" });
    setQuery("");
  }

  const { mutate, isPending: fetchingAnswer } = useMutation({
    mutationFn: directMessageChat,
    onSuccess: async (data) => {
      setSessionId(data.session_id);
      console.log(data, "data");

      let file_url: undefined | string = undefined;
      // add file url to stack if available
      console.log(data, "Log goes here");
      if (data.payload.length >= 1 && data.payload[0].file_url) {
        file_url = data.payload[0].file_url;

        addMessageToStack({
          body: data.output,
          time: "",
          who: "AI",
          chat_id: "",
          file_url,
        });
      } else if (data.payload.length >= 1 && data.payload[0].import) {
        addMessageToStack({
          body: data.output,
          time: "",
          who: "AI",
          chat_id: "",
          file_url,
        });

        await delay(1000);
        scrollToBottomFun();
      } else {
        addMessageToStack({
          body: data.output,
          time: "",
          who: "AI",
          chat_id: "",
          file_url,
        });
      }

      setTimeout(() => {
        scrollToBottomFun();
      }, 500);
    },
    onError() {
      console.error("Unable to process your message at the moment");
    },
  });

  const context = {
    addMessageToConversation: addMessageToStack,
    // addCustomToConversation: addCustomToStack,
    conversation: conversation,
    query,
    setQuery,
    publishQuery: publishQuery,
    publishQueryInstant,
    fetchingAnswer: fetchingAnswer,

    clear: () => {
      clearConversation();
    },
  };

  useEffect(() => {
    clearConversation();
  }, [clearConversation]);

  console.log(conversation, "conversation");

  return (
    <ChatContext.Provider
      value={{
        ...context,
        registerScrollToBottomFun: (fn) => {
          console.log("Updated scroll to bottom func");
          scrollToBottomFun = fn;
        },
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider };
