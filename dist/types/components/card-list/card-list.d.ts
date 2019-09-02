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
    el: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleRef(el: any, post: any): void;
    render(): any;
}
