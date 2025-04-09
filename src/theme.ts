import { extendTheme } from 'native-base';

// Define our custom color palette
const colors = {
  lavender: '#E6E6FA',
  blushPink: '#FFD1DC',
  skyBlue: '#AFDCEB',
  cream: '#FFFDD0',
  primaryText: '#4A4A4A',
  secondaryText: '#6B6B6B',
  cardBackground: '#FFFFFF',
};

// Extend the theme
export const theme = extendTheme({
  colors: {
    primary: {
      50: colors.lavender,
      100: colors.lavender,
      200: colors.lavender,
      300: colors.lavender,
      400: colors.lavender,
      500: colors.lavender,
      600: colors.lavender,
      700: colors.lavender,
      800: colors.lavender,
      900: colors.lavender,
    },
    secondary: {
      50: colors.blushPink,
      100: colors.blushPink,
      200: colors.blushPink,
      300: colors.blushPink,
      400: colors.blushPink,
      500: colors.blushPink,
      600: colors.blushPink,
      700: colors.blushPink,
      800: colors.blushPink,
      900: colors.blushPink,
    },
    accent: {
      50: colors.skyBlue,
      100: colors.skyBlue,
      200: colors.skyBlue,
      300: colors.skyBlue,
      400: colors.skyBlue,
      500: colors.skyBlue,
      600: colors.skyBlue,
      700: colors.skyBlue,
      800: colors.skyBlue,
      900: colors.skyBlue,
    },
    // Add our custom colors directly
    ...colors,
  },
  fontConfig: {
    Roboto: {
      400: {
        normal: 'Roboto-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      700: {
        normal: 'Roboto-Bold',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Card: {
      baseStyle: {
        rounded: 'xl',
        p: 4,
        bg: colors.cardBackground,
        shadow: 2,
      },
    },
    Text: {
      baseStyle: {
        color: colors.primaryText,
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

// Type for our custom theme
export type AppTheme = typeof theme;