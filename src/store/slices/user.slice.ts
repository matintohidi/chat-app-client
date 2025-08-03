import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "@/contracts/auth";

type UserInitialState = {
  user: UserModel | undefined;
};

const initialState: UserInitialState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel | undefined>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
