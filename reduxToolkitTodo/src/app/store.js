//step 1: get the configureStore. This comes from core redux library and not from react-redux

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; //We have reducers defined in todoSlice hence we juse imported them here
//Name todoReducer is just name given by us to understand which kind or reducer it is and then in store we just pass that reducer

export const store = configureStore({
  reducer: todoReducer,
});
