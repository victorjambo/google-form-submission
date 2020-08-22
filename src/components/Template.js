import React from 'react';
import * as Icon from 'react-feather';

const Template = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        <Icon.Camera />
        <Icon.Settings />
        <Icon.Delete color="red" size={48} />
      </a>
    </header>
  </div>
);

export default Template;
