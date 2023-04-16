import React, { useState } from 'react';

// Components
import { S, O, L, I, D } from '@/components';

// Styles
import {
  StyledButtonGroup,
  StyledButtonComponent,
  StyledAppWrapper,
} from './styles';

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

  return (
    <StyledAppWrapper className='App'>
      <h1>Solid principles in React</h1>
      <StyledButtonGroup className='button-group'>
        {keys.map((letter, index) => {
          const isActive = currentComponent.letter === letter;
          return (
            <StyledButtonComponent
              isActive={isActive}
              className={`button-group__button`}
              key={letter + index}
              onClick={handleButton}
              value={letter}
            >
              {letter}
            </StyledButtonComponent>
          );
        })}
      </StyledButtonGroup>
      {currentComponent.component}
    </StyledAppWrapper>
  );
}
