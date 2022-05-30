import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Photos } from "../components/Photos";
export const photo = createSlice({
  name: "counter",
  initialState: {
    value: Photos,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = photo.actions;

export default photo.reducer;
