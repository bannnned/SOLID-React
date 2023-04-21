import { colors } from './colors';
import { sizes } from './sizes';

const baseTheme = {
  colors: {
    primary: colors.lightGrey,
    secondary: colors.darkGrey,
    error: colors.pastelRed,
    success: colors.pastelGreen,
    button: colors.olive,
    blackTransparent25: 'rgba(255, 255, 255, 0.25)',
    blackTransparent50: 'rgba(255, 255, 255, 0.5)',
    blackTransparent75: 'rgba(255, 255, 255, 0.75)',
  },
  fonts: {
    sansSerif: "'Roboto', sans-serif",
    // ...
  },
  spacing: {
    verySm: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    lg2: '24px',
    lg3: '32px',
    lg4: '40px',
    lg5: '64px',
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
    secondary: colors.lightGrey,
    primary: colors.darkGrey,
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
