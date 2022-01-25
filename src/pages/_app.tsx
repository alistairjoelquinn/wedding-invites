import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';

import theme from '@/styles/theme';
import createEmotionCache from '@/../lib/createEmotionCache';
import Page from '@/components/Page';
import { StateProvider } from '@/components/context';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SessionProvider session={pageProps.session}>
                    <StateProvider>
                        <Page>
                            <Component {...pageProps} />
                        </Page>
                    </StateProvider>
                </SessionProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
