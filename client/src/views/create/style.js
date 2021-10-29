import styled from 'styled-components';
import {COLORS} from '../../constants';

const StyledInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50px;
  font-size: 1.2em;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid ${({isValid}) => isValid ? COLORS.lightGreen : COLORS.brown};
  border-left: 10px solid ${({isValid}) => isValid ? COLORS.lightGreen : COLORS.brown};
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
  font-weight: 800;
  text-transform: capitalize;
  color: ${COLORS.green};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
  width: 30%;
  height: 50px;
  outline: none;
  border: 1px solid ${COLORS.grey}
  border-radius: 5px;
  font-size: 1.3em;
  margin: 10px;
`;

const StyledSubmitButton = styled(StyledButton)`
  color: ${({disabled}) => disabled ? COLORS.darkGrey : COLORS.white};
  background: ${({disabled}) => disabled ? COLORS.grey : COLORS.brown};
  transition: background 0.2s;
  
  &:hover {
    background: ${({disabled}) => disabled ? COLORS.grey : COLORS.lightBrown};
    transition: background 0.2s;
  }
`;

const StyledResetButton = styled(StyledButton)`
  color: ${COLORS.white};
  background: ${COLORS.brown};
  transition: background 0.2s;
  
  &:hover {
    background: ${COLORS.lightBrown};
    transition: background 0.2s;
  }
`;

export {
  StyledInput,
  StyledInputWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledResetButton,
  StyledSubmitButton,
}