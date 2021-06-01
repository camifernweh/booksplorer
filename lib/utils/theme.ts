import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(81, 139, 170)', // darker blue: 'rgb(44, 80, 117)'
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    text: {
      primary: 'rgb(61, 61, 61)',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
    h2: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    },
  },
});

export default responsiveFontSizes(theme);
