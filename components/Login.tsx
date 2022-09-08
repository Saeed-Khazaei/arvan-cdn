import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import user from '../services/user/user';
import { useRouter } from 'next/router';
import { NotificationType } from '../models/notification';
import Notification from './Notification';

const LoginComponent = () => {
  const router = useRouter();
  const [showSnackBar, setSnackBar] = useState<NotificationType>({
    open: false,
    message: '',
    mainMessage: '',
    type: 'success',
  });
  const handleCloseSnackBar = () => {
    setSnackBar({ open: false, message: '', mainMessage: '', type: 'error' });
  };
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
        setSnackBar({
          open: true,
          message: 'Email ' + error.email[0],
          mainMessage: 'Login Faild!',
          type: 'error',
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
          message: 'Password ' + error.password[0],
          mainMessage: 'Login Faild!',
          type: 'error',
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
          message: `User name and / or Password ${error['email or password'][0]}`,
          mainMessage: 'Login Faild!',
          type: 'error',
        });
      }
      console.log('error', error);
    }
  };

  return (
    <>
      <Notification
        open={showSnackBar.open}
        message={showSnackBar.message}
        mainMessage={showSnackBar.mainMessage}
        type={showSnackBar.type}
        onClose={handleCloseSnackBar}
      />
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
