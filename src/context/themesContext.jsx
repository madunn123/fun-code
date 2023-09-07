import {
  createContext, useContext,
} from 'react';

const themeContext = createContext();

export function useThemeContext() {
  return useContext(themeContext);
}

export default function ThemeProvider({ children }) {
  return (
    <themeContext.Provider value="white">
      {children}
    </themeContext.Provider>
  );
}
