import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import styles from './styles.lazy.css';

const createFindNode = () => {
  styles.use();

  const div = document.createElement('div');

  div.className = styles.locals['container'];

  div.setAttribute('id', 'submissio');
  document.body.appendChild(div);
  return document.getElementById('submissio');
}

document.addEventListener('DOMContentLoaded', function(event) {
  const wrapper = createFindNode();
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
