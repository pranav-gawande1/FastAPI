import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    role: null,
    token: null,
    is_profile_completed: false
};

export const authSlice = createSlice({
    name: "authStatus",
    initialState,
    reducers: {
        updateAuthState: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user || null;
            state.role = action.payload.role || null;
            state.token = action.payload.token || null;
            state.is_profile_completed = action.payload.is_profile_completed;
        },
        refreshAuthState: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = null;
            state.token = null;
        }

    }
});

export const { updateAuthState, refreshAuthState } = authSlice.actions;
export default authSlice.reducer;