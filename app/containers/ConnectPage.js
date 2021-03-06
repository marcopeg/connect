
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import { ConnectionDiscovery } from 'components/ConnectionDiscovery';
import { NoResults } from 'components/NoResults';
import { ConnectionConfirm } from 'components/ConnectionConfirm';

import { startConnect, connectProfile } from 'services/firebase-service';

const mapSteps = {
    search: ConnectionDiscovery,
    nores: NoResults,
    confirm: ConnectionConfirm
};

@connect(s => s.connect)
export class ConnectPage extends React.Component {

    componentWillMount() {
        this.props.dispatch(startConnect());
    }

    connect = (profile) => {
        this.props.dispatch(connectProfile(profile));
    }

    render() {

        var View = mapSteps[this.props.step];
        
        if (View) {
            return <Grid><View {...this.props} onConnect={this.connect} /></Grid>;
        } else {
            return null;
        }
    }
}
