/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import * as Icons from 'react-feather';
import PropTypes from 'prop-types';

import { SubmitContext } from '../../context/Submit';
import { FIELD_TYPES, FIELDS } from '../../utils/formFields';
import Dropdown from '../elements/Dropdown';
import BtnGroup from '../elements/BtnGroup';

const Switcher = ({ name, setValue }) => {
  const [fieldDefaults] = useContext(SubmitContext);

  switch (FIELDS[name].type) {
    case FIELD_TYPES.DROPDOWN:
      return <Dropdown defaultItem={fieldDefaults[name]} menuItems={FIELDS[name].options} setState={value => setValue(value)} />;
    case FIELD_TYPES.GROUP:
      return <BtnGroup defaultItem={fieldDefaults[name]} menuItems={FIELDS[name].options} setState={value => setValue(value)} />;
    default:
      return <input />;
  }
};

const DefaultValues = ({ name }) => {
  const [value, setValue] = useState('');
  const [isEditting, setEdit] = useState(false);
  const [, setFieldDefaults, customDisplayname] = useContext(SubmitContext);

  const onSave = ({ name, value }) => {
    setFieldDefaults({ type: name, value });
    setEdit(false);
  };

  if (isEditting) {
    return (
      <>
        <Switcher name={name} setValue={setValue} />
        <Icons.Save color="#1BC5BD" onClick={() => onSave({ name, value })} />
        <Icons.X color="#F64E60" onClick={() => setEdit(false)} />
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

const DefaultValuesContainer = () => {
  const [fieldDefaults] = useContext(SubmitContext);
  const newFieldDefaults = { ...fieldDefaults };

  delete newFieldDefaults.url;
  delete newFieldDefaults.comment;
  delete newFieldDefaults.icnumber;

  return (
    <>
      <h3>Change Default Values</h3>
      <ul className="list-group">
        {Object.keys(newFieldDefaults).map(name => (
          <li key={name} className="list-group-item d-flex justify-content-between align-items-center">
            <DefaultValues name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DefaultValuesContainer;

DefaultValues.propTypes = {
  name: PropTypes.string.isRequired,
};

Switcher.propTypes = {
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
