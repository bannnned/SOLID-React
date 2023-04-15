import { useEffect, FC } from 'react';

// Components
import { RobotMessage } from '@/components/shared/RobotMessage';
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badOPrinciple, goodOPrinciple } from '@/components/utils/codeExamples';

const O: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const headerText = {
    title: {
      h1: 'Принцип открытости/закрытости',
      h2: 'Open/Closed Principle - OCP',
    },
    description: `Компоненты должны быть открыты для расширения, но закрыты для изменения.
        Это означает, что вы должны быть в состоянии добавлять функциональность
        к компонентам без изменения их исходного кода.`,
    quote: `Софт должен быть <strong>открыт для расширения</strong>, но <strong>закрыт для модификации</strong>.
     Другими словами, можно добавлять новые функции, но нельзя менять существующий код`,
  };
  return (
    <div className='O'>
      <HeaderText text={headerText} />
      <div className='images'>
        <div className='images__group1x1'>
          <RobotMessage
            positionX='top'
            positionY='left'
            scale='small'
            text={'Я могу добавлять'}
          />
          <RobotMessage
            positionX='top'
            positionY='left'
            scale='small'
            text={'Теперь я могу удалять'}
          />
        </div>
        <div className='images__group1x1'>
          {' '}
          <RobotMessage
            positionX='top'
            positionY='left'
            scale='small'
            text={'Я могу добавлять'}
          />
          <RobotMessage
            positionX='top'
            positionY='left'
            scale='small'
            text={'Теперь я могу добавлять и удалять'}
          />
        </div>
        <div className='dot dot-red'></div>
        <div className='dot dot-green'></div>
      </div>
      <div className='examples'>
        <p>
          Примерr компонента, который нарушает принцип открытости/закрытости:
        </p>
        <CodeBlock text={badOPrinciple} lang={'js'} />
        <p>
          В этом примере компонент Shape имеет зависимость от конкретных
          подтипов (Circle, Rectangle, Triangle), и для каждого типа он
          выполняет определенные расчеты внутри своей реализации. Это нарушает
          принцип открытости/закрытости, так как при добавлении новых типов
          фигур (например, квадрата), мы должны изменять компонент Shape, чтобы
          добавить новые условия и расчеты. Лучше было бы создать интерфейс
          Shape, который определяет метод для расчета площади фигуры, а затем
          создать конкретные классы (Circle, Rectangle, Triangle), которые
          реализуют этот метод. Компонент Shape мог бы затем использовать этот
          интерфейс, не завися от конкретных подтипов фигур, и быть открытым для
          добавления новых подтипов фигур без изменения своей реализации.
        </p>
        <p>
          Компонент, который соблюдает 2й принцип SOLID может выглядеть так:
        </p>
        <CodeBlock text={goodOPrinciple} lang={'js'} />
        <p>
          В этом примере компонент Shape теперь принимает метод calculateArea в
          качестве свойства, который возвращает строку с информацией об области
          фигуры. Каждый подтип фигуры (Circle, Rectangle, Triangle) теперь
          имеет свой собственный метод calculateArea, который определяет расчеты
          для соответствующей фигуры и возвращает строку с информацией об ее
          площади. Таким образом, компонент Shape больше не зависит от
          конкретных подтипов фигур и может быть открытым для добавления новых
          типов фигур без изменения своей реализации. Кроме того, каждый подтип
          фигуры теперь реализует метод calculateArea, что делает его закрытым
          для изменений и открытым для расширения.
        </p>
      </div>
    </div>
  );
};

export { O };
