import React from 'react';

import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
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
            <div style={{marginBottom:100}}>
                <Button block bsStyle="success" bsSize="large" onClick={onConnect}>
                    <Glyphicon glyph="magnet" /><span> </span>
                    Connect Now
                </Button>
                <hr />

                
                <ButtonGroup vertical block>
                    <Button bsStyle="default" onClick={onEditProfile}>
                        <Glyphicon glyph="user" />
                        <span> </span>
                        Edit my profile
                    </Button>
                    <Button bsStyle="default" onClick={onShowConnections}>
                        <Glyphicon glyph="list" />
                        <span> </span>
                        My Connections {badge}
                    </Button>
                </ButtonGroup>
            </div>
        );
    }

}
