import React, { useContext } from 'react';

import { SubmitContext } from '../context/Submit';
import { RESET } from '../context/reducer';
import { FIELD_NAME } from '../utils/formFields';
import request from '../utils/request';

const mapFieldToName = values => Object.keys(FIELD_NAME).map(key => ({
  name: FIELD_NAME[key],
  value: values[key]
}));

const Footer = () => {
  const [,,,, state, dispatch] = useContext(SubmitContext);

  const handleReset = e => {
    e.preventDefault();
    dispatch({ type: RESET });
  };

  const handleSubmit = () => {
    const payload = mapFieldToName(state);

    request(payload)
      .then(res => console.log(res.text()))
      .catch(err => console.log({ err }));
  };

  return (
    <div className="submissio-footer">
      <div className="submissio-btn-grp">
        <input className="btn submissio-btn-cancel" type="button" value="Reset" onClick={handleReset} />
        <input className="btn submissio-btn-submit" type="submit" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Footer;
