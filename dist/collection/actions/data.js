import { Actions } from "../actions/index";
import axios from 'axios';
import { sorter } from '../utils/utils';
export const loadDataBegin = data => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_BEGIN,
        payload: { data }
    });
};
export const loadPosts = () => async (dispatch, _getState) => {
    let { filters, fetchUrl, baseUrl } = _getState().dataReducer;
    let posts;
    try {
        let response = await axios.get(baseUrl + fetchUrl, {
            params: Object.assign({}, filters)
        });
        if (response.status == 200) {
            posts = (filters.sortBy) ? sorter(filters.sortBy, response.data) : response.data;
            return dispatch({
                type: Actions.LOAD_POSTS,
                payload: posts
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
export const sortBy = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.SORT_BY,
        payload: data
    });
};
