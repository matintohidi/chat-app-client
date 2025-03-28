// redux dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// contracts
export interface UserValuesInterface {
  _id: string;
  name: string;
  email: string;
  profile: string | null;
  phone: string;
  city: string;
}
// initial state interface
interface UserInitialState {
  user: UserValuesInterface | undefined;
}

const initialState: UserInitialState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<UserValuesInterface | undefined>
    ) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
