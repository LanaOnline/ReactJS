import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';//react-bootstrap component

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    hide = () => {
        this.setState({ show: false })
    };

    render() {
        let modalStyle = {
            color: '#0085A1',
            textAlign: 'center',
            fontWeight: 'bold'
        };

       return (
            <Modal show={this.state.show} onHide={this.hide} bsSize="small" style={modalStyle}>
                <Modal.Header closeButton/>
                <Modal.Body>Hello there!</Modal.Body>
            </Modal>
        )
    }
}

export default Popup;
