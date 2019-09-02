import { Store } from "@stencil/redux";
export declare class GoogleMap {
    store: Store;
    posts: any;
    handleMarker: Function;
    activePostId: any;
    baseUrl: any;
    mapObject: any;
    icons: any;
    map: any;
    markersObj: any;
    componentDidLoad(): void;
    postsWatch(_newData: any, _oldData: any): void;
    activePostIdWatch(newId: any, oldId: any): void;
    CenterControl(controlDiv: any, _map: any): void;
    getCurrentPosition(): void;
    setCenter(): void;
    findLatitudeAvg(): {
        "lat": any;
        "lng": any;
    };
    addMarker(position: any): void;
    getIcons(): Promise<void>;
    /**
     * TODO: clean up for a better solution
     */
    getIconType(post: any): any;
    addImage(url: any): {
        url: any;
        size: any;
        origin: any;
        anchor: any;
    };
    addMarkers(): void;
    clearMarkers(): void;
    render(): any;
}
