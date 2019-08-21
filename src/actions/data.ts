import { Actions } from "../actions/index";
import axios from 'axios';
import { sorter } from '../utils/utils';

export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
  payload: any;
}

export const loadDataBegin = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN,
    payload: {data}
  });
};

export interface LoadPosts {
  type: Actions.LOAD_POSTS;
  payload: any;
}

export const loadPosts = () => async (dispatch, _getState) => {
  let { filters, fetchUrl, baseUrl } = _getState().dataReducer;
  let posts;

  try {
    let response = await axios.get(baseUrl + fetchUrl, {
      params: {
        ...filters
      }
    });

    if (response.status == 200) {
      posts = (filters.sortBy) ? sorter(filters.sortBy, response.data) : response.data;

      return dispatch({
        type: Actions.LOAD_POSTS,
        payload: posts
      });
    }
  } catch(e) {
    console.log(e);
  }
};

export interface ChangeFilter {
  type: Actions.CHANGE_FILTER,
  payload: object;
}

export const changeFilter = (data) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.CHANGE_FILTER,
    payload: data
  });
}

export interface ChangeView {
  type: Actions.CHANGE_VIEW,
  payload: string;
}

export const changeView = (data) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.CHANGE_VIEW,
    payload: data
  });
}

export interface SetBase {
  type: Actions.SET_BASE,
  payload: string;
}

export const setBase = (data) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.SET_BASE,
    payload: data
  });
}

export interface SortBy {
  type: Actions.SORT_BY,
  payload: any;
}

export const sortBy = (data) => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.SORT_BY,
    payload: data
  });
}
