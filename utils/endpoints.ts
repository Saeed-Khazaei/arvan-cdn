import { api_url, next_url } from "./constants";

// External server endpoints
// User
export const postRegisterUser = `${api_url}/users`;
export const postLoginUser = `${api_url}/users/login`;
export const getUser = `${api_url}/user`;
// Articles
export const getAllArticlesUrl = `${api_url}/articles`;
export const deleteArticleUrl = `${api_url}/articles`;
export const getArticleUrl = `${api_url}/articles`;
export const updateArticleUrl = `${api_url}/articles`;
export const postArticleUrl = `${api_url}/articles`;
export const getTagsUrl = `${api_url}/tags`;

// Next server endpoints
// User
export const postRegisterUserNextApi = `${next_url}/api/user/register`;
export const postLoginUserNextApi = `${next_url}/api/user/login`;
export const getUserNextApi = `${next_url}/api/user/get`;
// Articles
export const getAllArticlesNextApi = `${next_url}/api/articles/all`;
export const deleteArticleNextApi = `${next_url}/api/articles/delete`;
export const getArticleNextApi = `${next_url}/api/articles/get`;
export const updateArticleNextApi = `${next_url}/api/articles/update`;
export const postArticleNextApi = `${next_url}/api/articles/post`;
export const getTagsNextApi = `${next_url}/api/tags`;