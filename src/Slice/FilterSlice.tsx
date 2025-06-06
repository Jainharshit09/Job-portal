import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {},
    reducers: {
        updateFilter: (state, action) => {
            state = { ...state, ...action.payload };
            console.log("Updated filter state:", state); // Log the updated state
            return { ...state, ...action.payload };
        },
        resetFilter: () => {
            return {}; 
        },
    },
});

export const { updateFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
