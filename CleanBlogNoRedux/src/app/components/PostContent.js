import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

export default class PostContent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: []
        };

        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let { data } = response;

                this.setState({
                    users: data
                });
            });
    }
    render(){
        let username = 'Anonymous';
        let user = this.state.users.find((user) => {
            return user.id == this.props.authorId
        });

        if (user) {
            username = user.name;
        }

        return (
            <div>
                <div className="post-heading">
                    <h2 className="post-title">{this.props.title}</h2>
                    <h3 className="post-subtitle">{this.props.subtitle}</h3>
                    <p className="post-meta">
                        Posted by <Link to={`/users/${this.props.authorId}`}>{ username }</Link> on {this.props.date}
                    </p>
                </div>
                <p>

                    {this.props.content}

                </p>
            </div>
        );
    }
}