import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  isCharacterLimitEnabled: false,
  isExcludeSpacesEnabled: false,
};

export const characterCountSlice = createSlice({
  name: "characterCount",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.characterCount = state.isExcludeSpacesEnabled
        ? action.payload.replace(/\s/g, "").length
        : action.payload.length;
      state.wordCount =
        action.payload.trim() === ""
          ? 0
          : action.payload.trim().split(/\s+/).length;
      state.sentenceCount = action.payload
        .split(/[.!?]+/)
        .filter(Boolean).length;
    },
    toggleCharacterLimitEnabled: (state) => {
      state.isCharacterLimitEnabled = !state.isCharacterLimitEnabled;
    },
    toggleExcludeSpaces: (state) => {
      state.isExcludeSpacesEnabled = !state.isExcludeSpacesEnabled;
    },
  },
});

export const { setText, toggleCharacterLimitEnabled, toggleExcludeSpaces } =
  characterCountSlice.actions;
export default characterCountSlice.reducer;
