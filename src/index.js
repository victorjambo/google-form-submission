import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import styles from './styles.lazy.scss';

const createFindNode = () => {
  const nav = document.createElement('nav');
  nav.className = 'submissio-sidebar';
  nav.setAttribute('id', 'submissio');
  document.body.appendChild(nav);
  return document.getElementById('submissio');
}

document.addEventListener('DOMContentLoaded', function(event) {
  styles.use();
  const wrapper = createFindNode();
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
