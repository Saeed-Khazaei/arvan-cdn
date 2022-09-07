import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllArticlesUrl, postLoginUser } from '../../../utils/endpoints';
import { ArticlesRespone } from '../../../models/articles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('first', getAllArticlesUrl)
  try {
    const { data } = await axios.get<ArticlesRespone>(getAllArticlesUrl,
      {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    );
    res.status(200).json(data)
  } catch (error: any) {
    const data = error.response.data.errors ?? error.response.statusText;
    res.status(error.response.status).json(data)
  }
}
