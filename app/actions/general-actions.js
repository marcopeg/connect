
export const SET_ONBOARDING_DONE = 'general@setOnboardingDone';
export const SET_FIREBASE_STATUS = 'general@setFirebaseStatus';

export function setOnboardingDone() {
    return {
        type: SET_ONBOARDING_DONE
    };
}

export function setFirebaseStatus(value) {
    return {
        type: SET_FIREBASE_STATUS,
        value
    };
}
