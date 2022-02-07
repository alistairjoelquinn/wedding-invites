import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Container, Button, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';
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
                            <Typography
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    fontFamily: 'Comfortaa',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}
                                variant="h3"
                            >
                                Event Details
                            </Typography>
                            <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '0.5px' }} variant="h5">
                                Venue
                            </Typography>
                            <List>
                                <ListItem key="venue" sx={{ textAlign: 'center' }}>
                                    <ListItemText primary="The venue is TBC, but it will be somewhere family-friendly in Berlin." />
                                </ListItem>
                            </List>
                            <Typography sx={{ mt: 1, fontFamily: 'Comfortaa', letterSpacing: '0.5px' }} variant="h5">
                                Saturday
                            </Typography>
                            <List>
                                {content.saturday.map((item) => (
                                    <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography sx={{ mt: 1, fontFamily: 'Comfortaa', letterSpacing: '0.5px' }} variant="h5">
                                Sunday
                            </Typography>
                            <List>
                                {content.sunday.map((item) => (
                                    <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography
                                sx={{ mt: 2, mb: 1, fontFamily: 'Comfortaa', letterSpacing: '1px' }}
                                variant="h3"
                            >
                                Hotels
                            </Typography>
                            <List>
                                {content.hotels.map((item) => (
                                    <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography
                                sx={{ mt: 2, mb: 1, fontFamily: 'Comfortaa', letterSpacing: '1px' }}
                                variant="h3"
                            >
                                Gifts
                            </Typography>
                            <List>
                                <ListItem key="gifts1" sx={{ textAlign: 'center', pb: 0 }}>
                                    <ListItemText primary="If you are travelling from abroad, your gift to us is your presence." />
                                </ListItem>
                                <ListItem key="gifts2" sx={{ textAlign: 'center', pb: 3, pt: 0 }}>
                                    <ListItemText primary="Those who would like to help us furnish a new home in Berlin, we welcome contributions here." />
                                </ListItem>
                            </List>
                        </Paper>
                    </Container>
                </Container>
            )}
        </Container>
    );
};

export default Home;
