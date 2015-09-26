
import { SET_PROFILE } from 'actions/profile-actions';

const initialState = {
    name: '',
    twitter: ''
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state,
                name: action.name,
                twitter: action.twitter
            };
        default:
            return state;
    }
}
