// redux dependencies
import { configureStore } from "@reduxjs/toolkit";
// reducers
import { userSlice } from "./slices";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
