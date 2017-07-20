import React from 'react';
import Comment from './Comment';
import axios from 'axios';

export default class CommentsList extends React.Component {

    constructor(props){
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

        let comments = this.state.comments.map((comment, index) => {
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