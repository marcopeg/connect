
import { SET_ACTIVE_PAGE } from 'actions/active-page-actions';

export function activePageReducer(state = 'start', action) {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return action.value;
        default:
            return state;
    }
}
