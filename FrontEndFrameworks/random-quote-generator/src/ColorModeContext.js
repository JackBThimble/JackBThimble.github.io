/** @format */

import { ThemeProvider, createTheme } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';
import React, { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({});

export const ColorModeProvider = props => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {}
      : {
          primary: {
            main: '#5893df',
          },
          seconary: {
            main: '#2ec5d3',
          },
          divider: deepOrange[700],
          background: {
            default: '#192231',
            paper: '#24344d',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
