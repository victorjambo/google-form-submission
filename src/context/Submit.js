import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FIELD_DEFAULTS, CUSTOM_DISPLAYNAME } from '../utils/formFields';
import { getLocalStorage, setLocalStorage } from '../utils/storage.api';
import { STORE } from '../utils/constants';

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return FIELD_DEFAULTS;
  }

  if (action.type === 'REINITIALISE') {
    return action.fieldDefaults;
  }

  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

export const SubmitContext = createContext();

export const SubmitProvider = props => {
  const [fieldDefaults, setFieldDefaults] = useReducer(
    reducer, getLocalStorage(STORE.FIELD_DEFAULTS, FIELD_DEFAULTS)
  );

  const [customDisplayname, setCustomDisplayname] = useReducer(
    reducer, getLocalStorage(STORE.CUSTOM_DISPLAYNAME, CUSTOM_DISPLAYNAME)
  );

  const [state, dispatch] = useReducer(reducer, fieldDefaults);

  useEffect(() => {
    setLocalStorage(STORE.FIELD_DEFAULTS, fieldDefaults);
    dispatch({ type: 'REINITIALISE', fieldDefaults });
  }, [fieldDefaults]);

  const { children } = props;

  return (
    <SubmitContext.Provider value={[
      fieldDefaults,
      setFieldDefaults,
      customDisplayname,
      setCustomDisplayname,
      state, dispatch
    ]}
    >
      {children}
    </SubmitContext.Provider>
  );
};

SubmitProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
