import React from 'react';
import UserCard from './UserCard';

export default class UsersList extends React.Component {
    render() {

        let users = this.props.users.map((user, index) => {
            return <UserCard key={index} {...user} />
        });

        return (
            <div>
                <h1>Users</h1>
                <br />

                {users}

             </div>
        );
    }
}