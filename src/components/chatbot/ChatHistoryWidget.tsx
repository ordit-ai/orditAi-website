import React from "react";

import { OUIChatBoxMessageEntry } from "./types";
import ChatBotMessage from "./components/ChatBotMessage";
import UserMessage from "./components/UserMessage";

export function ChatHistoryWidgetMini() {
  const conversation: OUIChatBoxMessageEntry[] = [];



  return (
    <div className={`flex flex-col   `}>
      {conversation.map((instance, index) => {
        if (instance.custom) {
          return <React.Fragment key={index}>{instance.custom}</React.Fragment>;
        }
        return (
          <div key={index}>
            {instance.who == "AI" ? (
              <ChatBotMessage message={instance.body as string} className="pt-4" />
            ) : (
              <UserMessage message={instance.body} time="" />
            )}
          </div>
        );
      })}
    </div>
  );
}
