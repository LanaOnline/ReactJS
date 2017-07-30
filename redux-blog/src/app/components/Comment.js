import React from 'react';

export default class Comment extends React.Component {

    render() {
        return (
            <div className="media">
                <div className="media-left"><i className="fa fa-comment-o fa-3x" aria-hidden="true" /></div>
                <div className="media-body">
                    <h4 className="media-heading">
                        {this.props.name}
                    </h4>

                    <p className="well">{this.props.body}</p>
                </div>
            </div>
        )
    }
}

