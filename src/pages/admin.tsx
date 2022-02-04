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
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';

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
            <>
                {adminAuthenticated ||
                    (!session ? (
                        <div className={spin.spin} />
                    ) : (
                        <AdminSignIn error={error} checkAdminPassword={checkAdminPassword} setPassword={setPassword} />
                    ))}
            </>
            <>
                {adminAuthenticated && (
                    <Box sx={{ p: 4 }}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl sx={{ transform: 'translateY(15px)' }}>
                                        <FormLabel required id="demo-radio-buttons-group-label">
                                            Are you bringing a partner or plus one?
                                        </FormLabel>
                                        <RadioGroup
                                            onChange={handleChange}
                                            aria-labelledby="rsvp-radio-buttons-group-label"
                                            defaultValue={false}
                                            name="partner"
                                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                        >
                                            <FormControlLabel value control={<Radio />} label="Yes" />
                                            <FormControlLabel value={false} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        {guests.map((guest) => (
                            <UserCard key={guest._id} guest={guest} />
                        ))}
                    </Box>
                )}
            </>
        </Container>
    );
};

export default Admin;
