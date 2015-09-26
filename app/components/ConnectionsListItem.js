import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

var johnDoe = require('assets/john-doe.png');

export class ConnectionsListItem extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onClick: null
    }

    render() {

        var { name, avatar, onClick } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        return (
            <Grid fluid className="multi-connect">
                <Row onClick={onClick}>
                    <Col xs={3}>
                        <img src={avatar || johnDoe} className="img-circle" width={60} height={60} />
                    </Col>
                    <Col xs={7} className="multi-connect__name">
                        {name}
                    </Col>
                    <Col xs={2} className="multi-connect__action text-right">
                        <Glyphicon glyph="chevron-right" />
                    </Col>
                </Row>
            </Grid>
        );
    }

}
