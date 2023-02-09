import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    addFunc: (state, action) => {
      state.value++;
    },
    minusFunc: (state, action) => {
      state.value--;
    },
    resetFunc: (state, value) => {
      state.value = 0;
    },
  },
});

export const { addFunc,minusFunc,resetFunc } = counterSlice.actions;
export default counterSlice.reducer;
