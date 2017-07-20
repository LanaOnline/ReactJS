import React from 'react';
import UserProfile from '../components/UserProfile';
import axios from 'axios';

export default class UserPage extends React.Component {

    constructor(){
        super(...arguments);

        this.state = {
            user: null
        };

    }
    componentDidMount() {
        if ($.isNumeric(this.props.params.userId)) {

            axios
                .get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
                .then((response) => {
                    let { data } = response;

                    this.setState({
                        user: data
                    });
                });
        }
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {!this.state.user ? 'User not found' : <UserProfile {...this.state.user} />}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}