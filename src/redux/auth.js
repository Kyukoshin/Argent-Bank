import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: '',
    redirect: '',
    remember: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.redirect = '/profile';
        },

        signOut: (state) => {
            state.isAuthenticated = ''
            state.redirect = ''
            state.remember = ''
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.password = ''
        },

        setUserInfos: (state, action) => {
            state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
        },
    },
});

export const { setUserInfos, setAuthenticating, resetState, editUser, loginError, loginSuccess, logout } = auth.actions;
export default auth.reducer;
