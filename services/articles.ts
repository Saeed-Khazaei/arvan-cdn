import axios from "axios";
import { Article, ArticlesRespone, ArticleUpdate } from "../models/articles";
import { deleteArticleNextApi, getAllArticlesNextApi, getArticleNextApi, postArticleNextApi, updateArticleNextApi } from "../utils/endpoints";

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
      const res = await axios.get<{ article: Article }>(`${getArticleNextApi}?slug=${slug}`);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
  async updateArticle(slug: string, body: ArticleUpdate) {
    try {
      const res = await axios.put<{ article: Article }>(`${updateArticleNextApi}?slug=${slug}`, { ...body });
      return res.data;
    } catch (error: any) {
      console.log('error', error)
      throw error.response.data
    }
  },
  async postArticle(body: ArticleUpdate) {
    try {
      const res = await axios.post<{ article: Article }>(postArticleNextApi, { ...body });
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

}