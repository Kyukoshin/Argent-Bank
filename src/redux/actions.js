export const login = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password },
});

export const loginSuccess = (username, password) => ({
    type: 'LOGIN_SUCCESS',
    payload: { username, password },
});
