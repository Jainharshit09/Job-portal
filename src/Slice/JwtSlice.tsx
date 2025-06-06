import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../Services/LocalStorageService";

const JwtSlice = createSlice({
    name: "Jwt",
    initialState: localStorageService.getItems("token") || "",
    reducers: {
        setJwt: (_, action) => {
            localStorageService.setItems("token", action.payload);
            return action.payload;
        },
        removeJwt: () => {
            localStorageService.removeItems("token");
            return "";
        }
    }
});

export const { setJwt, removeJwt } = JwtSlice.actions;
export default JwtSlice.reducer;
