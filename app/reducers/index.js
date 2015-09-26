
import { activePageReducer } from 'reducers/active-page-reducer';
import { profileReducer } from 'reducers/profile-reducer';
import { connectReducer } from 'reducers/connect-reducer';

export const reducers = {
    activePage: activePageReducer,
    profile: profileReducer,
    connect: connectReducer
};
