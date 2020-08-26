import React, { createContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import { FIELDS } from '../utils/formFields';

const FIELD_DEFAULTS = {
  owner: 'Owner',
  project: 'High Priority',
  ticketType: 'New Ticket',
  url: '',
  crawlType: 'TARAKAN',
  comment: '',
  checkemployerexist: 'Yes',
  checkmoreemployers: 'Yes',
  checkexistingic: 'Yes',
  xpaths: 'Yes',
  pprs: 'Yes',
  jobCount: 'Yes',
  IDFromSource: 'Yes',
  unhealthyicstatus: 'Done',
  icnumber: '0000',
  icstatus: 'Enabled',
  existingic: 'No',
};

const CUSTOM_DISPLAYNAME = {
  owner: FIELDS.owner.displayName,
  project: FIELDS.project.displayName,
  ticketType: FIELDS.ticketType.displayName,
  crawlType: FIELDS.crawlType.displayName,
  comment: 'Cannot-Crawl Comment',
  checkemployerexist: 'Checked if employer exist',
  checkmoreemployers: 'Checked for more employers',
  checkexistingic: 'Checked if existing IC',
  xpaths: FIELDS.xpaths.displayName,
  pprs: 'Included necessary PPRs',
  jobCount: FIELDS.jobCount.displayName,
  IDFromSource: 'Captured ID/Email',
  unhealthyicstatus: 'Unhealthy IC status',
  icnumber: FIELDS.icnumber.displayName,
  icstatus: FIELDS.icstatus.displayName,
  existingic: FIELDS.existingic.displayName,
};

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return FIELD_DEFAULTS;
  }

  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

export const SubmitContext = createContext();

export const SubmitProvider = props => {
  const [fieldDefaults, setFieldDefaults] = useReducer(reducer, FIELD_DEFAULTS);
  const [customDisplayname, setCustomDisplayname] = useReducer(reducer, CUSTOM_DISPLAYNAME);

  const [state, dispatch] = useReducer(reducer, FIELD_DEFAULTS);

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
