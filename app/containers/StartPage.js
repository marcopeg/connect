
import React from 'react';
import { connect } from 'react-redux';

import { StartScreen } from 'components/StartScreen';
import { changePage } from 'services/active-page-service';
import { connectFacebook } from 'services/firebase-service';

@connect(s => s)
export class StartPage extends React.Component {

    render() {
        var { dispatch, connections } = this.props;
        var count = Object.keys(connections).length;
        return (
            <StartScreen
                count={count}
                onConnect={$=> dispatch(changePage('connect'))}
                onEditProfile={$=> dispatch(changePage('edit'))} 
                onShowConnections={$=> dispatch(changePage('list'))} 
                onConnectFacebook={$=> dispatch(connectFacebook())} />
        );
    }
}
