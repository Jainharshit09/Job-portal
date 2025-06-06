import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortBy: "",
  },
  reducers: {
    updateSort: (state, action) => {
        state=action.payload;
        console.log("Updated sort state:", state); // Log the updated state
        return state;
    },
    resetSort: () => {
      return { sortBy: "" }; 
    },
  },
});

export const { updateSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
