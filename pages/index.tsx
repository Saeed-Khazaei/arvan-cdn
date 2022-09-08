import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { checkUser } from '../utils/checkUser';

export async function getServerSideProps(ctx: any) {
  return checkUser(ctx, true);
}

const Home: NextPage = () => {
  return <Layout>index</Layout>;
};

export default Home;
