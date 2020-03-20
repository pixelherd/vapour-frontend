const initialState = {
  isAuth: null,
  isLoading: true,
  user: {},
}

function rootReducer (state = initialState, action) {

  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        user: action.user,
        isAuth: true,
        isLoading: false,
      }
    case 'FAILAUTHENTICATE':
      return {
        user: false,
        isAuth: false,
        isLoading: false,
      }
    case 'LOGOUT':
      return {
        user: false,
        isAuth: false,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default rootReducer;