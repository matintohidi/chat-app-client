import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingInitialState = {
  loading: boolean;
};

const initialState: LoadingInitialState = {
  loading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default loadingSlice.reducer;

export const { setLoading } = loadingSlice.actions;
