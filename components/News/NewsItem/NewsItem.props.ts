import { Article } from '@/types/article.type';
import { Dispatch, SetStateAction } from 'react';

export interface NewsItemProps {
  article: Article;
  setArticles: Dispatch<SetStateAction<Article[]>>;
}
