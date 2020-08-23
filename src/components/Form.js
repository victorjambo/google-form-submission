/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import request from '../utils/request';

const validateAndMap = ({ icNumber, owner }) => {
  console.log();
  return [
    {
      name: 'entry.1208192532',
      value: icNumber,
    },
    {
      name: 'entry.1135435746',
      value: owner,
    },
    {
      name: 'entry.725073760',
      value: 'milk'
    }
  ];
};

const Form = () => {
  const [icNumber] = useState('1208192532');
  const [owner] = useState('Victor mutai');

  const handleSubmit = e => {
    e.preventDefault();

    const payload = validateAndMap({ icNumber, owner });

    request(payload)
      .then(res => console.log(res.text()))
      .catch(err => console.log({ err }));
  };

  return (
    <div className="submissio-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <span className="number">1</span>
            {' '}
            Candidate Info
          </legend>

          <input
            className="submissio-form-control"
            type="text"
            name="field1"
            id="field1"
            placeholder="Your Name *"
            // required
            // pattern="^\w*$"
          />

          <input className="submissio-form-control" type="email" name="field2" placeholder="Your Email *" />

          <textarea className="submissio-form-control" name="field3" placeholder="About yourself" />

          <div className="separator separator-dashed separator-primary my-5" />

          <label htmlFor="job">Interests:</label>
          <select className="submissio-form-control" id="job" name="field4">
            <optgroup label="Indoors">
              <option value="fishkeeping">Fishkeeping</option>
              <option value="reading">Reading</option>
              <option value="boxing">Boxing</option>
              <option value="debate">Debate</option>
              <option value="gaming">Gaming</option>
              <option value="snooker">Snooker</option>
              <option value="other_indoor">Other</option>
            </optgroup>
            <optgroup label="Outdoors">
              <option value="football">Football</option>
              <option value="swimming">Swimming</option>
              <option value="fishing">Fishing</option>
              <option value="climbing">Climbing</option>
              <option value="cycling">Cycling</option>
              <option value="other_outdoor">Other</option>
            </optgroup>
          </select>

          <legend>
            <span className="number">2</span>
            {' '}
            Additional Info
          </legend>
          <textarea className="submissio-form-control" name="field3" placeholder="About Your School" />
        </fieldset>

        <div className="submissio-btn-grp">
          <input className="btn submissio-btn-cancel" type="button" value="Cancel" />
          <input className="btn submissio-btn-submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
