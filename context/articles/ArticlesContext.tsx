import { useContext } from 'react';
import { ArticlesContext } from './ArticlesProvider';

export default function articlesContext() {
  const articles = useContext(ArticlesContext);
  if (!articles) {
    throw new Error('articles Context must be used within articlesProvider');
  }
  return articles;
}
