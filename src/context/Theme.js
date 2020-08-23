/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState('light');

  const { children } = props;

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
