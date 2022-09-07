import { api_url, next_url } from "./constants";

// External server endpoints
// User
export const postRegisterUser = `${api_url}/users`;
export const postLoginUser = `${api_url}/users/login`;
// Articles
export const getAllArticlesUrl = `${api_url}/articles`;

// Next server endpoints
// User
export const postRegisterUserNextApi = `${next_url}/api/user/register`;
export const postLoginUserNextApi = `${next_url}/api/user/login`;
// Articles
export const getAllArticlesNextApi = `${next_url}/api/articles/all`;