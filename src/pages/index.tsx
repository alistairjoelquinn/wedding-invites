import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import spin from '@/styles/spin.module.css';
import flex from '@/../lib/flex';

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh' }}>
            <Head>
                <title>Wedding Invitations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {session ? <Typography>HOME PAGE</Typography> : <div className={spin.spin} />}
        </Container>
    );
};

export default Home;
