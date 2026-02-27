import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHovered: false,
    isOpen: false
}

export const sharedSlice = createSlice({
    name: "sideBarStatus",
    initialState,
    reducers: {
        updatesideBarStatus: (state, action) => {
            if (action.payload.isHovered !== undefined) {
                state.isHovered = action.payload.isHovered;
            }
            if (action.payload.isOpen !== undefined) {
                state.isOpen = action.payload.isOpen;
            }
        }
    }
});

export const { updatesideBarStatus } = sharedSlice.actions;

export default sharedSlice.reducer;