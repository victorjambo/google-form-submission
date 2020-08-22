import React, { useState, useEffect } from 'react';

import Resizer from './components/Resizer';
import { DEFAULTS } from './utils/constants';
import Views from './components/Views';
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

      <Views />

      <Resizer setWidth={setWidth} />
    </>
  );
};

export default App;
