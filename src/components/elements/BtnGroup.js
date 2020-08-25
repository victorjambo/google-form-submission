import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BtnGroup = ({ defaultItem, menuItems, setState }) => {
  const [selected, setSelection] = useState(defaultItem);

  const handleSelection = selection => {
    setSelection(selection);
    setState(selection);
  };

  return (
    <div className="btn-group btn-group-sm">
      {
        menuItems.map(item => (
          <button
            key={item}
            type="button"
            className={`btn btn-primary btn-sm ${selected === item && 'active'}`}
            onClick={() => handleSelection(item)}
          >
            {item}
          </button>
        ))
      }
    </div>
  );
};

BtnGroup.propTypes = {
  defaultItem: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  setState: PropTypes.func
};

BtnGroup.defaultProps = {
  setState: () => {}
};

export default BtnGroup;
