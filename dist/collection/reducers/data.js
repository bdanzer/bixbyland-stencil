import { Actions } from "../actions/index";
const getInitialState = () => {
    return {
        items: [],
        loading: false,
        error: null
    };
};
const dataReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Actions.LOAD_DATA_BEGIN: {
            return Object.assign({}, state, { loading: true, error: null });
        }
        case Actions.LOAD_DATA_SUCCESS: {
            return Object.assign({}, state, { loading: false, items: action.payload.data });
        }
        case Actions.LOAD_DATA_FAILURE: {
            return Object.assign({}, state, { loading: false, error: action.payload.error });
        }
    }
    return state;
};
export default dataReducer;
