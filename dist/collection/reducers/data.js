import { Actions } from "../actions/index";
const getInitialState = () => {
    return {
        items: [],
        loading: false,
        error: null,
        posts: [],
        filter: 'all',
        fetchUrl: 'http://bixbyland.test/wp-json/bixby/v1/properties'
    };
};
const dataReducer = (state = getInitialState(), action) => {
    console.log(Actions, 'called');
    switch (action.type) {
        case Actions.LOAD_DATA_BEGIN: {
            return Object.assign({}, state, { loading: false, items: action.payload.data });
        }
        case Actions.LOAD_POSTS: {
            console.log('loadPosts', action.payload);
            return Object.assign({}, state, { posts: action.payload });
        }
        case Actions.CHANGE_FILTER: {
            return Object.assign({}, state, { filter: action.payload });
        }
    }
    return state;
};
export default dataReducer;
