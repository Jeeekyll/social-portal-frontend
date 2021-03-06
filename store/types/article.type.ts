import { User } from "./user.type";
import { ArticleComment } from "./comment.type";
import { Category } from "./category.type";

export interface Article {
  id: number;
  articlesCount: number;
  title: string;
  description: string;
  body: string;
  cover?: string;
  commentariesCount: number;
  favouritesCount: number;
  createdAt: Date | string;
  slug: string;
  tagList: [];
  author: User;
  comments: ArticleComment[];
  category: Category;
}

export interface ArticleState {
  articles: Article[] | null;
  article: Article | null;
  isLoaded: boolean;
  articlesCount: number;
  limit: number;
  hasMore: boolean;
  offset: number;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface UserArticlesResponse {
  articles: Article[];
}

export interface ArticleResponse {
  article: Article;
}

export interface CreateArticleDto {
  title: string;
  description: string;
  body: string;
  category: number;
}

export type UpdateArticleDto = CreateArticleDto;
