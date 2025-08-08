// redux dependencies
import { AppDispatch } from "@/store";
import { Notification } from "@/types/notification.interface";
import { generateID } from "@/utils/string";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push({ ...action.payload });
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
  },
});

export default notificationSlice.reducer;

export const { showNotification, dismissNotification } =
  notificationSlice.actions;

export const showNotificationWithDuration =
  (notification: Omit<Notification, "id">) => (dispatch: AppDispatch) => {
    const duration = notification.duration ?? 5000;
    const id = generateID();

    const action = showNotification({ id, ...notification });
    dispatch(action);

    setTimeout(() => {
      dispatch(dismissNotification(id));
    }, duration);
  };
