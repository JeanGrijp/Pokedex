import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { CardContextProvider } from '../contexts/Card/Card';

function MyApp({ Component, pageProps }) {
  return (
    <CardContextProvider>

      <GlobalStyle />
      <Component {...pageProps} />
    </CardContextProvider>

  );
}

export default MyApp;
