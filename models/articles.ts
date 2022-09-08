export interface ArticlesRespone {
  articles: Article[];
  articlesCount: number;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}


export interface ArticleUpdate {
  title?: string;
  description?: string;
  body?: string;
  tagList?: string[];
}