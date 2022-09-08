import { Stack, Typography } from '@mui/material';
import React from 'react';
import EditArticle from '../../components/EditArticle';
import Layout from '../../components/Layout';

const create = () => {
  return (
    <Layout>
      <Stack spacing={3}>
        <Typography variant="h3" component="h3">
          Create Article
        </Typography>
        <EditArticle
          articleData={{
            slug: '',
            title: '',
            description: '',
            body: '',
            tagList: [],
            createdAt: '',
            updatedAt: '',
            favorited: false,
            favoritesCount: 0,
            author: {
              username: '',
              bio: null,
              image: '',
              following: false,
            },
          }}
          slug={''}
          create={true}
        />
      </Stack>
    </Layout>
  );
};

export default create;
