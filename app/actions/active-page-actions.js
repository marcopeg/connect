
export const SET_ACTIVE_PAGE = 'activePage@set';

export function setActivePage(value) {
    return {
        type: SET_ACTIVE_PAGE,
        value
    };
}
