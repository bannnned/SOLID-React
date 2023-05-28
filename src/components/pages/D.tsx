import { useEffect, FC } from 'react';

// Components
import { RobotsComposition } from '@/components/shared/RobotsComposition';
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badDPrinciple, goodDPrinciple } from '@/components/data/codeExamples';

// Styles
import { StyledParagraph, StyledTextContent } from './styles';

const D: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const headerText = {
    title: {
      h1: 'Принцип инверсии зависимостей',
      h2: 'Dependency Inversion Principle',
    },
    description: ` Модули должны зависеть от абстракций, а не от конкретных реализаций. Это
        означает, что компоненты должны зависеть от абстракций (интерфейсов)
        вместо конкретных реализаций.`,
    quote: `Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба типа модулей должны зависеть от абстракций.`,
  };
  const wrongSideComponents = {
    components: [
      {
        positionY: 'bottom',
        positionX: 'left',
        text: 'Я могу резать пиццу ножом',
      },
    ],
  };
  const rightSideComponents = {
    components: [
      {
        positionY: 'bottom',
        positionX: 'left',
        text: 'Я могу резать пиццу тем, что дадут в руки',
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
          Примерr компонента, который нарушает этот принцип:
        </StyledParagraph>
        <CodeBlock text={badDPrinciple} lang={'js'} />
        <StyledParagraph>
          В этом примере компонент App жестко зависит от функции fetchData,
          которая определена в отдельном модуле. Если необходимо изменить
          источник данных или использовать другой способ получения данных, то
          придется менять реализацию самого компонента.
        </StyledParagraph>
        <StyledParagraph>
          Вот исправленный код компонента, который разделяет интерфейс на две
          отдельные части:
        </StyledParagraph>
        <CodeBlock text={goodDPrinciple} lang={'js'} />
        <StyledParagraph>
          В этом примере компонент App зависит только от абстракции useData,
          которая инкапсулирует логику получения данных. Реализация useData
          может быть изменена без влияния на компонент App, что соответствует
          принципу инверсии зависимостей.
        </StyledParagraph>
      </StyledTextContent>
    </div>
  );
};

export { D };
