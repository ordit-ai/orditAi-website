export const CHATBOT_URLS = {
  DIRECT_MESSAGE: `v1/ai-agent/ask-agent`,
  CHAT_SESSIONS: (user_id: string) => `v1/chats/session/user/?user_id=${user_id}`,
  SINGLE_CHAT_HISTORY: (session_id: string, user_id: string) =>
    `v1/chats/session/${session_id}/histories/?user_id=${user_id}`,
  SESSION_INSTANCE: (session_id: string) => `v1/chats/session/${session_id}`,
};
