import React from 'react';
import {Link} from 'react-router';

export default class UserCard extends React.Component {
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/users/${this.props.id}`}>
                            {this.props.username}
                        </Link>
                    </h3>
                </div>
                <div className="panel-body">
                    <ul className="list-unstyled">
                        <li>{this.props.name}</li>
                        <li>{this.props.email}</li>
                        <li>{this.props.phone}</li>
                        <li>{this.props.website}</li>
                    </ul>
                </div>
            </div>
        );
    }
}