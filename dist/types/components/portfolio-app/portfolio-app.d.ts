import '@stencil/redux';
import { Store, Action } from "@stencil/redux";
export declare class PortfolioApp {
    store: Store;
    googleApiKey: string;
    baseUrl: string;
    filters: any;
    views: any;
    posts: any;
    acceptedCats: any;
    loadPosts: Action;
    changeFilter: Action;
    changeView: Action;
    setBase: Action;
    componentWillLoad(): void;
    watchBaseUrl(_new: any, _old: any): void;
    componentDidLoad(): void;
    private handleFilter;
    changeCategory(filter: any): Promise<void>;
    private handleView;
    render(): any;
}
