import { useEffect, FC } from 'react';

// Components
import { HeaderText } from '@/components/shared/HeaderText';
import { CodeBlock } from '@/components/shared/CodeBlock';
import { RobotsComposition } from '@/components/shared/RobotsComposition';

// Libs
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

// Utils
import { badSPrinciple, goodSPrinciple } from '@/components/utils/codeExamples';

// Styles
import { StyledParagraph } from './styles';

const S: FC = () => {
  // Инициализируем библиотеку для отображения кода
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const professions: string[] = ['официант', 'повар', 'уборщик', 'хостес'];
  const textForRobots = professions.map((el: string) => (
    <span key={el}>{`Я ${el}`}</span>
  ));

  const headerText = {
    title: {
      h1: 'Принцип единственной ответственности',
      h2: 'Single Responsibility Principle - SRP',
    },
    description: `Каждый компонент должен иметь только одну ответственность. Это означает,
        что компонент должен быть ответственным только за одну вещь и не должен
        иметь больше одной причины для изменения. Это упрощает поддержку и
        изменение компонента.`,
    quote: `Функция имеет едиственное назначение, если вы
            <strong>не можете</strong> осмысленно <strong>извлечь</strong> из
            нее другую функцию. Если вы можете извлечь другую функцию, то
            исходная функция делала больше, чем одно действие.`,
  };
  const wrongSideComponents = {
    components: [{ positionY: 'top', positionX: 'left', text: textForRobots }],
  };
  const rightSideComponents = {
    grid: '2x2',
    components: [
      {
        positionY: 'top',
        positionX: 'left',
        scale: 'small',
        text: textForRobots[0],
      },
      {
        positionY: 'top',
        positionX: 'right',
        scale: 'small',
        text: textForRobots[1],
      },
      {
        positionY: 'bottom',
        positionX: 'left',
        scale: 'small',
        text: textForRobots[2],
      },
      {
        positionY: 'bottom',
        positionX: 'right',
        scale: 'small',
        text: textForRobots[3],
      },
    ],
  };
  return (
    <div className='S'>
      <HeaderText text={headerText} />
      <RobotsComposition
        wrongSideComponents={wrongSideComponents}
        rightSideComponents={rightSideComponents}
      />
      <div className='examples'>
        <StyledParagraph>
          Пример компонента, который нарушает принцип единой ответственности:
        </StyledParagraph>
        <CodeBlock text={badSPrinciple} lang={'js'} />
        <StyledParagraph>
          Этот компонент содержит логику управления списком задач (добавление,
          удаление) внутри компонента. Это нарушает принцип единственной
          ответственности, так как компонент должен быть ответственным только за
          отображение пользовательского интерфейса. Лучше было бы вынести эту
          логику в отдельный компонент или модуль, который бы обрабатывал эти
          события, а компонент Todo использовал бы его только для отображения
          задач и обработки пользовательского ввода.
        </StyledParagraph>
        <StyledParagraph>
          Компонент, который соблюдает принципы SOLID может выглядеть так:
        </StyledParagraph>
        <CodeBlock text={goodSPrinciple} lang={'js'} />
        <StyledParagraph>
          Здесь мы вынесли все дополнительные функции и оставили только
          необходимый функционал, который соответствует предназначению
          компонента
        </StyledParagraph>
      </div>
    </div>
  );
};

export { S };
