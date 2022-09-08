import React from 'react';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import ArticlesTable from './ArticlesTable';

const Articles = () => {
  const router = useRouter();
  let { page } = router.query;

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    if (page == 1) {
      router.push(`/articles`);
    } else {
      router.push(`/articles/page/${page}`);
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h3" component="h3">
          All Posts
        </Typography>
        <Box>
          <ArticlesTable />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pagination
            count={10}
            page={page ? Number(page) : 1}
            onChange={onChangePage}
            color="primary"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Articles;
