import React, { useContext } from 'react';
import { ViewContext } from '../context/Views';
import { changeDomWidth } from '../utils/dom';

const Toggler = () => {
  const [view] = useContext(ViewContext);

  const handleClick = () => {
    changeDomWidth(view.width);
  };

  return (
    <div className="submissio-toggle" onClick={handleClick} role="button" onKeyPress={() => {}} tabIndex={0}>
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
