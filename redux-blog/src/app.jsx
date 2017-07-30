import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';

import { Provider } from 'react-redux';
import  store from './app/store';


import Layout from './app/layouts/Layout';
import PageNotFound from './app/containers/PageNotFound';
import UsersPage from './app/containers/UsersPage';
import UserPage from './app/containers/UserPage';
import PostPage from './app/containers/PostPage';
import CommentsPage from './app/containers/CommentsPage';
import HomePage from './app/containers/HomePage';
import BlogPage from './app/containers/BlogPage';
import posts from './app/config/posts';//array of articles


const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={HomePage} />
                <Route path="blog" component={BlogPage} data={posts}>
                    <Route path=":postId" component={PostPage}/>
                </Route>
                <Route path="users" component={UsersPage}>
                    <Route path=":userId" component={UserPage} />
                </Route>
                <Route path="comments" component={CommentsPage} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </Provider>
    , app);