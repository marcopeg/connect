
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { StartPage } from 'containers/StartPage';
import { EditPage } from 'containers/EditPage';
import { ReadPage } from 'containers/ReadPage';
import { ConnectPage } from 'containers/ConnectPage';

const viewMap = {
    start: StartPage,
    edit: EditPage,
    read: ReadPage,
    connect: ConnectPage
}

import { initFirebase } from 'services/firebase-service';

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
    }

    render() {

        var ActivePage = viewMap[this.props.activePage];

        return (
            <Grid>
                <PageHeader className="text-center">
                    ConnectApp
                </PageHeader>

                <ActivePage />
            </Grid>
        );
    }
}
