import { getCookie } from 'cookies-next';
import user from '../services/user/user';

export const checkUser = async (ctx: any, redirect: boolean = false, isLoginPage: boolean = false) => {
  const token = getCookie('userToken', { req: ctx.req, res: ctx.res }) ?? '';
  if (token) {
    try {
      const resp = await user.getUserData(`${token}`);
      console.log('resp', resp)
      if (redirect) {
        return {
          redirect: {
            permanent: false,
            destination: `/articles`,
          },
          props: { userName: resp.user.username },
        };
      }
      return {
        props: { userName: resp.user.username }
      }
    } catch (error) {
      console.log('getServerSideProps error', error);
      return {
        redirect: {
          permanent: false,
          destination: `/login`,
        },
        props: {},
      };
    }
  }
  else {
    if (isLoginPage) {
      return {
        props: {},
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
      props: {},
    };
  }
}