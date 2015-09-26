import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Badge from 'react-bootstrap/lib/Badge';

export class StartScreen extends React.Component {

    static defaultProps = {
        count: 0,
        onConnect: null,
        onEditProfile: null,
        onShowConnections: null,
        onConnectFacebook: null
    }

    render() {

        var { count, onConnect, onEditProfile, onShowConnections, onConnectFacebook } = this.props;

        var badge;
        if (count > 0) {
            badge = <Badge>{count}</Badge>
        }

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
                    My Connections {badge}
                </Button>
                <hr />
                <div className="text-center">
                    <Button bsStyle="success" onClick={onConnectFacebook}>
                        <Glyphicon glyph="thumbs-up" />
                        <span> </span>
                        Connect Facebook
                    </Button>
                </div>
            </div>
        );
    }

}
