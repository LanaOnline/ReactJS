import React from 'react';
import NavSocial from '../components/NavSocial';
import copyright from '../config/copyright';//object

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <NavSocial />
                            <p className="copyright text-muted">{copyright.copyright}</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}