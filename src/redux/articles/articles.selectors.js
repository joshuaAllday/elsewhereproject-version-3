import { createSelector } from 'reselect';

const selectArticles = state => state.articles;

export const selectCollections = createSelector(
    [selectArticles],
    articles => articles.collections
);

export const selectIsCollectionFetching = createSelector(
    [selectArticles],
    articles => articles.isFetching
);