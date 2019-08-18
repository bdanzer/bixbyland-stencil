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
  }

  return state;
};

export default dataReducer;