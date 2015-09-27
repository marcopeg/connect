
import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { StartPage } from 'containers/StartPage';
import { EditPage } from 'containers/EditPage';
import { ListPage } from 'containers/ListPage';
import { ReadPage } from 'containers/ReadPage';
import { ConnectPage } from 'containers/ConnectPage';

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
        return (
            <div>
                <Navbar 
                    fixedTop brand="ConnectAPP" 
                    onClick={$=> dispatch(changePage('start'))} />
                    
                <div style={{marginTop:80}}>
                    <ActivePage />
                </div>
            </div>
        );
    }
}
