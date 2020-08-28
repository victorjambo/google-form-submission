import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { VIEW_DEFAULTS } from '../utils/constants';

export const ViewContext = createContext();

export const ViewProvider = props => {
  const [view, setView] = useState(VIEW_DEFAULTS);

  const { children } = props;

  return (
    <ViewContext.Provider value={[view, setView]}>
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
