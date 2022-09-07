import axios from "axios";
import { ArticlesRespone } from "../models/articles";
import { getAllArticlesNextApi } from "../utils/endpoints";

export default {
  async getAllArticles() {
    try {
      const res = await axios.get(getAllArticlesNextApi);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

}