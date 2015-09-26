
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { SingleConnect } from 'components/SingleConnect';

@connect(s => s)
export class App extends React.Component {

    render() {
        return (
            <Grid>
                <PageHeader className="text-center">
                    ConnectApp
                </PageHeader>

                <SingleConnect />

            </Grid>
        );
    }
}
