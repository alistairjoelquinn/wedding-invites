import { Guest } from '@/components/context/models';
import { Box, Card, CardContent, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';

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
    const [guests, setGuests] = useState<Guest[]>([]);

    const getAdminGuestList = async () => {
        const res = await fetch('/api/admin-guest-list');
        const data = await res.json();
        setGuests(data);
    };

    return (
        <div>
            <p>Admin page</p>
            <button type="button" onClick={getAdminGuestList}>
                Get Guest List
            </button>
        </div>
    );
};

export default Admin;
