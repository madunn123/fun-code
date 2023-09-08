import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import authReducer from '@/reducer/authReducer';
import { getFromLocalStorage } from '@/utils/helper';

const initialState = {
  users: getFromLocalStorage('users') ?? [],
  user: getFromLocalStorage('user') ?? null,
  loading: false,
  error: null,
};

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const providerState = useMemo(() => [state, dispatch], [state, dispatch]);

  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  );
}
