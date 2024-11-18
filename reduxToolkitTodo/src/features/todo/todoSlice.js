//First import createSlice and nonoid. nanoid is just to get unique id for array or any other data source
//Store needs to have initial state. Store is nothing but just storing something hence it require what is the initial state of the store

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  editClicked: { id: Date.now, todo: "", text: "" },
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      //State has all the todos as if we look into initialState it has todos as object
      //action will have id which we want to remove and id will be part of action.payload.text
      //To remove we just update the existing todos by removing one todo which matches the id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
    editClicked: (state, action) => {
      const temp = {
        id: action.payload.id,
        todo: action.payload.todo,
        text: action.payload.text,
      };
      state.editClicked = temp;
    },
  },
});

//We need to export each and every reducers as bydefault it does not export so we need to follow below step
export const { addTodo, removeTodo, updateTodo, editClicked } =
  todoSlice.actions;

//We also have to export reducers which store requires
export default todoSlice.reducer;
