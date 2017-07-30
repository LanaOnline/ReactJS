import React from 'react';
import AwesomeLink from './AwesomeLink';
import socialLinks from '../config/sociallinks';

class NavSocial extends React.Component {
    render() {

        let socialNabBar = socialLinks.map((network,index) => {
            return (
                <AwesomeLink
                    network={network.network}
                    url={network.url}
                    key={index}
                />
            )
        });

        return (
            <ul className="list-inline text-center">

                { socialNabBar }

            </ul>
        )
    }
}

export default NavSocial;
