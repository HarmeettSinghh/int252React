import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoitem: localStorage.getItem("todolist")
    ? JSON.parse(localStorage.getItem("todolist"))
    : [{ id: 1, text: "Item1" }]
};

export const TdoSlicer = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const newtodoitem = {
        id: nanoid(),
        text: action.payload
      };
      state.todoitem.push(newtodoitem);
      localStorage.setItem("todolist", JSON.stringify(state.todoitem));
    },

    deletetodo: (state, action) => {
      state.todoitem = state.todoitem.filter(
        (u) => u.id !== action.payload
      );
      localStorage.setItem("todolist", JSON.stringify(state.todoitem));
    }
  }
});

export const { addtodo, deletetodo } = TdoSlicer.actions;
export default TdoSlicer.reducer;
