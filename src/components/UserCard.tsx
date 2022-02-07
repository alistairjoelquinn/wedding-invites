import { Box, Card, CardContent, Typography } from '@mui/material';

import { Guest } from './context/models';

interface Props {
    guest: Guest;
}

const UserCard = ({ guest }: Props) => (
    <Box>
        <Card variant="outlined" sx={{ p: 2, width: '60vw', mb: 4, backgroundColor: '#f8f8ff' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Name: {guest.fullName}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Email Address: {guest.email}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Attending: {guest.attending[0].toUpperCase() + guest.attending.substring(1)}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Bringing a partner: {guest.partner ? 'Yes' : 'No'}
                </Typography>
                {guest.partnerName && (
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        Partner name: {guest.partnerName}
                    </Typography>
                )}
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Bringing children: {guest.children ? 'Yes' : 'No'}
                </Typography>
                {guest.children && (
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        Number of children: {guest.numberOfChildren}
                    </Typography>
                )}
            </CardContent>
        </Card>
    </Box>
);

export default UserCard;
