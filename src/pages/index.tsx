import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useLayoutEffect } from 'react';

import { Typography } from '@mui/material';

const Home = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useLayoutEffect(() => {
        console.log('session from INDEX layouteffect', session);
        if (session === null) {
            console.log('REDIRECT');
            router.replace('/signin');
        }
    }, [session, router]);

    return (
        <main>
            <Head>
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography>HOME PAGE</Typography>
        </main>
    );
};

export default Home;
