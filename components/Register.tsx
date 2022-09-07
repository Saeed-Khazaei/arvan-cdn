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

const Register = () => {
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

  const [username, setUsername] = useState({
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

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername({
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
      const res = await user.userRegister({
        user: {
          email: email.value,
          password: password.value,
          username: username.value,
        },
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
      if (error.username) {
        setUsername({
          value: '',
          isError: true,
          errorMessage: error.username[0],
        });
        setSnackBar({
          open: true,
          errorMessage: 'Username ' + error.username[0],
        });
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
      console.log('error', error);
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
            Register Faild!
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
          Register
        </Typography>
        <TextField
          id="username"
          label="User"
          variant="outlined"
          type="text"
          fullWidth
          error={username.isError}
          helperText={username.isError ? username.errorMessage : ''}
          onChange={onChangeUsername}
        />
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
