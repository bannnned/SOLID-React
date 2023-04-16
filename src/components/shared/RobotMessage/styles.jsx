import styled, { css } from 'styled-components';

export const StyledRobot = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  position: relative;
  align-self: center;
  transform: ${(props) => {
    switch (props.scale) {
      case 'small':
        return 'scale(0.7)';
      default:
        return 'scale(1)';
    }
  }};
`;

export const StyledRobotMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: auto;
  position: absolute;
  top: ${(props) => (props.positionY === 'top' ? '-80px' : 'auto')};
  bottom: ${(props) => (props.positionY === 'bottom' ? '-80px' : 'auto')};
  left: ${(props) => (props.positionX === 'left' ? '-90px' : 'auto')};
  right: ${(props) => (props.positionX === 'right' ? '-90px' : 'auto')};
`;

export const StyledRobotMessageImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-left: 0px;
  ${(props) => {
    const condition = (positionY, positionX) => {
      return `${positionY}-${positionX}`;
    };
    switch (condition(props.positionY, props.positionX)) {
      case 'top-right':
        return css`
          top: -80px;
          transform: scaleX(-1);
        `;
      case 'bottom-left':
        return css`
          top: -20px;
          margin-top: -20px;
          transform: scaleY(-1);
        `;
      case 'bottom-right':
        return css`
          top: -20px;
          margin-top: -20px;
          transform: scaleY(-1) scaleX(-1);
        `;
      default:
        return 'scale(1)';
    }
  }}; ;
`;

export const StyledRobotMessageTextUl = styled.ul`
      text-align: center;
      width: 70%;
      top: 40px;
      position: absolute;
      & li {
        text-align: start;
      }
    }
`;

export const StyledRobotMessageTextP = styled.p`
      text-align: center;
      width: 70%;
      top: 40px;
      position: absolute;
    }
`;