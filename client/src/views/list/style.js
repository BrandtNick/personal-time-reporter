import styled from 'styled-components';
import {COLORS} from '../../constants';

const StyledList = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({color}) => color};
  background: ${({background}) => background}
  transition: background 0.2s;
  border-bottom: 1px solid ${COLORS.green};
  font-weight: ${({fontWeight}) => fontWeight}
  
  &:hover {
    background: ${({hoverBackground}) => hoverBackground} !important;
    transition: background 0.2s;
  }
`;

const StyledItem = styled.div`
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;  
`;

const StyledPaginationButton = styled.button`
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};;
  background: ${COLORS.white};
  border: 2px solid ${({disabled}) => (disabled ? COLORS.lightGrey : COLORS.lightGreen)};
  border-radius: 5px;
  height: 40px;
  width: 40px;
  margin: 5px;
  transition: background 0.2s;
  
  &:hover {
    background: ${COLORS.lightGrey};
    transition: background 0.2s;
  }
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const StyledSelectBox = styled.select`
  font-size: 1.3em;
  font-weight: 1000;
  background: ${COLORS.white};
  width: 100%;
  height: 50px;
`;

const StyledNoTimeReports = styled.div`
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  padding: 20px;
`;

export {
  StyledItem,
  StyledList,
  StyledRow,
  StyledPaginationButton,
  StyledPagination,
  StyledSelectBox,
  StyledNoTimeReports,
}