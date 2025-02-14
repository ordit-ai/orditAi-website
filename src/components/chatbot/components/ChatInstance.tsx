import React, { useEffect, useRef } from "react";
import Avatar from "@/assets/images/avatar.png";
import { useSearchParams } from "react-router-dom";
import UserMessage from "./UserMessage";
import ChatBotMessage from "./ChatBotMessage";
import { cn } from "@/helpers/classHelpers";
import { useChatContext } from "../hook";
import { ChatHistoryWidgetMini } from "../ChatHistoryWidget";
import { UIConstants } from "@/constants/uiConstants";
import OUIConversationInput from "../OUIConversationInput";



export default function ChatInstance() {
  const { fetchingAnswer, conversation, registerScrollToBottomFun } = useChatContext();
  const [params] = useSearchParams();
  const chatId = params.get("chatId");

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    };
    // register scroll to bottom fn
    if (registerScrollToBottomFun) {
      registerScrollToBottomFun(scrollToBottom);
    }
  }, [registerScrollToBottomFun]);

  function ScrollToBottonLoader({ onLoad }: { onLoad: () => void }) {
    useEffect(() => {
      onLoad();
    }, [onLoad]);
    return <ChatBotMessage isTyping={fetchingAnswer} />;
  }

  return (
    <div className="h-[100%] flex flex-col  justify-between">
      <div className={cn(" p-4 bg-white border-b-[1px] border-gray-300 space-y-4 h-[70px]")}>
        <div className="flex justify-between">
          <div className={cn("flex items-start space-x-4 w-[75%]")}>
            <img src={Avatar} alt="Avatar" className="w-[30px]" />

            <div className="w-[90%]">
              <p className="text-sm w-[100%] text-gray-700 truncate ...">
                Need to generate a quick report on our current cash flow and liquidity position. Can Ordit AI help me
                pull the necessary data?
              </p>

              <p className="text-xs text-gray-500 font-light">Your Accountius Assistant</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-100 h-[100%] overflow-y-scroll p-4 space-y-2 ${UIConstants.customScrollBarClassNames}`}
        ref={chatContainerRef}
      >
        {chatId !== undefined && chatId !== "new" ? <ChatHistoryWidgetMini /> : null}
        {conversation.map((instance) => {
          if (instance.custom) {
            return <React.Fragment key={instance.chat_id}>{instance.custom}</React.Fragment>;
          }
          if (instance.who == "AI") {
            return <ChatBotMessage message={instance.body as string} key={instance.chat_id} link={instance.file_url} />;
          }
          return <UserMessage message={instance.body} time={instance.time} key={instance.chat_id} />;
        })}
        {fetchingAnswer ? (
          <ScrollToBottonLoader
            onLoad={() => {
              if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
              }
            }}
          />
        ) : null}
      </div>
      <OUIConversationInput />
    </div>
  );
}
