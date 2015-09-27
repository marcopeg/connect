
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { DetailsForm } from 'components/DetailsForm';

import { changePage } from 'services/active-page-service';
import { updateProfile } from 'services/firebase-service';

@connect(s => s)
export class EditPage extends React.Component {

    render() {

        var { profile, dispatch } = this.props;

        return (
            <Grid>
                <h4 style={{margin:0}}>
                    <Button bsStyle="primary" onClick={$=> dispatch(changePage('start'))}>
                        <Glyphicon glyph="chevron-left" />
                    </Button>
                    <span style={{display:'inline-block',marginLeft:20}}>
                        My Profile
                    </span>
                </h4>
                <hr />
                <p style={{marginTop:5,fontSize:10}}><i>(Everything save as soon as you type)</i></p>
                <DetailsForm {...profile} onChange={data => dispatch(updateProfile(data))} />
            </Grid>
        );
    }
}
