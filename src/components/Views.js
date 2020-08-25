/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { VIEWS } from '../utils/constants';
import { ViewContext } from '../context/Views';
import Home from './Home';

const DefaultView = () => <div className="default-danger">Something Went Wrong!!!</div>;

const SettingsView = () => <div className="default-warning">{VIEWS.SETTINGS}</div>;

const ViewSwitcher = () => {
  const [view] = useContext(ViewContext);

  switch (view.page) {
    case VIEWS.HOME:
      return <Home />;
    case VIEWS.SETTINGS:
      return <SettingsView />;
    default:
      return <DefaultView />; // TODO Add submit error btn to send selectedView
  }
};

const Views = () => (
  <div className="submissio-views">
    <ViewSwitcher currentView={VIEWS.HOME} />
  </div>
);

export default Views;
