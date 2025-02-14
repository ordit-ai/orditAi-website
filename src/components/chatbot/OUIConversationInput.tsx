import { RiStopFill } from "react-icons/ri";
import { useChatContext } from "./hook";
import { SendAltIcon } from "@/assets/icons/SendAltIcon";
import { useChatStore } from "@/store";

export default function OUIConversationInput() {
  const { fetchingAnswer, query, setQuery, publishQuery } = useChatContext();

  const { conversation } = useChatStore();

  const disabled = conversation.length === 6;
  return (
    <form
      className="h-[60px] bg-white border-t-[1px] border-gray-300 p-4 flex items-center justify-between gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        publishQuery();
      }}
    >
      <input
        className="outline-none focus:border-primary text-sm placeholder:text-sm border-[1px] border-gray-400 rounded-md p-2 placeholder:font-light w-full"
        placeholder="Need help? Start typing..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled}
      />
      
      <button
        disabled={query === "" || disabled}
        className={`h-[40px] w-[40px] border-[1px] border-[#EAECF0] disabled:bg-[#F2F4F7] ${
          fetchingAnswer == true ? "bg-gray-400" : "bg-[#4E2DBE]"
        } rounded-md shrink-0 flex items-center justify-center cursor-pointer`}
        type="submit"
      >
        {fetchingAnswer == true ? (
          <RiStopFill />
        ) : (
          <SendAltIcon stroke={query === "" ? "#98A2B3" : "#fff"} className="w-5 h-5" />
        )}
      </button>
    </form>
  );
}
