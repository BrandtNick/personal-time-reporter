// views/index.js

import React, {useEffect} from 'react';
import {actions as dataActions} from '../state/data.state';
import {fetch} from '../api/time-reports.api';
import {StyledContainer} from './style';
import List from './list';
import Header from './header';
import Create from './create';
import Dashboard from './dashboard';
import withContext from '../hocs/with-context.hoc';

const TimeReports = ({dispatch}) => {
  useEffect(() => {
    fetch()
      .then(timeReports => (
        dispatch(dataActions.fetchTimeReports(timeReports))
      ));
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <Create />
        <Dashboard />
        <List />
      </StyledContainer>
    </>
  );
};

export default withContext(TimeReports);