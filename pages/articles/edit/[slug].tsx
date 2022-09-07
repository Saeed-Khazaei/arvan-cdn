import React from 'react';
import Layout from '../../../components/Layout';
import {
  Box,
  Grid,
  Card,
  Stack,
  TextField,
  Typography,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

const EditSlug = () => {
  return (
    <Layout>
      <Stack spacing={3}>
        <Typography variant="h3" component="h3">
          Edit Article
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
          <Stack sx={{ flex: 9 }} spacing={3}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              type="text"
              fullWidth
              error={false}
              helperText={''}
              // onChange={onChangeUsername}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              type="text"
              fullWidth
              error={false}
              helperText={''}
              // onChange={onChangeUsername}
            />
            <TextField
              id="body"
              label="Body"
              variant="outlined"
              type="text"
              fullWidth
              error={false}
              multiline
              rows={10}
              helperText={''}
              // onChange={onChangeUsername}
            />
          </Stack>
          <Stack sx={{ flex: 3 }} spacing={1}>
            <TextField
              id="tags"
              label="Tags"
              variant="outlined"
              type="text"
              fullWidth
              error={false}
              helperText={''}
              // onChange={onChangeUsername}
            />
            <Card variant="outlined">
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Label"
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ maxWidth: 'max-content' }}
        >
          Submit
        </Button>
      </Stack>
    </Layout>
  );
};

export default EditSlug;
