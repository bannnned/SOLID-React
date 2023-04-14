import { useEffect, FC } from 'react';
import { RobotMessage } from '@/components/shared/RobotMessage';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { badDPrinciple, goodDPrinciple } from '@/components/utils/codeExamples';

const D: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='D'>
      {' '}
      <h1>Принцип инверсии зависимостей</h1>
      <h1>Dependency Inversion Principle</h1>
      <p>
        Модули должны зависеть от абстракций, а не от конкретных реализаций. Это
        означает, что компоненты должны зависеть от абстракций (интерфейсов)
        вместо конкретных реализаций.
      </p>
      <div className='images'>
        <RobotMessage
          positionX='top'
          positionY='left'
          text={'Я могу резать пиццу ножом'}
        />
        <RobotMessage
          positionX='top'
          positionY='left'
          text={'Я могу резать пиццу тем, что дадут в руки'}
        />
        <div className='dot dot-red'></div>
        <div className='dot dot-green'></div>
      </div>
      <div className='examples'>
        <p>Примерr компонента, который нарушает этот принцип:</p>
        <pre>
          <code className={`language-javascript`}>{badDPrinciple}</code>
        </pre>
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
        <pre>
          <code className={`language-javascript`}>{goodDPrinciple}</code>
        </pre>
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
