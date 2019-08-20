import { Actions } from "../actions/index";
import axios from 'axios';
export const loadDataBegin = data => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_BEGIN,
        payload: { data }
    });
};
export const loadPosts = () => async (dispatch, _getState) => {
    let { filters, fetchUrl, baseUrl } = _getState().dataReducer;
    console.log(baseUrl, 'loadPosts');
    try {
        let response = await axios.get(baseUrl + fetchUrl, {
            params: Object.assign({}, filters)
        });
        if (response.status == 200) {
            return dispatch({
                type: Actions.LOAD_POSTS,
                payload: response.data
            });
        }
    }
    catch (e) {
        console.log(e);
    }
};
export const changeFilter = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.CHANGE_FILTER,
        payload: data
    });
};
export const changeView = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.CHANGE_VIEW,
        payload: data
    });
};
export const setBase = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.SET_BASE,
        payload: data
    });
};
