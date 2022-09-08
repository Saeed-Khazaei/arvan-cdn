import axios from "axios";
import { ArticlesRespone } from "../models/articles";
import { deleteArticleUrl, getAllArticlesNextApi } from "../utils/endpoints";

export default {
  async getAllArticles() {
    try {
      const res = await axios.get<ArticlesRespone>(getAllArticlesNextApi);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
  async deleteArticle(slug: string) {
    try {
      const res = await axios.get<any>(`${deleteArticleUrl}?slug=${slug}`);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

}