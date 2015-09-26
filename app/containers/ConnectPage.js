
import React from 'react';
import { connect } from 'react-redux';

import { ConnectionSearch } from 'components/ConnectionSearch';
import { NoResults } from 'components/NoResults';

import { startConnect } from 'services/firebase-service';

const mapSteps = {
    search: ConnectionSearch,
    nores: NoResults
};

@connect(s => s.connect)
export class ConnectPage extends React.Component {

    componentWillMount() {
        this.props.dispatch(startConnect());
    }

    render() {

        var View = mapSteps[this.props.step];

        if (View) {
            return <View />;
        } else {
            return null;
        }
    }
}
