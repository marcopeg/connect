
import { ADD_PROFILE, REMOVE_PROFILE } from 'actions/connections-actions';

export function connectionsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_PROFILE:
            var nextState = { ...state };
            nextState[action.profileId] = action.payload;
            return nextState;
        case REMOVE_PROFILE:
            var nextState = { ...state };
            nextState[action.profileId];
            nextState[action.profileId] = action.payload;
            return nextState;
        default:
            return state;
    }
}
