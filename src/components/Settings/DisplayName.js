import React, { useContext, useState } from 'react';
import * as Icons from 'react-feather';
import PropTypes from 'prop-types';

import { SubmitContext } from '../../context/Submit';

const DisplayName = ({ name }) => {
  const [value, setValue] = useState('');
  const [isEditting, setEdit] = useState(false);
  const [,, customDisplayname, setCustomDisplayname] = useContext(SubmitContext);

  const onSave = ({ type, value }) => {
    setCustomDisplayname({ type, value });
    setEdit(false);
  };

  if (isEditting) {
    return (
      <>
        <input type="text" className="form-control" placeholder={customDisplayname[name]} onChange={e => setValue(e.target.value)} value={value} />
        <Icons.Save color="#1BC5BD" onClick={() => onSave({ type: name, value })} />
      </>
    );
  }
  return (
    <>
      {customDisplayname[name]}
      <Icons.Edit2 color="#1BC5BD" onClick={() => setEdit(true)} />
    </>
  );
};

const DisplayNameContainer = () => {
  const [,, customDisplayname] = useContext(SubmitContext);

  return (
    <>
      <h3>Change Display Name</h3>
      <ul className="list-group">
        {Object.keys(customDisplayname).map(name => (
          <li key={name} role="presentation" onKeyPress={() => {}} className="list-group-item d-flex justify-content-between align-items-center">
            <DisplayName name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayNameContainer;

DisplayName.propTypes = {
  name: PropTypes.string.isRequired,
};
