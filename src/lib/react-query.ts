import { Problem } from "@/types/http-errors.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { AppDispatch } from "@/store";
import { showNotificationWithDuration } from "@/store/slices/notification.slice";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {},
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      return error as Problem;
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

export const showProblemNotifications =
  (problem: Problem) => (dispatch: AppDispatch) => {
    if (problem?.message) {
      dispatch(
        showNotificationWithDuration({
          message: problem.message,
          type: "error",
        })
      );
    }
  };
