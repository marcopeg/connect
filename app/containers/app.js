
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { StartScreen } from 'components/StartScreen';
import { SingleConnect } from 'components/SingleConnect';
import { MultiConnect } from 'components/MultiConnect';
import { ConnectionsList } from 'components/ConnectionsList';
import { ConnectionDetails } from 'components/ConnectionDetails';
import { ConnectionConfirm } from 'components/ConnectionConfirm';
import { ConnectionSearch } from 'components/ConnectionSearch';
import { NoResults } from 'components/NoResults';

@connect(s => s)
export class App extends React.Component {

    render() {
        return (
            <Grid>
                <PageHeader className="text-center">
                    ConnectApp
                </PageHeader>

                <StartScreen />
                <hr />

                <SingleConnect onConnect={$=> alert('single connect')} />
                <hr />
                <MultiConnect onConnect={item => console.log(item)} />
                <hr />
                <ConnectionsList onSelect={item => console.log(item)} />
                <hr />
                <ConnectionDetails onRemove={$=> alert('remove connection')} />
                <hr />
                <ConnectionConfirm />
                <hr />
                <ConnectionSearch />
                <hr />
                <NoResults />
            </Grid>
        );
    }
}
