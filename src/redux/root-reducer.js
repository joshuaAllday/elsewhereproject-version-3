import {combineReducers} from 'redux';

import articlesReducer from './articles/articles.reducers';

import usersReducer from './users/users.reducers';


const rootReducer =  combineReducers({
    articles: articlesReducer,
    user: usersReducer
});

export default rootReducer;