
import Firebase from 'firebase';
import { setProfile } from 'actions/profile-actions';
import { setStep, addProfile } from 'actions/connect-actions';
import { changePage } from 'services/active-page-service';

var fb;
var fbProfiles;
var fbDiscovery;

var profileRef;
var profileId;


export function initFirebase() {
    return dispatch => {

        fb = new Firebase('https://connectapp.firebaseio.com/');
        fbProfiles = fb.child('profile');
        fbDiscovery = fb.child('discovery');

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
            dispatch(setProfile(snap.val()))
        });

    }
}

export function updateProfile(data) {
    return dispatch => {
        profileRef.update(data);
    };
}

export function startConnect() {
    return dispatch => {
        console.log('start connect process');

        /*
        0. set inner state to "searching"
        1. generate id
        2. push id to discovery mode
        3. listen disovery for other guys (collect ids)
        4. timeout 10 seconds discovery
        5. change inner state to "list"
        6. 
        */

        dispatch(setStep('search'));

        generateDiscoveryId().then(discoveryId => {
            
            var discoveryRef = fbDiscovery.child(discoveryId);
            discoveryRef.child('profiles/' + profileId).set(Date.now());

            discoveryRef.child('profiles').on('child_added', snap => {
                if (snap.key() !== profileId) {
                    fbProfiles.child(snap.key()).once('value', snap => {
                        dispatch(addProfile(snap.key(), snap.val()));
                    });
                }
            });

        });

        // setTimeout($=> dispatch(setStep('nores')), 1000);

        // setTimeout($=> dispatch(changePage('start')), 2000);

    };
}

function generateDiscoveryId() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}
