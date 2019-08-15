import { LoadDataBeginAction, LoadPosts, ChangeFilter } from "./data";
export declare type ActionTypes = LoadDataBeginAction | LoadPosts | ChangeFilter;
export declare enum Actions {
    LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
    LOAD_POSTS = "LOAD_POSTS",
    CHANGE_FILTER = "CHANGE_FILTER"
}
