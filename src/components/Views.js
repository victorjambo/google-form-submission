import React, { useContext } from 'react';

import { VIEWS } from '../utils/constants';
import { ViewContext } from '../context/Views';
import Home from './Home';
import { SubmitProvider } from '../context/Submit';
import Settings from './Settings';
import DefaultView from './DefaultView';

const ViewSwitcher = () => {
  const [page] = useContext(ViewContext);

  switch (page) {
    case VIEWS.HOME:
      return <Home />;
    case VIEWS.SETTINGS:
      return <Settings />;
    default:
      return <DefaultView />;
  }
};

const Views = () => (
  <SubmitProvider>
    <div className="submissio-views">
      <ViewSwitcher />
    </div>
  </SubmitProvider>
);

export default Views;
