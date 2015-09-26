
export const SET_STEP = 'connect@step';
export const ADD_PROFILE = 'connect@addProfile';

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
            name: data.name
        }
    };
}
