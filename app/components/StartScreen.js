import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export class StartScreen extends React.Component {

    static defaultProps = {
        onConnect: null,
        onEditDetails: null,
        onShowConnections: null
    }

    render() {

        var { onConnect, onEditDetails, onShowConnections } = this.props;

        return (
            <div>
                <Button block bsStyle="primary" onClick={onConnect}>Connect!</Button>
                <hr />
                <Button block bsStyle="default" onEditDetails={onConnect}>
                    <Glyphicon glyph="user" />
                    <span> </span>
                    Me
                </Button>
                <Button block bsStyle="default" onShowConnections={onConnect}>
                    <Glyphicon glyph="list" />
                    <span> </span>
                    My Connections
                </Button>
            </div>
        );
    }

}
