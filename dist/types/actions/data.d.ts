import { Actions } from "../actions/index";
export interface LoadDataBeginAction {
    type: Actions.LOAD_DATA_BEGIN;
    payload: any;
}
export declare const loadDataBegin: (data: any) => (dispatch: any, _getState: any) => Promise<any>;
export interface LoadPosts {
    type: Actions.LOAD_POSTS;
    payload: any;
}
export declare const loadPosts: () => (dispatch: any, _getState: any) => Promise<any>;
export interface ChangeFilter {
    type: Actions.CHANGE_FILTER;
    payload: object;
}
export declare const changeFilter: (data: any) => (dispatch: any, _getState: any) => Promise<any>;
