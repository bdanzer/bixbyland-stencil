import { a as axios } from './index-4a685038.js';
import { s as sorter } from './utils-2f1b53de.js';

var Actions;
(function (Actions) {
    Actions["LOAD_DATA_BEGIN"] = "LOAD_DATA_BEGIN";
    Actions["LOAD_POSTS"] = "LOAD_POSTS";
    Actions["CHANGE_FILTER"] = "CHANGE_FILTER";
    Actions["CHANGE_VIEW"] = "CHANGE_VIEW";
    Actions["SET_BASE"] = "SET_BASE";
    Actions["SORT_BY"] = "SORT_BY";
})(Actions || (Actions = {}));

const loadDataBegin = data => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.LOAD_DATA_BEGIN,
        payload: { data }
    });
};
const loadPosts = () => async (dispatch, _getState) => {
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
const changeFilter = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.CHANGE_FILTER,
        payload: data
    });
};
const changeView = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.CHANGE_VIEW,
        payload: data
    });
};
const setBase = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.SET_BASE,
        payload: data
    });
};
const sortBy = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: Actions.SORT_BY,
        payload: data
    });
};

export { Actions as A, changeView as a, sortBy as b, changeFilter as c, loadPosts as l, setBase as s };
