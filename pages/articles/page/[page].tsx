import { NextPage } from 'next';
import React from 'react';
import { checkUser } from '../../../utils/checkUser';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx);
}

const Page: NextPage<{ userName: string }> = (props) => {
  return <div>[page]</div>;
};

export default Page;
