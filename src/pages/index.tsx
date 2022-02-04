import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
                <Container
                    maxWidth="md"
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
                            alignItems: 'center',
                            pl: 3,
                            pr: 3,
                        }}
                    >
                        <Typography sx={{ mt: 3, mb: 2, fontFamily: 'Seasons', letterSpacing: '1px' }} variant="h3">
                            Event Details
                        </Typography>
                        <Typography
                            sx={{ fontWeight: 'bold', fontFamily: 'Seasons', letterSpacing: '0.5px' }}
                            variant="h5"
                        >
                            Venue
                        </Typography>
                        <List>
                            <ListItem key="venue" sx={{ textAlign: 'center' }}>
                                <ListItemText primary="The venue is TBC, but we are looking for somewhere in the Kreuzberg / Friedrichshain area." />
                            </ListItem>
                        </List>
                        <Typography
                            sx={{ mt: 1, fontWeight: 'bold', fontFamily: 'Seasons', letterSpacing: '0.5px' }}
                            variant="h5"
                        >
                            Saturday
                        </Typography>
                        <List>
                            {content.saturday.map((item) => (
                                <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography
                            sx={{ mt: 1, fontWeight: 'bold', fontFamily: 'Seasons', letterSpacing: '0.5px' }}
                            variant="h5"
                        >
                            Sunday
                        </Typography>
                        <List>
                            {content.sunday.map((item) => (
                                <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography sx={{ mt: 2, mb: 1, fontFamily: 'Seasons', letterSpacing: '1px' }} variant="h3">
                            Hotels
                        </Typography>
                        <List>
                            {content.hotels.map((item) => (
                                <ListItem key={item} sx={{ pb: 0, textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography sx={{ mt: 2, mb: 1, fontFamily: 'Seasons', letterSpacing: '1px' }} variant="h3">
                            Gifts
                        </Typography>
                        <List>
                            <ListItem key="gifts" sx={{ textAlign: 'center' }}>
                                <ListItemText primary="If you are coming from abroad, your gift to us is your presence. We appreciate the effort!" />
                            </ListItem>
                        </List>
                        <Button onClick={() => router.push('/form')} variant="contained" sx={{ m: 3, color: 'white' }}>
                            R.S.V.P
                        </Button>
                    </Paper>
                </Container>
            )}
        </Container>
    );
};

export default Home;
