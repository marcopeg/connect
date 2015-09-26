
import Firebase from 'firebase';
import { setProfile } from 'actions/profile-actions';

var fb;
var fbProfiles;

var profileRef;
var profileId;

export function initFirebase() {
    return dispatch => {

        fb = new Firebase('https://connectapp.firebaseio.com/');
        fbProfiles = fb.child('profile');

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

        

        console.log(profileId);

    }
}

export function updateProfile(data) {
    return dispatch => {
        profileRef.update(data);
    };
}
