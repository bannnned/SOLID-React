import styled from 'styled-components/macro';

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 1;
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
  background-color: ${(props) => props.theme.colors.bg};
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  text-align: center;
  gap: 20px;
  padding: 40px 20%;
`;

export const StyledThemeButton = styled.button`
  position: absolute;
  width: ${(props) => {
    return props.theme.spacing.lg5;
  }}
   height: ${(props) => props.theme.spacing.lg4}
`;

export const StyledHeader = styled.h1`
  font-size: ${(props) => props.theme.spacing.lg2};
  color: ${(props) => props.theme.colors.text};
`;
