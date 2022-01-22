import { Container } from '@mui/material';

const Page: React.FC = ({ children }) => (
    <Container
        component="main"
        disableGutters
        maxWidth={false}
        sx={{
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: 'bisque',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
    >
        {children}
    </Container>
);

export default Page;
