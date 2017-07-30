import React from 'react';
import NavMain from '../components/NavMain';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="app-mounter">
                <NavMain />
                <HeaderHome />
                { this.props.children }
                <hr />
                <Footer />
            </div>
        )
    }
}
