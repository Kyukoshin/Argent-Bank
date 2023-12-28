const initialState = {
    isAuthenticated: false,
    user: null,
    redirect: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          redirect: '/profile', 
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  