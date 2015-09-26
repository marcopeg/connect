import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export class StartScreen extends React.Component {

    static defaultProps = {
        onConnect: null,
        onEditProfile: null,
        onShowConnections: null
    }

    render() {

        var { onConnect, onEditProfile, onShowConnections } = this.props;

        return (
            <div>
                <Button block bsStyle="primary" onClick={onConnect}>Connect!</Button>
                <hr />
                <Button block bsStyle="default" onClick={onEditProfile}>
                    <Glyphicon glyph="user" />
                    <span> </span>
                    Me
                </Button>
                <Button block bsStyle="default" onClick={onShowConnections}>
                    <Glyphicon glyph="list" />
                    <span> </span>
                    My Connections
                </Button>
            </div>
        );
    }

}
