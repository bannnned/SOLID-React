import { useEffect, FC } from 'react';

// Components
import { RobotsComposition } from '@/components/shared/RobotsComposition';
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badLPrinciple, goodLPrinciple } from '@/components/utils/codeExamples';

const L: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const headerText = {
    title: {
      h1: 'Принцип подстановки Барбары Лисков',
      h2: 'Liskov Substitution Principle - LSP',
    },
    description: `Все компоненты, основанные на родительском компоненте, должны иметь
        возможность использоваться вместо этого родительского компонента, без
        изменения функциональности. В React это означает, что компоненты должны
        использовать одинаковый API для упрощения замены одного компонента
        другим.`,
    quote: `Функции, которые используют базовый тип, должны иметь возможность 
    использовать любой подтип этого базового типа, не зная об этом`,
  };
  const wrongSideComponents = {
    grid: '3x1',
    components: [
      {
        positionX: 'top',
        positionY: 'left',
        text: 'Я родитель и я могу готовить напитки',
      },
      {
        positionX: 'bottom',
        positionY: 'left',
        scale: 'small',
        text: 'Я ребенок1 и я могу готовить салаты',
      },
      {
        positionX: 'bottom',
        positionY: 'left',
        scale: 'small',
        text: 'Я ребенок2 и я могу готовить десерты',
      },
    ],
  };
  const rightSideComponents = {
    grid: '3x1',
    components: [
      {
        positionX: 'top',
        positionY: 'left',
        text: 'Я родитель и я могу готовить напитки',
      },
      {
        positionX: 'bottom',
        positionY: 'left',
        scale: 'small',
        text: 'Я ребенок1 и я могу готовить напитки и салаты',
      },
      {
        positionX: 'bottom',
        positionY: 'left',
        scale: 'small',
        text: 'Я ребенок2 и я могу готовить напитки и десерты',
      },
    ],
  };
  return (
    <div className='L'>
      <HeaderText text={headerText} />
      <RobotsComposition
        wrongSideComponents={wrongSideComponents}
        rightSideComponents={rightSideComponents}
        vertical
      />
      <div className='examples'>
        <p>Примерr компонента, который нарушает этот принцип:</p>
        <CodeBlock text={badLPrinciple} lang={'js'} />
        <p>
          В данном примере компоненты Square и Rectangle имеют разные свойства и
          реализации, что приводит к нарушению принципа подстановки Барбары
          Лисков. Оба компонента могут быть использованы в приложении, но не
          могут быть заменены друг на друга без нарушения корректности работы
          приложения. Для исправления нарушения принципа можно создать общий
          компонент Shape, который будет иметь общие свойства для всех фигур и
          наследоваться другими компонентами.
        </p>
        <p>
          Для исправления нарушения принципа подстановки Барбары Лисков можно
          создать общий компонент Shape, который будет иметь общие свойства для
          всех фигур и наследоваться другими компонентами:
        </p>
        <CodeBlock text={goodLPrinciple} lang={'js'} />
        <p>
          Теперь оба компонента Square и Rectangle наследуют общий компонент
          Shape и могут быть заменяемы друг на друга без нарушения корректности
          работы приложения.
        </p>
      </div>
    </div>
  );
};

export { L };
