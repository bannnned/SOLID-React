import React, { useState } from 'react';

import './styles.scss';
import { S, O, L, I, D } from './components';

export default function App() {
  const principlesComponents = {
    S: <S />,
    O: <O />,
    L: <L />,
    I: <I />,
    D: <D />,
  };
  const keys = Object.keys(principlesComponents);
  const [currentComponent, setCurrentComponent] = useState(
    principlesComponents.D
  );

  const handleButton = (e) => {
    const value = e.target.value;
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
