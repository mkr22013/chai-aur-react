import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";

const store = new configureStore({
  reducer: authReducer,
});

export default store;
