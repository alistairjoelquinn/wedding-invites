import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Container,
    Paper,
    Typography,
    Button,
} from '@mui/material';
import type { NextPage } from 'next';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Guest } from '@/components/context/models';
import AdminSignIn from '@/components/AdminSignIn';
import UserCard from '@/components/UserCard';
import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import stringToBool from '@/lib/stringToBool';

interface ToggleValues {
    attending?: 'yes' | 'no' | 'maybe';
    partner?: boolean;
    children?: boolean;
    diet?: boolean;
}

const Admin: NextPage = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [guests, setGuests] = useState<Guest[]>([]);
    const [values, setValues] = useState<ToggleValues>({});
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const guestList = useMemo(
        () =>
            guests
                .filter((guest) => (values.attending ? guest.attending === values.attending : true))
                .filter((guest) => ('partner' in values ? guest.partner === values.partner : true))
                .filter((guest) => ('children' in values ? guest.children === values.children : true))
                .filter((guest) => ('diet' in values ? !!guest.diet === values.diet : true)),
        [values, guests],
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            e.target.name === 'attending' ||
            e.target.name === 'partner' ||
            e.target.name === 'children' ||
            e.target.name === 'diet'
        ) {
            setValues({
                ...values,
                [e.target.name]: stringToBool(e.target.value),
            });
        }
    };

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
        <Container
            component="main"
            sx={{ ...flex, minHeight: '100vh', flexDirection: 'column', justifyContent: 'flex-start' }}
        >
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
                    <>
                        {guests.length ? (
                            <Box sx={{ p: 4 }}>
                                <Paper variant="outlined" sx={{ p: 4, mb: 4, width: '60vw' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            letterSpacing: '0.5px',
                                            textAlign: 'center',
                                            mb: 2,
                                        }}
                                        variant="h4"
                                    >
                                        Filters
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                        >
                                            <FormControl>
                                                <FormLabel id="attending">Attending:</FormLabel>
                                                <RadioGroup
                                                    onChange={handleChange}
                                                    aria-labelledby="rsvp-radio-buttons-group-label"
                                                    defaultValue={false}
                                                    name="attending"
                                                    sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
                                                </RadioGroup>
                                                <Button variant="outlined">Remove filter</Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                        >
                                            <FormControl>
                                                <FormLabel id="partner">Bringing a partner:</FormLabel>
                                                <RadioGroup
                                                    onChange={handleChange}
                                                    aria-labelledby="rsvp-radio-buttons-group-label"
                                                    name="partner"
                                                    sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                                >
                                                    <FormControlLabel value control={<Radio />} label="Yes" />
                                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Button variant="outlined">Remove filter</Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                        >
                                            <FormControl>
                                                <FormLabel id="partner">Bringing children:</FormLabel>
                                                <RadioGroup
                                                    onChange={handleChange}
                                                    aria-labelledby="rsvp-radio-buttons-group-label"
                                                    name="children"
                                                    sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                                >
                                                    <FormControlLabel value control={<Radio />} label="Yes" />
                                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Button variant="outlined">Remove filter</Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                        >
                                            <FormControl>
                                                <FormLabel id="diet">Dietry Requirements:</FormLabel>
                                                <RadioGroup
                                                    onChange={handleChange}
                                                    aria-labelledby="rsvp-radio-buttons-group-label"
                                                    name="diet"
                                                    sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                                >
                                                    <FormControlLabel value control={<Radio />} label="Yes" />
                                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Button variant="outlined">Remove filter</Button>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ p: 4, mb: 4, width: '60vw' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            letterSpacing: '0.5px',
                                            textAlign: 'center',
                                            mb: 2,
                                        }}
                                        variant="h4"
                                    >
                                        Numbers
                                    </Typography>
                                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                        Number of responses: {guestList.length}
                                    </Typography>
                                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                        Number of adults: {guestList.reduce((a, b) => a + 1 + (b.partner ? 1 : 0), 0)}
                                    </Typography>
                                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                        Number of children:{' '}
                                        {guestList.reduce((a, b) => a + (b.children ? b.numberOfChildren : 0), 0)}
                                    </Typography>
                                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                        Total number of guests:{' '}
                                        {guestList.reduce(
                                            (a, b) =>
                                                a + 1 + (b.partner ? 1 : 0) + (b.children ? b.numberOfChildren : 0),
                                            0,
                                        )}
                                    </Typography>
                                </Paper>
                                {Object.keys(values).length
                                    ? guestList.map((guest) => <UserCard key={guest._id} guest={guest} />)
                                    : guests.map((guest) => <UserCard key={guest._id} guest={guest} />)}
                            </Box>
                        ) : (
                            <div className={spin.spin} />
                        )}
                    </>
                )}
            </>
        </Container>
    );
};

export default Admin;
