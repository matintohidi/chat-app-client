// redux dependencies
import { configureStore } from "@reduxjs/toolkit";
// reducers
import { loadingSlice, userSlice, notificationSlice } from "./slices";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      notification: notificationSlice,
      loading: loadingSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
