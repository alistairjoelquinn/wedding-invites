import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/../lib/flex';

const Home: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh' }}>
            {!session && <div className={spin.spin} />}
            {session && (
                <Container sx={{ ...flex, flexDirection: 'column' }}>
                    <Typography>HOME PAGE</Typography>
                    <Button
                        onClick={() => router.push('/form')}
                        variant="contained"
                        sx={{ mt: 3, ml: 1, color: 'white' }}
                    >
                        R.S.V.P
                    </Button>
                </Container>
            )}
        </Container>
    );
};

export default Home;
