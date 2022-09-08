import { ArticlesContextAction, ArticlesRespone } from "../../../models/articles";
import { articlesContextActions } from "./actions";

export const articlesContextInitialState: ArticlesRespone = {
    articles: [],
    articlesCount: 0
}

export const articlesContextReducer = (state: ArticlesRespone, action: ArticlesContextAction): ArticlesRespone => {
    switch (action.type) {
        case articlesContextActions.SET_ARTICLES_DATA:
            return { ...action.payload };
        case articlesContextActions.SET_ARTICLES_DELETE:
            return { ...action.payload };
        default:
            return state;
    }
}