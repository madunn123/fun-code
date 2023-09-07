import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';

const themeContext = createContext();

export function useThemeContext() {
  return useContext(themeContext);
}

export default function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <themeContext.Provider value={handleThemeSwitch}>
      {children}
    </themeContext.Provider>
  );
}
