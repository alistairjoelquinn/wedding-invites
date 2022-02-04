import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Container, Paper, Typography } from '@mui/material';
import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import { useAppState } from '@/components/context';

const Thanks: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const { attending } = useAppState();

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
                        elevation={1}
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
                        <Typography sx={{ m: 3 }} variant="h4">
                            Thanks for responding!
                        </Typography>
                        <Typography sx={{ ml: 3, mr: 3, mb: 3, fontSize: '18px' }} variant="h5">
                            {attending === 'yes'
                                ? `We're looking forward to seeing you at the wedding.`
                                : attending === 'no'
                                ? `We're sorry you can't make it, hopefully we can celebrate with you soon.`
                                : `Hopefully you can make it, but if not we look forward to celebrating with you soon.`}
                        </Typography>
                    </Paper>
                </Container>
            )}
        </Container>
    );
};

export default Thanks;
