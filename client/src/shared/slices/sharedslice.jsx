import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarStatus: {
        activePage: "Home",
        isOpen: false,
    }
}

export const sharedSlice = createSlice({
    name: "sharedSlice",
    initialState,
    reducers: {
        updatenavbarStatus: (state, action) => {
            state.navbarStatus.activePage = action.payload.activePage;
        },
        toggleNavbar: (state) => {
            state.navbarStatus.isOpen = !state.navbarStatus.isOpen;
        }
    }
});

export const { toggleNavbar, updatenavbarStatus } = sharedSlice.actions;

export default sharedSlice.reducer;