import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import articles from '../../services/articles';

const index: NextPage = () => {
  const fetchArticles = async () => {
    try {
      const res = await articles.getAllArticles();
      console.log('res', res);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <Layout>index</Layout>;
};

export default index;
