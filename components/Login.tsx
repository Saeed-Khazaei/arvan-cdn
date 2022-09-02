import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const LoginComponent = () => {
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
          Login
        </Typography>
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Stack spacing={1} direction="row">
          <Typography variant="body1" component="span" color="common.black">
            Don't have account?
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="common.black"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          >
            <Link href="/register"> Register Now</Link>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default LoginComponent;
