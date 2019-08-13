import { ActionTypes } from "../actions/index";
interface DataState {
    items: string[];
    loading: boolean;
    error: any;
}
declare const dataReducer: (state: DataState, action: ActionTypes) => {
    loading: boolean;
    items: any;
    error: any;
};
export default dataReducer;
