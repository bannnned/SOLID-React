import { colors } from './colors';
import { sizes } from './sizes';

const baseTheme = {
  colors: {
    bg: colors.white,
    text: colors.black,
    primary: colors.lightGrey,
    secondary: colors.darkGrey,
    error: colors.pastelRed,
    success: colors.pastelGreen,
    button: colors.olive,
    blackTransparent25: 'rgba(0, 0, 0, 0.25)',
    blackTransparent50: 'rgba(0, 0, 0, 0.5)',
    blackTransparent75: 'rgba(0, 0, 0, 0.75)',
    black: colors.black,
  },
  fonts: {
    sansSerif: "'Roboto', sans-serif",
    // ...
  },
  spacing: {
    verySm: '2',
    sm: '4',
    md: '8',
    lg: '16',
    lg2: '24',
    lg3: '32',
    lg4: '40',
    lg5: '64',
  },
  boxShadow: {},
  borderRadius: {
    sm: sizes.sm,
    md: sizes.md,
    lg: sizes.lg,
    round: '50%',
  },
  mediaQueries: {},
};

const lightTheme = {
  ...baseTheme,
};

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg: colors.darkGrey,
    text: colors.lightGrey,
    secondary: colors.lightGrey,
    primary: colors.darkGrey,
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export const themesObjects = {
  light: {
    theme: theme.light,
    name: 'Light',
  },
  dark: {
    theme: theme.dark,
    name: 'Dark',
  },
};
