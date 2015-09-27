
import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import Well from 'react-bootstrap/lib/Well';

import { StartPage } from 'containers/StartPage';
import { EditPage } from 'containers/EditPage';
import { ListPage } from 'containers/ListPage';
import { ReadPage } from 'containers/ReadPage';
import { ConnectPage } from 'containers/ConnectPage';
import { Info } from 'components/Info';

import { changePage } from 'services/active-page-service';
import { initFirebase } from 'services/firebase-service';
import { initGeneralService } from 'services/general-service';

const viewMap = {
    start: StartPage,
    edit: EditPage,
    list: ListPage,
    view: ReadPage,
    connect: ConnectPage
}

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
        this.props.dispatch(initGeneralService());
    }

    render() {
        var { dispatch } = this.props;
        var ActivePage = viewMap[this.props.activePage];

        var modal = (
            <Modal show={!this.props.general.firebaseStatus} onHide={$=>{}} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Waiting for connectivity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="lead">please be patient, we did this app pretty swiftly
                    and there is no offline support yet.</p>
                    <hr />
                    <Well><Info /></Well>
                </Modal.Body>
            </Modal>
        );


        return (
            <div>
                <Navbar 
                    fixedTop brand="ConnectAPP" 
                    onClick={$=> dispatch(changePage('start'))} />
                    
                <div style={{marginTop:80}}>
                    <ActivePage />
                </div>

                {modal}
            </div>
        );
    }
}
