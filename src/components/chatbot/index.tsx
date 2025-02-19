import { ChatProvider } from "./ChatWidgetContext";
import ChatInstance from "./components/ChatInstance";
import Typography from "../Typography";
import { Button } from "../common/Button";
import { useChatStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/app-routes";

const ChatBot = () => {
  const { conversation } = useChatStore();

  const disabled = conversation.length === 6;

  return (
    <div className="sm:w-[60%] w-[90%] mx-auto h-[80vh] py-[3em] relative">
      <AnimatePresence>
        {disabled && (
          <motion.div
            key="overlay"
            className="bg-black bg-opacity-60 absolute top-0 left-0 w-[100%] h-[100%] backdrop-blur-[2px]  z-[100] rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="sm:w-[60%] w-[90%] text-center bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            >
              <Typography.Text>Kindly subscribe to have complete access</Typography.Text>

              <Link to={URLS.ORDIT_AI}>
                <Button className="">Go to Pricing</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="border-[1px] rounded-[0.75rem] flex flex-col justify-between overflow-hidden"
        style={{ height: "100%" }}
      >
        <ChatProvider>
          <ChatInstance />
        </ChatProvider>
      </div>
    </div>
  );
};

export default ChatBot;
