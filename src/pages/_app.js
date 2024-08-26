// src/_app.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import Main from "@/components/Main";

function App({Component, pageProps}) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Main Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default App;
