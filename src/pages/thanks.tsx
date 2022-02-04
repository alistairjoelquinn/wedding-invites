import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import content from '@/../content/index.json';
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
                        {attending !== 'no' && (
                            <>
                                <Typography sx={{ ml: 3, fontWeight: 'bold' }} variant="subtitle1">
                                    Saturday
                                </Typography>
                                <List sx={{ ml: 3 }}>
                                    {content.saturday.map((item) => (
                                        <ListItem key={item} sx={{ pb: 0 }}>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography sx={{ ml: 3, fontWeight: 'bold' }} variant="subtitle1">
                                    Sunday
                                </Typography>
                                <List sx={{ ml: 3 }}>
                                    {content.sunday.map((item) => (
                                        <ListItem key={item} sx={{ pb: 0 }}>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}
                    </Paper>
                </Container>
            )}
        </Container>
    );
};

export default Thanks;
