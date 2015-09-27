
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { ConnectionsList } from 'components/ConnectionsList';

import { changePage } from 'services/active-page-service';
import { setViewProfile } from 'actions/connections-actions';

@connect(s => s.connections)
export class ListPage extends React.Component {
    render() {

        var connections = Object.keys(this.props.items).map(profileId => {
            return {...this.props.items[profileId], id: profileId};
        });

        var { dispatch } = this.props;

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <h4 style={{margin:0}}>
                            <Button bsStyle="primary" onClick={$=> dispatch(changePage('start'))}>
                                <Glyphicon glyph="chevron-left" />
                            </Button>
                            <span style={{display:'inline-block',marginLeft:20}}>
                                MyConnections
                            </span>
                        </h4>
                        <hr />
                        <ConnectionsList 
                            items={connections} 
                            onSelect={profile => {
                                dispatch(setViewProfile(profile.id));
                                dispatch(changePage('view'));
                            }} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
