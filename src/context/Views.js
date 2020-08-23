/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { VIEWS, DEFAULTS } from '../utils/constants';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [view, setView] = useState({
    page: VIEWS.HOME,
    pinned: false,
    width: DEFAULTS.WIDTH
  });

  const { children } = props;

  return (
    <ViewContext.Provider value={[view, setView]}>
      {children}
    </ViewContext.Provider>
  );
};
