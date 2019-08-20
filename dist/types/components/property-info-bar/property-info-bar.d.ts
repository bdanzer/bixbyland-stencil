import { Store } from "@stencil/redux";
export declare class PropertyInfoBar {
    store: Store;
    posts: any;
    count(number: any): Promise<void>;
    watchPosts(_newValue: any, _oldValue: any): void;
    componentDidLoad(): void;
    countPosts(): any;
    createInfoObj(): any;
    getPrice(): any;
    render(): any;
}
