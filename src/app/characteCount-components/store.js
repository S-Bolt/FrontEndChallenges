import { configureStore } from "@reduxjs/toolkit";
import characterCountReducer from "./CharacterCountSlice";

export const store = configureStore({
  reducer: {
    characterCountStore: characterCountReducer,
  },
});
