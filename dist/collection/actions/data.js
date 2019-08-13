import { Actions } from "../actions/index";
export const loadDataBegin = () => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_BEGIN
    });
};
export const loadDataSuccess = data => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_SUCCESS,
        payload: { data }
    });
};
export const loadDataFailure = error => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_FAILURE,
        payload: { error }
    });
};
