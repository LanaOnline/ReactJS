import React from 'react';

import CommentsList from '../components/CommentsList';

export default class Comments extends React.Component {
    render() {

        return (
            <main className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        {
                            (!this.props.children) ? (<CommentsList />) : (this.props.children)
                        }

                    </div>
                </div>
            </main>
        )
    }
}

