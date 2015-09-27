
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
                <DetailsForm {...profile} onChange={data => dispatch(updateProfile(data))} />
                <hr />
                <div className="text-right">
                    <Button bsStyle="success" onClick={$=> dispatch(changePage('start'))}>
                        Ok
                        <span> </span>
                        <Glyphicon glyph="ok" />
                    </Button>
                </div>
            </Grid>
        );
    }
}
