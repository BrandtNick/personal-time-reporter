// dashboard.view.js

import React from 'react';
import LineChart from 'react-icons/lib/fa/line-chart';
import {
  StyledCard,
  StyledSubTitle,
} from '../style';
import {StyledDashboard, StyledStat} from './style';
import withContext from '../../hocs/with-context.hoc';
import {
  monthlyHoursWorkedSelector,
  timeReportsAmountSelector,
  totalHoursWorkedSelector,
  yearlyHourWorkedSelector,
} from '../../selectors/dashboard.selector';

const Dashboard = ({state}) => (
  <StyledCard>
    <StyledSubTitle>
      <LineChart size={50} />
    </StyledSubTitle>
    <StyledDashboard>
      <StyledStat>
        Amount of time reports: <b>{timeReportsAmountSelector(state)}</b>
      </StyledStat>
      <StyledStat>
        Total hours worked: <b>{totalHoursWorkedSelector(state)}</b>
      </StyledStat>
      <StyledStat>
        Monthly hours worked: <b>{monthlyHoursWorkedSelector(state)}</b>
      </StyledStat>
      <StyledStat>
        Yearly hours worked: <b>{yearlyHourWorkedSelector(state)}</b>
      </StyledStat>
    </StyledDashboard>
  </StyledCard>
);

export default withContext(Dashboard);