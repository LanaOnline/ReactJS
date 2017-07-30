import React from 'react';
import Comment from './Comment';

export default class CommentSection extends React.Component {
    render() {

        if(!this.props.comments.length)
            return <div className="well">No comments</div>;

        let postComments = this.props.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />
        });

        return (
            <section className="comment-section">
                <h2>Comments</h2>
                <br />

                 {postComments}

            </section>
        )
    }
}

