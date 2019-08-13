import '@stencil/redux';
import { Store } from "@stencil/redux";
export declare class PortfolioApp {
    store: Store;
    googleApiKey: string;
    urlToFetch: string;
    filter: any;
    view: any;
    posts: any;
    oldFilter: string;
    oldView: string;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidLoad(): void;
    private fetchPosts;
    private handleFilter;
    private handleView;
    render(): any;
}
