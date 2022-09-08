import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar, Typography } from '@mui/material';
import { NotificationType } from '../models/notification';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (
  props: NotificationType & {
    onClose(): void;
  }
) => {
  const handleCloseSnackBar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    // setSnackBar({ open: false, message: '' });
    props.onClose();
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={props.type}
          sx={{ width: '100%', color: '#fff' }}
        >
          {props.mainMessage ? (
            <Typography variant="body1" component="span">
              {props.mainMessage}{' '}
            </Typography>
          ) : null}
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
