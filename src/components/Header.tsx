import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
    <AppBar
        position="absolute"
        color="default"
        elevation={1}
        sx={{
            position: 'relative',
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap justifyContent="center">
                Richard & Carolina&apos;s Wedding
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
