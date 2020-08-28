import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { VIEW_DEFAULTS } from '../utils/constants';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [page, setPage] = useState(VIEW_DEFAULTS.page);
  const [width, setWidth] = useState(VIEW_DEFAULTS.width);
  const [pinned, setPinned] = useState(VIEW_DEFAULTS.pinned);

  const { children } = props;

  return (
    <ViewContext.Provider value={
      [page, setPage, width, setWidth, pinned, setPinned]
    }
    >
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
