import { OUIChatBoxMessageEntry } from "@/components/chatbot/types";
import { create } from "zustand";



interface ChatState {
  conversation: OUIChatBoxMessageEntry[];
  addMessage: (message: OUIChatBoxMessageEntry) => void;
  clearConversation: () => void;
  // ... other actions related to the chat
}

export const useChatStore = create<ChatState>((set) => ({
  conversation: [],
  addMessage: (message) => set((state) => ({ conversation: [...state.conversation, message] })),
  clearConversation: () => set({ conversation: [] }),
}));
