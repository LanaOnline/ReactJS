import React from 'react';
import UsersList from '../components/UsersList';

export default class UsersPage extends React.Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ? (<UsersList/>) : (this.props.children)
                }
            </div>
        );
    }
}