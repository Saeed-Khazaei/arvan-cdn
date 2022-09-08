import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { checkUser } from '../../utils/checkUser';
import Articles from '../../components/Articles';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx);
}

const index: NextPage<{ userName: string }> = (props) => {
  return (
    <Layout user={props.userName}>
      <Articles />
    </Layout>
  );
};

export default index;
