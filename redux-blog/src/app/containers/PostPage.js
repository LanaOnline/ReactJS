import React from 'react';
import PostContent from '../components/PostContent';
import CommentSection from "../components/CommentSection";

import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentsActions';

@connect((store) => {
    return {
        comments: store.comments.comments,
        post: store.post.post,
        is_fetching: store.post.is_fetching && store.comments.is_fetching
    }
})

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchPost(this.props.params.postId));
        this.props.dispatch(fetchComments());
    }
    render() {

        let postComments = this.props.comments.filter((comment)=>{
            return comment.postId == this.props.params.postId
        });

        return (
            <article>
                { this.props.is_fetching ?
                    'Pending' :
                    <PostContent post={this.props.post}/>
                }

                <hr />

                <CommentSection comments={postComments}/>

            </article>
        )
    }
}
