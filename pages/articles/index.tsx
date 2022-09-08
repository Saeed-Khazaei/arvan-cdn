import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import { Article } from '../../models/articles';
import articles from '../../services/articles';
import ArticlesTable from '../../components/ArticlesTable';
import { checkUser } from '../../utils/checkUser';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx);
}

const index: NextPage = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);

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
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Layout>
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
          Pagination
          {/* <Pagination
            count={10}
            page={1}
            onChange={onChangePage}
            color="primary"
          /> */}
        </Box>
      </Stack>
    </Layout>
  );
};

export default index;
