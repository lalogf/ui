import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelSummary: {
      content: {
        margin: '24px 0',
        '&$expanded': {
          margin: '24px 0',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontWeight: 300,
      },
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: '#000',
        },
      },
    },
    MuiPaper: {
      root: {
        background: '#FAFAFA',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  palette: {
    primary: {
      light: '#FEF278',
      main: '#ffe521',
      dark: '#DAC218',
    },
    secondary: {
      light: '#FF66A6',
      main: '#ff009e',
      dark: '#DB009D',
    },
    tertiary: {
      light: '#9AFCAF',
      main: '#56f89a',
      dark: '#3ED58C',
    },
    danger: {
      light: '#F98A7D',
      main: '#ED2939',
      dark: '#CB1D3B',
    },
    info: {
      light: '#9BFEFB',
      main: '#06C9F9',
      dark: '#059DD6',
    },
    success: {
      light: '#A5E591',
      main: '#4AAA42',
      dark: '#309230',
    },
    warning: {
      light: '#FDE484',
      main: '#FAC733',
      dark: '#D7A425',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeightMedium: 600,
    h1: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '3.125rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h3: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h4: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h5: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h6: {
      color: '#202020',
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    body1: {
      color: '#202020',
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
    },
    body2: {
      color: '#202020',
      fontSize: '1.25rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
      wordWrap: 'break-word',
      '& a': {
        fontSize: '1.25rem',
      },
    },
  },
  spacing: {
    container: 21,
  },
});

export default theme;
