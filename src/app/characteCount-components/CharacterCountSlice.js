import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  characterLimit: 300,
  isCharacterLimitEnabled: false,
  isExcludeSpacesEnabled: false,
  isSeeMoreEnabled: false,
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
    setCharacterLimit: (state, action) => {
      state.characterLimit = action.payload;
    },
    toggleCharacterLimitEnabled: (state) => {
      state.isCharacterLimitEnabled = !state.isCharacterLimitEnabled;
    },
    toggleExcludeSpaces: (state) => {
      state.isExcludeSpacesEnabled = !state.isExcludeSpacesEnabled;
    },
    toggleSeeMore: (state) => {
      state.isSeeMoreEnabled = !state.isSeeMoreEnabled;
      console.log("clicked");
    },
  },
});

export const selectText = (state) => state.characterCountStore.text;

export const letterDensity = createSelector([selectText], (text) => {
  if (text === "") return [];

  const letters = text.toUpperCase().replace(/[\W_]/g, "").split("");
  const totalLetters = letters.length;

  const frequencyMap = letters.reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});

  // Build a new object that includes both the count and percentage.
  const stats = {};
  for (const letter in frequencyMap) {
    stats[letter] = {
      count: frequencyMap[letter],
      percentage: ((frequencyMap[letter] / totalLetters) * 100).toFixed(2),
    };
  }
  //conver to array of objects to sort frequency
  const sortedStats = Object.entries(stats)
    .map(([letter, data]) => ({ letter, ...data }))
    .sort((a, b) => b.count - a.count);

  return sortedStats;
});

export const {
  setText,
  toggleCharacterLimitEnabled,
  toggleExcludeSpaces,
  toggleSeeMore,
  setCharacterLimit,
} = characterCountSlice.actions;
export default characterCountSlice.reducer;
