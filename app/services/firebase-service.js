
import Firebase from 'firebase';
import { setProfile } from 'actions/profile-actions';
import { setStep, addProfile, removeProfile, resetProfileList } from 'actions/connect-actions';
import * as connections from 'actions/connections-actions';
import { changePage } from 'services/active-page-service';
import { onboardingIsDone } from 'services/general-service';

var fb;
var fbProfiles;
var fbDiscovery;
var fbLogins;

var profileRef;
var profileId;

export function initFirebase() {
    return dispatch => {

        fb = new Firebase('https://connectapp.firebaseio.com/');
        fbProfiles = fb.child('profile');
        fbDiscovery = fb.child('discovery');
        fbLogins = fb.child('logins');

        profileId = localStorage.getItem('fb-profile-id');
        if (profileId) {
            profileRef = fbProfiles.child(profileId);
        } else {
            profileRef = fbProfiles.push({
                ctime: Date.now()
            });
            profileId = profileRef.key();
            localStorage.setItem('fb-profile-id', profileId);
        }

        profileRef.update({atime: Date.now()});

        profileRef.on('value', snap => {
            dispatch(setProfile(snap.val()));
        });

        profileRef.child('connections').on('child_added', snap => {
            fbProfiles.child(snap.key()).on('value', snap => {
                dispatch(connections.addProfile(snap.key(), snap.val()));
            });
        });

        // login validation
        // if it fails we need to login again
        // profileRef.child('logins/facebook').once('value', snap => {
        //     var facebookId = snap.val();
        // });
        
        // move automatically to edit after login
        profileRef.child('name').once('value', snap => {
            var val = snap.val();
            if (!val) {
                dispatch(changePage('edit'));
            }
        });

    }
}

export function updateProfile(data) {
    return dispatch => {
        profileRef.update(data);
        if (data.name || data.twitter) {
            dispatch(onboardingIsDone());
        }
    };
}

export function startConnect() {
    return (dispatch, getState) => {

        dispatch(setStep('search'));
        dispatch(resetProfileList());

        // expose myself for a while
        var discoveryRef = fbDiscovery.child(profileId);
        discoveryRef.set(Date.now());

        var onChildAdded = snap => {
            if (snap.key() !== profileId) {
                fbProfiles.child(snap.key()).once('value', snap => {
                    dispatch(addProfile(snap.key(), snap.val()));
                });
            }
        };

        var onChildRemoved = snap => {
            if (snap.key() !== profileId) {
                dispatch(removeProfile(snap.key()));
            }
        };

        // search
        fbDiscovery.on('child_added', onChildAdded);

        // remove guys that timesout
        fbDiscovery.on('child_removed', onChildRemoved);
        
        // clean up
        setTimeout($=> {
            discoveryRef.remove();
            fbDiscovery.off('child_added', onChildAdded);
            fbDiscovery.off('child_removed', onChildRemoved);

            dispatch(setStep('nores'));
            setTimeout($=> dispatch(changePage('start')), 1500);
        }, 10000);

        

    };
}

export function connectProfile(profile) {
    return dispatch => {
        profileRef.child('connections/' + profile.id).set({
            time: Date.now(),
            where: 'loc!'   
        });

        // show confirm
        dispatch(setStep('confirm'));
        setTimeout($=> dispatch(changePage('start')), 1500);
    };
}

export function connectFacebook() {
    return dispatch => {
        fb.authWithOAuthPopup('facebook', function(error, authData) {
            if (error) {
                alert('login failed');
            } else {
                fbLogins.child(authData.uid).set(profileId);
                profileRef.child('logins/facebook').set(authData.uid);

                profileRef.child('name').once('value', snap => {
                    if (!snap.val()) {
                        profileRef.child('name').set(authData.facebook.displayName);
                    }
                });

                profileRef.child('avatar').once('value', snap => {
                    if (!snap.val()) {
                        profileRef.child('avatar').set(authData.facebook.profileImageURL);
                    }
                });

                profileRef.child('facebook').once('value', snap => {
                    if (!snap.val()) {
                        profileRef.child('facebook').set(authData.facebook.id);
                    }
                });

                dispatch(onboardingIsDone());
            }
        });
    }
}

function generateDiscoveryId() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}
