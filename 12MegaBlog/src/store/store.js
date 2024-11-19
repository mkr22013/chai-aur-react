import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";

export const store = new configureStore({
  reducer: authReducer,
});
