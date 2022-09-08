import { NextPage } from 'next';
import React from 'react';
import Articles from '../../../components/Articles';
import Layout from '../../../components/Layout';
import ArticlesContextProvider from '../../../context/articles/ArticlesProvider';
import { checkUser } from '../../../utils/checkUser';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx);
}

const Page: NextPage<{ userName: string }> = (props) => (
  <ArticlesContextProvider>
    <Layout user={props.userName}>
      <Articles />
    </Layout>
  </ArticlesContextProvider>
);

export default Page;
