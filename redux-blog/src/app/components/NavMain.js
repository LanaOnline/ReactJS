import React from 'react';
import copyright from '../config/copyright';//object
import menuItems from '../config/menuitems';//array of objects
import {Link} from 'react-router';

export default class NavMain extends React.Component {

    isActive(href)
    {
        return window.location.pathname === href;
    };

    render() {
        let list = menuItems.map((item, index) => {
            let href = item.url;

            return (
                <li key={index}  className={this.isActive({href}) ? 'active' : ''}>
                    <Link to={href}>{item.item}</Link>
                </li>
            )
        });

        return (
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            Menu <i className="fa fa-bars" />
                        </button>
                        <a className="navbar-brand" href="/">{ copyright.brandName }</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            { list }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}