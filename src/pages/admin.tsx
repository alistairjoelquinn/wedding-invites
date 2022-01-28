import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Guest } from '@/components/context/models';
import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import AdminSignIn from '@/components/AdminSignIn';

const UserCard = ({ guest }: { guest: Guest }) => (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {guest.fullName}
                </Typography>
                <Typography variant="h5" component="div">
                    Attending: {guest.attending ? 'yes' : 'no'}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Bringing a partner: {guest.partner ? 'yes' : 'no'}
                </Typography>
                {guest.partnerName && <Typography variant="body2">Partner name: {guest.partnerName}</Typography>}
                <Typography variant="h5" component="div">
                    Bringing children: {guest.children ? 'yes' : 'no'}
                </Typography>
                {guest.children && (
                    <Typography variant="body2">Number of children: {guest.numberOfChildren}</Typography>
                )}
            </CardContent>
        </Card>
    </Box>
);

const Admin: NextPage = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [guests, setGuests] = useState<Guest[]>([]);
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const getAdminGuestList = async () => {
        const res = await fetch('/api/admin-guest-list');
        const data = await res.json();
        setGuests(data);
    };

    const checkAdminPassword = async () => {
        const res = await fetch('/api/check-password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });
        const data = await res.json();
        if (data.admin) {
            setAdminAuthenticated(true);
            await getAdminGuestList();
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh', flexDirection: 'column' }}>
            {!session && <div className={spin.spin} />}
            {adminAuthenticated || (
                <AdminSignIn error={error} checkAdminPassword={checkAdminPassword} setPassword={setPassword} />
            )}
            {adminAuthenticated && guests.map((guest) => <UserCard key={guest._id} guest={guest} />)}
        </Container>
    );
};

export default Admin;
