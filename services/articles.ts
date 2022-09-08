import axios from "axios";
import { Article, ArticlesRespone } from "../models/articles";
import { deleteArticleNextApi, getAllArticlesNextApi, getArticleNextApi } from "../utils/endpoints";

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
      const res = await axios.delete(`${deleteArticleNextApi}?slug=${slug}`);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
  async getArticle(slug: string) {
    try {
      const res = await axios.get<Article>(`${getArticleNextApi}?slug=${slug}`);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

}