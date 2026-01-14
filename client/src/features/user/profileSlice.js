import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // isAuthenticated: false,
    name: null,
    email: null,
    role: null,
    status: null,
    address: null,
    city: null,
    state: null,
    pincode: null
}

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers:{
        updateProfileState: (state, action) => {
            // state.isAuthenticated
            state.name = action.payload.name || null;
            state.email = action.payload.email || null;
            state.role = action.payload.role || null;
            state.status = action.payload.status || null;
            state.address = action.payload.address || null;
            state.city = action.payload.city || null;
            state.state = action.payload.state || null;
            state.pincode = action.payload.pincode || null;
        },
        refreshProfileState: (state) => {
            state.name =  null;
            state.email = null;
            state.role = null;
            state.status = null;
            state.address = null;
            state.city = null;
            state.state = null;
            state.pincode = null;
        }
    }
})

export const { updateProfileState, refreshProfileState } = profileSlice.actions;
export default profileSlice.reducer;