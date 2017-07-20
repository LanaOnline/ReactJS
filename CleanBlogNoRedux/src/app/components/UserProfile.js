import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import posts from '../config/posts';
import PostPreview from "./PostPreview";

export default class UserProfile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: []
        };

    }
    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                let { data } = response;

                this.setState({
                    comments: data
                });
            });
    }
    render(){
        let userPosts = null;
        let userComments = null;

        if (!this.props.list) {
            userPosts = posts
                .filter((post) => {
                    return (post.authorId == this.props.id)
                })
                .map ((post, index) => {
                    return <PostPreview key={index} {...post}/>
                });

            if (!userPosts.length) {
                userPosts = 'This user has no articles posted.'
            }

            userComments = this.state.comments
                .filter((comment) => {
                    return (comment.email == this.props.email)
                })
                .map((comment, index) => {
                    return <Comment key={index} {...comment} link="true"/>
            });

            if (!userComments.length) {
                userComments = 'This user haven\'t made any comments yet.'
            }
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/users/${this.props.id}`}>
                            {this.props.name}
                        </Link>
                    </h3>
                </div>
                <div className="panel-body">
                    <p>
                        {this.props.username}
                    </p>
                    <p>
                        {this.props.email}
                    </p>
                    <p>
                        {this.props.phone}
                    </p>
                    <p>
                        {this.props.website}
                    </p>
                    <div>{ userPosts }</div>
                    <div>{ userComments }</div>
                </div>
            </div>
        );
    }
}