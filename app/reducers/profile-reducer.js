
import { SET_PROFILE } from 'actions/profile-actions';

const initialState = {
    name: '',
    twitter: '',
    avatar: '',
    home: '',
    email: '',
    phone: '',
    skype: '',
    facebook: '',
    notes: ''
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state,
                name: action.name,
                twitter: action.twitter,
                avatar: action.avatar,
                facebook: action.facebook,
                email: action.email,
                phone: action.phone,
                skype: action.skype,
                notes: action.notes
            };
        default:
            return state;
    }
}
