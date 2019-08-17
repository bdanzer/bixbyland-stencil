import {
  LoadDataBeginAction, LoadPosts, ChangeFilter, ChangeView
} from "./data";

// Keep this type updated with each known action
export type ActionTypes =
  | LoadDataBeginAction
  | LoadPosts
  | ChangeFilter
  | ChangeView;

export enum Actions {
  LOAD_DATA_BEGIN = "LOAD_DATA_BEGIN",
  LOAD_POSTS = "LOAD_POSTS",
  CHANGE_FILTER = "CHANGE_FILTER",
  CHANGE_VIEW = "CHANGE_VIEW"
}