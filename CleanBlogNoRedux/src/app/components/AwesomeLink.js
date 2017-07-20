import React from 'react';

class AwesomeLink extends React.Component {
    render() {
        let icon = "fa fa-" + this.props.network + " fa-stack-1x fa-inverse";

        return (
            <li>
                <a href={this.props.url}>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className={icon} />
                    </span>
                </a>
            </li>
        )
    }
}

export default AwesomeLink;

