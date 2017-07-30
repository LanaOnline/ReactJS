import React from 'react';
import PostPreview from '../components/PostPreview';

export default class PostsList extends React.Component {
    render() {
        if(!this.props.posts.length)
            return null;

        let previews = this.props.posts.map((post, index) => {
            let user = this.props.users.find((user) => {
                return user.id === post.userId
            });
            return <PostPreview key={index} post={post} user={user}/>
        });

        return (
            <div>
                {previews}

                <ul className="pager">
                    <li className="next">
                        <a href="#">Older Posts &rarr;</a>
                    </li>
                </ul>
            </div>
        );
    }
}