import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useLayoutEffect } from 'react';

import { Typography } from '@mui/material';

const Home = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useLayoutEffect(() => {
        if (session === null) {
            router.replace('/signin');
        }
    }, [session, router]);

    console.log('session: ', session);
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
