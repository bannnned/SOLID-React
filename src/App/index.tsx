import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themesObjects, theme } from '@/constants/theme';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '@/store/slices/themeSlice';

// Components
import { S, O, L, I, D } from '@/components';

// Styles
import {
  StyledButtonGroup,
  StyledButtonComponent,
  StyledAppWrapper,
  StyledThemeButton,
  StyledMainContent,
  StyledHeader,
} from './styles';

interface IComponents {
  [key: string]: React.ReactNode;
}

interface IComponentsState {
  letter: string;
  component: React.ReactNode;
}

export default function App() {
  const detectionDiv = document.querySelector('#detection');
  const isAutoDark =
    getComputedStyle(detectionDiv).backgroundColor != 'rgb(255, 255, 255)';

  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

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

  if (isAutoDark) {
    dispatch(setTheme(themesObjects.dark));
  }

  const themeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={currentTheme.theme}>
      <StyledAppWrapper>
        <StyledMainContent>
          {!isAutoDark && (
            <StyledThemeButton onClick={themeHandler}>
              {currentTheme.name === 'Light' ? 'Dark' : 'Light'}
            </StyledThemeButton>
          )}
          <StyledHeader>Solid principles in React</StyledHeader>
          <StyledButtonGroup>
            {keys.map((letter, index) => {
              const isActive = currentComponent.letter === letter;
              return (
                <StyledButtonComponent
                  isActive={isActive}
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
        </StyledMainContent>
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
