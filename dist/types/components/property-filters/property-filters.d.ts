import { Store, Action } from "@stencil/redux";
export declare class PropertyFilters {
    store: Store;
    search: any;
    filters: any;
    posts: any;
    baseUrl: '';
    modal: boolean;
    regions: any;
    start: any;
    min: any;
    max: any;
    changeFilter: Action;
    loadPosts: Action;
    sortBy: Action;
    sortByInfo: {
        "alpha_asc": string;
        "alpha_dsc": string;
        "sqft_asc": string;
        "sqft_dsc": string;
    };
    watchFilters(newValue: any, oldValue: any): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getRegions(): Promise<any>;
    /**
     * TODO: Could clean this up to be cleaner with how R is used and maybe move to application state
     */
    getMinMaxSqFt(category?: string): Promise<void>;
    handleSearch(e: any): void;
    handleRegion(e: any): void;
    handleSqFeet(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    getSortBy(): any[];
    handleSortBy(e: any): void;
    handleResetFilters(): Promise<void>;
    render(): any[];
}
