export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');

    //console.log(res);

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
}

export const FETCH_CURRENT_USER = 'fetch_current_users';
export const fetchCurrentUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    //console.log(`Called from Fetch Current User `, res);

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
}