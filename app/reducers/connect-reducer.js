
import { SET_STEP, ADD_PROFILE, RESET_PROFILE_LIST } from 'actions/connect-actions';

const initialState = {
    step: null,
    profiles: []
}

export function connectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STEP: 
            return { ...state,
                step: action.value
            };
        case ADD_PROFILE:
            return { ...state,
                profiles: [...state.profiles, action.payload]
            };
        case RESET_PROFILE_LIST:
            return { ...state,
                profiles: []   
            };
        default:
            return state;
    }
}
