import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import FormFields from './FormFields';

const GuestForm = () => {
    const router = useRouter();

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="elevation" elevation={1} sx={{ pt: '20px', pb: '20px', pl: 4, pr: 4, mt: '20px' }}>
                <Typography component="h1" variant="h4" align="center">
                    R.S.V.P
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
                        <Button variant="contained" sx={{ mt: 3, ml: 1, color: 'white' }}>
                            Send
                        </Button>
                    </Box>
                </>
            </Paper>
        </Container>
    );
};

export default GuestForm;
