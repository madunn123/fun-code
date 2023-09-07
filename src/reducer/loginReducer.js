export default function registerReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'LOGOUT': {
      return {
        user: null,
      };
    }
    default: {
      throw Error(`unknown: ${action.type}`);
    }
  }
}
