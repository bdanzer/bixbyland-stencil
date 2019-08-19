import { Store, Action } from "@stencil/redux";
export declare class PropertyFilters {
    store: Store;
    search: any;
    filters: any;
    posts: any;
    modal: boolean;
    regions: any;
    changeFilter: Action;
    loadPosts: Action;
    componentDidLoad(): void;
    getRegions(): Promise<any>;
    handleSearch(e: any): void;
    handleRegion(e: any): void;
    handleSqFeet(_values: any, _handle: any, _unencoded: any, _tap: any, _positions: any): void;
    handleSortBy(_e: any): void;
    handleResetFilters(): void;
    render(): any[];
}
