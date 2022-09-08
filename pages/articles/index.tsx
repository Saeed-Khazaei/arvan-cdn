import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { checkUser } from '../../utils/checkUser';
import Articles from '../../components/Articles';
import ArticlesContextProvider from '../../context/articles/ArticlesProvider';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx);
}

const index: NextPage<{ userName: string }> = (props) => {
  return (
    <ArticlesContextProvider>
      <Layout user={props.userName}>
        <Articles />
      </Layout>
    </ArticlesContextProvider>
  );
};

export default index;
