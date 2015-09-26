
export const ADD_PROFILE = 'connections@addProfile';
export const REMOVE_PROFILE = 'connections@removeProfile';

export function addProfile(profileId, data) {
    return {
        type: ADD_PROFILE,
        profileId,
        payload: {
            name: data.name,
            twitter: data.twitter,
        }
    };
}

export function removeProfile(profileId) {
    return {
        type: REMOVE_PROFILE,
        profileId
    };
}
