
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Well from 'react-bootstrap/lib/Well';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { StartScreen } from 'components/StartScreen';
import { changePage } from 'services/active-page-service';
import { connectFacebook } from 'services/firebase-service';

@connect(s => s)
export class StartPage extends React.Component {

    render() {
        var { dispatch, connections } = this.props;
        var count = Object.keys(connections.items).length;
        return (
            <Grid>
                <StartScreen
                    count={count}
                    onConnect={$=> dispatch(changePage('connect'))}
                    onEditProfile={$=> dispatch(changePage('edit'))} 
                    onShowConnections={$=> dispatch(changePage('list'))} 
                    onConnectFacebook={$=> dispatch(connectFacebook())} />

                <hr />

                <p className="lead">
                    <b>ConnectAPP</b> allows you to quickly bond with other guys
                    in <b>events as conferences</b> or such where there is no
                    time to save a phone number or search through Facebook.
                </p>
                <Well bsSize="xsmall" className="text-center">
                    <p className="lead" style={{margin:0}}>
                        Click<br /> 
                        <a className="btn btn-success btn-xs" onClick={$=> dispatch(changePage('connect'))}>
                            <Glyphicon glyph="magnet" /> Connect Now!
                        </a> 
                        <br /> to discover people around you. 
                    </p>
                </Well>
            </Grid>
        );
    }
}
