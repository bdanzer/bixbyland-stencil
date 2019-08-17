import { Actions } from "../actions/index";
import axios from 'axios';

export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
  payload: any;
}

export const loadDataBegin = data => async (dispatch, _getState) => {
  console.log('data', data);
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
  let {filters, fetchUrl} = _getState().dataReducer;

  try {
    let response = await axios.get(fetchUrl, {
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