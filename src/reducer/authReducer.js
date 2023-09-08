import { saveToLocalStorage } from '@/utils/helper';

export default function registerReducer(state, action) {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'AUTH_LOGIN': {
      saveToLocalStorage('user', action.payload);

      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      const users = [...state.users, action.payload];
      saveToLocalStorage('users', users);
      saveToLocalStorage('user', action.payload);

      return {
        ...state,
        loading: false,
        users,
        user: action.payload,
      };
    }
    case 'AUTH_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      localStorage.removeItem('user');

      return {
        ...state,
        error: null,
        loading: false,
        user: null,
      };
    }
    default: {
      throw Error(`unknown: ${action.type}`);
    }
  }
}
