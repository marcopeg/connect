
import { SET_ONBOARDING_DONE, SET_FIREBASE_STATUS } from 'actions/general-actions';

const initialState = {
    onboardingIsDone: false,
    firebaseStatus: true
};

export function generalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ONBOARDING_DONE:
            return {...state, onboardingIsDone: true};
        case SET_FIREBASE_STATUS:
            return {...state, firebaseStatus: action.value};
        default:
            return state;
    }
}
