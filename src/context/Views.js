/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { VIEWS } from '../utils/constants';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [view, setView] = useState(VIEWS.HOME);

  const { children } = props;

  return (
    <ViewContext.Provider value={[view, setView]}>
      {children}
    </ViewContext.Provider>
  );
};
