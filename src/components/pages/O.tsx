import { useEffect, FC } from 'react';

// Components
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';
import { RobotsComposition } from '@/components/shared/RobotsComposition';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badOPrinciple, goodOPrinciple } from '@/components/data/codeExamples';

// Styles
import { StyledParagraph, StyledTextContent } from './styles';

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
  const wrongSideComponents = {
    grid: '1x2',
    components: [
      {
        positionY: 'top',
        positionX: 'left',
        scale: 'small',
        text: 'Я могу добавлять',
      },
      {
        positionY: 'top',
        positionX: 'left',
        scale: 'small',
        text: 'Теперь я могу удалять',
      },
    ],
  };
  const rightSideComponents = {
    grid: '1x2',
    components: [
      {
        positionY: 'top',
        positionX: 'right',
        scale: 'small',
        text: 'Я могу добавлять',
      },
      {
        positionY: 'top',
        positionX: 'right',
        scale: 'small',
        text: 'Теперь я могу добавлять и удалять',
      },
    ],
  };
  return (
    <div>
      <HeaderText text={headerText} />
      <RobotsComposition
        wrongSideComponents={wrongSideComponents}
        rightSideComponents={rightSideComponents}
      />
      <StyledTextContent>
        <StyledParagraph>
          Пример компонента, который нарушает принцип открытости/закрытости:
        </StyledParagraph>
        <CodeBlock text={badOPrinciple} lang={'js'} />
        <StyledParagraph>
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
        </StyledParagraph>
        <StyledParagraph>
          Компонент, который соблюдает 2й принцип SOLID может выглядеть так:
        </StyledParagraph>
        <CodeBlock text={goodOPrinciple} lang={'js'} />
        <StyledParagraph>
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
        </StyledParagraph>
      </StyledTextContent>
    </div>
  );
};

export { O };
