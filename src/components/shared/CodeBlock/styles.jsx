import styled from 'styled-components/macro';
import { numberToValue } from '@/helpers/helpers';

export const StyledButton = styled.button`
  background: none;
  position: absolute;
  right: ${(props) => numberToValue(props.theme.spacing.lg)};
  border: 1px solid ${(props) => props.theme.colors.button};
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.button};
  width: ${(props) => numberToValue(props.theme.spacing.lg5)};
  height: ${(props) => numberToValue(props.theme.spacing.lg4)};
  padding: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.blackTransparent25};
  }
  &:active {
    background: ${(props) => props.theme.colors.blackTransparent50};
  }
`;

export const StyledCodeBlock = styled.pre`
  margin-bottom: 80px;
  position: relative;
`;
