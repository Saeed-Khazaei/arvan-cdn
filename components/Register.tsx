import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const Register = () => {
  return (
    <>
      <Stack spacing={3}>
        <Typography
          variant="h3"
          component="div"
          mb={2}
          color="common.black"
          sx={{ textAlign: 'center' }}
        >
          Register
        </Typography>
        <TextField id="user" label="User" variant="outlined" fullWidth />
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary">
          Register
        </Button>
        <Stack spacing={1} direction="row">
          <Typography variant="body1" component="span" color="common.black">
            Already Registered?
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="common.black"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          >
            <Link href="/login">Login</Link>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
