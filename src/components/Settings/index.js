import React, { useState } from 'react';

import DefaultView from '../DefaultView';
import DisplayNameContainer from './DisplayName';
import DefaultValues from './DefaultValues';
import ViewSwitcher, { VIEW_NAMES } from './ViewSwitcher';

const Settings = () => {
  const [view, setView] = useState(VIEW_NAMES.HOME);

  switch (view) {
    case VIEW_NAMES.HOME:
      return <ViewSwitcher setView={setView} />;
    case VIEW_NAMES.DISPLAY_NAME:
      return <DisplayNameContainer />;
    case VIEW_NAMES.DEFAULT_VALUES:
      return <DefaultValues />;
    default:
      return <DefaultView />;
  }
};

export default Settings;
