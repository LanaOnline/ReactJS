import React from 'react';
import PostsList from '../components/PostsList';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import { fetchUsers } from '../actions/usersActions';

@connect((store) => {
    return {
        users: store.users.users,
        posts: store.posts.posts,
        is_fetching: store.posts.is_fetching && store.users.is_fetching
    }
})

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchPosts());
        this.props.dispatch(fetchUsers());
    }
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {
                                ( !this.props.children ) ?
                                ( this.props.is_fetching ?
                                    'Pending' :
                                    <PostsList posts={this.props.posts} users={this.props.users}/>) :
                                ( this.props.children )
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}