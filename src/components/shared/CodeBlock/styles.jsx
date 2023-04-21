import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  background: none;
  position: absolute;
  right: ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.blackTransparent25};
  color: ${(props) => props.theme.colors.blackTransparent25};
  width: ${(props) => props.theme.spacing.lg5};
  height: ${(props) => props.theme.spacing.lg4};
  padding: 0;
`;

export const StyledCodeBlock = styled.pre`
  position: relative;
`;
