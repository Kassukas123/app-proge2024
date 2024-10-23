import "./App.css";
import Cats from "./components/Cats";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, red, blue, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: blue[500],
      paper: green[200],
    },
    error: {
      main: "#d32f2f",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Cats />
      </ThemeProvider>
    </>
  );
}

export default App;
