
import * as generalActions from 'actions/general-actions';
import { changePage } from 'services/active-page-service';

export function initGeneralService() {
    return dispatch => {
        if (!localStorage.getItem('onboardingIsDone')) {
            dispatch(changePage('edit'));
        } else {
            dispatch(generalActions.setOnboardingDone());    
        }
    }
}

export function onboardingIsDone() {
    return dispatch => {
        dispatch(generalActions.setOnboardingDone());
        localStorage.setItem('onboardingIsDone', true);
    }
}
