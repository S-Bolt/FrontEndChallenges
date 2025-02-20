import { configureStore } from "@reduxjs/toolkit";
import characterCountReducer from "./CharacterCountSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    characterCountStore: characterCountReducer,
    themeStore: themeReducer,
  },
});
