import { Box, Pagination, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Article } from '../models/articles';
import articles from '../services/articles';
import ArticlesTable from './ArticlesTable';

const Articles = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const router = useRouter();
  let { page } = router.query;

  const fetchArticles = async () => {
    try {
      const res = await articles.getAllArticles();
      console.log('res', res);
      setArticlesData(res.articles);
      setArticlesCount(res.articlesCount);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log('page', page);
    if (page == 1) {
      router.push(`/articles`);
    } else {
      router.push(`/articles/page/${page}`);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h3" component="h3">
          All Posts
        </Typography>
        <Box>
          <ArticlesTable articles={articlesData} />
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
