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

export const postArticleStart = () => ({
    type: ArticlesActionTypes.POST_ARTICLE_START
});

export const postArticleSuccess = data => ({
    type: ArticlesActionTypes.POST_ARTICLE_SUCCESS,
    payload: data
});

export const postArticleFailure = errorMessage => ({
    type: ArticlesActionTypes.POST_ARTICLE_FAILURE,
    payload: errorMessage
});

export const postArticleStartAsync = ({firstname,lastname,email,articletitle,latitude,longitude,tag,article}) => {
    return dispatch => {
        dispatch(postArticleStart());
        return fetch('/post', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                articletitle: articletitle,
                latitude: latitude,
                longitude: longitude,
                tag: tag,
                article: article
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.success === true){
                dispatch(postArticleSuccess(data))
            } else {
                dispatch(postArticleFailure(data))
            }
        })
        .catch(error => dispatch(postArticleFailure(error.message)))
    }
};

export const editArticleStart = () => ({
    type: ArticlesActionTypes.EDIT_ARTICLE_START
});

export const editArticleSuccess = data => ({
    type: ArticlesActionTypes.EDIT_ARTICLE_SUCCESS,
    payload: data
});

export const editArticleFailure = errorMessage => ({
    type: ArticlesActionTypes.EDIT_ARTICLE_FAILURE,
    payload: errorMessage
});

export const editArticleStartAsync = ({id, firstname,lastname,articletitle,latitude,longitude,article}) => {
    return dispatch => {
        dispatch(editArticleStart());
        let token = JSON.parse(window.localStorage.getItem('persist:root'));
        token.user = JSON.parse(token.user);
        let tokens = token.user.currentUser;
        return fetch('/editarticle', {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                authorization: tokens
            },
            body: JSON.stringify({
                id: id,
                firstname: firstname,
                lastname: lastname,
                articletitle: articletitle,
                latitude: latitude,
                longitude: longitude,
                article: article
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === true){
                dispatch(editArticleSuccess(data))
            } else {
                dispatch(editArticleFailure(data))
            }
        })
        .catch(error => dispatch(editArticleFailure(error.message)))
    }
};
