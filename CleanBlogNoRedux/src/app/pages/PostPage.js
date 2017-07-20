import React from 'react';
import PostContent from '../components/PostContent';
import posts from '../config/posts';//array of articles
import CommentSection from "../components/CommentSection";

export default class PostPage extends React.Component {
    render() {
        let calledPost = this.props.params.postId;

        let post = posts.find((post) => post.id == calledPost );

        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                            <PostContent {...post}/>
                            <hr />
                            <CommentSection {...post}/>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
