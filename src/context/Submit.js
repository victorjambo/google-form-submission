/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
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

export const SubmitContext = createContext();

export const SubmitProvider = props => {
  const [fieldDefaults, setFieldDefaults] = useState(FIELD_DEFAULTS);
  const [customDisplayname, setCustomDisplayname] = useState(CUSTOM_DISPLAYNAME);

  const { children } = props;

  return (
    <SubmitContext.Provider value={[
      fieldDefaults,
      setFieldDefaults,
      customDisplayname,
      setCustomDisplayname
    ]}
    >
      {children}
    </SubmitContext.Provider>
  );
};
