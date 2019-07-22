import {combineReducers} from 'redux';

import articlesReducer from './articles/articles.reducers';


const rootReducer =  combineReducers({
    articles: articlesReducer
});

export default rootReducer;