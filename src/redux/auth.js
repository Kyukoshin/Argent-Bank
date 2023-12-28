import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: '',
    redirect: '',
    remember: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: ''
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
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

        setToken: (state) => {
            state.token = action.payload.token
        }
    },
});

export const { setUserInfos, setToken, setAuthenticating, resetState, editUser, loginError, loginSuccess, logout } = auth.actions;
export default auth.reducer;
