// select-boxes.js

import React from 'react';
import {StyledFlexWrapper} from '../../style';
import withContext from '../../../hocs/with-context.hoc';
import {actions as viewActions} from '../../../state/view.state';
import Select from './select.view';
import {monthsAvailableSelector, yearsAvailableSelector} from '../../../selectors/list.selector';

const SelectBoxes = ({state, dispatch}) => {
  const selectYear = () => ({target: {value}}) => dispatch(viewActions.selectYear(value));
  const selectMonth = () => ({target: {value}}) => dispatch(viewActions.selectMonth(value));
  // TODO: Implement filter by name
  // const setNameFilter = () => ({target: {value}}) => dispatch(viewActions.setNameFilter(value));
  const years = yearsAvailableSelector(state);
  const months = monthsAvailableSelector(state);

  return (
    <StyledFlexWrapper>
      <Select
        name={'years'}
        options={years}
        onChange={selectYear()}
        placeholder={'Filter by year'}
      />
      <Select
        name={'months'}
        options={months}
        onChange={selectMonth()}
        placeholder={'Filter by month'}
      />
    </StyledFlexWrapper>
  );
};

export default withContext(SelectBoxes);