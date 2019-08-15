import { Store, Action } from "@stencil/redux";
export declare class CardList {
    store: Store;
    posts: any;
    activePostId: any;
    handleCard: Function;
    items: any;
    loading: boolean;
    error: any;
    loadDataBegin: Action;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
