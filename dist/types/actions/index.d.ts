import { LoadDataBeginAction, LoadPosts, ChangeFilter, ChangeView, SetBase, SortBy } from "./data";
export declare type ActionTypes = LoadDataBeginAction | LoadPosts | ChangeFilter | ChangeView | SetBase | SortBy;
export declare enum Actions {
    LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
    LOAD_POSTS = "LOAD_POSTS",
    CHANGE_FILTER = "CHANGE_FILTER",
    CHANGE_VIEW = "CHANGE_VIEW",
    SET_BASE = "SET_BASE",
    SORT_BY = "SORT_BY"
}
