import React from 'react';

import { ConnectionSearch } from 'components/ConnectionSearch';
import { SingleConnect } from 'components/SingleConnect';
import { MultiConnect } from 'components/MultiConnect';

export class ConnectionDiscovery extends React.Component {

    static defaultProps = {
        profiles: [],
        onConnect: $=> {}
    };

    render() {
        var { profiles, onConnect } = this.props;
        switch (profiles.length) {
            case 0:
                return <ConnectionSearch />;
            case 1:
                return <SingleConnect {...profiles[0]} onConnect={$=> onConnect(profiles[0])} />;
            default:
                return <MultiConnect items={profiles} onConnect={onConnect} />;
        }
    }

}
