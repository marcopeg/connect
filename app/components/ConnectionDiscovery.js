import React from 'react';

import { ConnectionSearch } from 'components/ConnectionSearch';
import { SingleConnect } from 'components/SingleConnect';
import { MultiConnect } from 'components/MultiConnect';

export class ConnectionDiscovery extends React.Component {

    static defaultProps = {
        profiles: []
    };

    render() {
        var { profiles } = this.props;

        console.log(profiles.length);

        switch (profiles.length) {
            case 0:
                return <ConnectionSearch />;
            case 1:
                return <SingleConnect {...profiles[0]} />;
            default:
                return <MultiConnect items={profiles} />;
        }
    }

}
