export interface IChatMessage {
  output: string;
  session_id: string;
  payload: {
    import: boolean;
    operation: "handle_report_generation";
    file_url: string;
    success: boolean;
  }[];
}

export interface IAskAgentResponse {
  data: IChatMessage;
}

export type TChatSession = {
  date_created?: string;
  id?: string;
  last_modified?: string;
  title?: string;
  user_id?: string;
  is_shared: boolean;
};

export type GetChatSessionResponse = {
  code: string;
  data: TChatSession[];
  message: string;
};

export type CreateChatSessionResponse = {
  code: string;
  data: TChatSession;
  message: string;
};

export interface GetChatSessionHistoryResponse {
  code: number;
  message: string;
  data: SessionData[];
}

interface SessionData {
  user_id: string;
  session_id: string;
  messages: {
    question: MessageContent;
    response: MessageContent;
  }[];
}

interface MessageContent {
  body: string;
  date_created: string;
  meta: Record<string, unknown>;
}
