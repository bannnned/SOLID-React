import styled from 'styled-components/macro';
import { numberToValue } from '@/helpers/helpers';

export const StyledBackCircleImg = styled.img`
  width: ${(props) => {
    return numberToValue(props.theme.spacing.lg5 * 5, 'px');
  }};
  position: absolute;
  opacity: 0.5;
`;

export const StyledCodeBlock = styled.pre`
  position: relative;
`;

export const StyledImagesComposition = styled.div`
  display: grid;
  grid-template: ${(props) =>
    props.vertical ? 'auto 50px / auto 100px' : 'auto 50px / 1fr 1fr'};
  align-items: center;
  justify-items: center;
  gap: ${(props) => {
    return props.vertical
      ? numberToValue(props.theme.spacing.lg5 * 3) + ' 0'
      : numberToValue(props.theme.spacing.lg5 * 2);
  }};
  margin: ${(props) =>
    props.vertical
      ? numberToValue(props.theme.spacing.lg5 * 3) + ' 0'
      : '100px 0'};
`;

export const StyledDot = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.color === 'green' ? 'green' : 'red')};
`;

export const StyledGridWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: ${(props) => {
    switch (props.grid) {
      case '4x4':
        return 'repeat(4, 200px) / repeat(4, 200px)';
      case '2x2':
        return 'repeat(2, 200px) / repeat(2, 200px);';
      case '1x2':
        return 'repeat(2, 200px) / 200px';
      case '3x1':
        return '200px / repeat(3, 200px)';
      case '2x1':
        return '200px / repeat(2, 250px)';
      case '1x1':
        return '200px / 200px';
    }
  }};
`;
