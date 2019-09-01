import { Store } from "@stencil/redux";
export declare class PropertyInfoBar {
    store: Store;
    posts: any;
    baseUrl: any;
    filters: {
        "category": string;
    };
    category: any;
    watchPosts(_newValue: any, _oldValue: any): void;
    componentDidLoad(): void;
    countPosts(): any;
    getSQFT(): any;
    getPrice(): any;
    render(): any;
}
