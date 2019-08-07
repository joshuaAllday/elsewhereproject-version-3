import ArticlesActionTypes from './articles.types';

const INITIAL_STATE = {
    collections: null, 
    isFetching: true,
    errorMessage: undefined,
    isPosting: true,
    Posted: null
};

const articlesReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case ArticlesActionTypes.FETCH_COLLECTIONS_START :
            return {
                ...state,
                isFetching: true
            };
        case ArticlesActionTypes.FETCH_COLLECTIONS_SUCCESS :
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case ArticlesActionTypes.POST_ARTICLE_START :
            return {
                ...state,
                isPosting: true
            };
        case ArticlesActionTypes.POST_ARTICLE_SUCCESS :
            return {
                ...state,
                isPosting: false, 
                Posted: action.payload
            };
        case ArticlesActionTypes.POST_ARTICLE_FAILURE :
        case ArticlesActionTypes.FETCH_COLLECTIONS_FAILURE :
            return {
                ...state,
                isFetching: true,
                errorMessage: action.payload
            };
        default : 
            return state;
    }
};

export default articlesReducer;