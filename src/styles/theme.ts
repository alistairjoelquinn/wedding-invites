import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import RobotoLight from './fonts/RobotoMono-Light.ttf';
import Seasons from './fonts/seasons.otf';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(235, 170, 91)',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'RobotoLight';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Raleway'), local('Raleway-Regular'), url(${RobotoLight}) format('true-type');
            }
          `,
        },
    },
});

export default theme;
