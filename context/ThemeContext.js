import { createContext, useState, useContext } from 'react';

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to light mode
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setIsDarkmode((prevMode) => (prevMode === true ? false : true))
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkmode, setIsDarkmode}}>
      <div className={theme}>{/* Apply theme class to root */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook for convenience
export const useTheme = () => useContext(ThemeContext);
