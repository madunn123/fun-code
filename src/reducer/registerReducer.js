export default function registerReducer(state, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'REGISTER_SUCCESS': {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case 'REGISTER_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      throw Error(`unknown: ${action.type}`);
    }
  }
}
