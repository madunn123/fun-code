import { createContext, useContext } from 'react';
import useLogin from '@/hooks/useLogin';

const authContext = createContext();

export function useUser() {
  return useContext(authContext);
}

export default function AuthProvider({ children }) {
  const { state } = useLogin();

  return (
    <authContext.Provider value={state}>
      {children}
    </authContext.Provider>
  );
}
