import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Container, Paper, Typography } from '@mui/material';
import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import thanksText from '@/lib/thanksText';
import { useAppState } from '@/components/context';

const Thanks: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const { attending, fullName } = useAppState();

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh' }}>
            {!session && <div className={spin.spin} />}
            {session && (
                <Container
                    maxWidth="sm"
                    sx={{
                        ...flex,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        mt: 3,
                        mb: 3,
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            flexGrow: 1,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            pl: 3,
                            pr: 3,
                            pb: 3,
                            backgroundColor: '#f8f8ff',
                        }}
                    >
                        <Typography sx={{ m: 3, fontSize: '18px' }} variant="h5">
                            <div dangerouslySetInnerHTML={{ __html: thanksText(attending, fullName) }} />
                        </Typography>
                    </Paper>
                </Container>
            )}
        </Container>
    );
};

export default Thanks;
