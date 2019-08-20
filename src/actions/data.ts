import { Actions } from "../actions/index";
import axios from 'axios';

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
  let {filters, fetchUrl, baseUrl} = _getState().dataReducer;

  console.log(baseUrl, 'loadPosts');

  try {
    let response = await axios.get(baseUrl + fetchUrl, {
      params: {
        ...filters
      }
    });

    if (response.status == 200) {
      return dispatch({
        type: Actions.LOAD_POSTS,
        payload: response.data
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