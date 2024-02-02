import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface userType {
  id: string;
  userName: string;
  password: string;
  email: string;
}
interface formData {
  userName: string;
  password: string;
  email: string;
}

const intialState = {
  user: {} as userType,
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState: intialState,
  // Use the PayloadAction type to declare the contents of `action.payload`
  reducers: {
    registorUser: (state, action: PayloadAction<formData>) => {
      console.log(action.payload);
      const user = {
        id: nanoid(),
        email: action.payload.email,
        userName: action.payload.userName,
        password: action.payload.password,
      };
      state.user = user;
    },
    loginUser: (state, action: PayloadAction<formData>) => {
      console.log(action.payload);
      const user = {
        id: nanoid(),
        email: action.payload.email,
        userName: action.payload.userName,
        password: action.payload.password,
      };
      state.user = user;
    },

    logOutUser: (state) => {
      state.user = {} as userType;
    },
  },
});

export const { loginUser, logOutUser, registorUser } = userSlice.actions;
//  // Other code such as selectors can use the imported `RootState` type

export const selectUser = (state: RootState) => state.userReducers.user;

export default userSlice.reducer;
