
import React from 'react';
import { connect } from 'react-redux';

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
            <div>
                <DetailsForm {...profile} onChange={data => dispatch(updateProfile(data))} />
                <hr />
                <Button bsStyle="primary" onClick={$=> dispatch(changePage('start'))}>
                    <Glyphicon glyph="chevron-left" />
                    <span> </span>
                    Back
                </Button>
            </div>
        );
    }
}
