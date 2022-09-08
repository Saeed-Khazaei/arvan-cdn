import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCookie } from 'cookies-next';
import { getTagsUrl } from '../../utils/endpoints';
import { TagsRespone } from '../../models/tags';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = getCookie('userToken', { req, res })
  try {
    const { data } = await axios.get<TagsRespone>(getTagsUrl,
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
