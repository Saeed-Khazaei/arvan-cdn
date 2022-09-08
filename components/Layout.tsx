import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { Stack } from '@mui/material';

const Layout = (props: { children: React.ReactNode; user: string }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log('props.user', props.user);
  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Drawer anchor="left" open={openSidebar} onClose={(_) => toggleDrawer()}>
        <Sidebar />
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'common.black' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                display: 'block',
                '@media (min-width:780px)': {
                  display: 'none',
                },
              }}
              onClick={toggleDrawer}
            >
              ☰
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Stack
                direction={{ sx: 'column', sm: 'row' }}
                alignItems={{ sx: 'flex-start', sm: 'center' }}
                spacing={{ sx: 1, sm: 2 }}
              >
                <Typography variant="h6" component="span">
                  Arvan Challenge
                </Typography>
                <Typography variant="body1" component="span">
                  Welcome {props.user}
                </Typography>
              </Stack>
            </Box>
            <Link href="/login">
              <a>
                <Button color="info" variant="outlined">
                  Logout
                </Button>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            display: 'none',
            '@media (min-width:780px)': {
              display: 'block',
            },
          }}
        >
          <Sidebar />
        </Box>
        <Box sx={{ flex: 1 }} p={2}>
          {props.children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
