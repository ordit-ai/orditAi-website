import { useContext } from "react";
import { ChatContext } from "./ChatWidgetContext";
// import { ChatContext } from "./ChatWidgetContext";

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a AuditorChatProvider");
  }

  return context;
};
