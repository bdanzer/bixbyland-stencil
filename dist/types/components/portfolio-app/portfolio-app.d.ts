import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
export declare class PortfolioApp {
    store: Store;
    googleApiKey: string;
    urlToFetch: string;
    filter: any;
    view: any;
    posts: any;
    oldFilter: string;
    oldView: string;
    loadPosts: Action;
    changeFilter: Action;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private handleFilter;
    private handleView;
    render(): any;
}
