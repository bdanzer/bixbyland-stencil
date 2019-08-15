import { Actions, ActionTypes } from "../actions/index";

interface DataState {
  items: string[];
  loading: boolean;
  error: any;
  posts: any;
  filter: string;
  fetchUrl: string;
}

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

const dataReducer = (
  state: DataState = getInitialState(),
  action: ActionTypes
) => {
  console.log(Actions, 'called');
  switch (action.type) {
    case Actions.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    }

    case Actions.LOAD_POSTS: {
      console.log('loadPosts', action.payload);
      return {
        ...state,
        posts: action.payload
      }
    }

    case Actions.CHANGE_FILTER: {
      return {
        ...state,
        filter: action.payload
      }
    }
  }

  return state;
};

export default dataReducer;