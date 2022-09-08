import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import { Stack, Typography } from '@mui/material';
import articles from '../../../services/articles';
import { useRouter } from 'next/router';
import { Article } from '../../../models/articles';
import EditArticle from '../../../components/EditArticle';

const EditSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState<Article>({
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
  });

  const fetchArticle = async () => {
    setLoading(true);
    if (slug && typeof slug == 'string') {
      try {
        const res = await articles.getArticle(slug);
        console.log('res', res);
        setLoading(false);
        setArticleData(res.article);
      } catch (error: any) {
        setLoading(false);
        console.log('error', error.message);
      }
    }
    setLoading(false);
    return;
  };

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  return (
    <Layout>
      {!slug || loading ? (
        'loading'
      ) : (
        <Stack spacing={3}>
          <Typography variant="h3" component="h3">
            Edit Article
          </Typography>
          <EditArticle
            articleData={articleData}
            slug={slug && typeof slug == 'string' ? slug : ''}
            create={false}
          />
        </Stack>
      )}
    </Layout>
  );
};

export default EditSlug;
