import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { VIEW_NAMES } from '../../utils/constants';

const SettingsNavigator = ({ setView }) => {
  const handleClick = view => {
    setView(view);
  };
  return (
    <ul className="list-group">
      <li role="presentation" onKeyPress={() => {}} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleClick(VIEW_NAMES.DISPLAY_NAME)}>
        Change field Display name
        <Icons.ArrowRight />
      </li>
      <li role="presentation" onKeyPress={() => {}} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleClick(VIEW_NAMES.DEFAULT_VALUES)}>
        Set Default Values
        <Icons.ArrowRight />
      </li>
    </ul>
  );
};

SettingsNavigator.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default SettingsNavigator;
