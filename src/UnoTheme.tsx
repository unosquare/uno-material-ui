import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

let  UnoTheme = createMuiTheme({
  palette: {
    error: {
      main: '#f44336',
    },
    primary: {
      main: '#304FF3',
    },
    secondary: {
      main: '#5c5b5b',
    },
    text: {
      primary: '#191919',
      secondary: '#000',
    },
  },
  zIndex: {
    appBar: 1201,
  },
});

UnoTheme = responsiveFontSizes(UnoTheme);

export default UnoTheme;
