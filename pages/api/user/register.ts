import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserRegister, UserResponse } from '../../../models/auth';
import { postRegisterUser } from '../../../utils/endpoints';
import { setCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let model: UserRegister = req.body;

  try {
    const { data } = await axios.post<UserResponse>(postRegisterUser, model,
      {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    );
    setCookie('userToken', data.user.token, {
      req,
      res,
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 60,
      sameSite: 'lax',
    })
    res.status(200).json(data)
  } catch (error: any) {
    const data = error.response.data.errors ?? error.response.statusText;
    res.status(error.response.status).json(data)
  }
}
