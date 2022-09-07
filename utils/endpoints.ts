import { api_url, next_url } from "./constants";

// External server endpoints
export const postRegisterUser = `${api_url}/users`;
export const postLoginUser = `${api_url}/users/login`;

// Next server endpoints
export const postRegisterUserNextApi = `${next_url}/api/user/register`;
export const postLoginUserNextApi = `${next_url}/api/user/login`;