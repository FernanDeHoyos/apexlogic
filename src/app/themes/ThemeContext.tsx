"use client";
import React, { createContext, useState, useMemo, useEffect, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleTheme: () => {},
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Cargar el tema desde localStorage en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("theme") as "light" | "dark";
      if (storedMode) {
        setMode(storedMode);
      }
      setMounted(true);
    }
  }, []);

  // Guardar el tema en localStorage cuando cambia
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Evita renderizar hasta que se haya montado en el cliente
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
