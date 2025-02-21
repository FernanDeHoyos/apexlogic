import { createTheme, PaletteMode } from "@mui/material/styles";
import '@fontsource-variable/comfortaa';


const lightTheme = {
  typography: {
    color: "#ffffff",
    fontFamily: "'Comfortaa Variable', system-ui",
    h1: { fontFamily: "'Comfortaa Variable', system-ui" },
    h2: { fontFamily: "'Comfortaa Variable', system-ui" },
    h3: { fontFamily: "'Comfortaa Variable', system-ui" },
    h4: { fontFamily: "'Comfortaa Variable', system-ui" },
    h5: { fontFamily: "'Comfortaa Variable', system-ui" },
    h6: { fontFamily: "'Comfortaa Variable', system-ui" },
    body1: { fontFamily: "'Comfortaa Variable', system-ui" },
    body2: { fontFamily: "'Comfortaa Variable', system-ui" },
  },
  palette: {
    mode: "light" as PaletteMode, 
    primary: { 
      main: "#1976d2" 
    },
    secondary: { 
      main: "#dc004e" 
    },
    text: {
      primary: "#000000", // Color principal del texto
      secondary: "#bdbdbd", // Color secundario del texto
    },
    background: { 
      default: "#f5f5f5", 
      paper: "#ffffff" },
  },
};

const darkTheme = {
  typography: {
    color: "#ffffff",
    fontFamily: "'Comfortaa Variable', system-ui",
    h1: { fontFamily: "'Comfortaa Variable', system-ui" },
    h2: { fontFamily: "'Comfortaa Variable', system-ui" },
    h3: { fontFamily: "'Comfortaa Variable', system-ui" },
    h4: { fontFamily: "'Comfortaa Variable', system-ui" },
    h5: { fontFamily: "'Comfortaa Variable', system-ui" },
    h6: { fontFamily: "'Comfortaa Variable', system-ui" },
    body1: { fontFamily: "'Comfortaa Variable', system-ui" },
    body2: { fontFamily: "'Comfortaa Variable', system-ui" },
  },
  palette: {
    mode: "dark" as PaletteMode,
    primary: { 
      main: "#90caf9"
    },
    secondary: { 
      main: "#f48fb1" 
    },
    custom: {
      main: "#ff9800", // Naranja
      contrastText: "#fff", // Texto en el botón
    },
    text: {
      primary: "#808080", // Color principal del texto
      secondary: "#bdbdbd", // Color secundario del texto
    },
    background: { 
      default: "#121212", 
      paper: "#1e1e1e" },
  },
};

export const getTheme = (mode: "light" | "dark") => createTheme(mode === "dark" ? darkTheme : lightTheme);
