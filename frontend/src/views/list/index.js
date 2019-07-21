// list.view.js

import React from 'react';
import {
  map,
  times,
  add,
  dec,
  lt,
  isEmpty,
} from 'ramda';
import ListIcon from 'react-icons/lib/fa/list';
import {
  StyledCard,
  StyledSubTitle,
} from '../style';
import FilterContainer from './components/filter.view';
import Titles from './components/titles.view';
import Item from './components/item.view';
import {remove} from '../../api/time-reports.api';
import {actions as dataActions} from '../../state/data.state';
import {actions as viewActions} from '../../state/view.state';
import withContext from '../../hocs/with-context.hoc';
import {
  maxPageReachedSelector,
  minPageReachedSelector,
  numberOfPagesSelector,
  paginatedTimeReportsSelector,
  pageSelector,
} from '../../selectors/list.selector';
import {
  StyledList,
  StyledNoTimeReports,
  StyledPagination,
  StyledPaginationButton,
} from './style';

const List = ({state, dispatch}) => {
  const page = pageSelector(state);
  const numberOfPages = numberOfPagesSelector(state);
  const timeReports = paginatedTimeReportsSelector(state);

  const removeTimeReport = timeReportId => {
    remove(timeReportId)
      .then(data => dispatch(dataActions.removeTimeReport(data._id)))
  };

  const setPage = page => () => dispatch(viewActions.setPage(page));

  const timeReportItem = timeReport => (
    <Item
      key={timeReport._id}
      {...timeReport}
      removeTimeReport={removeTimeReport}
    />
  );

  const renderPaginationButtons = page => (
    lt(numberOfPages, 5) ? (
      <StyledPaginationButton
        key={page}
        onClick={setPage(page)}
      >
        {add(page, 1)}
      </StyledPaginationButton>
    ) : (
      <>
        ..
        <StyledPaginationButton
          key={page}
          onClick={setPage(numberOfPages)}
        >
          {numberOfPages}
        </StyledPaginationButton>
      </>
    )
  );

  return (
    <StyledCard>
      <StyledSubTitle>
        <ListIcon size={35} />
        Reports
      </StyledSubTitle>
      <StyledList>
        <FilterContainer />
        <Titles />
        {isEmpty(timeReports) ?
          <StyledNoTimeReports>No time-reports available</StyledNoTimeReports> :
          map(timeReportItem, timeReports)
        }
      </StyledList>
      <StyledPagination>
        <StyledPaginationButton
          disabled={minPageReachedSelector(state)}
          onClick={setPage(dec(page, 1))}
        >
          <i className="fas fa-caret-left" />
        </StyledPaginationButton>
        <div>
          {times(renderPaginationButtons, numberOfPages)}
        </div>
        <StyledPaginationButton
          disabled={maxPageReachedSelector(state)}
          onClick={setPage(add(page, 1))}
        >
          <i className="fas fa-caret-right" />
        </StyledPaginationButton>
      </StyledPagination>
    </StyledCard>
  );
};

export default withContext(List);