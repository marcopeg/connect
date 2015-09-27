
import Firebase from 'firebase';
import { setProfile } from 'actions/profile-actions';
import { setStep, addProfile, removeProfile, resetProfileList } from 'actions/connect-actions';
import * as connections from 'actions/connections-actions';
import * as generalActions from 'actions/general-actions';
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

        // check connectivity status
        setTimeout($=> {
            fb.child('.info/connected').on('value', snap => {
                dispatch(generalActions.setFirebaseStatus(snap.val() === true));
            });
        }, 1000);

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

        // load profile from local storage and try to update
        var profile;
        try {
            var profile = JSON.parse(localStorage.getItem('profile'));
        } catch(e) {}

        // fetch local profile or try to rebuild from remote
        if (profile) {
            dispatch(setProfile(profile));
            try { profileRef.update(data); } catch(e) {}
        } else {
            profileRef.once('value', snap => {
                var rp = snap.val();
                profile = {
                    name: rp.name || '',
                    twitter: rp.twitter || '',
                    email: rp.email || '',
                    phone: rp.phone || '',
                    skype: rp.skype || '',
                    avatar: rp.avatar || '',
                    facebook: rp.facebook || '',
                    notes: rp.notes || ''
                };
                dispatch(setProfile(profile));
                localStorage.setItem('profile', JSON.stringify(profile));
                console.log('rebuild from remote', snap.val());
            });
        }

        profileRef.child('connections').on('child_added', snap => {
            fbProfiles.child(snap.key()).on('value', snap => {
                dispatch(connections.addProfile(snap.key(), snap.val()));
            });
        });

    }
}

// dump to localstorage and lazily try to update remote data
export function updateProfile(data) {
    return dispatch => {
        localStorage.setItem('profile', JSON.stringify(data));
        dispatch(setProfile(data));
        if (data.name || data.twitter) {
            dispatch(onboardingIsDone());
        }
        try { profileRef.update(data); } catch(e) {}
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


// horrible dumping into the localstorage
export function connectFacebook() {
    return dispatch => {
        fb.authWithOAuthPopup('facebook', function(error, authData) {
            if (error) {
                alert('login failed');
            } else {
                fbLogins.child(authData.uid).set(profileId);
                profileRef.child('logins/facebook').set(authData.uid);

                var profile;
                try {
                    var profile = JSON.parse(localStorage.getItem('profile'));                
                } catch(e) {}

                profile = profile || {};

                try {
                    if (!profile.name) {
                        profile.name = authData.facebook.displayName;
                    }
                    if (!profile.avatar) {
                        profile.avatar = authData.facebook.profileImageURL;
                    }
                    if (!profile.facebook) {
                        profile.facebook = authData.facebook.id;
                    }

                    dispatch(setProfile(profile));
                    try { profileRef.update(data); } catch(e) {}
                } catch(e) {
                    console.log('ERROR', e);
                }

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
