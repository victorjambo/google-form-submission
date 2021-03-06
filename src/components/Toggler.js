import React, { useContext, useEffect } from 'react';
import * as Icon from 'react-feather';

import { ViewContext } from '../context/Views';
import { changeDomWidth } from '../utils/dom';

const Toggler = () => {
  const [,, width,, pinned, setPinned] = useContext(ViewContext);

  useEffect(() => {
    if (pinned) {
      changeDomWidth(width);
    }
  }, []);

  const handleClick = () => {
    changeDomWidth(width);
    setPinned(true);
  };

  return (
    <div className="submissio-toggle" onClick={handleClick} role="button" onKeyPress={() => {}} tabIndex={0}>
      <div className="submissio-toggle-icon">
        <Icon.ChevronRight size={15} color="#0f2e47" />
      </div>
      <span>Submit</span>

      <div className="popup">
        <div className="arrow" />
        <div className="content">
          Hi there, this is submissio. Move mouse over this button to display the code tree.
          You can also press the shortkey
          <kbd>cmd shift s</kbd>
          (or
          <kbd>ctrl shift s</kbd>
          ).
        </div>
      </div>
    </div>
  );
};

export default Toggler;
