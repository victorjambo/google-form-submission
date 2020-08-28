import React, { useContext } from 'react';

import { SubmitContext } from '../context/Submit';
import { RESET } from '../context/reducer';

const Footer = () => {
  const [,,,,, dispatch] = useContext(SubmitContext);

  const handleReset = e => {
    e.preventDefault();
    dispatch({ type: RESET });
  };

  return (
    <div className="submissio-footer">
      <div className="submissio-btn-grp">
        <input className="btn submissio-btn-cancel" type="button" value="Reset" onClick={handleReset} />
        <input className="btn submissio-btn-submit" type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default Footer;
