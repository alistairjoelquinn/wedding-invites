import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { SessionProvider } from "next-auth/react"

import theme from '@/styles/theme';
import createEmotionCache from '@/../lib/createEmotionCache';
import Page from '@/components/Page';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}