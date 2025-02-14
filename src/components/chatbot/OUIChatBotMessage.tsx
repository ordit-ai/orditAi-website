// import { ChatBotIcon } from "@/assets/icons/ChatIcon";
import { FC, ReactNode } from "react";
import { cn } from "@/helpers/classHelpers";
import Markdown from "react-markdown";
import { ChatBotIcon } from "@/assets/icons/ChatIcon";

type ChatBotMessageProps = {
  message?: string;
  children?: ReactNode;
  className?: string;
};

const OUIChatBotMessage: FC<ChatBotMessageProps> = ({ message, children, className }) => {
  return (
    <div className={cn("flex flex-col gap-y-2 ", className)}>
      <div className="flex gap-x-2 items-center">
        <ChatBotIcon width={30} height={30} />
        <p className="font-[500] text-sm leading-5 text-[#344054]">George</p>
      </div>
      <div className="p-3 flex flex-col gap-2 rounded-e-lg rounded-lg bg-gray-100 max-w-[90%] sm:max-w-[60%] min-w-fit">
        <Markdown className="text-start text-sm leading-6 text-[#101828] font-[400] w-[100%] break-words">
          {message}
        </Markdown>
        {children}
      </div>
    </div>
  );
};

export default OUIChatBotMessage;
