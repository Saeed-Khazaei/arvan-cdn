import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { postArticleUrl } from '../../../utils/endpoints';
import { ArticleUpdate } from '../../../models/articles';
import { getCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = getCookie('userToken', { req, res })
  const slug = req.query.slug;
  const body: ArticleUpdate = req.body;
  try {
    const { data } = await axios.post(postArticleUrl, { "article": body },
      {
        headers: {
          'Authorization': `Token ${token}`,
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }
      }
    );
    res.status(200).json(data)
  } catch (error: any) {
    const data = error.response.data.errors ?? error.response.statusText;
    res.status(error.response.status).json(data)
  }
}
