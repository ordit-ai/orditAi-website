import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteSession,
  updateSession,
  createSession,
  getChatSessions,
  getChatHistory,
} from "@/services/chatbotService";
import useConfirmModal from "./confirmModals/useConfirmModal";
import { TChatSession } from "@/types/chatTypes";

import Typography from "@/components/Typography/Typography";
import useProfile from "./useProfile";
import { useParams, useSearchParams } from "react-router-dom";

export function useGeorgeChat() {
  const { confirmDelete } = useConfirmModal();
  const { data } = useLoggedInUser();
  const queryClient = useQueryClient();
  const queryKey = ["georgeChatSessions"];

  const {
    isLoading: isLoadingChatSessions,
    isError: isErrorChatSessions,
    data: chatSessions,
    error: chatSessionsError,
  } = useQuery({
    queryKey: queryKey,

    queryFn: async () => {
      const response = await getChatSessions({
        user_id: data?.id ?? "",
      });
      return response.data;
    },
    staleTime: 600000,
    enabled: data?.id == undefined ? false : true,
  });

  const deleteChatMutation = useMutation({
    mutationFn: async (session: TChatSession) => {
      confirmDelete(
        "Delete Chat",
        <div>
          <Typography>
            Are you sure you want to delete <b>{session.title}</b>? <br />
            This action cannot be undone
          </Typography>
        </div>,
        async () => {
          await deleteSession({ session_id: session.id ?? "", user_id: data?.id ?? "" });
          queryClient.setQueryData(
            queryKey,
            (oldData: TChatSession[]) => oldData?.filter((chat) => chat.id !== session.id),
          );
        },
      );
    },
  });

  const updateChatMutation = useMutation({
    mutationFn: async ({ payload, session_id }: { session_id: string; payload: TChatSession }) => {
      await updateSession({ session_id, payload, user_id: data?.id ?? "" });
    },

    onMutate: async ({ payload, session_id }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });
      const previousChatSessions = queryClient.getQueryData<TChatSession[]>(queryKey);
      queryClient.setQueryData(
        queryKey,
        (oldData: TChatSession[]) =>
          oldData?.map((chat) => (chat.id === session_id ? { ...chat, title: payload.title } : chat)),
      );
      return { previousChatSessions };
    },
    onError: (error, _variable, context) => {
      queryClient.setQueryData(queryKey, context?.previousChatSessions);
      console.error("Error deleting chat:", error);
    },
  });

  const createChatMutation = useMutation({
    mutationFn: async () => {
      const response = await createSession({ user_id: data?.id ?? "" });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, (oldData: TChatSession[]) => [data, ...oldData]);
    },
  });
  return {
    chatSessionsError,
    chatSessions,
    isErrorChatSessions,
    isLoadingChatSessions,
    createChatMutation,
    deleteChatMutation,
    updateChatMutation,
  };
}

export function useGeorgeChatHistoryQuery() {
  const { profile } = useProfile();
  const [param] = useSearchParams();
  const { chatId } = useParams();
  const id = chatId ?? param.get("chatId");

  const userId = profile?.id ?? "";
  return useQuery({
    queryKey: ["chat-history", id],
    queryFn: () =>
      getChatHistory({
        user_id: userId,
        session_id: id ?? "",
      }),
    enabled: true,
  });
}
