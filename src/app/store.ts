import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./user/userSlice";
export const store = configureStore({
  reducer: {
    userReducers,
  },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

