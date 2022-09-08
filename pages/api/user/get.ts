import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserLogin, UserResponse } from '../../../models/auth';
import { getUser, postLoginUser } from '../../../utils/endpoints';
import { getCookie, setCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = getCookie('userToken', { req, res })
  console.log('token', token)

  try {
    const { data } = await axios.get<UserResponse>(getUser,
      {
        withCredentials: false,
        headers: {
          "Cookie": req.headers.cookie ?? '',
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': `Token ${token}`,
        }
      }
    );
    res.status(200).json(data)
  } catch (error: any) {
    const data = error.response.data.errors ?? error.response.statusText;
    res.status(error.response.status).json(data)
  }
}
