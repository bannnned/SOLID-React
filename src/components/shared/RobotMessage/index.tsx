import React, { FC } from 'react';
import robotIMG from '../../../assets/robot.png';
import messageIMG from '../../../assets/message.png';

import './index.scss';

interface IRobotMessage {
  positionX: string;
  positionY: string;
  text: string | string[];
  scale?: string;
}

const RobotMessage: React.FC<IRobotMessage> = ({
  positionX,
  positionY,
  text = '',
  scale = 'normal',
}: IRobotMessage) => {
  return (
    <div className={`robot scale-${scale}`}>
      <img src={robotIMG} alt='robot' className='robot__robot' />
      <div
        className={`robot__message-container container-${positionX}-${positionY}`}
      >
        <img
          src={messageIMG}
          alt='message'
          className={`robot__message ${positionX}-${positionY}`}
        />
        {Array.isArray(text) ? (
          <ul className='robot__message-text'>
            {text.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        ) : (
          <p className='robot__message-text'>{text}</p>
        )}
      </div>
    </div>
  );
};

export { RobotMessage };
