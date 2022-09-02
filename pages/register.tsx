import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Login from '../components/Login';
import Register from '../components/Register';

const login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{ width: '90%', maxWidth: '400px', padding: 3 }}>
        <Register />
      </Paper>
    </Box>
  );
};

export default login;
