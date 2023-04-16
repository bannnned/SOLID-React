import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 20px;
`;

export const StyledButtonComponent = styled.button`
  width: 50px;
  height: 40px;
  border: none;
  background-color: #ffdfd3;
  border-radius: 8px;
  cursor: pointer;
  border: ${(props) =>
    props.isActive ? '2px solid rgba(99, 93, 80, 0.5)' : 'none'};
  &:hover {
    background-color: #f5d6cb;
  }
  &:active {
    background-color: #dec2b8;
  }
  &:focus {
    outline: 1px solid rgba(99, 93, 80, 0.5);
  }
`;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  text-align: center;
  margin: 40px 20%;
`;
