// select.view.js

import React from 'react';
import PropTypes from 'prop-types';
import {StyledSelectBox} from '../style';
import {map} from 'ramda';

const Select = (
  {
    name,
    onChange,
    options,
    placeholder,
  }
) => (
  <>
    <StyledSelectBox
      onChange={onChange}
      id={name}
      name={name}>
      <option value={''}>{placeholder}</option>
      {map(({name, value}) => (
        <option key={value} value={value}>{name}</option>
      ), options)}
    </StyledSelectBox>
  </>
);

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};


export default Select;