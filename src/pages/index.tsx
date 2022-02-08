import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Container, Button, Typography, Paper, Box } from '@mui/material';
import parse from 'html-react-parser';
import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import content from '@/../content/index.json';

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
                <Container>
                    <Box
                        sx={{
                            height: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1643969151/main_eiiw0l.webp"
                            alt="Berlin bridge over water"
                            style={{
                                width: '100%',
                            }}
                        />
                        <Button
                            id="user-form-link"
                            onClick={() => router.push('/form')}
                            variant="contained"
                            sx={{ m: 3, color: 'white' }}
                        >
                            R.S.V.P
                        </Button>
                    </Box>
                    <Container
                        maxWidth="lg"
                        disableGutters
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
                                alignItems: 'center',
                                pl: 0,
                                pr: 0,
                                backgroundColor: '#f8f8ff',
                            }}
                        >
                            <Typography sx={{ m: 3, fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Programme
                            </Typography>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '0.5px' }} variant="h5">
                                Saturday
                            </Typography>
                            <Box sx={{ m: 3, textAlign: 'center' }}>
                                {content.saturday.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </Box>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '0.5px' }} variant="h5">
                                Sunday
                            </Typography>
                            <Box sx={{ m: 3, textAlign: 'center' }}>
                                <p>We’ll meet again for fun in the sun - details TBC.</p>
                            </Box>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Venue
                            </Typography>
                            <Box sx={{ m: 3, textAlign: 'center' }}>
                                <p>The venue is TBC, but it will be somewhere family-friendly in Berlin.</p>
                            </Box>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Hotels
                            </Typography>
                            <Box sx={{ m: 3, textAlign: 'center' }}>
                                {content.hotels.map((item) => (
                                    <p key={item}>{parse(item)}</p>
                                ))}
                            </Box>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Gifts
                            </Typography>
                            <Box sx={{ m: 3, textAlign: 'center' }}>
                                <p>If you are travelling from abroad, your gift to us is your presence.</p>
                                <p>
                                    Those who would like to help us furnish a new home in Berlin, we welcome
                                    contributions{' '}
                                    <a
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        href="http://www.leetchi.com/c/our-wedding-cash-fund"
                                    >
                                        here
                                    </a>
                                    .
                                </p>
                            </Box>
                        </Paper>
                    </Container>
                </Container>
            )}
        </Container>
    );
};

export default Home;
