import axios from "axios";
import { Article, ArticlesRespone } from "../models/articles";
import { TagsRespone } from "../models/tags";
import { deleteArticleNextApi, getAllArticlesNextApi, getArticleNextApi, getTagsNextApi } from "../utils/endpoints";

export default {
  async getTags() {
    try {
      const res = await axios.get<TagsRespone>(getTagsNextApi);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
}