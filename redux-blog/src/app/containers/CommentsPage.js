import React from 'react';
import CommentsList from '../components/CommentsList';

import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentsActions';

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    }
})

export default class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchComments());
    }
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        {
                            ( !this.props.children ) ?
                            ( this.props.is_fetching ?
                                'Pending' :
                                <CommentsList comments={this.props.comments} />
                            ) :
                            ( this.props.children )
                        }

                    </div>
                </div>
            </main>
        )
    }
}

