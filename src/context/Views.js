import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { VIEW_DEFAULTS, STORE } from '../utils/constants';
import { getLocalStorage, setLocalStorage } from '../utils/storage.api';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [page, setPage] = useState(VIEW_DEFAULTS.page);

  const [storageWidth, setStorageWidth] = useState(() => getLocalStorage(
    STORE.WIDTH, VIEW_DEFAULTS.width
  ));
  const [width, setWidth] = useState(storageWidth);

  const [pinned, setPinned] = useState(() => getLocalStorage(STORE.PINNED, VIEW_DEFAULTS.pinned));

  const { children } = props;

  useEffect(() => {
    setLocalStorage(STORE.PINNED, pinned);
    setLocalStorage(STORE.WIDTH, storageWidth);
  }, [pinned, storageWidth]);

  return (
    <ViewContext.Provider value={
      [page, setPage, width, setWidth, pinned, setPinned, storageWidth, setStorageWidth]
    }
    >
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
