import React from 'react';

import Well from 'react-bootstrap/lib/Well';

export class NoResults extends React.Component {

    render() {
        return (
            <Well className="text-center">
                <h3>Sorry</h3>
                <p>Timeout, try again!</p>
            </Well>
        );
    }

}
