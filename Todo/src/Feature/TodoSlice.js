import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    DeleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
