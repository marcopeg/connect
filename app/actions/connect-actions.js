
export const SET_STEP = 'connect@step';
export const ADD_PROFILE = 'connect@addProfile';
export const REMOVE_PROFILE = 'connect@removeProfile';
export const RESET_PROFILE_LIST = 'connect@resetList';

export function setStep(value) {
    return {
        type: SET_STEP,
        value
    };
}

export function addProfile(profileId, data) {
    return {
        type: ADD_PROFILE,
        payload: {
            id: profileId,
            name: data.name,
            avatar: data.avatar,
            twitter: data.twitter,
            fbUrl: data.fbUrl
        }
    };
}

export function removeProfile(profileId) {
    return {
        type: REMOVE_PROFILE,
        profileId
    };
}

export function resetProfileList() {
    return {
        type: RESET_PROFILE_LIST
    };
}
