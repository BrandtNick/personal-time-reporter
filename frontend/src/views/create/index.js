// time-reports-form.view.js

import React, {useEffect} from 'react';
import {
  all,
  map,
  equals,
  pipe,
  values,
} from 'ramda';
import PlusSquare from 'react-icons/lib/fa/plus-square-o';
import {
  StyledButtonWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledResetButton,
  StyledSubmitButton,
} from './style';
import {StyledCard, StyledSubTitle} from '../style';
import inputs from '../../statics/inputs.statics';
import {fetch, post} from '../../api/time-reports.api';
import {actions as dataActions} from '../../state/data.state';
import {actions as viewActions} from '../../state/view.state';
import withContext from '../../hocs/with-context.hoc';

const Create = ({state, dispatch}) => {
  const {timeReport} = state.view;
  const {isValidTimeReport} = state.view;

  useEffect(() => {
    fetch()
      .then(timeReports => {
        dispatch(dataActions.fetchTimeReports(timeReports))
      });
  }, []);

  const createTimeReport = () => {
    const {timeReport} = state.view;
    post({timeReport})
      .then(data => {
        dispatch(dataActions.addTimeReport(data));
        dispatch(viewActions.resetFormData());
      });
  };

  const setTimeReport = (data, name) => ({target: {value}}) => {
    const formData = {
      ...data,
      [name]: value,
    };
    dispatch(viewActions.setTimeReport(formData));
  };

  const resetTimeReport = () => dispatch(viewActions.resetFormData());

  const isValidForm = pipe(
    values,
    all(equals(true)),
  );

  const inputList = ({name, type, placeholder}) => (
    <StyledInputWrapper key={name}>
      {name}
      <StyledInput
        isValid={isValidTimeReport[name]}
        type={type}
        value={timeReport[name]}
        placeholder={placeholder}
        onChange={setTimeReport({...timeReport}, name)}
      />
    </StyledInputWrapper>
  );

  return (
    <StyledCard>
      <StyledSubTitle>
        <PlusSquare size={35}/>
        Create
      </StyledSubTitle>
      {map(inputList, inputs)}
      <StyledButtonWrapper>
        <StyledSubmitButton
          disabled={!isValidForm(isValidTimeReport)}
          onClick={() => createTimeReport()}
        >
          Submit
        </StyledSubmitButton>
        <StyledResetButton
          onClick={() => resetTimeReport()}
        >
          Reset
        </StyledResetButton>
      </StyledButtonWrapper>
    </StyledCard>
  );
};

export default withContext(Create);