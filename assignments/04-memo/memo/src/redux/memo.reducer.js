import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    memos: [],
    selectedMemo: null,
  },
  reducers: {
    addMemo: (state, action) => {
      const newMemo = {
        id: uuidv4(),
        text: action.payload.text || "",
        date: new Date().toLocaleString(),
      };
      state.memos.unshift(newMemo);
      state.selectedMemo = newMemo;
    },
    updateMemo: (state, action) => {
      const { id, text } = action.payload;
      const memo = state.memos.find((m) => m.id === id);
      if (memo) memo.text = text;
    },
    selectMemo: (state, action) => {
      state.selectedMemo = state.memos.find((m) => m.id === action.payload);
    },
  },
});

export const { addMemo, updateMemo, selectMemo } = memoSlice.actions;
export default memoSlice.reducer;
