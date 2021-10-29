import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Article,
  ArticlesResponse,
  ArticleState,
} from "store/types/article.type";
import ArticleService from "services/Article.service";

export const queryLimit = 10;

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (_, { dispatch }) => {
    try {
      const articles = await ArticleService.findAll(0, queryLimit);
      dispatch(setArticles(articles));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getArticle = createAsyncThunk(
  "articles/getArticle",
  async (slug: string, { dispatch }) => {
    try {
      const article = await ArticleService.findOne(slug);
      dispatch(setArticle(article));
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: ArticleState = {
  articles: null,
  article: null,
  isLoaded: false,
  articlesCount: 0,
  offset: 0,
  limit: queryLimit,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, { payload }: PayloadAction<ArticlesResponse>) {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
    },
    setArticle(state, { payload }: PayloadAction<Article>) {
      state.article = payload;
    },
  },
});

export const { setArticles, setArticle } = articleSlice.actions;
export default articleSlice.reducer;