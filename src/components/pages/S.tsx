import { useEffect, FC } from 'react';
import { RobotMessage } from '@/components/shared/RobotMessage';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { badSPrinciple, goodSPrinciple } from '@/components/utils/codeExamples';

const S: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const professions: string[] = ['официант', 'повар', 'уборщик', 'хостес'];
  const textForRobots = professions.map((el: string) => `Я ${el}`);
  return (
    <div className='S'>
      <h1>Принцип единственной ответственности</h1>
      <h1>Single Responsibility Principle - SRP</h1>
      <p>
        Каждый компонент должен иметь только одну ответственность. Это означает,
        что компонент должен быть ответственным только за одну вещь и не должен
        иметь больше одной причины для изменения. Это упрощает поддержку и
        изменение компонента.
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
        <RobotMessage
          positionX='bottom'
          positionY='right'
          text={textForRobots}
        />
        <div className='images__group2x2'>
          <RobotMessage
            positionX='top'
            positionY='left'
            scale='small'
            text={textForRobots[0]}
          />
          <RobotMessage
            positionX='top'
            positionY='right'
            scale='small'
            text={textForRobots[1]}
          />
          <RobotMessage
            positionX='bottom'
            positionY='left'
            scale='small'
            text={textForRobots[2]}
          />
          <RobotMessage
            positionX='bottom'
            positionY='right'
            scale='small'
            text={textForRobots[3]}
          />
        </div>
        <div className='dot dot-red'></div>
        <div className='dot dot-green'></div>
      </div>
      <div className='examples'>
        <p>
          Примерr компонента, который нарушает принцип единой ответственности:
        </p>
        <pre>
          <code className={`language-javascript`}>{badSPrinciple}</code>
        </pre>
        <p>
          Этот компонент содержит логику управления списком задач (добавление,
          удаление) внутри компонента. Это нарушает принцип единственной
          ответственности, так как компонент должен быть ответственным только за
          отображение пользовательского интерфейса. Лучше было бы вынести эту
          логику в отдельный компонент или модуль, который бы обрабатывал эти
          события, а компонент Todo использовал бы его только для отображения
          задач и обработки пользовательского ввода.
        </p>
        <p>Компонент, который соблюдает принципы SOLID может выглядеть так:</p>
        <pre>
          <code className={`language-javascript`}>{goodSPrinciple}</code>
        </pre>
        <p>
          Здесь мы вынесли все дополнительные функции и оставили только
          необходимый функционал, который соответствует предназначению
          компонента
        </p>
      </div>
    </div>
  );
};

export { S };
