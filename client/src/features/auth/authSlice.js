import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: "authStatus",
    initialState,
    reducers: {
        updateAuthState: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    }
});

export const { updateAuthState } = authSlice.actions;
export default authSlice.reducer;