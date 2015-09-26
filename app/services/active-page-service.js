
import { setActivePage } from 'actions/active-page-actions';

const validPages = ['start', 'edit', 'list', 'view', 'connect'];

export function changePage(page) {
    return (dispatch, getState) => {
        if (validPages.indexOf(page) === -1) {
            return;
        }
        dispatch(setActivePage(page))
    };
}
