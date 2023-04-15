import { FC, ReactNode, IRobotMessage } from 'react';

// Images
import redCircleImg from '@/assets/red-circle.png';
import greenCircleImg from '@/assets/green-circle.png';
import { RobotMessage } from '@/components/shared/RobotMessage';

// Styles
import { StyledBackCircleImg } from './styles';

interface SideComponent {
  grid?: string;
  components: IRobotMessage[];
}

interface SideComponentProps extends SideComponent {
  side: string;
}

interface ISide {
  wrongSideComponents: SideComponent;
  rightSideComponents: SideComponent;
  vertical?: boolean;
}

interface IRobotsCompositionProps extends ISide {
  children?: ReactNode;
}

interface IBackImage {
  [key: string]: React.ReactNode;
}

const backImages: IBackImage = {
  wrong: redCircleImg,
  right: greenCircleImg,
};

/**
 * Функция @SideComponent принимает в себя массив с информацией о компонентах,
 * схему отображения и информацию о стороне
 * @param components - массив с информацией о компонентах
 * @param grid - строка с информацией о расположении сетки по типу "2х2" или "3х3"
 * @param side - массив с информацией о компонентах
 */
const SideComponent = ({
  components,
  side,
  grid = '1x1',
}: SideComponentProps) => {
  console.log(side, grid);
  return (
    <div className={`images__group${grid}`}>
      <StyledBackCircleImg
        src={backImages[side]}
        alt='red-circle'
        className={`back-circle`}
      />
      {components.map((component, index) => {
        return (
          <RobotMessage
            positionX={component.positionX}
            positionY={component.positionY}
            scale={component.scale}
            text={component.text}
            key={`${component.positionX}${component.positionY}${index}`}
          />
        );
      })}
    </div>
  );
};

/**
 * Функция @RobotsComposition принимает в себя 2 массива с информацией о компонентах и
 * положение по оси
 * @param wrongSideComponents - массив с информацией о компонентах "правильной" стороны
 * @param rightSideComponents  массив с информацией о компонентах "неправильной" стороны
 * @param vertical - булево значение, true, если нужно отобразить элементы вертикально
 */
const RobotsComposition: FC<IRobotsCompositionProps> = ({
  wrongSideComponents,
  rightSideComponents,
  vertical = false,
}: ISide) => {
  return (
    <div className={`images${vertical ? '-vertical' : ''}`}>
      <SideComponent
        components={wrongSideComponents.components}
        grid={wrongSideComponents.grid}
        side='wrong'
      />
      {vertical && <div className='dot dot-red'></div>}
      <SideComponent
        components={rightSideComponents.components}
        grid={rightSideComponents.grid}
        side='right'
      />
      {!vertical && <div className='dot dot-red'></div>}
      <div className='dot dot-green'></div>
    </div>
  );
};

export { RobotsComposition };
