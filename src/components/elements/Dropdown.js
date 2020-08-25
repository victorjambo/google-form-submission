import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ defaultItem, menuItems, setState }) => {
  const dropdownMenuRef = useRef();
  const dropdownRef = useRef();
  const [selected, setSelection] = useState(defaultItem);

  const toggle = () => {
    if (dropdownRef.current.classList.contains('show')) {
      dropdownRef.current.classList.remove('show');
      dropdownMenuRef.current.classList.remove('show');
    } else {
      dropdownRef.current.classList.add('show');
      dropdownMenuRef.current.classList.add('show');
    }
  };

  const handleSelection = selection => {
    setSelection(selection);
    setState(selection);
    toggle();
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn btn-primary btn-sm dropdown-toggle" type="button" onClick={toggle}>
        {selected}
      </button>
      <div className="dropdown-menu" ref={dropdownMenuRef}>
        {
          menuItems.map(item => <button key={item} type="button" className="dropdown-item" onClick={() => handleSelection(item)}>{item}</button>)
        }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  defaultItem: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  setState: PropTypes.func
};

Dropdown.defaultProps = {
  defaultItem: 'Select',
  setState: () => {}
};

export default Dropdown;
