import { Container } from '@mui/material';
import { useRouter } from 'next/router';

const Page: React.FC = ({ children }) => {
    const router = useRouter();

    return (
        <Container
            component="main"
            disableGutters
            maxWidth={false}
            sx={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: router.pathname === '/signin' ? `rgb(247, 247, 247)` : `rgb(255, 255, 255)`,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {children}
        </Container>
    );
};

export default Page;
