import {
  createContext, useContext, useMemo, useReducer,
} from 'react';

const todosContext = createContext();

export function useTodosContext() {
  return useContext(todosContext);
}

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case 'DELETE_TODO': {
      const removeTodo = state?.todos?.filter((todo) => todo?.title !== action.title);
      return {
        ...state,
        todos: removeTodo,
      };
    }
    default: {
      throw Error(`unknown ${action.type}`);
    }
  }
}

export default function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    state, dispatch,
  }), [state]);

  return (
    <todosContext.Provider value={contextValue}>
      {children}
    </todosContext.Provider>
  );
}
