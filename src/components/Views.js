/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';
import { VIEWS } from '../utils/constants';

const DefaultView = () => <div className="default-error">Something Went Wrong!!!</div>;

const ViewSwitcher = ({ currentView }) => {
  switch (currentView) {
    case VIEWS.HOME:
      return <Form />;
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
