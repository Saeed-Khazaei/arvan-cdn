import axios from "axios";
import { NextApiRequest } from "next";
import { UserLogin, UserRegister, UserResponse } from "../../models/auth";
import { getUser, getUserNextApi, postLoginUserNextApi, postRegisterUserNextApi } from "../../utils/endpoints";

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
  async getUserData(token: string) {
    try {
      const res = await axios.get<UserResponse>(getUser,
        {
          headers: {
            'content-type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Token ${token}`,
          }
        }
      );
      return await res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
  async getUserClientData() {
    try {
      const res = await axios.get<UserResponse>(getUserNextApi)
      return await res.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
}