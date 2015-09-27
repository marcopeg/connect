
import { SET_ONBOARDING_DONE } from 'actions/general-actions';

const initialState = {
    onboardingIsDone: false
};

export function generalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ONBOARDING_DONE:
            return {...state, onboardingIsDone: true};
        default:
            return state;
    }
}
