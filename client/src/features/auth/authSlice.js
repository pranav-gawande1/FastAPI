import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    role: null,
};

export const authSlice = createSlice({
    name: "authStatus",
    initialState,
    reducers: {
        updateAuthState: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user || null;
            state.role = action.payload.role || null;
        },
        refreshAuthState: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = null;
        }

    }
});

export const { updateAuthState, refreshAuthState } = authSlice.actions;
export default authSlice.reducer;