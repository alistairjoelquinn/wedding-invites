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
    //   borderBottom: (t) => `1px solid ${t.palette.divider}`,
    }}
  >
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap justifyContent={"center"}>
        Richard & Carolina's Wedding
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
