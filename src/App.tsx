import React, { useState } from 'react';

import './styles.scss';
import { S, O, L, I, D } from '@/components';

interface IComponents {
  [key: string]: React.ReactNode;
}

interface IComponentsState {
  letter: string;
  component: React.ReactNode;
}

export default function App() {
  const principlesComponents: IComponents = {
    S: <S />,
    O: <O />,
    L: <L />,
    I: <I />,
    D: <D />,
  };
  const keys = Object.keys(principlesComponents);
  const [currentComponent, setCurrentComponent] = useState<IComponentsState>({
    letter: 'S',
    component: principlesComponents.S,
  });

  const handleButton = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLInputElement;
    const letter = element.value;
    const newValue = {
      letter: letter,
      component: principlesComponents[letter],
    };
    setCurrentComponent(newValue);
  };

  const activeButtonClass = 'active-button';

  return (
    <div className='App'>
      <h1>Solid principles in React</h1>
      <div className='buton-group'>
        {keys.map((letter, index) => {
          const isActive = currentComponent.letter === letter;
          return (
            <button
              className={`buton-group__button ${
                isActive ? activeButtonClass : ''
              }`}
              key={letter + index}
              onClick={handleButton}
              value={letter}
            >
              {letter}
            </button>
          );
        })}
      </div>
      {currentComponent.component}
    </div>
  );
}
