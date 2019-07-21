// titles.js

import {map} from 'ramda';
import React from 'react';
import {StyledItem, StyledRow} from '../style';
import {COLORS} from '../../../constants';

const titles = ['name', 'date', 'hours', 'options'];

const Title = item => <StyledItem key={item}>{item}</StyledItem>;

const Titles = () => (
  <StyledRow
    fontWeight={'800'}
    color={COLORS.white}
    background={COLORS.green}
  >
    {map(Title, titles)}
  </StyledRow>
);

export default Titles;