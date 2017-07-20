import React from 'react';
import siteName from '../config/siteName';//object
let bgimage = require('../img/home-bg.jpg');

class HeaderHome extends React.Component {
    render() {
        let headerStyle = {
            backgroundImage: 'url(' + bgimage + ')'
        };

        return (
            <header className="intro-header" style={ headerStyle }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>{ siteName.siteHeading }</h1>
                                <hr className="small" />
                                <span className="subheading">{ siteName.siteSubHeading }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderHome;
