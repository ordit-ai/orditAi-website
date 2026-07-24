import { useEffect, useState } from "react";

const ChatBotTyping = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevDot) => (prevDot + 1) % 3);
    }, 700);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center gap-1 py-3 w-[2.5rem] ml-11 -translate-y-4 border-[1px] border-[#EAECF0] rounded-e-lg rounded-b-lg">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-1 h-1 rounded-full bg-[#475467] ${activeDot === index ? "animate-spring bg-[#98A2B3]" : ""} `}
        />
      ))}
    </div>
  );
};

export default ChatBotTyping;
