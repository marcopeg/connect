
import React from 'react';
import { connect } from 'react-redux';

import { StartScreen } from 'components/StartScreen';
import { changePage } from 'services/active-page-service';

@connect(s => s)
export class StartPage extends React.Component {

    render() {
        var { dispatch } = this.props;
        return (
            <StartScreen 
                onConnect={$=> dispatch(changePage('connect'))}
                onEditProfile={$=> dispatch(changePage('edit'))} />
        );
    }
}
