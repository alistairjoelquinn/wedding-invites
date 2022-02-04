import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    error: string;
    checkAdminPassword: () => void;
    setPassword: Dispatch<SetStateAction<string>>;
}

export default function AdminSignIn({ error, checkAdminPassword, setPassword }: Props) {
    return (
        <Paper
            variant="elevation"
            sx={{ p: '20px', borderRadius: '10px', width: '50vw', backgroundColor: '#f8f8ff' }}
            elevation={1}
        >
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    {error || `Please enter the admin password`}
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ m: 2 }}
                />
                <Button variant="contained" onClick={checkAdminPassword} sx={{ color: 'white' }}>
                    Submit
                </Button>
            </Box>
        </Paper>
    );
}
