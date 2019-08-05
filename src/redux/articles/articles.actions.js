import  ArticlesActionTypes from './articles.types';

export const fetchCollectionsStart = () => ({
    type: ArticlesActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = data => ({
    type: ArticlesActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: data
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ArticlesActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());
        return fetch("/articles")
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCollectionsSuccess(data));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.messgae)));
    }
}; 
