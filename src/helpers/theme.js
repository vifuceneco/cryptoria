import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#01c38d',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#132D46'
        },
        dark: {
            main: '#191E29',
            contrastText: '#ffffff',
        },
        grey: {
            main: '#696E79',
        },
    },
});

export default theme;