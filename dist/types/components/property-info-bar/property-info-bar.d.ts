import { Store } from "@stencil/redux";
export declare class PropertyInfoBar {
    store: Store;
    posts: any;
    baseUrl: any;
    filters: {
        "category": string;
    };
    watchPosts(_newValue: any, _oldValue: any): void;
    componentDidLoad(): void;
    countPosts(): any;
    createInfoObj(): any;
    getPrice(): any;
    render(): any;
}
