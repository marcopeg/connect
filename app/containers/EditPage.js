
import React from 'react';
import { connect } from 'react-redux';

import { DetailsForm } from 'components/DetailsForm';

import { updateProfile } from 'services/firebase-service';

@connect(s => s)
export class EditPage extends React.Component {

    render() {

        var { profile, dispatch } = this.props;

        return (
            <div>
                <DetailsForm {...profile} onChange={data => dispatch(updateProfile(data))} />
            </div>
        );
    }
}
