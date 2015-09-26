
import Firebase from 'firebase';
import { setProfile } from 'actions/profile-actions';
import { setStep, addProfile, resetProfileList } from 'actions/connect-actions';
import { changePage } from 'services/active-page-service';

var fb;
var fbProfiles;
var fbDiscovery;

var profileRef;
var profileId;

var tickValue;


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

        var tickRef = fb.child('tick');

        // start tick
        setInterval($=> tickRef.transaction(val => (val || 0) + 1), 500);
        tickRef.on('value', snap => tickValue = snap.val());

    }
}

export function updateProfile(data) {
    return dispatch => {
        profileRef.update(data);
    };
}

export function startConnect() {
    return (dispatch, getState) => {
        console.log('start connect process');

        dispatch(setStep('search'));
        dispatch(resetProfileList());

        // here there is subscriptions to be cleaned away!
        // generateDiscoveryId().then(discoveryId => {
        //     var discoveryRef = fbDiscovery.child(discoveryId);
        //     discoveryRef.child('profiles/' + profileId).set(Date.now());

        //     discoveryRef.child('profiles').on('child_added', snap => {
        //         if (snap.key() !== profileId) {
        //             fbProfiles.child(snap.key()).once('value', snap => {
        //                 dispatch(addProfile(snap.key(), snap.val()));
        //             });
        //         }
        //     });
        // });

        // // detect no results
        // setTimeout($=> {
        //     if (getState().connect.profiles.length === 0) {
        //         dispatch(setStep('nores'));
        //         setTimeout($=> dispatch(changePage('start')), 1500);
        //     }
        // }, 10000);
    

        // expose myself for a while
        var localTick = tickValue;
        var discoveryRef = fbDiscovery.child(profileId);
        discoveryRef.set(tickValue);
        setTimeout($=> discoveryRef.remove(), 5000);

        // search
        fbDiscovery.on('child_added', snap => {
            if (snap.key() !== profileId) {
                var diff = Math.abs(localTick - snap.val());
                console.log(snap.key(), diff);
            }
        });

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

function generateDiscoveryId() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}
