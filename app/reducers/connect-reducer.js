
import { SET_STEP } from 'actions/connect-actions';

const initialState = {
    step: null
}

export function connectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STEP: 
            return { ...state,
                step: action.value
            };
        default:
            return state;
    }
}
