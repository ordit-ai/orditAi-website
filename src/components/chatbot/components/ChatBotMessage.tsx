import { ChatBotIcon } from "@/assets/icons/ChatIcon";
import { FC, ReactNode } from "react";
import LinkIcon from "@/assets/raw-svgs/link-icon.svg";
import { cn } from "@/helpers/classHelpers";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import ChatBotTyping from "./ChatBotTyping";

type ChatBotMessageProps = {
  isTyping?: boolean;
  message?: string;
  link?: string;
  children?: ReactNode;
  className?: string;
};

const ChatBotMessage: FC<ChatBotMessageProps> = ({ isTyping, message, children, className, link }) => {
  return (
    <div className={cn("flex flex-col  ", className)}>
      <div className=" flex gap-2 w-11/12">
        <ChatBotIcon />
        <div className="flex justify-between w-full -mt-[1px]">
          <p className="font-[500] text-sm leading-5 text-[#344054]">Ordit AI</p>
          {/* <p className="mr-6 font-[500] text-xs f leading-5 text-[#475467]">Just Now</p> */}
        </div>
      </div>

      {!isTyping && (
        <div className="p-3 w-9/12 ml-11 flex flex-col gap-2 -translate-y-4 border-[1px] border-[#EAECF0] rounded-e-lg rounded-b-lg bg-white">
          <Markdown className="text-start text-sm leading-6 text-[#101828] font-[400] w-[100%] break-words">
            {message}
          </Markdown>
          {link && (
            <div className="flex space-x-2">
              <LinkIcon />
              <Link to={link ?? ""} target="_blank">
                <p className="text-start text-sm leading-6 text-brand-500 font-[400]  underline">View Report</p>
              </Link>
            </div>
          )}
          {children}
        </div>
      )}
      {isTyping && <ChatBotTyping />}
    </div>
  );
};

export default ChatBotMessage;
