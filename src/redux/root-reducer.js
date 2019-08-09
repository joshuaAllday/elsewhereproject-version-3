import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import articlesReducer from './articles/articles.reducers';
import usersReducer from './users/users.reducers';
import dropdownReducer from './dropdown/dropdown.reducers';
import modalReducer from './modal/modal.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer =  combineReducers({
    articles: articlesReducer,
    user: usersReducer,
    dropdown: dropdownReducer,
    modal: modalReducer
});

export default persistReducer(persistConfig, rootReducer);