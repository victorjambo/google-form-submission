/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import styles from './styles/styles.lazy.scss';
import bootstrap from './styles/bootstrap.min.css';

const createFindNode = () => {
  const { body } = document;
  body.classList.add('submissio-light');

  const nav = document.createElement('nav');
  nav.className = 'submissio-sidebar';
  nav.setAttribute('id', 'submissio');
  document.body.appendChild(nav);

  return document.getElementById('submissio');
};

document.addEventListener('DOMContentLoaded', () => {
  bootstrap.use();
  styles.use();
  const wrapper = createFindNode();
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
