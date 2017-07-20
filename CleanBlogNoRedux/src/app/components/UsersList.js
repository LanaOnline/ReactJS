import React from 'react';
import UserProfile from './UserProfile';
import axios from 'axios';

export default class UsersList extends React.Component {

    constructor(){
        super(...arguments);

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

    render() {
        if(!this.state.users.length)
            return null;

        let users = this.state.users.map((user, index) => {
            return <UserProfile key={index} {...user} list="true"/>
        });

        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <h1>Users</h1>
                            <br />

                            {users}

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}