import React from 'react';
import { Link } from 'react-router';
import PostPreview from "./PostPreview";

export default class UserProfile extends React.Component {
   render(){

        // let userComments = null;
        //
        let userPosts = this.props.posts.map ((post, index) => {
            return <li key={index}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
            });

        if (!userPosts.length) {
            userPosts = 'This user has no articles posted.'
        }
        //
        // userComments = this.state.comments
        //     .filter((comment) => {
        //         return (comment.email == this.props.email)
        //     })
        //     .map((comment, index) => {
        //         return <Comment key={index} {...comment} link="true"/>
        // });
        //
        // if (!userComments.length) {
        //     userComments = 'This user haven\'t made any comments yet.'
        // }
        //
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                            {this.props.user.username}
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="col-lg-5 col-md-5">
                        <ul className="list-unstyled">
                            <li><b>Contact Info</b></li>
                            <li>{this.props.user.name}</li>
                            <li>{this.props.user.email}</li>
                            <li>{this.props.user.phone}</li>
                            <li>{this.props.user.website}</li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <ul className="list-unstyled">
                            <li><b>{this.props.user.username}'s posts</b></li>
                            { userPosts }
                        </ul>
                    </div>
                    {/*<div>{ userComments }</div>*/}
                </div>
            </div>
        );
    }
}