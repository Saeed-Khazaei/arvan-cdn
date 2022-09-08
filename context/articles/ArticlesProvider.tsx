import { createContext, useEffect, useReducer } from 'react';
import { ArticlesIContextProps, ArticlesRespone } from '../../models/articles';
import articles from '../../services/articles';
import { articlesContextActions } from './Store/actions';
import {
  articlesContextInitialState,
  articlesContextReducer,
} from './Store/reducer';

export const ArticlesContext = createContext({} as ArticlesIContextProps);
function ArticlesContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    articlesContextReducer,
    articlesContextInitialState
  );

  const value = {
    ...state,
    setArticlesData: (data: ArticlesRespone) => {
      dispatch({
        type: articlesContextActions.SET_ARTICLES_DATA,
        payload: data,
      });
    },
    setArticlesDelete: (slug: string) => onDeleteArticle(slug),
  };

  const onDeleteArticle = (slug: string) => {
    console.log('slug', slug);
    const newArticles = value.articles.filter((i) => i.slug != slug);
    console.log('newArticles', newArticles);
    dispatch({
      type: articlesContextActions.SET_ARTICLES_DELETE,
      payload: {
        articles: newArticles,
        articlesCount: value.articlesCount - 1,
      },
    });
  };

  const fetchArticles = async () => {
    try {
      const res = await articles.getAllArticles();
      value.setArticlesData(res);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesContextProvider;
