import React from 'react';
import UserProfile from '../components/UserProfile';

import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postsActions';

@connect((store) => {
    return {
        user: store.user.user,
        posts: store.posts.posts,
        is_fetching: store.user.is_fetching && store.posts.is_fetching
    }
})

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchUser(this.props.params.userId));
        this.props.dispatch(fetchPosts());
    }
    render() {
        let userPosts = this.props.posts.filter((post) => {
            return post.userId === this.props.user.id
        });
        return (
            <div>
                { this.props.is_fetching ?
                    'Please, wait...' :
                    <UserProfile user={this.props.user} posts={userPosts} />
                }
            </div>
        );
    }
}