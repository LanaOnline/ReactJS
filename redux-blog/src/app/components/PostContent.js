import React from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

@connect((store) => {
    return {
        user: store.user.user,
        is_fetching: store.user.is_fetching
    }
})
export default class PostContent extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchUser(this.props.post.userId));
    }
    render(){
        if (!this.props.post) {
            return <div>Post does not exist</div>
        }
        return (
            <div>
                { this.props.user.is_fetching ?
                    'Pending' :
                    <div>
                        <div className="post-heading">
                            <h2 className="post-title">{this.props.post.title}</h2>
                            <h3 className="post-subtitle">{this.props.post.subtitle}</h3>
                            <p className="post-meta">
                                Posted by <Link to={`/users/${this.props.post.userId}`}>
                                { this.props.user.username }
                            </Link> {this.props.post.date}
                            </p>
                        </div>
                        <p>{ this.props.post.body }</p>
                    </div>
                }
            </div>
        );
    }
}