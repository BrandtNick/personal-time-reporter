// Modules
import styled from 'styled-components';
import {COLORS} from "../constants";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background: ${COLORS.lightGreen};
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.white};
  margin: 30px;
  padding: 10px;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(51,51,51,0.75);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5em;
  height: 10vh;
  font-weight: 1000;
  color: ${COLORS.grey};
  background: ${COLORS.white};
  box-shadow: 0 0 10px 0 rgba(51,51,51,0.75);
`;

const StyledSubTitle = styled.h1`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 1000;
  color: ${COLORS.grey};
`;


const StyledIcon = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: ${props => props.color};
  transition: color 0.2s;
  
  &:hover {
    color: ${props => props.hoverColor};
    transition: color 0.2s;
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
`;

export {
  StyledContainer,
  StyledCard,
  StyledHeader,
  StyledSubTitle,
  StyledIcon,
  StyledFlexWrapper,
}