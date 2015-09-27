
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { DetailsForm } from 'components/DetailsForm';

import { changePage } from 'services/active-page-service';
import { updateProfile, connectFacebook } from 'services/firebase-service';

@connect(s => s)
export class EditPage extends React.Component {

    render() {

        var { profile, dispatch } = this.props;

        var importProfile;
        if (true) {
            importProfile = (
                <Button bsStyle="default" onClick={$=> dispatch(connectFacebook())}>
                    <Glyphicon glyph="download" />
                    <span> </span>
                    import your Facebook profile!
                </Button>
            );
        }

        var onboarding, pageTitle, importBelow;
        if (!this.props.general.onboardingIsDone) {
            onboarding = (
                <div>
                    <h4>Welcome aboard!</h4>
                    <p>
                        <i>ConnectAPP</i> is the fastest way to link with other people but
                        I need you to <b>fill up some minimal info</b> before to go.
                    </p>

                    {importProfile}
                    <hr />
                </div>
            );
        } else {
            pageTitle = (
                <div>
                    <h4 style={{margin:0}}>
                        <Button bsStyle="primary" onClick={$=> dispatch(changePage('start'))}>
                            <Glyphicon glyph="chevron-left" />
                        </Button>
                        <span style={{display:'inline-block',marginLeft:20}}>
                            My Profile
                        </span>
                    </h4>
                    <hr />
                </div>
            );
            importBelow = (
                <div>
                    <hr />
                    {importProfile}
                </div>
            );
        }

        return (
            <Grid>
                {pageTitle}
                {onboarding}
                <p style={{marginTop:5,fontSize:10}}><i>(Everything save as soon as you type)</i></p>
                <DetailsForm {...profile} onChange={data => dispatch(updateProfile(data))} />
                {importBelow}
            </Grid>
        );
    }
}
