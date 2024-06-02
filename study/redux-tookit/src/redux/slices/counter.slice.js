import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  school: {
    classes: [
      {
        class: {
          students: [{ 이름: "민영", 나이: "30" }],
        },
      },
    ],
  },
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      const value = action.payload;
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;
      state.count = state.count - value;
    },
    update민영Age: (state, action) => {
      state.school.class.students.find(
        (student) => student.이름 === "민영"
      ).나이 = 20;
    },
  },
});

export const countReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
