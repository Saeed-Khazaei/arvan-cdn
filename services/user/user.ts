import axios from "axios";
import { UserLogin, UserRegister } from "../../models/auth";
import { postLoginUserNextApi, postRegisterUserNextApi } from "../../utils/endpoints";

export default {
  async userLogin(user: UserLogin) {
    try {
      const res = await axios.post(postLoginUserNextApi, user);
      return await res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
  async userRegister(user: UserRegister) {
    try {
      const res = await axios.post(postRegisterUserNextApi, user);
      return await res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
}