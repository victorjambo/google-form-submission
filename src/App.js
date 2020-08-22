import React, { useState, useEffect } from 'react';

import Resizer from './components/Resizer';
import { DEFAULTS } from './utils/constants';
import Form from './components/Form';
import Toggler from './components/Toggler';
import Header from './components/Header';
import Announcement from './components/Announcement';

const App = () => {
  const [width, setWidth] = useState(DEFAULTS.WIDTH); // TODO fetch from localstorage

  useEffect(() => {
    const html = document.getElementsByTagName('html');
    const nav = document.getElementById('submissio');

    nav.style = `width: ${width}px`;

    if (html.length) {
      html[0].setAttribute('style', `margin-left: ${width}px`);
    }
  });

  return (
    <>
      <Toggler />

      <Header />

      <Announcement />

      <div className="submissio-views">
        <Form />
      </div>

      {/* <div className="submissio-footer">
        <a href="/" className="login-action">Login to unlock more features</a>
      </div> */}

      <Resizer setWidth={setWidth} />
    </>
  );
};

export default App;
