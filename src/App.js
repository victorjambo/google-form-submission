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
      <Template />
    </React.Fragment>
  );
};

export default App;
