import Container from '@mui/material/Container';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Guest } from '@/components/context/models';
import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import AdminSignIn from '@/components/AdminSignIn';
import UserCard from '@/components/UserCard';

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
            <>{!session && <div className={spin.spin} />}</>
            <>
                {adminAuthenticated || (
                    <AdminSignIn error={error} checkAdminPassword={checkAdminPassword} setPassword={setPassword} />
                )}
            </>
            <>{adminAuthenticated && guests.map((guest) => <UserCard key={guest._id} guest={guest} />)}</>
        </Container>
    );
};

export default Admin;
