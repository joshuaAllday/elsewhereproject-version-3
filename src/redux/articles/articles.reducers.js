import ArticlesActionTypes from './articles.types';
import { collectionEdit, collectionDelete, collectionAdd } from './articles.utils';

const INITIAL_STATE = {
    collections: null, 
    isFetching: true,
    errorMessage: undefined,
    isPosting: false,
    Posted: null,
    Edited:null,
    Deleted: null,
    reported: null
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
                isFetching: true
            };
        case ArticlesActionTypes.POST_ARTICLE_SUCCESS :
            return {
                ...state, 
                collections: collectionAdd(state.collections, action.payload),
                isFetching: false
            };
        case ArticlesActionTypes.EDIT_ARTICLE_START :
            return {
                ...state,
                isFetching: true
            };
        case ArticlesActionTypes.EDIT_ARTICLE_SUCCESS :
            return {
                ...state,
                isFetching: false,
                collections: collectionEdit(state.collections, action.payload)
            };
        case ArticlesActionTypes.EDIT_DELETE_START :
            return {
                ...state,
                isPosting: true

            };
        case ArticlesActionTypes.EDIT_DELETE_SUCCESS :
            return {
                ...state,
                isPosting: false,
                collections: collectionDelete(state.collections, action.payload)
            };
        case ArticlesActionTypes.REPORT_ARTICLE_SUCCESS :
            return {
                ...state, 
                reported: action.payload
            };
        case ArticlesActionTypes.REPORT_ARTICLE_FAILURE :
        case ArticlesActionTypes.EDIT_DELETE_FAILURE :
        case ArticlesActionTypes.EDIT_ARTICLE_FAILURE :
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