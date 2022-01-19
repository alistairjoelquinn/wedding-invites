import Head from 'next/head';
import { useSession } from 'next-auth/react';

import { Typography } from '@mui/material';

const Home = () => {
    const { data: session } = useSession();

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
