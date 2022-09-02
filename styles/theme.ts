import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C7CD5'
      // contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FF0066',
    },
    error: {
      main: '#D9534F',
    },
    success: {
      main: '#5CB85C'
    },
    warning: {
      main: '#F0AD4E',
    },
    info: {
      main: '#56C0E0'
    },
    text: {
      primary: '#373A3C',
      secondary: '#FFFFFF',
      disabled: '#777777'
    },
    action: {
      active: '#777777',
      disabled: '#AAAAAA',
      disabledBackground: '#333333',
      hover: '#FF0000',
      hoverOpacity: 0.7,
      focus: '#FF0044',
      focusOpacity: 1,
      selected: '#FF0066',
      selectedOpacity: 1
    },
    background: {
      default: '#ECEEEF',
      paper: '#DDDDDD'
    },
    common: {
      black: '#55595C',
      white: '#ECEEEF'
    },
    tonalOffset: 0.2
  }
});

