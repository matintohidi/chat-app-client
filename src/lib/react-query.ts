import { Problem } from "@/types/http-errors.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { showNotification } from "@/store/slices/notification.slice";
import { useAppDispatch } from "@/store/hooks";
import { Notification } from "@/types/notification.interface";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {},
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotifications(error as Problem);
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

const showNotifications = (problem: Problem) => {
  const dispatch = useAppDispatch();

  if (problem?.errors) {
    Object.entries(problem.errors).forEach(([_, values]) =>
      values.forEach((errorMessage) => {
        const notification: Omit<Notification, "id"> = {
          message: errorMessage,
          type: "error",
        };

        dispatch(showNotification(notification));
      })
    );
  } else if (problem?.detail) {
    const notification: Omit<Notification, "id"> = {
      message: problem.detail,
      type: "error",
    };

    dispatch(showNotification(notification));
  }
};
