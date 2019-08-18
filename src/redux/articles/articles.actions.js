import  ArticlesActionTypes from './articles.types';

// fetch articles functions

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
        return fetch(process.env.BACKEND + "/articles")
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCollectionsSuccess(data));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.messgae)));
    }
}; 

// post article functions

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
        return fetch(process.env.BACKEND + '/post', {
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
                alert('Posted Article')
                dispatch(postArticleSuccess(data.article))
            } else {
                alert('Failed to post article')
                dispatch(postArticleFailure(data))
            }
        })
        .catch(error => {
            alert('Failed to post article')
            dispatch(postArticleFailure(error.message))
        })
    }
};

// edit Article functions

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
        return fetch(process.env.BACKEND + '/editarticle', {
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
                dispatch(editArticleSuccess(data.article));
            } else {
                dispatch(editArticleFailure(data))
            }
        })
        .catch(error => {
            alert('Failed to edit article')
            dispatch(editArticleFailure(error.message))
        })
    }
};

// delete article functions

export const deleteArticleStart = () => ({
    type: ArticlesActionTypes.EDIT_DELETE_START
});

export const deleteArticleSuccess = num => ({
    type: ArticlesActionTypes.EDIT_DELETE_SUCCESS,
    payload: num
});

export const deleteArticleFailure = errorMessage => ({
    type: ArticlesActionTypes.EDIT_DELETE_FAILURE,
    payload: errorMessage
});

export const deleteArticleStartAsync = ({id, num}) => {
    return dispatch => {
        dispatch(deleteArticleStart());
        let token = JSON.parse(window.localStorage.getItem('persist:root'));
        token.user = JSON.parse(token.user);
        let tokens = token.user.currentUser;
        return fetch(process.env.BACKEND + '/delete', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                authorization: tokens
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === true){
                dispatch(deleteArticleSuccess(num))
            }
        })
        .catch(error => {
            alert('failed to delete post')
            dispatch(deleteArticleFailure(error.message))
        })
    }
};


// report article 

export const reportArticleStart = () => ({
    type: ArticlesActionTypes.REPORT_ARTICLE_START
});

export const reportArticleSuccess = data => ({
    type: ArticlesActionTypes.REPORT_ARTICLE_SUCCESS,
    payload: data
});

export const reportArticleFailure = errorMessage => ({
    type: ArticlesActionTypes.REPORT_ARTICLE_FAILURE,
    payload: errorMessage
});

export const reportArticleStartAsync = ({id, articletitle, firstname, lastname}) => {
    return dispatch => {
        dispatch(reportArticleStart());
        fetch(process.env.BACKEND + '/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify({
                id:id,
                articletitle:articletitle,
                firstname: firstname,
                lastname: lastname
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                alert('Reported Article')
                dispatch(reportArticleSuccess(data))
            }
        })
        .catch(error => {
            alert('Failed To Report Article')
            dispatch(reportArticleFailure())
        })
    }
};