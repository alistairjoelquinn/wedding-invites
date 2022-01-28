import { Box, Card, CardContent, Typography } from '@mui/material';

import { Guest } from './context/models';

interface Props {
    guest: Guest;
}

const UserCard = ({ guest }: Props) => (
    <Box>
        <Card variant="outlined" sx={{ p: 2, width: '60vw', mb: 4 }}>
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

export default UserCard;
