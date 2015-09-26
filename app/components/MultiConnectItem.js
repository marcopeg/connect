import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

var johnDoe = require('assets/john-doe.png');

export class MultiConnectItem extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onConnect: null
    }

    render() {

        var { name, avatar, onConnect } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        return (
            <Grid fluid className="multi-connect">
                <Row onClick={onConnect}>
                    <Col xs={3}>
                        <img src={avatar || johnDoe} className="img-circle" width={60} height={60} />
                    </Col>
                    <Col xs={7} className="multi-connect__name">
                        {name}
                    </Col>
                    <Col xs={2} className="multi-connect__action text-right">
                        <Glyphicon glyph="plus" />
                    </Col>
                </Row>
                <hr />
            </Grid>
        );
    }

}
