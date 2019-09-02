import { Store, Action } from "@stencil/redux";
export declare class PropertyFilters {
    store: Store;
    search: any;
    filters: any;
    posts: any;
    baseUrl: '';
    modal: boolean;
    regions: any;
    changeFilter: Action;
    loadPosts: Action;
    sortBy: Action;
    sortByInfo: {
        "alpha_asc": string;
        "alpha_dsc": string;
        "sqft_asc": string;
        "sqft_dsc": string;
    };
    componentDidLoad(): void;
    getRegions(): Promise<any>;
    handleSearch(e: any): void;
    handleRegion(e: any): void;
    handleSqFeet(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    getSortBy(): any[];
    handleSortBy(e: any): void;
    handleResetFilters(): void;
    render(): any[];
}
