export interface OUIChatBoxMessageEntry {
  body: string;
  who: "AI" | "USER";
  time: string;
  file_url?: string;
  custom?: React.ReactNode;
  chat_id?: string;
  tag?: string;
}
