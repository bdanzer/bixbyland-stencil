import { Actions, ActionTypes } from "../actions/index";
import * as R from "ramda";

interface DataState {
  items: string[];
  loading: boolean;
  error: any;
  posts: any;
  filters: object;
  fetchUrl: string;
}

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
      "sqFootage": "",
      "sortBy": ""
    },
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
      var filters = {};

      if (!R.isEmpty(action.payload)) {
        filters = {
          ...state.filters,
          ...action.payload
        }
      } else {
        filters = {
          ...getInitialState().filters
        }
      }

      return {
        ...state,
        filters: filters
      }
    }
  }

  return state;
};

export default dataReducer;