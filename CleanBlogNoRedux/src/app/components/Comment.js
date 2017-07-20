import React from 'react';

import { Link } from 'react-router';
import posts from '../config/posts'; //array of posts
import axios from 'axios';

export default class Comment extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: [ { "name": "No users found"} ]
        };

    }
    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let {data} = response;

                this.setState({
                    users: data
                });
            });
    }

    render() {
        //find post in array by postId
        let calledPost = this.props.postId;
        let post = posts.find((post) => post.id == calledPost );

        if (!post)
            return null;

        //add link to the blog post or do not
        let link = null;
        if (this.props.link) {
            link = <Link to={`/blog/${this.props.postId}`}>{ post.title }</Link>;
        }
        //find user id by their email
        let userId = 'error';
        let user = this.state.users.find((user) => user.email == this.props.email);
        if (user) {
            userId = user.id
        }
        return (
            <div className="media">
                <div className="media-left"><i className="fa fa-comment-o fa-3x" aria-hidden="true" /></div>
                <div className="media-body">
                    <h4 className="media-heading">
                        <Link to={`/users/${userId}`}>{this.props.email}</Link>
                    </h4>

                    {link}

                    <p className="well">{this.props.body}</p>
                </div>
            </div>
        )
    }
}

