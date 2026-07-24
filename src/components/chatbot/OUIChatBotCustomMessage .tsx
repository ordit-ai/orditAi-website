import { FC, ReactNode } from "react";
import { cn } from "@/helpers/classHelpers";

type ChatBotMessageProps = {
  message?: ReactNode;
  className?: string;
};

const OUIChatBotCustomMessage: FC<ChatBotMessageProps> = ({ message, className }) => {
  return (
    <div className={cn("flex flex-col gap-y-2 ", className)}>
      <div className="" style={{ maxWidth: "60%" }}>
        {message}
      </div>
    </div>
  );
};

export default OUIChatBotCustomMessage;
