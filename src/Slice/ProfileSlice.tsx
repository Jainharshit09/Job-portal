import { createSlice } from "@reduxjs/toolkit";
import ProfileService from "../Services/ProfileService";

const profileSlice=createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        // Add your reducer functions here
        changeProfile: (state, action) => {
            state=ProfileService.updateProfile(action.payload)
            return action.payload;
        },
        setProfile: (state,action) => {
            state=action.payload;
            return state;
        }
    }
});

export const { changeProfile, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
