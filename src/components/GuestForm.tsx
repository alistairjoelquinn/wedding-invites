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
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    R.S.V.P
                </Typography>
                <>
                    <FormFields />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => router.push('/')} variant="contained" sx={{ mt: 3, ml: 1 }}>
                            Back
                        </Button>
                        <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                            Send
                        </Button>
                    </Box>
                </>
            </Paper>
        </Container>
    );
};

export default GuestForm;
