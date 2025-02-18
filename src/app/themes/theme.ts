import { createTheme, PaletteMode } from "@mui/material/styles";
import '@fontsource-variable/comfortaa';


const lightTheme = {
  typography: {
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
    
    background: { 
      default: "#f5f5f5", 
      paper: "#ffffff" },
  },
};

const darkTheme = {
  typography: {
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
    
    background: { 
      default: "#121212", 
      paper: "#1e1e1e" },
  },
};

export const getTheme = (mode: "light" | "dark") => createTheme(mode === "dark" ? darkTheme : lightTheme);
