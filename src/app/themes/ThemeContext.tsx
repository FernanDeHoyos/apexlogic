"use client"
import React, { createContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme'; 

// Definir el tipo del contexto
interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

// Crear el contexto con valor inicial
export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

// Props para el provider
interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const storedMode = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  const [mode, setMode] = useState<'light' | 'dark'>(storedMode);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
