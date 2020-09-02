import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import Navigation from 'components/Navigation/Navigation';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="en" title="HATTA WEB" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
