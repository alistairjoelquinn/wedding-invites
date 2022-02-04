import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(198, 140, 100)',
        },
        secondary: {
            main: 'rgb(198, 110, 73)',
        },
        error: {
            main: red.A400,
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
              src: url(/fonts/RobotoMono-Light.ttf) format('truetype');
            }
            @font-face {
              font-family: 'RobotoBold';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(/fonts/RobotoMono-Bold.ttf) format('truetype');
            }
            @font-face {
              font-family: 'Seasons';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(/fonts/seasons.otf) format('otf');
            }
          `,
        },
    },
    typography: {
        fontFamily: 'RobotoLight',
        button: {
            fontFamily: 'RobotoBold',
            textTransform: 'none',
        },
        h1: {
            fontFamily: 'RobotoBold',
        },
    },
});

export default theme;
