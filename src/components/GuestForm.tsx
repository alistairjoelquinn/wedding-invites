import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useState } from 'react';

import validate from '@/../lib/validate';
import FormFields from './FormFields';
import { State } from './context';

const GuestForm = () => {
    const state = State();
    const router = useRouter();
    const [error, setError] = useState<string>('');

    const formSubmitHandler = async () => {
        const validationError = validate(state);
        if (validationError) {
            setError(validationError);
        }
        const res = await fetch('/submit-guest', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });
        const data = await res.json();
        console.log('data: ', data);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="elevation" elevation={1} sx={{ pt: '20px', pb: '20px', pl: 4, pr: 4, mt: '20px' }}>
                <Typography component="h1" variant="h4" align="center">
                    {error || 'R.S.V.P'}
                </Typography>
                <>
                    <FormFields />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            onClick={() => router.push('/')}
                            variant="contained"
                            sx={{ mt: 3, ml: 1, color: 'white' }}
                        >
                            Back
                        </Button>
                        <Button onClick={formSubmitHandler} variant="contained" sx={{ mt: 3, ml: 1, color: 'white' }}>
                            Send
                        </Button>
                    </Box>
                </>
            </Paper>
        </Container>
    );
};

export default GuestForm;
