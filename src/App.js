import React, {useState, useEffect, Fragment} from 'react';

import Template from './components/Template';
import Resizer from './components/Resizer';

const App = () => {
  const [width, setWidth] = useState(332); // TODO fetch from localstorage

  useEffect(() => {
    const html = document.getElementsByTagName('html');
    const nav = document.getElementById('submissio');

    nav.style = `width: ${width}px`

    if (html.length) {
      html[0].setAttribute("style", `margin-left: ${width}px`);
    }
  });

  return (
    <Fragment>
      <div className="submissio-toggle">
        <span>Submit</span>

        <div className="popup">
          <div className="arrow"></div>
          <div className="content">
            Hi there, this is submissio. Move mouse over this button to display the code tree. You can also press the
            shortkey <kbd>cmd shift s</kbd> (or <kbd>ctrl shift s</kbd>).
          </div>
        </div>
      </div>

      <div className="submissio-view-header"></div>

      <div className="submissio-views">
        <div className="submissio-announcement">
          <span>What's new in 5.2.0</span>
        </div>

        <Template />
      </div>

      <div className="submissio-footer">
        <a className="login-action">Login to unlock more features</a>
      </div>

      <Resizer setWidth={setWidth} />
    </Fragment>
  );
};

export default App;
