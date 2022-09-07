import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserRegister } from '../../../models/auth';
import { postRegisterUser } from '../../../utils/endpoints';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let model: UserRegister = req.body;

  try {
    const resp = await axios.post(postRegisterUser, model,
      {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    );
    const data = await resp.data;
    res.status(200).json(data)
  } catch (error: any) {
    const data = error.response.data.errors ?? error.response.statusText;
    res.status(error.response.status).json(data)
  }
}
