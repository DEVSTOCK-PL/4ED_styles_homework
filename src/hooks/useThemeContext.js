import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return { isDarkMode, setIsDarkMode };
};
