// item.view.js

import React from 'react';
import moment from 'moment';
import {StyledIcon} from '../../style';
import {StyledItem, StyledRow} from '../style';

const Item = (
  {
    _id,
    name,
    date,
    hours,
    removeTimeReport,
  }
) => (
  <StyledRow
    key={_id}
    background={'#FFF'}
    hoverBackground={'#CCC'}
  >
    <StyledItem>{name}</StyledItem>
    <StyledItem>{moment(date).format("YYYY-MM-DD")}</StyledItem>
    <StyledItem>{hours}</StyledItem>
    <StyledItem>
      <StyledIcon hoverColor={'green'}>
        <i className="fas fa-edit" />
      </StyledIcon>
      <StyledIcon
        hoverColor={'darkred'}
        onClick={() => removeTimeReport(_id)}
      >
        <i className="fas fa-trash-alt" />
      </StyledIcon>
    </StyledItem>
  </StyledRow>
);

export default Item;