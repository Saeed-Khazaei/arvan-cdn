import React, { useEffect } from 'react';
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
import articles from '../../../services/articles';
import { useRouter } from 'next/router';
import tags from '../../../services/tags';

const EditSlug = () => {
  const router = useRouter();
  console.log('router', router);
  const fetchArticle = async () => {
    const { slug } = router.query;
    if (slug && typeof slug == 'string') {
      try {
        const res = await articles.getArticle(slug);
        console.log('res', res);
      } catch (error: any) {
        console.log('error', error.message);
      }
    }
    return;
  };

  const fetchTags = async () => {
    try {
      const res = await tags.getTags();
      console.log('res tags', res);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchArticle();
    fetchTags();
  }, []);

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
              placeholder="Title"
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
              placeholder="Description"
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
              placeholder="New tag"
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
