// redux dependencies
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
    showNotification: (
      state,
      action: PayloadAction<Omit<Notification, "id">>
    ) => {
      const id = generateID();
      state.notifications.push({ id, ...action.payload });

      setTimeout(() => {
        state.notifications = state.notifications.filter((n) => n.id !== id);
      }, 5000);
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
