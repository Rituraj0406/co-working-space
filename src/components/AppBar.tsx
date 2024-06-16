import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Bhive from '../assets/bhive-landing-image/image 54.png';
import { IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'white' }}>
        <Toolbar sx={{ paddingLeft: {sm: '25px', lg: '120px'}, paddingRight: {sm: '25px', lg: '120px'}  }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingTop: '25px', paddingBottom: '25px' }}>
            <img src={Bhive} alt='Logo'/>
          </Typography>
          <Box sx={{ border: '1px solid #F2B304', borderRadius: '4px' }}>
            <IconButton disableRipple={false} disableFocusRipple={false}>
                <CallIcon sx={{ color: '#FFBB00' }}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
