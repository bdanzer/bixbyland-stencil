import { Actions } from "../actions/index";
export interface LoadDataBeginAction {
    type: Actions.LOAD_DATA_BEGIN;
}
export declare const loadDataBegin: () => (dispatch: any, _getState: any) => Promise<any>;
export interface LoadDataSuccessAction {
    type: Actions.LOAD_DATA_SUCCESS;
    payload: any;
}
export declare const loadDataSuccess: (data: any) => (dispatch: any, _getState: any) => Promise<any>;
export interface LoadDataFailureAction {
    type: Actions.LOAD_DATA_FAILURE;
    payload: any;
}
export declare const loadDataFailure: (error: any) => (dispatch: any, _getState: any) => Promise<any>;
