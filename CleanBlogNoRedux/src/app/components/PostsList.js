import React from 'react';
import PostPreview from '../components/PostPreview';
import posts from '../config/posts';//array of articles

export default class PostsList extends React.Component {
    render() {
        if(!posts.length)
            return null;

        let previews = posts.map((post, index) => {
            return <PostPreview key={index} {...post} />
        });

        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                             {previews}

                            <ul className="pager">
                                <li className="next">
                                    <a href="#">Older Posts &rarr;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}