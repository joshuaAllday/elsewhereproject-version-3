import ArticlesActionTypes from './articles.types';

const INITIAL_STATE = {
    collections: null, 
    isFetching: true,
    errorMessage: undefined,
    isPosting: false,
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
        case ArticlesActionTypes.EDIT_ARTICLE_START :
            return {
                ...state,
                isFetching: true
            };
        case ArticlesActionTypes.EDIT_ARTICLE_SUCCESS :
            return {
                ...state,
                isFetching: true,
                Edited: action.payload
            };
        case ArticlesActionTypes.COLLECTION_UPDATE :
            let actions = action.payload;
            let existingArticle = state.collections.find(
                article => article.id === actions.id
            );
            if (existingArticle){
                state.collections.map(article => 
                    article.id === actions.id 
                    ? (Object.assign(article, {
                        firstname: actions.firstname,
                        lastname: actions.lastname,
                        articletitle: actions.articletitle,
                        latitude: actions.latitude,
                        longitude: actions.longitude,
                        article: actions.article
                    }))
                    
                    : article
                )
            
            }
            return {
                ...state,
                collection: state.collections,
                isFetching: false
            };
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