import { LoadDataBeginAction, LoadDataSuccessAction, LoadDataFailureAction } from "./data";
export declare type ActionTypes = LoadDataBeginAction | LoadDataSuccessAction | LoadDataFailureAction;
export declare enum Actions {
    LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
    LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
    LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE"
}
