import { FC, IRobotMessage } from 'react';

// Images
import robotIMG from '@/assets/robot.png';
import messageIMG from '@/assets/message.png';

// Styles
import './index.scss';

/**
 * Компонент @RobotMessage принимает в себя позиции по осям X и Y, текст и размер, возвращает
 * компонент с картинкой робота и диалоговым окном с текстом, где может быть обычный текст
 * или ненумерованный список. Диалоговое окно расположено сверху/снизу и справа/слева.
 * @param positionX - позиция по оси X
 * @param positionY - позиция по оси Y
 * @param text - строка или массив со строками
 * @param scale - строка с указанием размера
 */
const RobotMessage: FC<IRobotMessage> = ({
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
        {/* Если text это массив, то бежим по нему и рендерим список, 
        если строка, то рендерим его в параграфе */}
        {Array.isArray(text) ? (
          <ul className='robot__message-text'>
            {text.map((el, index) => {
              return <li key={`${el}${index}`}>{el}</li>;
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
