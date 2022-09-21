import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
