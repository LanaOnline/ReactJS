import React from 'react';
import Comment from './Comment';
import axios from 'axios';

export default class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        axios
            .get('http://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                let { data } = response;

                this.setState({
                    comments: data
                });
            });
    }
    render() {

        if(!this.state.comments.length)
            return <div className="well">No comments</div>;

        let postComments = this.state.comments.map((comment, index) => {
            if (comment.postId == this.props.id) {
                return <Comment key={index} {...comment} />}
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

