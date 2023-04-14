import { useEffect, FC } from 'react';
import { RobotMessage } from '@/components/shared/RobotMessage';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { badOPrinciple, goodOPrinciple } from '@/components/utils/codeExamples';

const O: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='O'>
      {' '}
      <h1>Принцип открытости/закрытости</h1>
      <h1>Open/Closed Principle - OCP</h1>
      <p>
        Компоненты должны быть открыты для расширения, но закрыты для изменения.
        Это означает, что вы должны быть в состоянии добавлять функциональность
        к компонентам без изменения их исходного кода.
      </p>
      <q>
        <i>
          Функция имеет едиственное назначение, если вы{' '}
          <strong>не можете</strong> осмысленно <strong>извлечь</strong> из нее
          другую функцию. Если вы можете извлечь другую функцию, то исходная
          функция делала больше, чем одно действие.
        </i>
      </q>
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
        <pre>
          <code className={`language-javascript`}>{badOPrinciple}</code>
        </pre>
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
        <pre>
          <code className={`language-javascript`}>{goodOPrinciple}</code>
        </pre>
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
