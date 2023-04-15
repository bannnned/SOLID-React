import { useEffect, FC } from 'react';

// Components
import { RobotsComposition } from '@/components/shared/RobotsComposition';
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badDPrinciple, goodDPrinciple } from '@/components/utils/codeExamples';

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
        positionX: 'bottom',
        positionY: 'left',
        text: 'Я могу резать пиццу ножом',
      },
    ],
  };
  const rightSideComponents = {
    components: [
      {
        positionX: 'bottom',
        positionY: 'left',
        text: 'Я могу резать пиццу тем, что дадут в руки',
      },
    ],
  };
  return (
    <div className='D'>
      <HeaderText text={headerText} />
      <RobotsComposition
        wrongSideComponents={wrongSideComponents}
        rightSideComponents={rightSideComponents}
      />
      <div className='examples'>
        <p>Примерr компонента, который нарушает этот принцип:</p>
        <CodeBlock text={badDPrinciple} lang={'js'} />
        <p>
          В этом примере компонент App жестко зависит от функции fetchData,
          которая определена в отдельном модуле. Если необходимо изменить
          источник данных или использовать другой способ получения данных, то
          придется менять реализацию самого компонента.
        </p>
        <p>
          Вот исправленный код компонента, который разделяет интерфейс на две
          отдельные части:
        </p>
        <CodeBlock text={goodDPrinciple} lang={'js'} />
        <p>
          В этом примере компонент App зависит только от абстракции useData,
          которая инкапсулирует логику получения данных. Реализация useData
          может быть изменена без влияния на компонент App, что соответствует
          принципу инверсии зависимостей.
        </p>
      </div>
    </div>
  );
};

export { D };
