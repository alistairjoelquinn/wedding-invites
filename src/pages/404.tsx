import { Button, Container, Paper, Typography } from '@mui/material';
import type { NextPage } from 'next';

import flex from '@/lib/flex';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
    const router = useRouter();

    const clickHandler = () => router.replace('/');

    return (
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
                <Typography sx={{ pt: 2, textAlign: 'center' }} variant="h5">
                    Oopsie! It looks like something went wrong...
                </Typography>
                <Typography sx={{ pt: 2, textAlign: 'center' }} variant="h5">
                    Click on the button to return to safety
                </Typography>
                <Button onClick={clickHandler} variant="contained" sx={{ mt: 3, ml: 1, color: 'white' }}>
                    Home
                </Button>
            </Paper>
        </Container>
    );
};

export default Custom404;
