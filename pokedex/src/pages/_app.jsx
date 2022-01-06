import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { CardContextProvider } from '../contexts/Card/Card';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <GlobalStyle />
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;
