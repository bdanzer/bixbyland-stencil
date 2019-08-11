export declare class PortfolioApp {
    googleApiKey: string;
    urlToFetch: string;
    filter: any;
    view: any;
    posts: any;
    oldFilter: string;
    oldView: string;
    componentWillUpdate(): void;
    componentDidLoad(): void;
    private fetchPosts;
    private handleFilter;
    private handleView;
    render(): any;
}
