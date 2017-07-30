import React from 'react';
import { Link } from 'react-router';

export default class PostPreview extends React.Component {
    render() {
        if (!this.props.post || !this.props.user) {
            return null;
        }
        return (
            <article className="post-preview">
                <Link to={`/blog/${this.props.post.id}`} key={this.props.post.id}>
                    <h2 className="post-title">
                        {this.props.post.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {this.props.post.subtitle}
                    </h3>
                    <p>{ this.props.post.body }</p>
                </Link>

                <p className="post-meta">
                    Posted by <Link to={`/users/${this.props.user.id}`}>{ this.props.user.username }</Link> {this.props.date}
                </p>

                <hr />
            </article>
        )
    }
}
