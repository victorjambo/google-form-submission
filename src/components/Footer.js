import React, { useContext } from 'react';
import { SubmitContext } from '../context/Submit';

const Footer = ({ formFields }) => {
  const handleReset = e => {
    e.preventDefault();
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
