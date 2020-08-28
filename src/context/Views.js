import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { STORE, VIEW_DEFAULTS } from '../utils/constants';
import { getLocalStorage, setLocalStorage } from '../utils/storage.api';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [view, setView] = useState(() => getLocalStorage(STORE.VIEW, VIEW_DEFAULTS));

  const { children } = props;

  useEffect(() => {
    setLocalStorage(STORE.VIEW, view);
  }, [view]);

  return (
    <ViewContext.Provider value={[view, setView]}>
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
