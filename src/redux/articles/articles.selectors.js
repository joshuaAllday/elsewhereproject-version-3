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

export const selectComments = createSelector(
    [selectArticles],
    articles => articles.comments
);

export const selectIsCommentsFetching = createSelector(
    [selectArticles],
    articles => articles.isFetchingComments
);

export const selectCommentsError = createSelector(
    [selectArticles],
    articles => articles.errorMessage
);