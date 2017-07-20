import React from 'react';
import PostsList from '../components/PostsList';


export default class BlogPage extends React.Component {

    render() {

        return (
            <div>

                { (!this.props.children) ? (<PostsList/>) : (this.props.children) }

            </div>
        )
    }
}