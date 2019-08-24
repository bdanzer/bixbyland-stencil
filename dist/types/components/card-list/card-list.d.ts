import { Store } from "@stencil/redux";
export declare class CardList {
    store: Store;
    posts: any;
    activePostId: any;
    handleCard: Function;
    items: any;
    loading: boolean;
    error: any;
    views: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
