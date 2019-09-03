import { Actions } from "../actions/index";
import * as R from "ramda";
const getInitialState = () => {
    return {
        baseUrl: '',
        items: [],
        loading: false,
        error: null,
        posts: [],
        filters: {
            "category": "all",
            "region": "",
            "search": "",
            "sqFootage": "all",
            "sortBy": ""
        },
        views: "map",
        fetchUrl: '/wp-json/bixby/v1/properties'
    };
};
const dataReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Actions.LOAD_DATA_BEGIN: {
            return Object.assign({}, state, { loading: false, items: action.payload.data });
        }
        case Actions.LOAD_POSTS: {
            return Object.assign({}, state, { posts: action.payload });
        }
        case Actions.CHANGE_FILTER: {
            var filters = {};
            if (!R.isEmpty(action.payload)) {
                filters = Object.assign({}, state.filters, action.payload);
            }
            else {
                filters = Object.assign({}, getInitialState().filters);
            }
            return Object.assign({}, state, { filters: filters });
        }
        case Actions.CHANGE_VIEW: {
            return Object.assign({}, state, { views: action.payload });
        }
        case Actions.SET_BASE: {
            return Object.assign({}, state, { baseUrl: action.payload });
        }
        case Actions.SORT_BY: {
            return Object.assign({}, state, { posts: action.payload.posts, filters: Object.assign({}, state.filters, { "sortBy": action.payload.sortBy }) });
        }
    }
    return state;
};
export default dataReducer;
