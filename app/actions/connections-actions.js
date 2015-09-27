
export const ADD_PROFILE = 'connections@addProfile';
export const REMOVE_PROFILE = 'connections@removeProfile';
export const SET_VIEW_PROFILE = 'connections@setViewProfile';

export function addProfile(profileId, data) {
    return {
        type: ADD_PROFILE,
        profileId,
        payload: {
            name: data.name,
            twitter: data.twitter,
            avatar: data.avatar,
            email: data.email,
            phone: data.phone,
            facebook: data.facebook,
        }
    };
}

export function removeProfile(profileId) {
    return {
        type: REMOVE_PROFILE,
        profileId
    };
}

export function setViewProfile(profileId) {
    return {
        type: SET_VIEW_PROFILE,
        profileId
    };
}
