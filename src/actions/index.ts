import {
  LoadDataBeginAction, LoadPosts, ChangeFilter
} from "./data";

// Keep this type updated with each known action
export type ActionTypes =
  | LoadDataBeginAction
  | LoadPosts
  | ChangeFilter;

export enum Actions {
  LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
  LOAD_POSTS = "LOAD_POSTS",
  CHANGE_FILTER = "CHANGE_FILTER"
}