import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../Services/LocalStorageService";

const userSlice=createSlice({
    name: "user",
    initialState: localStorageService.getItems("user"),
    reducers: {
        // Add your reducer functions here
        setUser: (state, action) => {
            localStorageService.setItems("user",action.payload)
            state=localStorageService.getItems("user");
            return state;
        },
        removeUser: (state) => {
            localStorageService.removeItems("user");
            state=null;
            return state;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
