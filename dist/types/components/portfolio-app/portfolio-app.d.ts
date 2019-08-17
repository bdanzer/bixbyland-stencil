import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
export declare class PortfolioApp {
    store: Store;
    googleApiKey: string;
    urlToFetch: string;
    filter: any;
    views: any;
    posts: any;
    loadPosts: Action;
    changeFilter: Action;
    changeView: Action;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private handleFilter;
    private handleView;
    render(): any;
}
