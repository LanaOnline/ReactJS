import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import PageNotFound from './app/pages/PageNotFound';
import UsersPage from './app/pages/UsersPage';
import UserPage from './app/pages/UserPage';
import PostPage from './app/pages/PostPage';
import CommentsPage from './app/pages/CommentsPage';
import HomePage from './app/pages/HomePage';
import BlogPage from './app/pages/BlogPage';
import posts from './app/config/posts';//array of articles

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={HomePage} />
            <Route path="blog" component={BlogPage} data={posts}>
                <Route path=":postId" component={PostPage}  data={posts}/>
            </Route>
            <Route path="users" component={UsersPage}>
                <Route path=":userId" component={UserPage} />
            </Route>
            <Route path="comments" component={CommentsPage} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
    , app);