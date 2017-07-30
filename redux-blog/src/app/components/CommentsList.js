import React from 'react';
import Comment from './Comment';

export default class CommentsList extends React.Component {
    render() {

        let comments = this.props.comments.map((comment, index) => {
            return <Comment key={index} {...comment} link="true"/>
        });

        return (
            <div>
                <h1>All Comments</h1>
                <br />

                {comments}

            </div>
        );
    }
}