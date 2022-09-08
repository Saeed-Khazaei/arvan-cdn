import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Login from '../components/Login';
import { checkUser } from '../utils/checkUser';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx, true, true);
}

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
        <Login />
      </Paper>
    </Box>
  );
};

export default login;
