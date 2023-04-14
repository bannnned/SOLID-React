import React, { useState } from 'react';

import './styles.scss';
import { S, O, L, I, D } from '@/components';

interface IComponents {
  [key: string]: React.ReactNode;
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
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(
    principlesComponents.D
  );

  const handleButton = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    setCurrentComponent(principlesComponents[value]);
  };

  return (
    <div className='App'>
      <h1>Solid principles in React</h1>
      <div className='buton-group'>
        {keys.map((letter, index) => {
          return (
            <button
              className='buton-group__button'
              key={letter + index}
              onClick={handleButton}
              value={letter}
            >
              {letter}
            </button>
          );
        })}
      </div>
      {currentComponent}
    </div>
  );
}
