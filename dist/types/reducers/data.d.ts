import { ActionTypes } from "../actions/index";
interface DataState {
    items: string[];
    loading: boolean;
    error: any;
    posts: any;
    filter: string;
    fetchUrl: string;
}
declare const dataReducer: (state: DataState, action: ActionTypes) => {
    loading: boolean;
    items: any;
    error: any;
    posts: any;
    filter: string;
    fetchUrl: string;
};
export default dataReducer;
