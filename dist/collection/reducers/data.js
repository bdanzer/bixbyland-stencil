import { Actions } from "../actions/index";
import * as R from "ramda";
const getInitialState = () => {
    return {
        items: [],
        loading: false,
        error: null,
        posts: [],
        filters: {
            "category": "",
            "region": "",
            "search": "",
            "sqFootage": [0, 100],
            "sortBy": ""
        },
        views: "map",
        fetchUrl: 'https://bixbyland.coreylowe.io/wp-json/bixby/v1/properties'
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
    }
    return state;
};
export default dataReducer;
