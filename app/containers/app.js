
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { SingleConnect } from 'components/SingleConnect';
import { MultiConnect } from 'components/MultiConnect';

@connect(s => s)
export class App extends React.Component {

    render() {
        return (
            <Grid>
                <PageHeader className="text-center">
                    ConnectApp
                </PageHeader>

                <SingleConnect onConnect={$=> alert('single connect')} />
                <MultiConnect onConnect={item => console.log(item)} />

            </Grid>
        );
    }
}
