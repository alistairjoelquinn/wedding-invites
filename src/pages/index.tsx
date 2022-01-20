import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useLayoutEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import spin from '@/styles/spin.module.css';

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
        <Container
            component="main"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}
        >
            <Head>
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {session ? <Typography>HOME PAGE</Typography> : <div className={spin.spin} />}
        </Container>
    );
};

export default Home;
