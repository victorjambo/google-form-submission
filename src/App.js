import React from 'react';
import Template from './components/Template';

const App = () => {
  React.useEffect(() => {
    const html = document.getElementsByTagName('html');
    if (html.length) {
      html[0].setAttribute("style", "margin-left: 332px");
    }
  });

  return (
    <React.Fragment>
      <div class="submissio-toggle">
        <span>Submit</span>

        <div class="popup">
          <div class="arrow"></div>
          <div class="content">
            Hi there, this is submissio. Move mouse over this button to display the code tree. You can also press the
            shortkey <kbd>cmd shift s</kbd> (or <kbd>ctrl shift s</kbd>).
          </div>
        </div>
      </div>

      <div class="submissio-view-header"></div>

      <div className="submissio-views">
        <div class="submissio-announcement">
          <span>What's new in 5.2.0</span>
        </div>

        <Template />
      </div>

      <div className="submissio-footer">
        <a className="login-action">Login to unlock more features</a>
      </div>

      <div className="ui-resizable-handle ui-resizable-e" style={{zIndex: 90}}></div>
    </React.Fragment>
  );
};

export default App;
