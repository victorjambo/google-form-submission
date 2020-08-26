import React, { useState } from 'react';

import DefaultView from '../DefaultView';
import DisplayNameContainer from './DisplayName';
import DefaultValuesContainer from './DefaultValues';
import SettingsNavigator, { VIEW_NAMES } from './SettingsNavigator';

const Settings = () => {
  const [view, setView] = useState(VIEW_NAMES.HOME);

  switch (view) {
    case VIEW_NAMES.HOME:
      return <SettingsNavigator setView={setView} />;
    case VIEW_NAMES.DISPLAY_NAME:
      return <DisplayNameContainer />;
    case VIEW_NAMES.DEFAULT_VALUES:
      return <DefaultValuesContainer />;
    default:
      return <DefaultView />;
  }
};

export default Settings;
