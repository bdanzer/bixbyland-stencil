import { Actions, ActionTypes } from "../actions/index";
import * as R from "ramda";

interface DataState {
  items: string[];
  loading: boolean;
  error: any;
  posts: any;
  filters: object;
  views: string;
  fetchUrl: string;
}

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
      "sqFootage": [10, 600],
      "sortBy": ""
    },
    views: "map",
    fetchUrl: '/wp-json/bixby/v1/properties'
  };
};

const dataReducer = (
  state: DataState = getInitialState(),
  action: ActionTypes
) => {
  switch (action.type) {
    case Actions.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    }

    case Actions.LOAD_POSTS: {
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

    case Actions.CHANGE_VIEW: {
      return {
        ...state,
        views: action.payload
      }
    }

    case Actions.SET_BASE: {
      return {
        ...state,
        baseUrl: action.payload
      }
    }

    case Actions.SORT_BY: {
      return {
        ...state,
        posts: action.payload.posts,
        filters: {
          ...state.filters,
          "sortBy": action.payload.sortBy
        }
      }
    }
  }

  return state;
};

export default dataReducer;
