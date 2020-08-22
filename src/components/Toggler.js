import React from 'react';

const Toggler = () => (
  <div className="submissio-toggle">
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

export default Toggler;
