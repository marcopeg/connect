
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { ConnectionDetails } from 'components/ConnectionDetails';

import { changePage } from 'services/active-page-service';

@connect(s => s.connections)
export class ReadPage extends React.Component {
    render() {
        var { dispatch, items, viewProfile } = this.props;
        var profile = items[viewProfile];

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <h4 style={{margin:0}}>
                            <Button bsStyle="primary" onClick={$=> dispatch(changePage('list'))}>
                                <Glyphicon glyph="chevron-left" />
                            </Button>
                            <span style={{display:'inline-block',marginLeft:20}}>
                                {profile.name || profile.twitter || 'John Doe'}
                            </span>
                        </h4>
                        <hr />
                        <ConnectionDetails {...profile} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
