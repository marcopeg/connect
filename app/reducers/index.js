
import { activePageReducer } from 'reducers/active-page-reducer';
import { profileReducer } from 'reducers/profile-reducer';
import { connectReducer } from 'reducers/connect-reducer';
import { connectionsReducer } from 'reducers/connections-reducer';

export const reducers = {
    activePage: activePageReducer,
    profile: profileReducer,
    connect: connectReducer,
    connections: connectionsReducer
};
