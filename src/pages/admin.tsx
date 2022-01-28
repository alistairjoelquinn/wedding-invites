import { Box, Button, Card, CardContent, Container, TextField, Typography, Paper } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Guest } from '@/components/context/models';
import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';

const UserCard = () => (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    Big text
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />a benevolent smile
                </Typography>
            </CardContent>
        </Card>
    </Box>
);

const Admin: NextPage = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(true);
    const [guests, setGuests] = useState<Guest[]>([]);
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const checkAdminPassword = async () => {};

    const getAdminGuestList = async () => {
        const res = await fetch('/api/admin-guest-list');
        const data = await res.json();
        setGuests(data);
    };

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh', flexDirection: 'column' }}>
            {!session && <div className={spin.spin} />}
            <Paper variant="elevation" sx={{ p: '20px', borderRadius: '10px' }} elevation={1}>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Please enter the admin password
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
                    />
                    <Button variant="contained" onClick={getAdminGuestList} sx={{ color: 'white' }}>
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Admin;
