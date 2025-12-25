import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    // token: null,
    role: null,
};

export const authSlice = createSlice({
    name: "authStatus",
    initialState,
    reducers: {
        updateAuthState: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
            // state.token = action.payload.token;
            state.role = action.payload.role;
        },
        refreshAuthState: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            // state.token = action.payload.token;
            state.role = null;
        }

    }
});

export const { updateAuthState, refreshAuthState } = authSlice.actions;
export default authSlice.reducer;