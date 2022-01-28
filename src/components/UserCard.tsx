import { Box, Card, CardContent, Typography } from '@mui/material';

import { Guest } from './context/models';

interface Props {
    guest: Guest;
}

const UserCard = ({ guest }: Props) => (
    <Box>
        <Card variant="outlined" sx={{ p: 2, width: '60vw', mb: 4 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Name: {guest.fullName}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Attending: {guest.attending ? 'yes' : 'no'}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Bringing a partner: {guest.partner ? 'yes' : 'no'}
                </Typography>
                {guest.partnerName && (
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        Partner name: {guest.partnerName}
                    </Typography>
                )}
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Bringing children: {guest.children ? 'yes' : 'no'}
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
