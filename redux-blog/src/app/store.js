import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/userReducer';
import { usersReducer } from './reducers/usersReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { postsReducer } from './reducers/postsReducer';
import { postReducer } from './reducers/postReducer';

const middleware = applyMiddleware(promise(), logger());

const reducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    comments: commentsReducer,
    posts: postsReducer,
    post: postReducer
});

const store = createStore(reducer, middleware);

export default store;