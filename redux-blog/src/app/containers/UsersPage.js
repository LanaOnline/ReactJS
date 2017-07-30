import React from 'react';
import UsersList from '../components/UsersList';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

@connect((store) => {
    return {
        users: store.users.users,
        is_fetching: store.users.is_fetching
    }
})

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchUsers());
    }
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {
                                ( !this.props.children ) ?
                                ( this.props.is_fetching ?
                                    'Pending' :
                                    <UsersList users={this.props.users}/>
                                ) :
                                ( this.props.children )
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}