import { saveToLocalStorage } from '@/utils/helper';

export default function registerReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'LOGIN_SUCCESS': {
      saveToLocalStorage('user', action.payload);
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
      localStorage.removeItem('user');
      return {
        user: null,
      };
    }
    default: {
      throw Error(`unknown: ${action.type}`);
    }
  }
}
