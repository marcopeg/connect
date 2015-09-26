
import { ADD_PROFILE, REMOVE_PROFILE, SET_VIEW_PROFILE } from 'actions/connections-actions';

const initialValue = {
    items: {},
    viewProfile: null
};

export function connectionsReducer(state = initialValue, action) {
    switch (action.type) {
        case ADD_PROFILE:
            var items = { ...state.items };
            items[action.profileId] = action.payload;
            return {...state, items: items};
        // case REMOVE_PROFILE:
        //     var nextState = { ...state };
        //     delete(nextState.items[action.profileId]);
        //     return nextState;
        case SET_VIEW_PROFILE:
            return { ...state,
                viewProfile: action.profileId
            };
        default:
            return state;
    }
}
