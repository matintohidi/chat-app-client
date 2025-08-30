import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/contracts/auth";

type UserInitialState = {
  user: User | undefined;
};

const initialState: UserInitialState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
