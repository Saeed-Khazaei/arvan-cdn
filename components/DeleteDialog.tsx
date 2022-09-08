import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import articles from '../services/articles';
import { useState } from 'react';
import { NotificationType } from '../models/notification';
import Notification from './Notification';
import articlesContext from '../context/articles/ArticlesContext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const DeleteDialog = (props: { id: string }) => {
  const articlesCtx = articlesContext();
  const [open, setOpen] = React.useState(false);
  const [showSnackBar, setSnackBar] = useState<NotificationType>({
    open: false,
    message: '',
    mainMessage: '',
    type: 'success',
  });
  const handleCloseSnackBar = () => {
    setSnackBar({ open: false, message: '', mainMessage: '', type: 'error' });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteArticle = async () => {
    try {
      const res = await articles.deleteArticle(props.id);
      articlesCtx.setArticlesDelete(props.id);
      setSnackBar({
        open: true,
        message: 'Article deleted successfly',
        type: 'success',
      });
      handleClose();
    } catch (error: any) {
      handleClose();
      console.log('error', error.message);
    }
  };

  return (
    <div>
      <Notification
        open={showSnackBar.open}
        message={showSnackBar.message}
        mainMessage={showSnackBar.mainMessage}
        type={showSnackBar.type}
        onClose={handleCloseSnackBar}
      />
      <MenuItem disableRipple onClick={handleClickOpen}>
        Delete
      </MenuItem>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h5" component="span">
            Delete Article
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ width: { sx: '320px', sm: '420px' } }}>
          <Typography gutterBottom>Are you sure to delete Article?</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="inherit" onClick={handleClose}>
            No
          </Button>
          <Button
            autoFocus
            variant="contained"
            color="error"
            onClick={onDeleteArticle}
          >
            Yes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DeleteDialog;
