import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import user from '../services/user/user';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useRouter } from 'next/router';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginComponent = () => {
  const router = useRouter();
  const [showSnackBar, setSnackBar] = useState({
    open: false,
    errorMessage: '',
  });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({
    value: '',
    isError: false,
    errorMessage: '',
  });

  const [password, setPassword] = useState({
    value: '',
    isError: false,
    errorMessage: '',
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      value: e.target.value,
      isError: false,
      errorMessage: 'Set Correct Value',
    });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      value: e.target.value,
      isError: false,
      errorMessage: '',
    });
  };

  const handleCloseSnackBar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ open: false, errorMessage: '' });
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await user.userLogin({
        user: { email: email.value, password: password.value },
      });
      setLoading(false);
      router.push('/');
    } catch (error: any) {
      setLoading(false);
      if (error.email) {
        setEmail({
          value: '',
          isError: true,
          errorMessage: error.email[0],
        });
        setSnackBar({ open: true, errorMessage: 'Email ' + error.email[0] });
      }
      if (error.password) {
        setPassword({
          value: '',
          isError: true,
          errorMessage: error.password[0],
        });
        setSnackBar({
          open: true,
          errorMessage: 'Password ' + error.password[0],
        });
      }
      if (error['email or password']) {
        setEmail({
          value: '',
          isError: true,
          errorMessage: 'required field',
        });
        setPassword({
          value: '',
          isError: true,
          errorMessage: 'required field',
        });
        setSnackBar({
          open: true,
          errorMessage: `User name and / or Password ${error['email or password'][0]}`,
        });
      }
      console.log('error', error);
      // console.log('error', JSON.parse(error));
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={showSnackBar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="error"
          sx={{ width: '100%' }}
        >
          <Typography variant="body1" component="span">
            Login Faild!
          </Typography>{' '}
          {showSnackBar.errorMessage}
        </Alert>
      </Snackbar>
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
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          error={email.isError}
          helperText={email.isError ? email.errorMessage : ''}
          onChange={onChangeEmail}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          error={password.isError}
          helperText={password.isError ? password.errorMessage : ''}
          onChange={onChangePassword}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onLogin}
        >
          {loading ? <CircularProgress size="22px" color="inherit" /> : 'Login'}
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
