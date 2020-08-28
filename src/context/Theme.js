import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getLocalStorage, setLocalStorage } from '../utils/storage.api';
import { STORE } from '../utils/constants';

const dark = 'submissio-dark';
const light = 'submissio-light';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(() => getLocalStorage(STORE.THEME, themes.light));

  const { children } = props;
  const { body } = document;

  useEffect(() => {
    if (theme === themes.light) {
      body.classList.add(light);
      body.classList.remove(dark);
    } else {
      body.classList.add(dark);
      body.classList.remove(light);
    }
    setLocalStorage(STORE.THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
